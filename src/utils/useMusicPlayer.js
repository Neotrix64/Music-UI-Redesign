import { useState, useEffect, useRef } from "react";
import useSongStore from "../store/useSongStore";
import useAlbumStore from "../store/useAlbumStore";
import usePlayingPlaylistStore from "../store/usePlayingPlaylistStore";

const useAudioPlayer = () => {
  const audioRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [volume, setVolume] = useState(100);
  const [duration, setDuration] = useState(0);
  const [playlist, setPlaylist] = useState([]);
  
  // Zustand stores
  const { currentSong } = useSongStore();
  const setCurrentSong = useSongStore((state) => state.setCurrentSong);
  const usePlayingMusic = usePlayingPlaylistStore((state) => state.usePlayingPlaylist);
  
  const getPlaylist = () => {
    if (!usePlayingMusic) return [];
    if (usePlayingMusic.idSongs && usePlayingMusic.idSongs.length > 0) {
      // Revisa si el primer index tiene un nombre, indicando que el objeto contiene canciones
      if (typeof usePlayingMusic.idSongs[0] === 'object' && usePlayingMusic.idSongs[0].name) {
        return usePlayingMusic.idSongs;
      }
    }
    // Si se llega aquí significa que necesita cargar la información completa aún
    console.warn("The idSongs array does not contain complete song information");
    return [];
  };
  
  useEffect(() => {
    const newPlaylist = getPlaylist();
    setPlaylist(newPlaylist);
    setTimeout(() => {
      console.log("Aquí la playlist registrada: ", newPlaylist);
    }, 1000);
  }, [usePlayingMusic]); // Dependencia cambiada a usePlayingMusic

  useEffect(() => {
    if (isPlaying === true) {
      console.log("Se está reproduciendo");
    }
  }, [isPlaying]);

  const isPlayerVisible = currentSong && Object.keys(currentSong).length > 0;

  const formatTime = (seconds) => {
    if (isNaN(seconds) || seconds === Infinity) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    if (!currentSong || !currentSong.url) return;

    // Creamos un elemento de audio si no existe para procesar el audio
    if (!audioRef.current) {
      audioRef.current = new Audio();
    }
    
    // Al audio le damos la url y le ponemos un volumen 
    audioRef.current.src = currentSong.url;
    audioRef.current.volume = volume / 100;
    
    // Obtenemos la duración desde la metadata
    audioRef.current.addEventListener('loadedmetadata', () => {
      setDuration(audioRef.current.duration);
    });
    
    // Actualizamos el tiempo cuando se está reproduciendo
    const updateTime = () => {
      setCurrentTime(audioRef.current.currentTime);
    };
    
    const handleEnded = () => {
      playNextSong();
    };
    
    audioRef.current.addEventListener('timeupdate', updateTime);
    audioRef.current.addEventListener('ended', handleEnded);
    
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('timeupdate', updateTime);
        audioRef.current.removeEventListener('ended', handleEnded);
      }
    };
  }, [currentSong]);
  
  // Control play/pause
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        // Reproducimos la instancia de audio
        const playPromise = audioRef.current.play();
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              // Funciona correctamente
            })
            .catch(error => {
              console.error("Error playing:", error);
              setIsPlaying(false);
            });
        }
      } else {
        if (audioRef.current.readyState >= 2) {
          audioRef.current.pause();
        }
      }
    }
  }, [isPlaying]);
  
  // Actualizar volumen solo cuando cambie el valor de volume
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

  const getCurrentSongIndex = () => {
    if (!playlist || !playlist.length || !currentSong) return -1;
    
    if (currentSong._id) {
      const index = playlist.findIndex(song => song._id === currentSong._id);
      if (index !== -1) return index;
    }
    
    return playlist.findIndex(song => song.name === currentSong.name);
  };
  
  const playPrevSong = () => {
    if (!playlist || playlist.length === 0) return;
    
    const currentIndex = getCurrentSongIndex();
    if (currentIndex === -1) return;
    
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : playlist.length - 1;
    
    if (audioRef.current) {
      audioRef.current.pause();
    }
    
    setCurrentSong(playlist[prevIndex]);
    
    if (isPlaying) {
      setTimeout(() => {
        if (audioRef.current && audioRef.current.readyState >= 2) {
          audioRef.current.play().catch(err => console.error(err));
        }
      }, 300);
    }
  };
  
  const playNextSong = () => {
    if (!playlist || playlist.length === 0) return;
    
    const currentIndex = getCurrentSongIndex();
    if (currentIndex === -1) return;
    
    const nextIndex = (currentIndex + 1) % playlist.length;
    
    if (audioRef.current) {
      audioRef.current.pause();
    }
    
    setCurrentSong(playlist[nextIndex]);
    
    if (isPlaying) {
      setTimeout(() => {
        if (audioRef.current && audioRef.current.readyState >= 2) {
          audioRef.current.play().catch(err => console.error(err));
        }
      }, 300);
    }
  };

  const getArtistInfo = () => {
    if (currentSong.artist) return currentSong.artist;
    if (currentSong.artists) return currentSong.artists;
    
    // Cambiado para usar usePlayingMusic en lugar de selectedAlbum
    if (usePlayingMusic && usePlayingMusic.idArtist && usePlayingMusic.idArtist.name) {
      return usePlayingMusic.idArtist.name;
    }
    
    return "Unknown Artist";
  };

  const getAlbumCover = () => {
    if (currentSong.img) return currentSong.img;
    if (currentSong.cover) return currentSong.cover;
    if (currentSong.albumCover) return currentSong.albumCover;
    
    // Cambiado para usar usePlayingMusic en lugar de selectedAlbum
    if (usePlayingMusic && usePlayingMusic.albumCover) {
      return usePlayingMusic.albumCover;
    }
    
    return "/default-cover.jpg";
  };

  const loadSong = (song) => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setCurrentSong(song);
    setTimeout(() => setIsPlaying(true), 500);
  };

  return {
    audioRef,
    currentTime,
    isPlaying,
    isFavorite,
    volume,
    duration,
    currentSong,
    isPlayerVisible,
    playlist,
    formatTime,
    handleSliderChange,
    handleVolumeChange,
    togglePlay,
    toggleFavorite,
    playPrevSong,
    playNextSong,
    getArtistInfo,
    getAlbumCover,
    loadSong
  };
};

export default useAudioPlayer;