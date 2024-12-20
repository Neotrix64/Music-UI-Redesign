import fullscreen from "../Icons/menu-hamburguesa.png";

function MusicFooter() {
  return (
    <aside className="flex justify-between text-white p-5 bg-[#000] rounded-b-xl ">
      <div className="logo flex gap-2">
        <img
          src="https://i.scdn.co/image/ab67616d00004851fe7908b7666690bf4e83ce14"
          alt=""
          className="size-12"
        />
        <div className="grid">
          <p className="">Pursuit Of Happiness - Extended Steve Aoki Remix</p>
          <span className="text-white/50 text-sm">
            Kid cudi, MGMT, Ratatat, Steve aoki
          </span>
        </div>
      </div>
      <div className="PlaySection flex gap-5 text-white items-center">
        <div className="icons"></div>
        <div className="status flex items-center gap-5 w-full">
          <span className="min-w-[40px] text-center">0:00</span>
          <div className="song-slider flex-grow relative">
            <input
              type="range"
              value="50"
              className="seek-bar appearance-none w-full h-1 bg-gray-300 rounded-lg overflow-hidden cursor-pointer accent-purple-600 
                   focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
            />
          </div>
          <span className="min-w-[40px] text-center">6:13</span>
        </div>
      </div>

      <div className="rightIcons flex gap-5">
        <button>
          {/* enter full screen */}
          <img src={fullscreen} alt="" className="size-5" />
        </button>
      </div>
    </aside>
  );
}

export default MusicFooter;
