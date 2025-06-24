import React, { useEffect, useState } from "react";
import {
  Search,
  Music,
  Disc,
  Users,
  User,
  Play,
} from "lucide-react";
import { getSearch } from "../../utils/ApiCall";
import useSearchStore from "../../store/useSearchStore";
import useSongStore from "../../store/useSongStore";
import usePlayingPlaylistStore from "../../store/usePlayingPlaylistStore";
import useAlbumStore from "../../store/useAlbumStore";
import { getRelativeTime } from "../../utils/formatDate";

function SearchSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [data, setData] = useState([]);
  const setPlayingPlaylist = usePlayingPlaylistStore(
    (state) => state.setPlayingPlaylist
  );
  const { setCurrentSong } = useSongStore();
  const setSelectedAlbum = useAlbumStore((state) => state.setSelectedAlbum);
  const [isSelected, setSelected] = useState();
  
  // Estados corregidos para el tooltip
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mousePositions, setMousePositions] = useState({});

  const handleMouseMove = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePositions(prev => ({
      ...prev,
      [index]: {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      }
    }));
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const filters = [
    { name: "All", icon: Search },
    { name: "Songs", icon: Music },
    { name: "Albums", icon: Disc },
    { name: "Artists", icon: Users },
    { name: "Podcasts", icon: User },
  ];

  const useSearch = useSearchStore((state) => state.useSearch);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const fetchData = async () => {
        const resultado = await getSearch(useSearch.toLowerCase());
        setData(resultado);
        console.log(data[0]);
      };
      fetchData();
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [useSearch]);

  const handleGreenPlay = (album) => {
    setCurrentSong(album.idSongs[0]);
    setSelectedAlbum(album);
    setPlayingPlaylist(album);
    console.log(album);
  };

  const handleMusicPlay = (song) => {
    console.log(song);
    setCurrentSong(song);
    setSelectedAlbum(song.idAlbum);
    setPlayingPlaylist(song.idAlbum);
  };

  const handleSelect = (index) => {
    setSelected(index);
  };

  const albums = [
    {
      id: 1,
      name: "After Hours",
      artist: "The Weeknd",
      year: "2020",
      image:
        "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=150&h=150&fit=crop",
    },
    {
      id: 2,
      name: "Dawn FM",
      artist: "The Weeknd",
      year: "2022",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=150&h=150&fit=crop",
    },
    {
      id: 3,
      name: "Starboy",
      artist: "The Weeknd",
      year: "2016",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=150&h=150&fit=crop",
    },
    {
      id: 4,
      name: "Beauty Behind The Madness",
      artist: "The Weeknd",
      year: "2015",
      image:
        "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=150&h=150&fit=crop",
    },
  ];

  return (
    <div className="text-white bg-[#0d0d0d] h-[88vh] w-full rounded-xl mr-3 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
      <div className="content p-6 overflow-x-hidden">
        {/* Filtros */}
        <div className="filters flex gap-2 mb-8">
          {filters.map((filter) => {
            const IconComponent = filter.icon;
            return (
              <button
                key={filter.name}
                onClick={() => setActiveFilter(filter.name)}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105
                  ${
                    activeFilter === filter.name
                      ? "bg-white text-black shadow-lg shadow-white/20"
                      : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/70 hover:text-white border border-gray-700/50"
                  }
                `}
              >
                <IconComponent size={16} />
                {filter.name}
              </button>
            );
          })}
        </div>

        {/* Render sections based on active filter */}
        {(activeFilter === "All" || activeFilter === "Albums") && (
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-white">
              {activeFilter === "All" ? "Best Match Results" : "Albums"}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.length === 0 ? (
                <div className="text-center text-gray-400 py-10">Loading...</div>
              ) : !data.filtroAlbum || data.filtroAlbum.length === 0 ? (
                <div className="text-center text-gray-400 py-10">No albums found</div>
              ) : (
                data.filtroAlbum.map((album, index) => (
                  <div
                    key={album?.id}
                    className="group relative hover:bg-gradient-to-br bg-[#161616] rounded-xl p-6 hover:from-gray-700/60 hover:bg-[#202020] transition-all duration-500 border border-gray-700/30 hover:border-white/30 backdrop-blur-sm"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <img
                          src={album?.albumCover}
                          alt={album?.name}
                          className="w-20 h-20 rounded-xl object-cover shadow-lg"
                        />
                        <button
                          onClick={() => handleGreenPlay(album)}
                          className="absolute -bottom-2 -right-2 bg-green-500 hover:bg-green-400 text-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform hover:scale-110 shadow-lg"
                        >
                          <Play size={16} fill="currentColor" />
                        </button>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h4 className="text-lg font-semibold text-white group-hover:text-green-300 transition-colors">
                            {album?.name}
                          </h4>
                        </div>
                        <p className="text-gray-400 text-sm mt-1">
                          {album?.idArtist?.name}
                        </p>
                        <span className="inline-block mt-2 px-2 py-1 bg-green-400 text-white text-xs rounded-full">
                          {getRelativeTime(album?.releaseDate)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {(activeFilter === "All" || activeFilter === "Songs") && (
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-white">
              Songs
            </h3>
            <div className="space-y-2">
              <div className="flex gap-3">
                {data.length === 0 ? (
                  <p className="text-gray-400">Loading Data...</p>
                ) : !data.filtroSong || data.filtroSong.length === 0 ? (
                  <p className="text-gray-400">No songs found</p>
                ) : (
                  data.filtroSong.map((song, index) => {
                    return (
                      <div
                        key={song.id || index}
                        onClick={() => handleSelect(index)}
                        className="flex p-3 flex-col items-center group/picture"
                      >
                        <div
                          onDoubleClick={() => handleMusicPlay(song)}
                          className={`relative size-44 sm:size-44 rounded-full ease-in-out duration-200 ${
                            isSelected === index
                              ? "border-2 border-white p-1 bg-gradient-to-br from-purple-500/20 to-white/10"
                              : "bg-black"
                          }`}
                        >
                          <img
                            src={song.albumCover}
                            className="object-cover group-hover/picture:opacity-30 w-full h-full duration-500 ease-in-out rounded-full select-none"
                            alt={song.name}
                          />
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-12 h-12 sm:w-14 sm:h-14 cursor-pointer fill-white opacity-0 group-hover/picture:opacity-100 ease-in-out duration-500 absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>

                        <h3 className="font-semibold text-white">
                          {song.name}
                        </h3>
                        <h3 className="font-semibold mb-6 text-white/40">
                          {song.idArtist?.[0]?.name}
                        </h3>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        )}

        {(activeFilter === "All" || activeFilter === "Playlists") && (
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-white">
              Podcasts
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {albums.map((album, index) => (
                <div
                  key={album.id}
                  className="group bg-gray-800/30 rounded-xl p-4 hover:bg-gray-700/50 transition-all duration-500 transform hover:scale-105 border border-gray-700/20 hover:border-orange-500/30"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative mb-4">
                    <img
                      src={album.image}
                      alt={album.name}
                      className="w-full aspect-square rounded-lg object-cover shadow-lg"
                    />
                    <button className="absolute bottom-2 right-2 bg-green-500 hover:bg-green-400 text-black p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform hover:scale-110 shadow-lg">
                      <Play size={20} fill="currentColor" />
                    </button>
                  </div>
                  <h4 className="font-semibold text-white group-hover:text-green-400 transition-colors mb-1 truncate">
                    {album.name}
                  </h4>
                  <p className="text-sm text-gray-400 mb-1">{album.artist}</p>
                  <p className="text-xs text-gray-500">{album.year}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {(activeFilter === "All" || activeFilter === "Artists") && (
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-white">
              Artists
            </h3>
            <div className="space-y-4">
              {data.length === 0 ? (
                <p className="text-gray-400">Loading...</p>
              ) : !data.filtroArtista || data.filtroArtista.length === 0 ? (
                <p className="text-gray-400">No artists found</p>
              ) : (
                data.filtroArtista.map((artista, i) => {
                  const isHovered = hoveredIndex === i;
                  const mousePos = mousePositions[i] || { x: 0, y: 0 };
                  
                  return (
                    <div
                      key={artista.id || i}
                      onMouseMove={(e) => handleMouseMove(e, i)}
                      onMouseEnter={() => handleMouseEnter(i)}
                      onMouseLeave={handleMouseLeave}
                      className="group flex items-center gap-4 p-3 rounded-lg hover:bg-[#171717] transition-all duration-300 cursor-pointer relative"
                    >
                      {/* Tooltip que aparece para CUALQUIER elemento cuando está hovered */}
                      {isHovered && (
                        <div 
                          className="absolute w-80 h-40 rounded-lg bg-[#181818] shadow-2xl pointer-events-none z-50 transition-all duration-300 ease-out opacity-100 scale-100 border border-gray-700/50"
                          style={{
                            left: `${mousePos.x + 20}px`,
                            top: `${mousePos.y - 50}px`,
                            transform: 'translateZ(0)',
                          }}
                        >
                          {/* Contenido del preview con datos reales del artista */}
                          <div className="p-4 h-full flex flex-col gap-3">
                            {/* Header con imagen y nombre */}
                            <div className="flex items-center gap-3">
                              <img
                                src={artista?.profilePicture}
                                alt="Artist"
                                className="w-12 h-12 rounded-full object-cover"
                              />
                              <div className="flex-1">
                                <p className="font-medium text-green-400">
                                  {artista?.name}
                                </p>
                                <p className="text-sm text-gray-400">{artista?.monthListeners} Listeners</p>
                              </div>
                            </div>
                            
                            {/* Información adicional */}
                            <div className="flex-1 flex flex-col justify-center">
                              <p className="text-gray-300 text-sm mb-2">Popular tracks:</p>
                              <div className="space-y-1">
                                <div className="text-white text-xs">• Top Hit 1</div>
                                <div className="text-white text-xs">• Top Hit 2</div>
                                <div className="text-white text-xs">• Top Hit 3</div>
                              </div>
                            </div>
                            
                            {/* Botón Follow */}
                          </div>
                        </div>
                      )}

                      <img
                        src={artista?.profilePicture}
                        alt="Artist"
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <p className="font-medium text-white group-hover:text-green-400 transition-colors">
                          {artista?.name}
                        </p>
                        <p className="text-sm text-gray-400">{artista?.monthListeners} Listeners</p>
                      </div>
                      <button className="px-4 py-2 border border-white/20 text-white rounded-full text-sm hover:bg-white hover:text-black transition-all duration-300 opacity-0 group-hover:opacity-100">
                        Follow
                      </button>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        )}

        {activeFilter === "All" && (
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">
              People
            </h3>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="group flex items-center gap-4 p-3 rounded-lg hover:bg-gray-800/50 transition-all duration-300"
                >
                  <img
                    src={`https://images.unsplash.com/photo-${
                      1507003211169 + i
                    }-a3eb161ffa5f?w=60&h=60&fit=crop&crop=face`}
                    alt="Person"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <p className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                      User {i}
                    </p>
                    <p className="text-sm text-gray-400">25 followers</p>
                  </div>
                  <button className="px-4 py-2 border border-white/20 text-white rounded-full text-sm hover:bg-white hover:text-black transition-all duration-300 opacity-0 group-hover:opacity-100">
                    Follow
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchSection;