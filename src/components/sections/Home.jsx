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
    setTimeout(() => {
      handleSectionAlbum()
    }, 100);
  };

  useEffect(() => {
    const fetchAlbum = async () => {
      const data = await getAlbums();
      setAlbums(data);
    };
    fetchAlbum();
  }, []);


  return (
    <div className="text-white bg-[#0d0d0d] h-[88vh] w-full rounded-md mr-3 overflow-y-scroll">
      <div className="relative w-full">
        <div className="banner-container relative w-full h-96">
          <img
            src="https://es.rollingstone.com/wp-content/uploads/2023/05/Kevin-Kaarl-y-el-valor-de-la-vulnerabilidad.jpg"
            alt="info section"
            className="absolute w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#0d0d0d]"></div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0d0d0d] to-transparent"></div>
          <p
            onClick={handleSectionProfile}
            className="absolute top-4 left-4 text-lg font-semibold tracking-wide text-white opacity-80 cursor-pointer hover:opacity-100 transition-opacity duration-300 z-10"
          >
            Go to profile
          </p>

          {/* Contenido del banner */}
          <div className="content flex flex-col gap-6 pl-8 absolute bottom-20 w-full z-10">
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
      <div className="content-section bg-[#0d0d0d] pt-3 pb-96">
        <h3 className="text-2xl font-semibold py-5 ml-5">Recommended albums</h3>
        <div className="albums overflow-x-auto scrollbar-hide">
          <ul className="flex space-x-2 w-max">
            {albums.map((album, index) => (
              <li
                key={index}
                onClick={() => handleAlbumChange(album)}
                className="ml-5 hover:bg-[#202020] group w-48 p-4 rounded-md cursor-pointer duration-500 ease-in-out"
              >
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <img
                      src={album.albumCover}
                      alt={album.name}
                      className="size-40 rounded-lg shadow-black drop-shadow-sm"
                    />
                    <div className="absolute size-12 rounded-full shadow-black/60 shadow-md bottom-1 left-[65%] bg-green-500 group-hover:opacity-100 opacity-0 ease-in-out duration-300 transform group-hover:-translate-y-1 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-8 fill-black"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-2 mt-2 w-full">
                    <p className="font-medium truncate">{album.name}</p>
                    <p
                      className="text-white/50 hover:text-white duration-300 truncate"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleChange(album.idArtist);
                        handleSectionProfile();
                      }}
                    >
                      {album.idArtist.name}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <h3 className="text-2xl font-semibold py-5 ml-5">
          Top Genre this week
        </h3>

        <div className="tracks-list grid grid-cols-5 w-full">
          <div className="track-item flex items-center p-2 hover:bg-white/5 rounded-md">
            <span className="mr-4 text-white/50">1</span>
            <div className="bg-white size-10 rounded-full mr-3"></div>
            <div>
              <div className="font-medium">Cirque</div>
              <div className="text-sm text-white/50">Sub Urban</div>
            </div>
          </div>
          <div className="track-item flex items-center p-2 hover:bg-white/5 rounded-md">
            <span className="mr-4 text-white/50">2</span>
            <div className="bg-white size-10 rounded-full mr-3"></div>
            <div>
              <div className="font-medium">Freak</div>
              <div className="text-sm text-white/50">Sub Urban</div>
            </div>
          </div>
          <div className="track-item flex items-center p-2 hover:bg-white/5 rounded-md">
            <span className="mr-4 text-white/50">3</span>
            <div className="bg-white size-10 rounded-full mr-3"></div>
            <div>
              <div className="font-medium">Cradles</div>
              <div className="text-sm text-white/50">Sub Urban</div>
            </div>
          </div>
          <div className="track-item flex items-center p-2 hover:bg-white/5 rounded-md">
            <span className="mr-4 text-white/50">3</span>
            <div className="bg-white size-10 rounded-full mr-3"></div>
            <div>
              <div className="font-medium">Cradles</div>
              <div className="text-sm text-white/50">Sub Urban</div>
            </div>
          </div>
          <div className="track-item flex items-center p-2 hover:bg-white/5 rounded-md">
            <span className="mr-4 text-white/50">3</span>
            <div className="bg-white size-10 rounded-full mr-3"></div>
            <div>
              <div className="font-medium">Cradles</div>
              <div className="text-sm text-white/50">Sub Urban</div>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-semibold py-5 ml-5">Jump Back In</h3>

        {/* El Maximo es 9 */}

        <div className="tracks-list grid grid-cols-3 w-full">
          <div className="track-item flex items-center p-2 hover:bg-white/5 rounded-md">
            <span className="mr-4 text-white/50">1</span>
            <div className="bg-white size-10 rounded-full mr-3"></div>
            <div>
              <div className="font-medium">Cirque</div>
              <div className="text-sm text-white/50">Sub Urban</div>
            </div>
          </div>
          <div className="track-item flex items-center p-2 hover:bg-white/5 rounded-md">
            <span className="mr-4 text-white/50">2</span>
            <div className="bg-white size-10 rounded-full mr-3"></div>
            <div>
              <div className="font-medium">Freak</div>
              <div className="text-sm text-white/50">Sub Urban</div>
            </div>
          </div>
          <div className="track-item flex items-center p-2 hover:bg-white/5 rounded-md">
            <span className="mr-4 text-white/50">3</span>
            <div className="bg-white size-10 rounded-full mr-3"></div>
            <div>
              <div className="font-medium">Cradles</div>
              <div className="text-sm text-white/50">Sub Urban</div>
            </div>
          </div>
          <div className="track-item flex items-center p-2 hover:bg-white/5 rounded-md">
            <span className="mr-4 text-white/50">3</span>
            <div className="bg-white size-10 rounded-full mr-3"></div>
            <div>
              <div className="font-medium">Cradles</div>
              <div className="text-sm text-white/50">Sub Urban</div>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-semibold py-5 ml-5">Made for NeoDev</h3>
        <h3 className="text-2xl font-semibold py-5 ml-5">
          Discover new favorites
        </h3>
        <h3 className="text-2xl font-semibold py-5 ml-5">Mood blend</h3>
        <h3 className="text-2xl font-semibold py-5 ml-5">Focus zone</h3>
        <h3 className="text-2xl font-semibold py-5 ml-5">
          Night drive playlist
        </h3>
      </div>
    </div>
  );
}

export default Home;
