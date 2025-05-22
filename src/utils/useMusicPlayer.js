import { useState, useEffect, useRef } from "react";
import useSongStore from "../store/useSongStore";
import useAlbumStore from "../store/useAlbumStore";

const useAudioPlayer = () => {
  const audioRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [volume, setVolume] = useState(100);
  const [duration, setDuration] = useState(0);
  
  // Zustand store
  const { currentSong } = useSongStore();
  const selectedAlbum = useAlbumStore((state) => state.selectedAlbum);
  const setCurrentSong = useSongStore((state) => state.setCurrentSong);
  
  const getPlaylist = () => {
    if (!selectedAlbum) return [];
    if (selectedAlbum.idSongs && selectedAlbum.idSongs.length > 0) {
      //revisa si el primer index tiene un nombre, indicando que el objeto contiene canciones
      if (typeof selectedAlbum.idSongs[0] === 'object' && selectedAlbum.idSongs[0].name) {
        return selectedAlbum.idSongs;
      }
    }
    //si se llega aqui significa que necesita cargar la informacion completa aun
    console.warn("The idSongs array does not contain complete song information");
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

    // Creamos un elemento de audio si no existe para procesar el audio
    if (!audioRef.current) {
      audioRef.current = new Audio();
    }
    
    // a el audio le damos la url y le ponemos un volumen 
    audioRef.current.src = currentSong.url;
    audioRef.current.volume = volume / 100;
    
    // Obtenemos la duracion desde la metadata
    audioRef.current.addEventListener('loadedmetadata', () => {
      setDuration(audioRef.current.duration);
    });
    
    // Actualizamos el tiempo cuando se esta reproduciendo
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
        //reproducimos la instancia de audio
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
    
    if (selectedAlbum && selectedAlbum.idArtist && selectedAlbum.idArtist.name) {
      return selectedAlbum.idArtist.name;
    }
    
    return "Unknown Artist";
  };

  const getAlbumCover = () => {
    if (currentSong.img) return currentSong.img;
    if (currentSong.cover) return currentSong.cover;
    if (currentSong.albumCover) return currentSong.albumCover;
    
    if (selectedAlbum && selectedAlbum.albumCover) {
      return selectedAlbum.albumCover;
    }
    
    return "/default-cover.jpg";
  };

  const loadSong = (song) => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setCurrentSong(song);
    setTimeout(() => setIsPlaying(true), 300);
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