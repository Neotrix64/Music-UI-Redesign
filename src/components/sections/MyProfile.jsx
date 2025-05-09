import profile from "../consts/profile";
import carrito from "../../Icons/carrito-de-compras (1).png";
import facebook from "../../Icons/facebook.png";
import discord from "../../Icons/discord.png";
import instagram from "../../Icons/instagram.png";
import { useState } from "react";

function MyProfile(){
    const [useProfileFilter, setProfileFilter] = useState("Information");
    return(
        <div className="text-white bg-[#181818] w-full h-[88vh] rounded-md mr-3 overflow-y-scroll scrollbar-thumb-white/40 scrollbar ">
        <div className="banner w-full bg-gradient-to-b from-[#545454] to-[#2c2c2c] h-96 content-center shadow-2xl shadow-black">
          <div className="separador flex justify-between">
            <div className="info flex">
              <img
                draggable="false"
                src={profile.PHOTO}
                alt=""
                className="rounded-full size-56 ml-5 box shadow-2xl shadow-black"
              />
              <div className="text flex flex-col ml-3 mt-5">
                <span className="text-lg">
                  <span className="text-green-500 font-bold">Spotify User</span>
                </span>
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
                <li className={`ease-in-out duration-300 border-b-2 cursor-pointer ${useProfileFilter === "Information" ? "text-white border-white" : "hover:text-white border-transparent"}`}>
                  <button onClick={() =>{
                    setProfileFilter("Information");
                  }}>Information</button>
                </li>
                <li className={`ease-in-out duration-300 border-b-2 cursor-pointer ${useProfileFilter === "Friends" ? "text-white border-white" : "hover:text-white border-transparent"}`}>
                  <button onClick={() =>{
                    setProfileFilter("Friends");
                  }}>Friends</button>
                </li>
                <li className={`ease-in-out duration-300 border-b-2 cursor-pointer ${useProfileFilter === "Playlists" ? "text-white border-white" : "hover:text-white border-transparent"}`}>
                  <button onClick={() =>{
                    setProfileFilter("Playlists");
                  }}>Playlists</button>
                </li>
                <li className={`ease-in-out duration-300 border-b-2 cursor-pointer ${useProfileFilter === "Podcasts" ? "text-white border-white" : "hover:text-white border-transparent"}`}>
                  <button onClick={() =>{
                    setProfileFilter("Podcasts");
                  }}>Podcasts</button>
                </li>
                <li></li>
                
              </ul>
            </h1>
          </div>
        </div>
      </div>
    );
}

export default MyProfile;