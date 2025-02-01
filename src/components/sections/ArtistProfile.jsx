import { useState } from "react";
import artists from "../consts/artists";

function ArtistProfile(){
    const [selectedArtist, setArtist] = useState(artists[0]);
    const [useFilter, setFilter] = useState("popular");
    return(
        <div className="text-white bg-[#181818] w-full h-[88vh] rounded-md mr-3 overflow-y-scroll scrollbar-thumb-white/40 scrollbar">
        {selectedArtist && (
          <>
            <div className="banner w-full bg-gradient-to-b from-[#545454] to-[#2c2c2c] h-96 content-center relative overflow-hidden">
              {/* Imagen de fondo */}
              <img
                src={selectedArtist.banner}
                alt={selectedArtist.name}
                className="relative w-full h-full object-cover"
              />

              {/* Inner Shadow */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-full h-[19%] bg-black opacity-0 pointer-events-none"></div>

              {/* Contenido superpuesto */}
              <div className="separador flex justify-center items-center absolute inset-0">
                <div className="text-center">
                  <span className="text-blue-100 font-semibold text-xl pointer-events-none">
                    Verified Artist
                  </span>
                  <h2 className="text-7xl font-bold pointer-events-none">
                    {selectedArtist.name}
                  </h2>
                  <p className="pointer-events-none">
                    {selectedArtist.listeners}
                  </p>
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
                    <li className={`ease-in-out duration-300 border-b-2 cursor-pointer ${useFilter === "popular" ? "border-white/100 text-white" : "border-transparent hover:text-white"}`}>
                      <button
                        onClick={() => {
                          setFilter("popular");
                        }}
                      >
                        Popular
                      </button>
                    </li>
                    <li className={`ease-in-out duration-300 border-b-2 cursor-pointer ${useFilter === "artistpick" ? "border-white/100 text-white" : "border-transparent hover:text-white"}`}>
                    <button
                        onClick={() => {
                          setFilter("artistpick");
                        }}
                      >
                        Artist Pick
                      </button>
                    </li>
                    <li className={`ease-in-out duration-300 border-b-2 cursor-pointer ${useFilter === "discography" ? "border-white/100 text-white" : "border-transparent hover:text-white"}`}>
                    <button
                        onClick={() => {
                          setFilter("discography");
                        }}
                      >
                        Discography
                      </button>
                    </li>
                    <li className={`ease-in-out duration-300 border-b-2 cursor-pointer ${useFilter === "featuring" ? "border-white/100 text-white" : "border-transparent hover:text-white"}`}>
                    <button
                        onClick={() => {
                          setFilter("featuring");
                        }}
                      >
                        Featuring
                      </button>
                    </li>
                    <li className={`ease-in-out duration-300 border-b-2 cursor-pointer ${useFilter === "Loved" ? "border-white/100 text-white" : "border-transparent hover:text-white"}`}>
                    <button
                        onClick={() => {
                          setFilter("Loved");
                        }}
                      >
                        Loved By Fans
                      </button>
                    </li>
                    <li className={`ease-in-out duration-300 border-b-2 cursor-pointer ${useFilter === "appearsOn" ? "border-white/100 text-white" : "border-transparent hover:text-white"}`}>
                    <button
                        onClick={() => {
                          setFilter("appearsOn");
                        }}
                      >
                        Appears on
                      </button>
                    </li>
                    <li className={`ease-in-out duration-300 border-b-2 cursor-pointer ${useFilter === "About" ? "border-white/100 text-white" : "border-transparent hover:text-white"}`}>
                    <button
                        onClick={() => {
                          setFilter("About");
                        }}
                      >
                        About
                      </button>
                    </li>
                  </ul>
                </h1>
              </div>
            </div>
          </>
        )}
      </div>
    );
}

export default ArtistProfile;