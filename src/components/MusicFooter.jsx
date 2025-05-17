import { useState, useEffect, useRef } from "react";
import { Play, Pause, SkipBack, SkipForward, Heart, Volume2, Maximize2 } from "lucide-react";
import useSongStore from "../store/useSongStore";
import useAlbumStore from "../store/useAlbumStore";

function MusicFooter() {
  // Referencias y estados
  const audioRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [volume, setVolume] = useState(100);
  const [duration, setDuration] = useState(0);
  const { currentSong } = useSongStore();
  const selectedAlbum = useAlbumStore((state) => state.selectedAlbum);
  const setCurrentSong = useSongStore((state) => state.setCurrentSong);
  
  // Asegurarnos de que tengamos un playlist válido con toda la información de las canciones
  const getPlaylist = () => {
    if (!selectedAlbum) return [];
    
    // Verificar si idSongs contiene objetos completos o solo IDs
    if (selectedAlbum.idSongs && selectedAlbum.idSongs.length > 0) {
      // Verificamos si el primer elemento tiene una propiedad 'name', lo que indicaría
      // que son objetos completos de canciones
      if (typeof selectedAlbum.idSongs[0] === 'object' && selectedAlbum.idSongs[0].name) {
        return selectedAlbum.idSongs;
      }
    }
    
    // Si llegamos aquí, significa que necesitamos cargar la información completa
    // Aquí deberías implementar una lógica para obtener las canciones completas
    // por ahora, devolvemos un array vacío
    console.warn("El array idSongs no contiene información completa de las canciones");
    return [];
  };
  
  const playlist = getPlaylist();
  const isPlayerVisible = currentSong && Object.keys(currentSong).length > 0;

  const formatTime = (seconds) => {
    if (isNaN(seconds) || seconds === Infinity) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    if (!currentSong || !currentSong.url) return;

    // Crear elemento de audio si no existe
    if (!audioRef.current) {
      audioRef.current = new Audio();
    }
    
    // Configurar fuente de audio
    audioRef.current.src = currentSong.url;
    audioRef.current.volume = volume / 100;
    
    // Cargar metadata del audio
    audioRef.current.addEventListener('loadedmetadata', () => {
      setDuration(audioRef.current.duration);
    });
    
    // Actualizar tiempo actual durante la reproducción
    const updateTime = () => {
      setCurrentTime(audioRef.current.currentTime);
    };
    
    // Manejar fin de canción
    const handleEnded = () => {
      playNextSong();
    };
    
    audioRef.current.addEventListener('timeupdate', updateTime);
    audioRef.current.addEventListener('ended', handleEnded);
    
    // Limpiar listeners al desmontar
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('timeupdate', updateTime);
        audioRef.current.removeEventListener('ended', handleEnded);
      }
    };
  }, [currentSong]);
  
  // Controlar reproducción/pausa
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        const playPromise = audioRef.current.play();
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              // La reproducción se inició correctamente
            })
            .catch(error => {
              console.error("Error al reproducir:", error);
              setIsPlaying(false);
            });
        }
      } else {
        // Solo pausar si no hay una promesa de reproducción pendiente
        if (audioRef.current.readyState >= 2) {
          audioRef.current.pause();
        }
      }
    }
  }, [isPlaying]);
  
  // Actualizar volumen cuando cambie
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  const handleSliderChange = (e) => {
    const value = Number(e.target.value);
    setCurrentTime(value);
    if (audioRef.current) {
      audioRef.current.currentTime = value;
    }
  };

  const handleVolumeChange = (e) => {
    setVolume(Number(e.target.value));
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  
  // Encontrar el índice de la canción actual en la playlist
  const getCurrentSongIndex = () => {
    if (!playlist || !playlist.length || !currentSong) return -1;
    
    // Intentar encontrar primero por ID si está disponible
    if (currentSong._id) {
      const index = playlist.findIndex(song => song._id === currentSong._id);
      if (index !== -1) return index;
    }
    
    // Si no encontramos por ID, buscamos por nombre
    return playlist.findIndex(song => song.name === currentSong.name);
  };
  
  // Reproducir canción anterior
  const playPrevSong = () => {
    if (!playlist || playlist.length === 0) return;
    
    const currentIndex = getCurrentSongIndex();
    if (currentIndex === -1) return;
    
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : playlist.length - 1;
    
    // Pausar el audio actual antes de cambiar la fuente
    if (audioRef.current) {
      audioRef.current.pause();
    }
    
    setCurrentSong(playlist[prevIndex]);
    
    // Retrasar la reproducción para permitir que se actualice los datos
    if (isPlaying) {
      setTimeout(() => {
        if (audioRef.current && audioRef.current.readyState >= 2) {
          audioRef.current.play().catch(err => console.error(err));
        }
      }, 300);
    }
  };
  
  // Reproducir siguiente canción
  const playNextSong = () => {
    if (!playlist || playlist.length === 0) return;
    
    const currentIndex = getCurrentSongIndex();
    if (currentIndex === -1) return;
    
    const nextIndex = (currentIndex + 1) % playlist.length;
    
    // Pausar el audio actual antes de cambiar la fuente
    if (audioRef.current) {
      audioRef.current.pause();
    }
    
    setCurrentSong(playlist[nextIndex]);
    
    // Retrasar la reproducción para permitir que se actualice la fuente
    if (isPlaying) {
      setTimeout(() => {
        if (audioRef.current && audioRef.current.readyState >= 2) {
          audioRef.current.play().catch(err => console.error(err));
        }
      }, 300);
    }
  };

  // Si no hay canción actual, no renderizar el componente
  if (!isPlayerVisible) return null;

  // Determinar la información del artista
  const getArtistInfo = () => {
    if (currentSong.artist) return currentSong.artist;
    if (currentSong.artists) return currentSong.artists;
    
    // Si tenemos acceso al album y este tiene idArtist con nombre
    if (selectedAlbum && selectedAlbum.idArtist && selectedAlbum.idArtist.name) {
      return selectedAlbum.idArtist.name;
    }
    
    return "Artista desconocido";
  };

  // Determinar la portada del album
  const getAlbumCover = () => {
    if (currentSong.img) return currentSong.img;
    if (currentSong.cover) return currentSong.cover;
    if (currentSong.albumCover) return currentSong.albumCover;
    
    if (selectedAlbum && selectedAlbum.albumCover) {
      return selectedAlbum.albumCover;
    }
    
    return "/default-cover.jpg";
  };

  return (
    <aside className="fixed bottom-0 left-0 right-0 w-full px-6 py-4 text-white bg-black rounded-t-xl shadow-lg z-50 flex justify-between items-center">
      <LoadMusicButton onSongLoaded={(song) => {
        if (audioRef.current) {
          audioRef.current.pause();
        }
        setCurrentSong(song);
        setTimeout(() => setIsPlaying(true), 300);
      }} />
      
      <div className="flex gap-4 items-center w-1/4">
        <div className="relative">
          <img
            src={getAlbumCover()}
            alt="Album Cover"
            className="w-14 h-14 rounded-md object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 flex items-center justify-center rounded-md transition-all duration-300">
            <button 
              onClick={toggleFavorite}
              className={`opacity-0 hover:opacity-100 transition-opacity duration-300 ${isFavorite ? "text-red-500" : "text-white"}`}
            >
              <Heart fill={isFavorite ? "currentColor" : "none"} size={20} />
            </button>
          </div>
        </div>
        <div className="grid">
          <p className="font-semibold text-sm md:text-base truncate">
            {currentSong?.name || currentSong?.title || "Título desconocido"}
          </p>
          <span className="text-gray-400 text-xs md:text-sm truncate hover:text-white cursor-pointer ease-in-out duration-300">
            {getArtistInfo()}
          </span>
        </div>
      </div>

      {/* Sección de reproducción */}
      <div className="flex flex-col items-center gap-2 w-2/4">
        <div className="controls flex gap-6 items-center">
          <button 
            onClick={playPrevSong}
            disabled={!playlist || playlist.length <= 1}
            className="text-gray-300 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <SkipBack size={20} />
          </button>
          <button 
            onClick={togglePlay} 
            className="p-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors flex items-center justify-center"
          >
            {isPlaying ? <Pause size={18} /> : <Play size={18} />}
          </button>
          <button 
            onClick={playNextSong}
            disabled={!playlist || playlist.length <= 1}
            className="text-gray-300 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <SkipForward size={20} />
          </button>
        </div>
        
        <div className="status flex items-center gap-3 w-full">
          <span className="text-xs text-gray-400 w-10 text-right">
            {formatTime(currentTime)}
          </span>
          <div className="song-slider relative flex-grow h-1 bg-gray-700 rounded-full overflow-hidden group">
            {/* Barra de progreso */}
            <div
              className="progress absolute top-0 left-0 h-full bg-white group-hover:bg-green-500 transition-colors"
              style={{ width: `${(currentTime / (duration || 1)) * 100}%` }}
            ></div>

            {/* Punto de arrastre */}
            <div 
              className="absolute top-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ left: `calc(${(currentTime / (duration || 1)) * 100}% - 6px)` }}
            ></div>

            {/* Input slider */}
            <input
              type="range"
              min="0"
              max={duration || 0}
              value={currentTime}
              onChange={handleSliderChange}
              className="seek-bar absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            />
          </div>
          <span className="text-xs text-gray-400 w-10">
            {formatTime(duration)}
          </span>
        </div>
      </div>

      <div className="flex gap-4 items-center w-1/4 justify-end">
        <div className="volume-control hidden md:flex items-center gap-2">
          <Volume2 size={18} className="text-gray-400" />
          <div className="relative w-24 h-1 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-gray-400"
              style={{ width: `${volume}%` }}
            ></div>
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={handleVolumeChange}
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            />
          </div>
        </div>
        <button className="p-2 rounded-full hover:bg-gray-800 transition-colors">
          <Maximize2 size={18} />
        </button>
      </div>
    </aside>
  );
}

function LoadMusicButton({ onSongLoaded }) {
  return null;
  
}

export default MusicFooter;