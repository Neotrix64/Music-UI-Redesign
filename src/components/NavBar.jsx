import search from '../Icons/busqueda (1).png'
import constants from '../consts/globalConstants';
import { useSection } from "./Contexts/HomeContext";
import usuario from "../Icons/usuario.png";

function NavBar() {
  const getRandomPlaceHolder = () =>{
    const placeholders = constants.placeholders;
    const randomIndex = Math.floor(Math.random() * placeholders.length);
    return placeholders[randomIndex];
  }
  
  const { setSection } = useSection();

  const handleSection = () =>{
    setSection("myProfile");
  }

  return (
    <nav className="flex justify-center text-white lg:p-4 pb-14 bg-[#000] rounded-b-xl  ">
      <div className="logo flex absolute left-5 gap-2 text-xl items-center">
        <img
          draggable="false"
          src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/spotify-white-icon.png"
          alt=""
          className="size-9"
        />
        <p className="">Spotify</p>
      </div>
      <div className="searchBar lg:flex hidden gap-5 text-white">
        <div className="innerImg relative group">
          <div className="grayHover absolute -top-1 -left-1 w-11 h-11 rounded-full -z-9 bg-white/10 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 cursor-pointer" onClick={() => handleSection()}></div>
          <button>
            <img
              src="https://i.pinimg.com/736x/05/f6/bc/05f6bcbdbc6877781dcd16e0de729a20.jpg"
              alt=""
              className="size-9 rounded-full before:bg-black z-7 cursor-pointer"
            />
          </button>
        </div>
        <img src={search} alt="" className='absolute size-5 ml-[70px] mt-2.5'/>
        
        <input
          type="text"
          className="rounded-3xl pl-12 w-[500px] pr-5 bg-white/10 tracking-wider hover:bg-white/20 ease-in-out duration-700 focus:bg-white/20 placeholder:text-white/50 cursor-pointer"
          placeholder={getRandomPlaceHolder()}
        />
        <button className='rounded-full bg-white/10 p-5 -ml-3'></button>
      </div>
      <div className="boton absolute right-0 lg:flex gap-5 hidden">
        <button className=" font-medium hover:scale-110 ease-in-out duration-300">Install App</button>
        <button className="bg-white text-black px-4 py-2 rounded-3xl font-medium hover:text-white hover:bg-green-500 duration-700">
          Explore Premium
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
