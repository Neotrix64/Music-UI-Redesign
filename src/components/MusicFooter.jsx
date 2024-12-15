import fullscreen from '../Icons/menu-hamburguesa.png'

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
          <span className="text-white/50 text-sm">Kid cudi, MGMT, Ratatat, Steve aoki</span>
          </div>
        </div>
        <div className="PlaySection flex gap-5 text-white">
            <div className="icons"></div>
            <div className="status flex justify-center ">
                <span>0:00</span>
                <hr className="w-48" />
                <span>6:13</span>
            </div>
        </div>
        <div className="rightIcons flex gap-5">
            <button>
                {/* enter full screen */}
                <img src={fullscreen} alt="" className='size-5'/> 
            </button>
        </div>
      </aside>
    );
  }
  
  export default MusicFooter;
  