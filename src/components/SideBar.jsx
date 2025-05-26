import { Home, Library, Star, User } from 'lucide-react';
import { useState, useEffect } from "react";
import { getLibrary } from '../utils/ApiCall';
import { useSection } from "./Contexts/HomeContext"
import usePlaylistStore from '../store/usePlaylistStore';

function SideBar() {
  const [usePlaylist, setPlaylist] = useState([]);
    const { setSection, section } = useSection();
      const selectedPlaylist = usePlaylistStore((state) => state.selectedPlaylist);
      const setSelectedPlaylist = usePlaylistStore((state) => state.setSelectedPlaylist);
    const handleSectionPlaylist = (playlist) => {
        setSelectedPlaylist(playlist);
      setSection("playlist");
      console.log(playlist)
  };
  
  useEffect(() => {
    const fetchLibrary = async () => {
      try {
        const librerias = await getLibrary();
        setPlaylist(librerias);
      } catch (error) {
        console.log("Error obteniendo libreria" + error)
      }
    }
    fetchLibrary();
  }, [])

  return (
    <div className="sidebar text-white bg-[#0d0d0d] h-[88vh] w-16 sm:w-20 md:w-24 xl:w-1/4 rounded-lg mx-2 p-2 sm:p-3 md:p-4 flex flex-col justify-between overflow-y-auto scrollbar-hide ease-in-out duration-500 ">
      <div className="w-full pb-24">
        <nav className="mb-4 md:mb-6">
          <ul className="space-y-2 md:space-y-4 w-full">
            <li className="flex w-full items-center justify-center sm:justify-start gap-1 md:gap-3 hover:text-green-500 cursor-pointer transition-colors">
              <h2 className="text-xs md:text-sm font-semibold uppercase text-gray-200 mb-2 md:mb-4">
                Menu
              </h2>
            </li>
          </ul>
          <ul className="space-y-4">
            <li className="flex w-full items-center justify-center sm:justify-start gap-1 md:gap-3 hover:text-green-500 cursor-pointer transition-colors border-r-2 border-transparent hover:border-green-500">
              <User size={20} />
              <span className="hidden sm:inline text-xs md:text-sm font-medium">Discover</span>
            </li>
            <li className="flex w-full items-center justify-center sm:justify-start gap-1 md:gap-3 hover:text-green-500 cursor-pointer transition-colors border-r-2 border-transparent hover:border-green-500">
              <Star size={20} />
              <span className="hidden sm:inline text-xs md:text-sm font-medium">Podcasts</span>
            </li>
            <li className="flex w-full items-center justify-center sm:justify-start gap-1 md:gap-3 hover:text-green-500 cursor-pointer transition-colors border-r-2 border-transparent hover:border-green-500">
              <Library size={20} />
              <span className="hidden sm:inline text-xs md:text-sm font-medium">Playlist</span>
            </li>
          </ul>
        </nav>

        {/* Library Section */}
        <div className="pt-0">
          <div>
            <h2 className="text-xs md:text-sm font-semibold uppercase text-gray-200 mb-2 md:mb-4 text-center sm:text-left">
              Library
            </h2>
            <div className="md -mt-2 mb-2 filtros">
              {/* <button className='p-1 text-sm font-semibold rounded-full w-16 bg-black/40 border-2 border-white'></button> */}
            </div>
          </div>
          <ul className="space-y-2 md:space-y-4">
            {usePlaylist.map((playlist, index) => {
              return (
                <li data-testid="playlistId" onClick={() =>{
                  handleSectionPlaylist(playlist)
                }} key={index} className="flex justify-center sm:justify-start cursor-pointer group/picture">
                  <div className="relative size-10 sm:size-12 bg-black rounded-lg">
                    <img
                      src={playlist.albumCover}
                      className="object-cover group-hover/picture:opacity-30 w-full h-full duration-500 ease-in-out rounded-lg"
                      alt={playlist.name}
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 sm:w-8 sm:h-8 fill-white opacity-0 group-hover/picture:opacity-100 ease-in-out duration-500 absolute z-10 top-2 left-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div className="hidden xl:flex flex-col ml-2 w-3/4 truncate">
                    <p className="text-xs font-semibold group-hover/picture:text-green-400 ease-in-out duration-500">
                      {playlist.name}
                    </p>
                    <h3 className="text-xs text-white/60">NeoDev - Playlist</h3>
                    <h3 className="text-xs text-white/30">{playlist.description || "No Description"}</h3>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;