import { useState, useEffect, useRef } from "react";
import fullscreen from "../Icons/menu-hamburguesa.png";
import { Play, Pause, SkipBack, SkipForward, Heart, Volume2, Maximize2 } from "lucide-react";

function MusicFooter() {
  // Referencias y estados
  const audioRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [volume, setVolume] = useState(80);
  const [duration, setDuration] = useState(0);
  const [currentSong, setCurrentSong] = useState({
    title: "Pursuit Of Happiness - Extended Steve Aoki Remix",
    artists: "Kid Cudi, MGMT, Ratatat, Steve Aoki",
    cover: "https://i.scdn.co/image/ab67616d00004851fe7908b7666690bf4e83ce14",
    src: "https://res.cloudinary.com/dvn98cysr/video/upload/v1746501713/Kid_Cudi_-_Pursuit_Of_Happiness_Nightmare_432Hz_umbang.mp3" // Reemplazar con la URL real de la canción
  });
  
  // Lista de canciones de ejemplo
  const playlist = [
    {
      title: "Pursuit Of Happiness - Extended Steve Aoki Remix",
      artists: "Kid Cudi, MGMT, Ratatat, Steve Aoki",
      cover: "https://i.scdn.co/image/ab67616d00004851fe7908b7666690bf4e83ce14",
      src: "https://res.cloudinary.com/dvn98cysr/video/upload/v1746501713/Kid_Cudi_-_Pursuit_Of_Happiness_Nightmare_432Hz_umbang.mp3"
    },
    {
      title: "Summertime Sadness",
      artists: "Lana Del Rey",
      cover: "https://i.scdn.co/image/ab67616d0000485128a619822165fd0eb2e9969b",
      src: "https://example.com/music/summertime-sadness.mp3"
    },
    {
      title: "Blinding Lights",
      artists: "The Weeknd",
      cover: "https://i.scdn.co/image/ab67616d00004851c8bc90377ee282f863bbef2d",
      src: "https://example.com/music/blinding-lights.mp3"
    }
  ];

  // Función para formatear el tiempo (mm:ss)
  const formatTime = (seconds) => {
    if (isNaN(seconds) || seconds === Infinity) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Inicialización del audio
  useEffect(() => {
    // Crear elemento de audio si no existe
    if (!audioRef.current) {
      audioRef.current = new Audio();
    }
    
    // Configurar fuente de audio
    audioRef.current.src = currentSong.src;
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
        // Solución para evitar el error "The play() request was interrupted by a call to pause()"
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
        if (audioRef.current.readyState >= 2) { // HAVE_CURRENT_DATA o superior
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
    return playlist.findIndex(song => song.title === currentSong.title);
  };
  
  // Reproducir canción anterior
  const playPrevSong = () => {
    const currentIndex = getCurrentSongIndex();
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : playlist.length - 1;
    
    // Pausar el audio actual antes de cambiar la fuente
    if (audioRef.current) {
      audioRef.current.pause();
    }
    
    setCurrentSong(playlist[prevIndex]);
    
    // Retrasar la reproducción para permitir que se actualice la fuente
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
    const currentIndex = getCurrentSongIndex();
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

  return (
    <aside className="fixed bottom-0 left-0 right-0 flex justify-between items-center w-full px-6 py-4 text-white bg-[#000] rounded-t-xl shadow-lg z-50">
      {/* Botón para cargar música (opcional) */}
      <LoadMusicButton onSongLoaded={(song) => {
        // Asegúrate de pausar cualquier reproducción actual antes de cambiar
        if (audioRef.current) {
          audioRef.current.pause();
        }
        setCurrentSong(song);
        // Pequeño retraso antes de iniciar la reproducción
        setTimeout(() => setIsPlaying(true), 300);
      }} />
      {/* Sección de la canción */}
      <div className="flex gap-4 items-center w-1/4">
        <div className="relative">
          <img
            src={currentSong.cover}
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
            {currentSong.title}
          </p>
          <span className="text-gray-400 text-xs md:text-sm truncate">
            {currentSong.artists}
          </span>
        </div>
      </div>

      {/* Sección de reproducción */}
      <div className="flex flex-col items-center gap-2 w-2/4">
        <div className="controls flex gap-6 items-center">
          <button 
            onClick={playPrevSong}
            className="text-gray-300 hover:text-white transition-colors"
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
            className="text-gray-300 hover:text-white transition-colors"
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

      {/* Sección de controles derecha */}
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

// Componente para cargar MP3 localmente (opcional)
function LoadMusicButton({ onSongLoaded }) {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.includes('audio')) {
      const objectUrl = URL.createObjectURL(file);
      onSongLoaded({
        title: file.name.replace(/\.[^/.]+$/, ""),
        artists: "Local File",
        cover: "https://i.scdn.co/image/ab67616d00004851e8fccada5b6f6b8e9547c061", // Imagen por defecto
        src: objectUrl
      });
    }
  };

  // return (
  //   <div className="absolute top-2 right-2">
  //     <input
  //       type="file"
  //       id="music-upload"
  //       accept="audio/*"
  //       onChange={handleFileUpload}
  //       className="hidden"
  //     />
  //     <label 
  //       htmlFor="music-upload" 
  //       className="cursor-pointer text-xs bg-gray-800 hover:bg-gray-700 px-2 py-1 rounded-full text-gray-300"
  //     >
  //       Load MP3
  //     </label>
  //   </div>
  // );
}

export default MusicFooter;