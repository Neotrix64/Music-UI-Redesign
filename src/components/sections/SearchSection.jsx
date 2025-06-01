import React, { useEffect, useState } from "react";
import {
  Search,
  Music,
  Disc,
  Users,
  User,
  Play,
  Heart,
  MoreHorizontal,
} from "lucide-react";
import { getSearch } from "../../utils/ApiCall";
import useSearchStore from "../../store/useSearchStore";
import useSongStore from "../../store/useSongStore";
import usePlayingPlaylistStore from "../../store/usePlayingPlaylistStore";
import useAlbumStore from "../../store/useAlbumStore";

function SearchSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [data, setData] = useState([]);
  const setPlayingPlaylist = usePlayingPlaylistStore(
    (state) => state.setPlayingPlaylist
  );
  const { setCurrentSong } = useSongStore();
  const setSelectedAlbum = useAlbumStore((state) => state.setSelectedAlbum);
  const [isSelected, setSelected] = useState();

  const filters = [
    { name: "All", icon: Search },
    { name: "Songs", icon: Music },
    { name: "Albums", icon: Disc },
    { name: "Artists", icon: Users },
    { name: "Playlists", icon: User },
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

  const songs = [
    {
      id: 1,
      name: "Blinding Lights",
      artist: "The Weeknd",
      album: "After Hours",
      duration: "3:20",
    },
    {
      id: 2,
      name: "Save Your Tears",
      artist: "The Weeknd",
      album: "After Hours",
      duration: "3:35",
    },
    {
      id: 3,
      name: "Can't Feel My Face",
      artist: "The Weeknd",
      album: "Beauty Behind The Madness",
      duration: "3:33",
    },
    {
      id: 4,
      name: "Starboy",
      artist: "The Weeknd ft. Daft Punk",
      album: "Starboy",
      duration: "3:50",
    },
  ];

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
      <div className="content p-6">
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

        {/* Best Match Results */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r text-white bg-clip-text text-transparent">
            Best Match Results
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.length === 0 ? (
              <div className="text-center text-gray-400 py-10">Loading...</div>
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
                        {album?.idArtist.name}
                      </p>
                      <span className="inline-block mt-2 px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">
                        {album?.releaseDate}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Songs Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-6 text-white text-transparent">
            Songs
          </h3>
          <div className="space-y-2">
            <div className="flex gap-3">
              {data.length === 0 ? (
                <p>Loading Data...</p>
              ) : (
                data.filtroSong.map((song, index) => {
                  return (
                    <div
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

                      <h3 className="font-semibold text-white text-transparent">
                        {song.name}
                      </h3>
                      <h3 className="font-semibold mb-6 text-white/40">
                        {song.idArtist[0].name}
                      </h3>
                    </div>

                    //         <div
                    //     key={song.id}
                    //     onDoubleClick={() => handleMusicPlay(song)}
                    //     className="group cursor-pointer select-none flex items-center gap-4 p-3 rounded-lg hover:bg-gray-800/50 transition-all duration-300 border border-transparent hover:border-gray-700/50"
                    //     style={{ animationDelay: `${index * 0.05}s` }}
                    // >

                    //     <div className="flex items-center gap-3">
                    //         <p className='text-gray-200/70'>{index + 1}</p>
                    //         <img src={song.albumCover} alt="" className='size-10 rounded-full' />
                    //     <div className="flex-1">
                    //         <p className="font-medium text-white group-hover:text-green-400 transition-colors">{song.name}</p>
                    //         <p className="text-sm text-gray-400">{song.artist}</p>
                    //     </div>
                    //     </div>
                    //     <p className="text-sm text-gray-500 hidden md:block">{song.album}</p>
                    //     <div className="flex items-center gap-2">
                    //         <button className="text-gray-400 hover:text-green-400 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    //             <Heart size={16} />
                    //         </button>
                    //         <span className="text-sm text-gray-500">{song.duration}</span>
                    //         <button className="text-gray-400 hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                    //             <MoreHorizontal size={16} />
                    //         </button>
                    //     </div>
                    // </div>
                  );
                })
              )}
            </div>
          </div>
        </div>

        {/* Albums Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r text-white bg-clip-text text-transparent">
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

        {/* Artists & People Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r text-white bg-clip-text text-transparent">
              Artists
            </h3>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="group flex items-center gap-4 p-3 rounded-lg hover:bg-gray-800/50 transition-all duration-300"
                >
                  <img
                    src={`https://images.unsplash.com/photo-${
                      1493225457124 + i
                    }-a3eb161ffa5f?w=60&h=60&fit=crop&crop=face`}
                    alt="Artist"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <p className="font-medium text-white group-hover:text-pink-400 transition-colors">
                      Artist Name {i}
                    </p>
                    <p className="text-sm text-gray-400">10M+ listeners</p>
                  </div>
                  <button className="px-4 py-2 border border-white/20 text-white rounded-full text-sm hover:bg-white hover:text-black transition-all duration-300 opacity-0 group-hover:opacity-100">
                    Follow
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r text-white bg-clip-text text-transparent">
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
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
