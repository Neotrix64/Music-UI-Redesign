import { useState } from "react";
import { useSection } from "../Contexts/HomeContext";
import artists from "../consts/artists";
import useArtistStore from "../../store/useAppStore";

function Home() {
  const { setArtist } = useArtistStore(); // Usa zustand para manejar el estado global
  const { setSection, section } = useSection();
  const handleChange = (artist) => {
    setArtist(artist);
  };

  const handleSectionProfile = () => {
    setSection("profile");
  };
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
              <span className="font-bold">"No me culpes por sentir"</span> this
              December 14, 2024
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

export default Home;
