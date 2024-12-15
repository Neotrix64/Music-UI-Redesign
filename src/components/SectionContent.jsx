import React from "react";
import { useSection } from "./Contexts/HomeContext";
import profile from "../consts/profile";

function SectionContent() {
  const { section } = useSection();

  if (section === ".") {
    return (
      <div className="text-white bg-[#181818] w-full min-h-[77vh] max-h-[72vh] rounded-md mr-3 overflow-y-scroll">
        <p>WAWAWAWA</p>
      </div>
    );
  }

  // Manejo de otras secciones si es necesario
  if (section === "home") {
    return (
      <div className="text-white bg-[#181818] w-full min-h-[77vh] max-h-[72vh] rounded-md mr-3 overflow-y-scroll">
        <div className="banner w-full bg-gradient-to-b from-[#545454] to-[#2c2c2c] h-2/3 content-center ">
        <div className="info flex">
        <img src={profile.PHOTO} alt="" className="rounded-full size-56 ml-5 box shadow-2xl shadow-black " />
        <div className="text flex flex-col ml-3 mt-5">
          <span className="text-lg">Profile</span>
          <span className="text-5xl">{profile.NAME}</span>
          <div className="">
            <ul className="flex gap-2 m-2">
              <li className="hover:border-b-white cursor-pointer border-b-2 border-b-transparent ease-in-out duration-300">{profile.PLAYLISTS}</li>
              <li className="hover:border-b-white cursor-pointer border-b-2 border-b-transparent ease-in-out duration-300">{profile.FRIENDS}</li>
              <li className="hover:border-b-white cursor-pointer border-b-2 border-b-transparent ease-in-out duration-300">{profile.FOLLOWING}</li>
            </ul>
            <div className="buttons flex gap-3 font-semibold">
            <button className="p-2 w-2/5 rounded-full bg-white text-black">Manage Profile</button>
            <button className="p-2 w-2/5 rounded-full bg-black ">Manage Playlists</button>
            </div>
          </div>
          
        </div>
        </div>
        </div>
        
      </div>
    );
  }
}

export default SectionContent;
