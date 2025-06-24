import { useState, useEffect, useRef } from "react";
import useSongStore from "../store/useSongStore";
import usePlayingPlaylistStore from "../store/usePlayingPlaylistStore";

const useAudioPlayer = () => {
  const audioRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [volume, setVolume] = useState(100);
  const [duration, setDuration] = useState(0);
  const [playlist, setPlaylist] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [shouldPlayAfterLoad, setShouldPlayAfterLoad] = useState(false);
  
  const uri = process.env.REACT_APP_CLOUDINARY_URL;
  
  // Zustand stores
  const { currentSong } = useSongStore();
  const setCurrentSong = useSongStore((state) => state.setCurrentSong);
  const usePlayingMusic = usePlayingPlaylistStore(
    (state) => state.usePlayingPlaylist
  );

  const getPlaylist = () => {
    if (!usePlayingMusic) return [];
    if (usePlayingMusic.idSongs && usePlayingMusic.idSongs.length > 0) {
      // Revisa si el primer index tiene un nombre, indicando que el objeto contiene canciones
      if (
        typeof usePlayingMusic.idSongs[0] === "object" &&
        usePlayingMusic.idSongs[0].name
      ) {
        return usePlayingMusic.idSongs;
      }
    }
    // Si se llega aquí significa que necesita cargar la información completa aún
    console.warn(
      "The idSongs array does not contain complete song information"
    );
    return [];
  };

  useEffect(() => {
    const newPlaylist = getPlaylist();
    setPlaylist(newPlaylist);
    setTimeout(() => {
      console.log("Aquí la playlist registrada: ", newPlaylist);
    }, 1000);
  }, [usePlayingMusic]);

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
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  // Función para esperar a que el audio esté listo
  const waitForAudioReady = () => {
    return new Promise((resolve, reject) => {
      if (!audioRef.current) {
        reject(new Error("Audio element not found"));
        return;
      }

      const audio = audioRef.current;
      
      // Si ya está listo, resuelve inmediatamente
      if (audio.readyState >= 2) {
        resolve();
        return;
      }

      let timeoutId;
      
      const handleCanPlay = () => {
        clearTimeout(timeoutId);
        audio.removeEventListener('canplay', handleCanPlay);
        audio.removeEventListener('error', handleError);
        resolve();
      };

      const handleError = (error) => {
        clearTimeout(timeoutId);
        audio.removeEventListener('canplay', handleCanPlay);
        audio.removeEventListener('error', handleError);
        reject(error);
      };

      // Timeout de 10 segundos para evitar esperas infinitas
      timeoutId = setTimeout(() => {
        audio.removeEventListener('canplay', handleCanPlay);
        audio.removeEventListener('error', handleError);
        reject(new Error("Audio loading timeout"));
      }, 10000);

      audio.addEventListener('canplay', handleCanPlay);
      audio.addEventListener('error', handleError);
    });
  };

  // Función para reproducir con espera
  const playAudio = async () => {
    if (!audioRef.current) return;

    try {
      setIsLoading(true);
      await waitForAudioReady();
      
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        await playPromise;
        setIsPlaying(true);
        setShouldPlayAfterLoad(false);
        console.log("Audio reproduciendo correctamente");
      }
    } catch (error) {
      console.error("Error al reproducir:", error);
      setIsPlaying(false);
      setShouldPlayAfterLoad(false);
    } finally {
      setIsLoading(false);
    }
  };

  const getCurrentSongIndex = () => {
    if (!playlist || !playlist.length || !currentSong) return -1;

    if (currentSong._id) {
      const index = playlist.findIndex((song) => song._id === currentSong._id);
      if (index !== -1) return index;
    }

    return playlist.findIndex((song) => song.name === currentSong.name);
  };

  const changeSong = async (newSong, shouldAutoPlay = false) => {
    console.log("Cambiando a canción:", newSong.name);
    
    // Pausar audio actual
    if (audioRef.current) {
      audioRef.current.pause();
    }
    
    setIsPlaying(false);
    setShouldPlayAfterLoad(shouldAutoPlay);
    setCurrentSong(newSong);
  };

  const playPrevSong = () => {
    if (!playlist || playlist.length === 0) return;

    const currentIndex = getCurrentSongIndex();
    if (currentIndex === -1) return;

    const prevIndex = currentIndex > 0 ? currentIndex - 1 : playlist.length - 1;
    const wasPlaying = isPlaying;
    
    changeSong(playlist[prevIndex], wasPlaying);
  };

  const playNextSong = () => {
    if (!playlist || playlist.length === 0) return;

    const currentIndex = getCurrentSongIndex();
    if (currentIndex === -1) return;

    const nextIndex = (currentIndex + 1) % playlist.length;
    const wasPlaying = isPlaying;
    
    changeSong(playlist[nextIndex], wasPlaying);
  };

  useEffect(() => {
    if (!currentSong || !currentSong.url) return;

    // Pausar audio actual si existe
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }

    // Creamos un elemento de audio si no existe
    if (!audioRef.current) {
      audioRef.current = new Audio();
    }

    if (!uri) {
      console.error("Cloudinary base URL no configurada.");
      return;
    }

    console.log("Cargando canción:", currentSong.id);
    setIsLoading(true);

    // Configurar la nueva fuente
    audioRef.current.src = uri + currentSong.url;
    audioRef.current.volume = volume / 100;
    audioRef.current.currentTime = 0;
    setCurrentTime(0);

    // Event listeners
    const handleLoadedMetadata = () => {
      setDuration(audioRef.current.duration);
    };

    const handleCanPlay = () => {
      setIsLoading(false);
      console.log("Audio listo para reproducir");
      
      // Si se marcó para reproducir después de cargar, reproducir ahora
      if (shouldPlayAfterLoad) {
        console.log("Reproduciendo automáticamente después de cargar");
        playAudio();
      }
    };

    const updateTime = () => {
      setCurrentTime(audioRef.current.currentTime);
    };

    // ARREGLO PRINCIPAL: Cambiar a la siguiente canción automáticamente
    const handleEnded = () => {
      console.log("Canción terminada, cambiando a la siguiente automáticamente");
      
      if (playlist && playlist.length > 0) {
        const currentIndex = getCurrentSongIndex();
        if (currentIndex !== -1) {
          const nextIndex = (currentIndex + 1) % playlist.length;
          const nextSong = playlist[nextIndex];
          
          console.log(`Cambiando automáticamente a: ${nextSong.name}`);
          
          // Cambiar la canción y marcar para reproducir automáticamente
          // El audio se reproducirá cuando esté listo debido a shouldPlayAfterLoad
          setShouldPlayAfterLoad(true);
          setCurrentSong(nextSong);
        }
      }
    };

    const handleError = (error) => {
      console.error("Error cargando audio:", error);
      setIsLoading(false);
      setIsPlaying(false);
      setShouldPlayAfterLoad(false);
    };

    // Agregar event listeners
    audioRef.current.addEventListener("loadedmetadata", handleLoadedMetadata);
    audioRef.current.addEventListener("canplay", handleCanPlay);
    audioRef.current.addEventListener("timeupdate", updateTime);
    audioRef.current.addEventListener("ended", handleEnded);
    audioRef.current.addEventListener("error", handleError);

    // Cargar el audio
    audioRef.current.load();

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("loadedmetadata", handleLoadedMetadata);
        audioRef.current.removeEventListener("canplay", handleCanPlay);
        audioRef.current.removeEventListener("timeupdate", updateTime);
        audioRef.current.removeEventListener("ended", handleEnded);
        audioRef.current.removeEventListener("error", handleError);
      }
    };
  }, [currentSong, playlist]); // Agregado playlist como dependencia

  // Control play/pause mejorado
  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      playAudio();
    } else {
      audioRef.current.pause();
      setShouldPlayAfterLoad(false);
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
    if (audioRef.current && audioRef.current.readyState >= 2) {
      audioRef.current.currentTime = value;
    }
  };

  const handleVolumeChange = (e) => {
    setVolume(Number(e.target.value));
  };

  const togglePlay = () => {
    if (isLoading) {
      // Si está cargando, marcar para reproducir después
      setShouldPlayAfterLoad(!shouldPlayAfterLoad);
      return;
    }
    
    setIsPlaying(!isPlaying);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const getArtistInfo = () => {
    if (currentSong.artist) return currentSong.artist;
    if (currentSong.artists) return currentSong.artists;

    if (
      usePlayingMusic &&
      usePlayingMusic.idArtist &&
      usePlayingMusic.idArtist.name
    ) {
      return usePlayingMusic.idArtist.name || usePlayingMusic.idArtist[0].name;
    }

    return undefined;
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
    console.log("Cargando canción:", song);
    changeSong(song, true);
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
    isLoading,
    formatTime,
    handleSliderChange,
    handleVolumeChange,
    togglePlay,
    toggleFavorite,
    playPrevSong,
    playNextSong,
    getArtistInfo,
    getAlbumCover,
    loadSong,
  };
};

export default useAudioPlayer;