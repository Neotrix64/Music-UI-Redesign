import fullscreen from "./Icons/menu-hamburguesa.png";
import {useState} from "react"


function MusicFooter() {
    const [currentTime, setCurrentTime] = useState(0); // Tiempo actual en segundos
    const totalTime = 373; // Duración total (en segundos)
  
    const handleSliderChange = (e) => {
      const value = Number(e.target.value);
      setCurrentTime(value);
    };
    
  return (
    <aside className="flex justify-center absolute bottom-0 w-full p-6 text-white bg-[#000] rounded-b-xl">
      {/* Logo Section */}
      <div className="logo flex gap-4 items-center absolute left-0">
        <img
          src="https://i.scdn.co/image/ab67616d00004851fe7908b7666690bf4e83ce14"
          alt="Album Cover"
          className="w-12 h-12 rounded"
        />
        <div className="grid">
          <p className="font-semibold">
            Pursuit Of Happiness - Extended Steve Aoki Remix
          </p>
          <span className="text-gray-400 text-sm">
            Kid Cudi, MGMT, Ratatat, Steve Aoki
          </span>
        </div>
      </div>

      {/* Play Section */}
      <div className="PlaySection flex flex-col items-center gap-3 w-full max-w-lg">
        <div className="controls flex gap-4">
          <button className="text-lg hover:text-purple-500 transition">
            ⏮️
          </button>
          <button className="text-xl hover:text-purple-500 transition">
            ⏯️
          </button>
          <button className="text-lg hover:text-purple-500 transition">
            ⏭️
          </button>
        </div>
        <div className="status flex items-center gap-4 w-full">
      <span className="w-[0px] text-center text-sm">
        {new Date(currentTime * 1000).toISOString().substr(14, 5)}
      </span>
      <div className="song-slider relative flex-grow h-1.5 bg-gray-700 rounded-2xl overflow-hidden">
        {/* Barra de progreso */}
        <div
          className="progress absolute top-0 left-0 h-full bg-white/100 rounded-2"
          style={{ width: `${(currentTime / totalTime) * 100}%` }}
        ></div>

        {/* Input slider */}
        <input
          type="range"
          min="0"
          max={totalTime}
          value={currentTime}
          onChange={handleSliderChange}
          className="seek-bar absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
        />
      </div>
      <span className="w-[0px] text-center text-sm">
        {new Date(totalTime * 1000).toISOString().substr(14, 5)}
      </span>
    </div>

      </div>

      {/* Right Icons */}
      <div className="rightIcons flex gap-4 items-center absolute right-0">
        <button className="p-2 rounded hover:bg-gray-800 transition">
          <img src={fullscreen} alt="Fullscreen" className="w-6 h-6" />
        </button>
      </div>
    </aside>
  );
}

export default MusicFooter;
