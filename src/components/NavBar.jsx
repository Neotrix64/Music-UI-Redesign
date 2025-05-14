import { useEffect, useState } from "react";
import search from "../Icons/busqueda (1).png";
import constants from "./consts/globalConstants";
import { useSection } from "./Contexts/HomeContext";
import { House } from "lucide-react";

function NavBar() {
  const getRandomPlaceHolder = () => {
    const placeholders = constants.placeholders;
    const randomIndex = Math.floor(Math.random() * placeholders.length);
    return placeholders[randomIndex];
  };

  const [useNav, setNavText] = useState("");

  const handleChangeNav = (event) => {
    setNavText(event.target.value);
  };

  const { setSection, section } = useSection();

  const handleSection = (section) => {
    setSection(section);
  };

  useEffect(() => {
    // Solo se ejecuta cuando useNav cambia y no está vacío
    if (useNav.length > 0) {
      setSection("SearchSection");
    } else if(section === "SearchSection") {
      setSection("home"); //EN VEZ DE HOME DEBO PONER UNA SECCION DE BROWSE
    }
  }, [useNav]); // El efecto se ejecuta cuando useNav cambia

  return (
    <nav className="flex justify-center items-center text-white lg:p-4 pb-14 bg-[#000] rounded-b-xl  ">
      <div className="logo flex absolute left-5 text-xl items-center">
        <img
          draggable="false"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/1280px-Spotify_logo_with_text.svg.png"
          alt=""
          className="h-10"
        />
      </div>
      <div className="searchBar lg:flex hidden gap-5 text-white">
        <div className="innerImg flex items-center relative group">
          <div
            className="grayHover absolute top-1 -left-1 w-11 h-11 rounded-full -z-9 bg-white/10 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 cursor-pointer"
            onClick={() => handleSection("myProfile")}
          ></div>
          <button>
            <img
              src="https://i.pinimg.com/736x/05/f6/bc/05f6bcbdbc6877781dcd16e0de729a20.jpg"
              alt=""
              className="size-9 rounded-full mt-1 before:bg-black z-7 cursor-pointer"
            />
          </button>
        </div>
        <img src={search} alt="" className="absolute size-5 ml-[70px] mt-3.5" />

        <input
          type="text"
          className="rounded-3xl pl-12 w-[500px] pr-5 bg-white/10 tracking-wider hover:bg-white/20 ease-in-out duration-700 focus:bg-white/20 placeholder:text-white/50 border-[1px] border-transparent hover:border-white/20"
          value={useNav}
          onChange={handleChangeNav}
          placeholder={getRandomPlaceHolder()}
        />
        <div className="relative w-12 h-12">
          <button onClick={() => handleSection("home")} className="w-full h-full rounded-full bg-white/10 hover:bg-white/20 ease-in-out duration-300 hover:scale-110 flex items-center justify-center">
            <House color="#ffffff" />
          </button>
        </div>
      </div>
      <div className="boton absolute right-0 lg:flex gap-5 hidden">
        <button className=" font-medium hover:scale-110 ease-in-out duration-300">
          Install App
        </button>
        <button className="bg-white text-black px-4 py-2 rounded-3xl font-medium hover:text-white hover:bg-green-500 duration-700">
          Explore Premium
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
