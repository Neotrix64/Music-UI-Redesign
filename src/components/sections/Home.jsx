import { useEffect, useState } from "react";
import { useSection } from "../Contexts/HomeContext";
import useArtistStore from "../../store/useAppStore";
import { getAlbums } from "../../utils/ApiCall";

function Home() {
  const { setArtist } = useArtistStore(); // Usa zustand para manejar el estado global
  const { setSection, section } = useSection();
  const [ albums, setAlbums ] = useState([]);
  const handleChange = (artist) => {
    setArtist(artist);
  };

  const handleSectionProfile = () => {
    setSection("profile");
  };

  useEffect(() =>{
    const fetchAlbum = async () =>{
      const data = await getAlbums();
      setAlbums(data);
    }
    fetchAlbum();
  }, [])

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
      <div className="albums overflow-x-auto scrollbar-hide">
        <ul className="flex space-x-5  w-max">
          {albums.map((album, index) =>{
            return(
              <li key={index} className="ml-5 hover:bg-[#202020] w-fit h-fit p-4 rounded-md cursor-pointer duration-500 ease-in-out">
            <img
              src={album.albumCover}
              alt=""
              className="size-40 rounded-lg shadow-black drop-shadow-sm"
            />

            <div className="albumInfo flex flex-col">
              <p>{album.name}</p>
              <p
                className="text-white/50 hover:text-white duration-300"
                onClick={() => {
                  handleChange(album.idArtist);
                  handleSectionProfile();
                }}
              >
                {album.idArtist.name}
              </p>
            </div>
          </li>
            );
          })}
        </ul>
      </div>
      <h3 className="text-2xl font-semibold p-5">Jump Back In</h3>
    </div>
  );
}

export default Home;
