import { Play, Pause, SkipBack, SkipForward, Heart, Volume2, Maximize2 } from "lucide-react";
import useAudioPlayer from "../utils/useMusicPlayer";
import { useEffect } from "react";


function MusicFooter() {
  const {
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
  } = useAudioPlayer();

  // If no current song, don't render the component
  if (!isPlayerVisible) return null;

  return (
    <aside className="fixed bottom-0 left-0 right-0 w-full px-6 py-4 text-white bg-black rounded-t-xl shadow-lg z-50 flex justify-between items-center">
      <LoadMusicButton onSongLoaded={loadSong} />
      
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
            {currentSong?.name || currentSong?.title || "Unknown Title"}
          </p>
          <span className="text-gray-400 text-xs md:text-sm truncate hover:text-white cursor-pointer ease-in-out duration-300">
            {getArtistInfo()}
          </span>
        </div>
      </div>

      {/* Playback section */}
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
            {/* Progress bar */}
            <div
              className="progress absolute top-0 left-0 h-full bg-white group-hover:bg-green-500 transition-colors"
              style={{ width: `${(currentTime / (duration || 1)) * 100}%` }}
            ></div>

            {/* Drag point */}
            <div 
              className="absolute top-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ left: `calc(${(currentTime / (duration || 1)) * 100}% - 6px)` }}
            ></div>

            {/* Slider input */}
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