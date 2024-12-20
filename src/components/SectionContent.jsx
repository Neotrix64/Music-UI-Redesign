import { useState } from "react";
import { useSection } from "./Contexts/HomeContext";
import profile from "../consts/profile";
import carrito from "../Icons/carrito-de-compras (1).png";
import facebook from "../Icons/facebook.png";
import discord from "../Icons/discord.png";
import instagram from "../Icons/instagram.png";
import artists from "../consts/artists";

function SectionContent() {
  const { setSection, section } = useSection();
  const [selectedArtist, setArtist] = useState(artists[0]);

  const handleChange = (artist) => {
    setArtist(artist);
  };

  const handleSectionProfile = () => {
    setSection("profile");
  };

  if (section === "home") {
    return (
      <div className="text-white bg-[#181818] w-full min-h-[77vh] max-h-[72vh] rounded-md mr-3 overflow-y-scroll">
        <div className="banner w-full bg-gradient-to-b from-[#545454] to-[#2c2c2c] h-96 relative overflow-hidden">
          {/* Imagen de fondo */}
          <img
            src="https://es.rollingstone.com/wp-content/uploads/2023/05/Kevin-Kaarl-y-el-valor-de-la-vulnerabilidad.jpg"
            alt="info section"
            className="relative w-full h-full object-cover"
          />

          {/* Sombra interna con gradiente y filtro de desenfoque */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent backdrop-blur-sm pointer-events-none"></div>

          {/* Texto de enlace a perfil */}
          <p className="absolute top-4 left-4 text-lg font-semibold tracking-wide text-white opacity-80 cursor-pointer hover:opacity-100 transition-opacity duration-300">
            Go to profile
          </p>

          {/* Contenido de la sección */}
          <div className="content flex flex-col gap-6 pl-4 absolute bottom-20 left-4 w-full">
            <div className="text flex flex-col gap-4">
              <h2 className="text-5xl font-semibold tracking-wide">
                What's hot this weekend?
              </h2>
              <h4 className="text-xl text-white/70">
                The singer-songwriter Kevin Kaarl released a new song called
                <br />
                <span className="font-bold">
                  "No me culpes por sentir"
                </span>{" "}
                this December 14, 2024
              </h4>
            </div>

            {/* Botones de acción */}
            <div className="buttons flex gap-4">
              <button className="bg-green-400 text-white hover:bg-white hover:text-green-400 p-3 font-semibold text-lg rounded-full w-1/6 transition duration-300 ease-in-out">
                Play Now
              </button>
            </div>
          </div>
        </div>
        <h3 className="text-2xl font-semibold p-5">Recommended albums</h3>
        <div className="albums">
          <ul className="flex">
            <li className="ml-5 hover:bg-[#282828] w-fit h-fit p-4 rounded-md cursor-pointer duration-300 ease-in-out">
              <img
                src="https://cdn-images.dzcdn.net/images/cover/82db4c0f8e9412cafb1cd765b076d58c/0x1900-000000-80-0-0.jpg"
                alt=""
                className="size-40 rounded-lg"
              />
              <div className="albumInfo flex flex-col">
                <p>GNX</p>
                <p
                  className="text-white/50 hover:text-white duration-300"
                  onClick={() => {
                    handleSectionProfile(); // Ejecuta handleSectionProfile
                    handleChange(artists[0]); // Ejecuta handleChange con el segundo artista
                  }}
                >
                  Kendrick Lamar
                </p>
              </div>
            </li>
            <li className="ml-5 hover:bg-[#282828] w-fit h-fit p-4 rounded-md cursor-pointer duration-300 ease-in-out">
              <img
                src="https://i.scdn.co/image/ab67616d0000b273a7558dd7d6526ad0856de685"
                alt=""
                className="size-40 rounded-lg"
              />
              <div className="albumInfo flex flex-col">
                <p>Hasta el fin del mundo</p>
                <p
                  className="text-white/50 hover:text-white duration-300"
                  onClick={() => {
                    handleSectionProfile(); // Ejecuta handleSectionProfile
                    handleChange(artists[2]); // Ejecuta handleChange con el segundo artista
                  }}
                >Kevin Kaarl</p>
              </div>
            </li>
            <li className="ml-5 hover:bg-[#282828] w-fit h-fit p-4 rounded-md cursor-pointer duration-300 ease-in-out">
              <img
                src="https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/3a/31/fc/3a31fcd7-b1f8-33f5-3f1c-be2c6a7a44a5/093624870401.jpg/1200x1200bb.jpg"
                alt=""
                className="size-40 rounded-lg"
              />
              <div className="albumInfo flex flex-col">
                <p>HIVE</p>
                <p
                  className="text-white/50 hover:text-white duration-300"
                  onClick={() => {
                    handleSectionProfile(); // Ejecuta handleSectionProfile
                    handleChange(artists[1]); // Ejecuta handleChange con el segundo artista
                  }}
                >Sub Urban</p>
              </div>
            </li>
            <li className="ml-5 hover:bg-[#282828] w-fit h-fit p-4 rounded-md cursor-pointer duration-300 ease-in-out">
              <img
                src="https://i.scdn.co/image/ab67616d0000b27309545e98d9172b05b28f5c0a"
                alt=""
                className="size-40 rounded-lg"
              />
              <div className="albumInfo flex flex-col">
                <p>Thrill seeker</p>
                <p
                  className="text-white/50 hover:text-white duration-300"
                  onClick={() => {
                    handleSectionProfile(); // Ejecuta handleSectionProfile
                    handleChange(artists[0]); // Ejecuta handleChange con el segundo artista
                  }}
                >Sub Urban</p>
              </div>
            </li>
            <li className="ml-5 hover:bg-[#282828] w-fit h-fit p-4 rounded-md cursor-pointer duration-300 ease-in-out">
              <img
                src="https://cdn-images.dzcdn.net/images/cover/7ce6b8452fae425557067db6e6a1cad5/500x500.jpg"
                alt=""
                className="size-40 rounded-lg"
              />
              <div className="albumInfo flex flex-col">
                <p>DAMN</p>
                <p
                  className="text-white/50 hover:text-white duration-300"
                  onClick={() => {
                    handleSectionProfile(); // Ejecuta handleSectionProfile
                    handleChange(artists[0]); // Ejecuta handleChange con el segundo artista
                  }}
                >Kendrick Lamar</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  if (section === "profile") {
    return (
      <div className="text-white bg-[#181818] w-full min-h-[77vh] max-h-[72vh] rounded-md mr-3 overflow-y-scroll scrollbar-thumb-white/40 scrollbar ">
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
                    <li className="text-white ease-in-out duration-300 border-b-2 border-white/100 cursor-pointer">
                      <button>Popular</button>
                    </li>
                    <li className="hover:text-white ease-in-out duration-300 hover:border-white/50 cursor-pointer">
                      Artist Pick
                    </li>
                    <li className="hover:text-white ease-in-out duration-300 hover:border-white/50 cursor-pointer">
                      Discography
                    </li>
                    <li className="hover:text-white ease-in-out duration-300 hover:border-white/50 cursor-pointer">
                      Featuring
                    </li>
                    <li className="hover:text-white ease-in-out duration-300 hover:border-white/50 cursor-pointer">
                      Loved by fans
                    </li>
                    <li className="hover:text-white ease-in-out duration-300 hover:border-white/50 cursor-pointer">
                      Appears on
                    </li>
                    <li className="hover:text-white ease-in-out duration-300 hover:border-white/50 cursor-pointer">
                      About
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

  // Manejo de otras secciones si es necesario
  if (section === "myProfile") {
    return (
      <div className="text-white bg-[#181818] w-full min-h-[77vh] max-h-[72vh] rounded-md mr-3 overflow-y-scroll scrollbar-thumb-white/40 scrollbar ">
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
                <li className="hover:text-white ease-in-out duration-300 border-b-2 border-white/50 cursor-pointer">
                  <button>Information</button>
                </li>
                <li>Friends</li>
                <li>Playlists</li>
                <li>Podcasts</li>
                <li></li>
              </ul>
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionContent;
