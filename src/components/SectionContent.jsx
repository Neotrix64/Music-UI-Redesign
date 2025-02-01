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
  const [useFilter, setFilter] = useState("popular");
  const [useProfileFilter, setProfileFilter] = useState("");
  console.log(section)

  const handleChange = (artist) => {
    setArtist(artist);
  };

  const handleSectionProfile = () => {
    setSection("profile");
  };

  if (section === "home") {
    return (
      <div className="text-white bg-[#181818] h-[88vh] w-full rounded-md mr-3 overflow-y-scroll">
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
                  handleChange(artists[0]); // Ejecuta handleChange
                  handleSectionProfile(); // Ejecuta handleSectionProfile
                }}
              >
                Kendrick Lamar
              </p>
            </div>
          </li>
          <li className="ml-5 hover:bg-[#282828] w-fit h-fit p-4 rounded-md cursor-pointer duration-300 ease-in-out">
            <div className="absolute size-10 bg-green-400 rounded-full"></div>
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
                  handleChange(artists[2]); // Ejecuta handleChange
                  handleSectionProfile(); // Ejecuta handleSectionProfile
                }}
              >
                Kevin Kaarl
              </p>
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
                  handleChange(artists[1]); // Ejecuta handleChange
                  handleSectionProfile(); // Ejecuta handleSectionProfile
                }}
              >
                Sub Urban
              </p>
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
                  handleChange(artists[1]); // Ejecuta handleChange
                  handleSectionProfile(); // Ejecuta handleSectionProfile
                }}
              >
                Sub Urban
              </p>
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
                  handleChange(artists[0]); // Ejecuta handleChange
                  handleSectionProfile(); // Ejecuta handleSectionProfile
                }}
              >
                Kendrick Lamar
              </p>
            </div>
          </li>
        </ul>
      </div>
      <h3 className="text-2xl font-semibold p-5">Jump Back In</h3>
    </div>
    );
  }

  if (section === "profile") {
    return (
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

  // Manejo de otras secciones si es necesario
  if (section === "myProfile") {
    return (
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

  if (section === "album") {
    return (
      <div className="text-white bg-[#181818] w-full h-[88vh] rounded-md mr-3 overflow-y-scroll scrollbar-thumb-white/40 scrollbar ">
        <div className="banner w-full bg-gradient-to-b from-[#545454] to-[#2c2c2c] h-60 relative overflow-hidden">
          {/* Imagen de fondo */}
          <img
            src="https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yMjg3MjIxNi9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTc4Njc0NzAzMH0.jJoO2IcUGdrOsRJ3CwI_inIwsZvqap9TNmzV2liTnIo/img.jpg?width=1200&height=600&coordinates=0%2C0%2C0%2C207"
            alt="info section"
            className="relative w-full h-full object cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent backdrop-blur-sm pointer-events-none"></div>

          <div className="content flex gap-6 pl-4 absolute bottom-5 left-4 w-full">
            <img
              src="https://i.scdn.co/image/ab67616d0000b27309545e98d9172b05b28f5c0a"
              alt=""
              className="size-2/12"
            />
            <div className="flex flex-col bottom-0">
              <h2 className="text-5xl font-semibold tracking-wide">
                Thrill seeker
              </h2>
              <h4 className="text-xl text-white/50">
                Thrill Seeker is a character and alter-ego of the north-american
                <br />
                singer and composer Daniel Virgil Maisonneuve,
                <br />
                better known as Sub Urban.
              </h4>
              <button className="bg-green-500 text-white w-1/4 h-1/3 rounded-full mt-3">
                Play
              </button>
            </div>
          </div>
        </div>

        <div className="banner w-full bg-gradient-to-b from-[#181818] to-[#121212] h-full shadow-2xl shadow-black"></div>
      </div>
    );
  }
}

export default SectionContent;
