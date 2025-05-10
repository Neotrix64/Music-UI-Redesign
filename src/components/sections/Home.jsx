import { useEffect, useState } from "react";
import { useSection } from "../Contexts/HomeContext";
import useArtistStore from "../../store/useAppStore";
import { getAlbums } from "../../utils/ApiCall";
import useAlbumStore from "../../store/useAlbumStore";

function Home() {
  const { setArtist } = useArtistStore();
  const { setSection, section } = useSection();
  const [albums, setAlbums] = useState([]);
  const setSelectedAlbum = useAlbumStore((state) => state.setSelectedAlbum);
  const selectedAlbum = useAlbumStore((state) => state.selectedAlbum);

  const handleChange = (artist) => {
    setArtist(artist);
  };

  const handleSectionProfile = () => {
    setSection("profile");
  };

  const handleSectionAlbum = () => {
    setSection("album");
  };

  const handleAlbumChange = (album) => {
    setSelectedAlbum(album);
  };

  useEffect(() => {
    const fetchAlbum = async () => {
      const data = await getAlbums();
      setAlbums(data);
    };
    fetchAlbum();
  }, []);

  useEffect(() => {
    if (selectedAlbum) {
      console.log("Nuevo álbum seleccionado:", selectedAlbum);
      handleSectionAlbum();
    }
  }, [selectedAlbum]);

  return (
    <div className="text-white bg-[#181818] h-[88vh] w-full rounded-md mr-3 overflow-y-scroll">
      <div className="relative w-full">
        <div className="banner-container relative w-full h-96">
          <img
            src="https://es.rollingstone.com/wp-content/uploads/2023/05/Kevin-Kaarl-y-el-valor-de-la-vulnerabilidad.jpg"
            alt="info section"
            className="absolute w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#181818]"></div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#181818] to-transparent"></div>
          <p
            onClick={handleSectionProfile}
            className="absolute top-4 left-4 text-lg font-semibold tracking-wide text-white opacity-80 cursor-pointer hover:opacity-100 transition-opacity duration-300 z-10"
          >
            Go to profile
          </p>

          {/* Contenido del banner */}
          <div className="content flex flex-col gap-6 pl-4 absolute bottom-20 left-4 w-full z-10">
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
              <button className="bg-green-400 text-white hover:bg-white hover:text-green-400 p-3 font-semibold text-lg rounded-full w-32 transition duration-300 ease-in-out">
                Play Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="content-section bg-[#181818] px-5 pt-3 pb-8">
        <h3 className="text-2xl font-semibold py-5">Recommended albums</h3>
        <div className="albums overflow-x-auto scrollbar-hide">
          <ul className="flex space-x-5 w-max">
            {albums.map((album, index) => {
              return (
                <li
                  key={index}
                  onClick={() => {
                    handleAlbumChange(album);
                  }}
                  className="ml-5 hover:bg-[#202020] w-fit h-fit p-4 rounded-md cursor-pointer duration-500 ease-in-out"
                >
                  <img
                    src={album.albumCover}
                    alt={album.name}
                    className="size-40 rounded-lg shadow-black drop-shadow-sm"
                  />

                  <div className="albumInfo flex flex-col mt-2">
                    <p className="font-medium">{album.name}</p>
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
        <h3 className="text-2xl font-semibold py-5">Jump Back In</h3>
      </div>
    </div>
  );
}

export default Home;
