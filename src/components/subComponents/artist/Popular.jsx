import { useEffect, useState } from "react";
import useArtistStore from "../../../store/useAppStore";
import { profileInfo } from "../../../utils/ApiCall";
import useSongStore from "../../../store/useSongStore";
import useAlbumStore from "../../../store/useAlbumStore";
import usePlayingPlaylistStore from "../../../store/usePlayingPlaylistStore";
import {getRelativeTime} from "../../../utils/formatDate"

function Popular({artist}) {
  const {selectedArtist} = useArtistStore();
  const [info, setInfo] = useState([]);
    const { setCurrentSong } = useSongStore();
  const setSelectedAlbum = useAlbumStore((state) => state.setSelectedAlbum);
    const setPlayingPlaylist = usePlayingPlaylistStore((state) => state.setPlayingPlaylist)

  
  // Sample data - replace with actual data from your store
  const popularSongs = [
    { id: 1, title: "Blinding Lights", artist: selectedArtist?.name || "Artist Name", plays: "2.1B", duration: "3:20" },
    { id: 2, title: "Save Your Tears", artist: selectedArtist?.name || "Artist Name", plays: "1.8B", duration: "3:35" },
    { id: 3, title: "After Hours", artist: selectedArtist?.name || "Artist Name", plays: "1.2B", duration: "6:01" },
    { id: 4, title: "Can't Feel My Face", artist: selectedArtist?.name || "Artist Name", plays: "1.9B", duration: "3:33" },
    { id: 5, title: "The Hills", artist: selectedArtist?.name || "Artist Name", plays: "1.7B", duration: "4:02" },
  ];
  useEffect(() =>{
    const fetchInfo = async () =>{
      try{
      const response = await profileInfo(selectedArtist._id);
      setInfo(response);
      } catch (err){
        console.log(err);
      }
    }
    fetchInfo();
  }, [selectedArtist])

  const getMonthAbbreviation = (month) => {
    const months = {
      'January': 'JAN', 'February': 'FEB', 'March': 'MAR', 'April': 'APR',
      'May': 'MAY', 'June': 'JUN', 'July': 'JUL', 'August': 'AUG',
      'September': 'SEP', 'October': 'OCT', 'November': 'NOV', 'December': 'DEC'
    };
    return months[month] || month.substring(0, 3).toUpperCase();
  };

  const handlePlaySong = (song) =>{
    console.log(song)
    setCurrentSong(song);
    setSelectedAlbum(song.idAlbum);
    setPlayingPlaylist(song.idAlbum);
  }
  
  return (
    <div className="max-w-7xl mx-auto space-y-12">
      {/* Popular Tracks and Featured Album Section */}
      <div className="grid lg:grid-cols-3 gap-12">
        {/* Popular Tracks */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center gap-4 mb-8">
            <div>
              <h2 className="text-3xl font-bold text-white">Popular Releases</h2>
              <p className="text-gray-400 text-sm">Based on what people love</p>
            </div>
          </div>

          <div className="space-y-3">
            {!info ? (
              <p>Loading...</p>
            ) : (
              info.canciones?.map((song, index) =>{
                return(
                  <div key={song.id} onDoubleClick={() => handlePlaySong(song)} className="group flex items-center p-4 rounded-xl bg-gradient-to-r from-white/5 to-transparent hover:from-white/10 hover:to-white/5 transition-all duration-300 cursor-pointer border border-transparent hover:border-white/10">
                <div className="flex items-center gap-4 flex-1">
                  {/* Play Button / Track Number */}
                  <div className="w-6 h-6 flex items-center justify-center">
                    <span className="text-gray-400 group-hover:hidden font-medium">{index + 1}</span>
                    <svg className="w-4 h-4 text-white hidden group-hover:block" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>

                  {/* Album Art */}
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg flex items-center justify-center overflow-hidden">
                    <img src={song.albumCover} alt="" className="w-full h-full" />
                  </div>

                  {/* Song Info */}
                  <div className="flex-1">
                    <div className="font-semibold text-white group-hover:text-green-400 transition-colors">
                      {song.name}
                    </div>
                    <div className="text-sm text-gray-400">{song.artist}</div>
                  </div>

                  {/* Play Count */}
                  <div className="text-sm text-gray-400 hidden md:block">
                    {song.plays}
                  </div>

                  {/* Duration */}
                  <div className="text-sm text-gray-400 w-12 text-right">
                    {song.duration}
                  </div>
                </div>

                {/* More Options */}
                <button className="ml-4 p-2 text-gray-400 hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>
              </div>
                );
              })
            )}
          </div>

          <button className="text-gray-400 hover:text-white transition-colors duration-200 font-medium">
            Show more
          </button>
        </div>

        {/* Featured Album Section */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Featured Album</h3>
            <p className="text-gray-400 text-sm">Most popular release</p>
          </div>

          {/* Main Album */}
          {!info?.albums?.[0] ? (
            <div className="div">
              Loading...
            </div>
          ) : (
            <div className="group cursor-pointer">
            <div className="relative bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-8 h-80 overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="relative z-10 h-full flex flex-col justify-end">
                <h4 className="text-2xl font-bold text-white mb-2">{info?.albums?.[0].name}</h4>
                <p className="text-gray-200 text-sm">{getRelativeTime(info?.albums?.[0].releaseDate)} • 14 tracks</p>
              </div>
            </div>
          </div>
          )}

          {/* Album Carousel */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-white">Other Albums</h4>
            <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
              {[1, 2, 3, 4, 5].map((album) => (
                <div key={album} className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-110 hover:shadow-lg">
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Content Banner */}
      <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
        <div className="aspect-[3/1] bg-gradient-to-r from-red-500 via-pink-500 to-purple-600">
          <img 
            src="https://i.imgur.com/HuIgRO7.png" 
            alt="Featured content" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/30 flex items-center px-12">
          <div className="text-white">
            <h3 className="text-4xl font-bold mb-2">New Music Video</h3>
            <p className="text-gray-200 text-lg">Experience the latest visual masterpiece</p>
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div>
            <h3 className="text-3xl font-bold text-white">Upcoming Events</h3>
            <p className="text-gray-400 text-sm">Don't miss out on live performances</p>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors duration-300 cursor-pointer">
          <div className="flex items-center gap-6">
            {/* Date Box */}
            <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-xl p-4 text-center shadow-lg">
              <div className="text-white font-bold text-lg">APR</div>
              <div className="text-white font-bold text-2xl">19</div>
            </div>

            {/* Event Details */}
            <div className="flex-1 space-y-2">
              <h4 className="text-2xl font-bold text-white tracking-wider">MINNEAPOLIS</h4>
              <p className="text-gray-300 text-sm">Grand National Tour: Kendrick Lamar and SZA</p>
              <div className="flex gap-4 text-xs text-gray-400">
                <span className="hover:text-white cursor-pointer transition-colors">SAT 7:00 PM</span>
                <span className="hover:text-white cursor-pointer transition-colors">US Bank Stadium</span>
              </div>
            </div>

            {/* Ticket Button */}
            <button className="px-6 py-3 bg-green-500 hover:bg-green-400 text-black font-bold rounded-full transition-colors duration-200">
              Get Tickets
            </button>
          </div>
        </div>
      </div>

      {/* See More Section */}
      <div className="text-center py-8">
        <button className="text-gray-400 hover:text-white transition-colors duration-200 font-medium text-lg">
          See more content ↓
        </button>
      </div>
    </div>
  );
}

export default Popular;