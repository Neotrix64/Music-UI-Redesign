import React from "react";
import { useSection } from "./Contexts/HomeContext";
import profile from "../consts/profile";
import carrito from "../Icons/carrito-de-compras (1).png";
import facebook from "../Icons/facebook.png";
import discord from "../Icons/discord.png";
import instagram from "../Icons/instagram.png";

function SectionContent() {

  const { section } = useSection();

  if (section === "home") {
    return (
      <div className="text-white bg-[#181818] w-full min-h-[77vh] max-h-[72vh] rounded-md mr-3 overflow-y-scroll">
        <p>WAWAWAWA</p>
      </div>
    );
  }

  if (section === "profile") {
    return (
      <div className="text-white bg-[#181818] w-full min-h-[77vh] max-h-[72vh] rounded-md mr-3 overflow-y-scroll scrollbar-thumb-white/40 scrollbar ">
<div className="banner w-full bg-gradient-to-b from-[#545454] to-[#2c2c2c] h-96 content-center relative overflow-hidden">
  {/* Imagen de fondo */}
  <img 
    src="https://media.pitchfork.com/photos/6740ba51d090b666ccdcf211/2:1/w_2560%2Cc_limit/Kendrick-Lamar.jpeg" 
    alt="Kendrick Lamar" 
    className="relative w-full h-full object-cover"
  />

  {/* Inner Shadow */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent pointer-events-none"></div>
  <div className="absolute bottom-0 left-0 w-full h-[19%] bg-black opacity-0 pointer-events-none"></div>
  
  {/* Contenido superpuesto */}
  <div className="separador flex justify-center items-center absolute inset-0">
    <div className="text-center">
      <span className="text-blue-100 font-semibold text-xl">Verified Artist</span>
      <h2 className="text-7xl font-bold">Kendrick Lamar</h2>
      <p className="">83,103,281 Monthly Listeners</p>
      <div className="buttons flex justify-center gap-3 font-semibold">
                    <button className="p-2 mt-2 w-1/5 rounded-full bg-green-500 text-white shadow-2xl shadow-black">
                      Play
                    </button>
                    <button className="p-2 mt-2 w-1/5 rounded-full bg-black shadow-2xl shadow-black">
                      Follow
                    </button>
                  </div>
    </div>
  </div>
</div>

        <div className="banner w-full bg-gradient-to-b from-[#222222] to-[#121212] h-full shadow-2xl shadow-black">
        <div className="content">
        <h1 className="pt-5 pl-3 flex justify-center text-lg font-semibold tracking-wide">
          <ul className="flex gap-3 text-white/50">
            <li className="text-white ease-in-out duration-300 border-b-2 border-white/100 cursor-pointer"><button>Popular</button></li>
            <li className="hover:text-white ease-in-out duration-300 hover:border-white/50 cursor-pointer">Artist Pick</li>
            <li className="hover:text-white ease-in-out duration-300 hover:border-white/50 cursor-pointer">Discography</li>
            <li className="hover:text-white ease-in-out duration-300 hover:border-white/50 cursor-pointer">Featuring</li>
            <li className="hover:text-white ease-in-out duration-300 hover:border-white/50 cursor-pointer">Loved by fans</li>
            <li className="hover:text-white ease-in-out duration-300 hover:border-white/50 cursor-pointer">Appears on</li>
            <li className="hover:text-white ease-in-out duration-300 hover:border-white/50 cursor-pointer">About</li>
          </ul>
        </h1>
        <div className="list overflow-hidden">
          {/* <ul className=" flex gap-4">
            <li>
              <img src="https://media.gq.com/photos/5e6151090f0a6a0008f45908/16:9/w_2991,h_1682,c_limit/GQ_KendrickLamar_030520.jpg" alt="" className="w-[30vmin] h-[46vmin] object-cover object-center"/>
              <span>KDOT</span>
            </li>
            <li>
              <img src="https://media.gq.com/photos/5e6151090f0a6a0008f45908/16:9/w_2991,h_1682,c_limit/GQ_KendrickLamar_030520.jpg" alt="" className="w-[30vmin] h-[46vmin] object-cover object-center"/>
              <span>KDOT</span>
            </li>
            <li>
              <img src="https://media.gq.com/photos/5e6151090f0a6a0008f45908/16:9/w_2991,h_1682,c_limit/GQ_KendrickLamar_030520.jpg" alt="" className="w-[30vmin] h-[46vmin] object-cover object-center"/>
              <span>KDOT</span>
            </li>
            <li>
              <img src="https://media.gq.com/photos/5e6151090f0a6a0008f45908/16:9/w_2991,h_1682,c_limit/GQ_KendrickLamar_030520.jpg" alt="" className="w-[30vmin] h-[46vmin] object-cover object-center"/>
              <span>KDOT</span>
            </li>
          </ul> */}
        </div>
        </div>
        </div>
      </div>
    );
  }

  // Manejo de otras secciones si es necesario
  if (section === "artist") {
    return (
      <div className="text-white bg-[#181818] w-full min-h-[77vh] max-h-[72vh] rounded-md mr-3 overflow-y-scroll scrollbar-thumb-white/40 scrollbar ">
        <div className="banner w-full bg-gradient-to-b from-[#545454] to-[#2c2c2c] h-96 content-center shadow-2xl shadow-black">
          <div className="separador flex justify-between">
            <div className="info flex" >
              <img
                draggable="false"
                src={profile.PHOTO}
                alt=""
                className="rounded-full size-56 ml-5 box shadow-2xl shadow-black"
              />
              <div className="text flex flex-col ml-3 mt-5">
                <span className="text-lg"><span className="text-green-500 font-bold">Spotify User</span></span>
                <span className="text-5xl">{profile.NAME}</span>
                <div className="">
                  <ul className="flex gap-4 m-2">
                    <li className="hover:border-b-white cursor-pointer border-b-2 border-b-transparent ease-in-out duration-300 ">
                      {profile.PLAYLISTS}
                    </li>
                    <li className="hover:border-b-white cursor-pointer border-b-2 border-b-transparent ease-in-out duration-300">
                      {profile.FRIENDS}
                    </li>
                    <li className="hover:border-b-white cursor-pointer border-b-2 border-b-transparent ease-in-out duration-300">
                      {profile.FOLLOWING}
                    </li>
                  </ul>
                  <div className="buttons flex gap-3 font-semibold">
                    <button className="p-2 w-2/5 rounded-full bg-white text-black shadow-2xl shadow-black">
                      Manage Profile
                    </button>
                    <button className="p-2 w-2/5 rounded-full bg-black shadow-2xl shadow-black">
                      Manage Playlists
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="social-media ">
              <ul className="grid gap-5">
                <li className="mr-3 rounded-full p-2 bg-transparent  backdrop-blur-2xl hover:shadow-black hover:bg-[rgba(255,255,255,0.1)] cursor-pointer transition-all duration-300">
                  <img src={carrito} alt="" className="size-6" />
                </li>
                <li className="mr-3 rounded-full p-2 bg-transparent backdrop-blur-2xl hover:shadow-black hover:bg-[rgba(255,255,255,0.1)] cursor-pointer transition-all duration-300">
                  <img src={facebook} alt="" className="size-6" />
                </li>
                <li className="mr-3 rounded-full p-2 bg-transparent backdrop-blur-2xl hover:shadow-black hover:bg-[rgba(255,255,255,0.1)] cursor-pointer transition-all duration-300">
                  <img src={discord} alt="" className="size-6" />
                </li>
                <li className="mr-3 rounded-full p-2 bg-transparent backdrop-blur-2xl hover:shadow-black hover:bg-[rgba(255,255,255,0.1)] cursor-pointer transition-all duration-300">
                  <img src={instagram} alt="" className="size-6" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="banner w-full bg-gradient-to-b from-[#222222] to-[#121212] h-full shadow-2xl shadow-black">
        <div className="content">
        <h1 className="pt-5 pl-3 flex justify-center text-lg font-semibold tracking-wide">
          <ul className="flex gap-3 text-white/50">
            <li className="hover:text-white ease-in-out duration-300 border-b-2 border-white/50 cursor-pointer"><button>Information</button></li>
            <li>Friends</li>
            <li>Playlists</li>
            <li>Podcasts</li>
            <li></li>
          </ul>
        </h1>
        <div className="list overflow-hidden">
          {/* <ul className=" flex gap-4">
            <li>
              <img src="https://media.gq.com/photos/5e6151090f0a6a0008f45908/16:9/w_2991,h_1682,c_limit/GQ_KendrickLamar_030520.jpg" alt="" className="w-[30vmin] h-[46vmin] object-cover object-center"/>
              <span>KDOT</span>
            </li>
            <li>
              <img src="https://media.gq.com/photos/5e6151090f0a6a0008f45908/16:9/w_2991,h_1682,c_limit/GQ_KendrickLamar_030520.jpg" alt="" className="w-[30vmin] h-[46vmin] object-cover object-center"/>
              <span>KDOT</span>
            </li>
            <li>
              <img src="https://media.gq.com/photos/5e6151090f0a6a0008f45908/16:9/w_2991,h_1682,c_limit/GQ_KendrickLamar_030520.jpg" alt="" className="w-[30vmin] h-[46vmin] object-cover object-center"/>
              <span>KDOT</span>
            </li>
            <li>
              <img src="https://media.gq.com/photos/5e6151090f0a6a0008f45908/16:9/w_2991,h_1682,c_limit/GQ_KendrickLamar_030520.jpg" alt="" className="w-[30vmin] h-[46vmin] object-cover object-center"/>
              <span>KDOT</span>
            </li>
          </ul> */}
        </div>
        </div>
        </div>
      </div>
    );
  }
}

export default SectionContent;
