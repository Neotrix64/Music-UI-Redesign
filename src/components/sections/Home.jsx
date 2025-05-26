import { useEffect, useState } from "react";
import { useSection } from "../Contexts/HomeContext";
import useArtistStore from "../../store/useAppStore";
import { getAlbums, getRandomSongs, getTypeSongs } from "../../utils/ApiCall";
import useAlbumStore from "../../store/useAlbumStore";
import BannerCarousel from "../subComponents/Home/BannerCarousel";
import useMusicPlayer from "../../utils/useMusicPlayer"
import useSongStore from "../../store/useSongStore";
import MadeFor from "../subComponents/Home/MadeFor";
import DiscoverNewFavorites from "../subComponents/Home/DiscoverNewFavorites"
import FocusZone from "../subComponents/Home/FocusZone";
import ThisIs from "../subComponents/Home/ThisIs";
import usePlayingPlaylistStore from "../../store/usePlayingPlaylistStore";

function Home() {
  const { setArtist } = useArtistStore();
  const { setSection, section } = useSection();
  const [albums, setAlbums] = useState([]);
  const setSelectedAlbum = useAlbumStore((state) => state.setSelectedAlbum);
  const [jumpBackIn, setJumpBackIn] = useState([]);
  const [topGenre, setTopGenre] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { setCurrentSong } = useSongStore();
  const setPlayingPlaylist = usePlayingPlaylistStore((state) => state.setPlayingPlaylist)
  const usePlayingMusic = usePlayingPlaylistStore((state) => state.usePlayingPlaylist)

  const handleChange = (artist) => {
    setArtist(artist);
  };

  const handleSectionProfile = () => {
    setSection("profile");
  };

  const handleSectionAlbum = () => {
    setSection("album");
  };

  const handleGreenPlay = (album) => {
    setCurrentSong(album.idSongs[0])
    setSelectedAlbum(album);
    setPlayingPlaylist(album)
  }

  useEffect(() =>{
    console.log(usePlayingMusic)
  }, [usePlayingMusic])

  const handleAlbumChange = (album) => {
    setSelectedAlbum(album);
    setTimeout(() => {
      handleSectionAlbum()
    }, 100);
  };

  useEffect(() => {
  const fetchData = async () => {
    setIsLoading(true);

    try {
      const [albumsData, songsData, topGenreData] = await Promise.all([
        getAlbums(),
        getRandomSongs(),
        getTypeSongs("pop"),
      ]);
      setTopGenre(topGenreData)
      setAlbums(albumsData || []);
      setJumpBackIn(songsData || []);
    } catch (error) {
      console.error("Error fetching data:", error);
      setAlbums([]);
      setJumpBackIn([]);
    } finally {
      setIsLoading(false);
    }
  };
  fetchData();
}, []);



  

  return (
    <div className="text-white bg-[#0d0d0d] h-[88vh] w-full rounded-md mr-3 overflow-y-scroll">
      <div className="relative w-full">
        <div className="banner-container relative w-full h-96">
          <BannerCarousel />
        </div>
      </div>

      {/* Contenido principal */}
      <div className="content-section bg-[#0d0d0d] pt-3 pb-96">
        <div className="header flex justify-between">
          <h3 className="text-2xl font-semibold py-5 ml-10">
            Recommended albums
          </h3>
          <h4 className="text-lg text-white/40 hover:text-white cursor-pointer flex items-center font-semibold pt-5 mr-20 hover:border-white duration-300">
            Load more
          </h4>
        </div>
        <div className="albums overflow-x-auto scrollbar-hide">
          <ul className="flex space-x-2 w-max">
            {albums && albums.length > 0 ? (
              albums.map((album, index) => (
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
                        className="size-40 rounded-lg shadow-black/80 shadow-lg"
                      />
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          handleGreenPlay(album);
                        }}
                        className="absolute size-12 rounded-full shadow-black/60 shadow-md bottom-1 left-[65%] bg-green-500 group-hover:opacity-100 opacity-0 ease-in-out duration-300 transform group-hover:-translate-y-1 flex items-center justify-center z-30"
                      >
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
              ))
            ) : (
              <li className="ml-5 p-4">Loading albums...</li>
            )}
          </ul>
        </div>

        <div className="grid py-5 ml-5">
          {/* <h5 className="text-white/40 text-xs tracking-widest font-semibold">Tenemos para ti aqui las musicas mas escuchadas del genero "Pop"</h5> */}
          <h3 className="text-2xl font-semibold ">Top Genre this week</h3>
        </div>

        <div className="tracks-list flex justify-center gap-5 w-full">
          {topGenre.slice(0, 4).map((musica, index) => {
            return (
              <div
                key={index}
                className="track-item w-full flex items-center p-2 hover:bg-white/5 rounded-md"
              >
                <span className="mr-4 text-white/50">{index + 1}</span>
                <div className="relative">
                  <img
                    src={musica.albumCover}
                    alt=""
                    className="size-10 rounded-full mr-3"
                  />
                  <div className="absolute size-6 rounded-full shadow-black/60 shadow-md -bottom-1 left-[30%] bg-green-500 group-hover:opacity-100 ease-in-out opacity-0 duration-300 transform group-hover:-translate-y-1 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 fill-black"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <div className="font-medium">{musica.name}</div>
                  <div className="text-sm text-white/50">Sub Urban</div>
                </div>
              </div>
            );
          })}
        </div>

        <h3 className="text-2xl font-semibold py-5 ml-5">Made for NeoDev</h3>

        <MadeFor />

        <h3 className="text-2xl font-semibold py-5 ml-5">Jump Back In</h3>

        {/* El Maximo es 9 */}

        <div className="tracks-list grid grid-cols-3 gap-4 w-full">
          {isLoading ? (
            <div className="col-span-3 text-center py-4">Loading songs...</div>
          ) : jumpBackIn && jumpBackIn.length > 0 ? (
            jumpBackIn.map((cancion, index) => (
              <div
                key={index}
                className="track-item flex items-center p-2 hover:bg-white/5 rounded-md ml-10 cursor-pointer group"
              >
                <span className="mr-4 text-white/50">{index + 1}</span>
                <div className="relative">
                  <img
                    src={cancion.albumCover}
                    alt=""
                    className="size-10 rounded-full mr-3"
                  />
                  <div className="absolute size-6 rounded-full shadow-black/60 shadow-md -bottom-1 left-[30%] bg-green-500 group-hover:opacity-100 ease-in-out opacity-0 duration-300 transform group-hover:-translate-y-1 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 fill-black"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                <div>
                  <div className="font-medium">{cancion.name}</div>
                  <div className="text-sm text-white/50 truncate hover:text-white">
                    {cancion.artistData && cancion.artistData[0]
                      ? cancion.artistData[0].name
                      : "Unknown Artist"}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-3 text-center py-4">
              No songs available
            </div>
          )}
        </div>

        

        <h3 className="text-2xl font-semibold py-5 ml-5">This Is</h3>

        <ThisIs />

        <h3 className="text-2xl font-semibold py-5 ml-5">
          Discover new favorites
        </h3>

        <DiscoverNewFavorites />

        <h3 className="text-2xl font-semibold py-5 ml-5">Mood blend</h3>
      </div>
    </div>
  );
}

export default Home;