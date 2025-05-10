import useAlbumStore from "../../store/useAlbumStore";
import { getRelativeTime } from "../../utils/formatDate";

import AlbumTable from "../tables/AlbumTable";

function AlbumSection() {
  const selectedAlbum = useAlbumStore((state) => state.selectedAlbum);
  const setSelectedAlbum = useAlbumStore((state) => state.setSelectedAlbum);
  return (
    <div className="text-white bg-[#181818] w-full h-[88vh] rounded-md mr-3 overflow-y-scroll scrollbar-thumb-white/40 scrollbar">
      <div className="relative w-full">
        <div className="banner-container relative w-full h-80">
          <img
            src={selectedAlbum.idArtist.banner}
            alt="info section"
            className="absolute w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#181818]"></div>

          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#181818] to-transparent"></div>

          <div className="absolute bottom-12 left-6 right-6 z-10">
            <div className="flex flex-col max-w-2xl">
              <div className="mb-2">
                <span className="text-sm font-medium uppercase tracking-wider text-white/80">
                  Album
                </span>
              </div>
              <h2 className="text-6xl font-bold tracking-tight mb-2">
                {selectedAlbum.name}
              </h2>
              <div className="flex items-center text-white/80 mt-2 mb-4">
                <img
                  src={selectedAlbum.idArtist.profilePicture}
                  alt="Sub Urban"
                  className="h-6 w-6 rounded-full mr-2"
                />
                <span className="font-medium hover:text-white transition-colors duration-200 cursor-pointer">
                  {selectedAlbum.idArtist.name}
                </span>
                <span className="mx-2">•</span>
                <span>{getRelativeTime(selectedAlbum.releaseDate)}</span>
                <span className="mx-2">•</span>
                <span>10 songs, 32 min</span>
              </div>

              {/* Controles */}
              <div className="flex items-center gap-4 mt-2">
                <button className="bg-green-500 hover:bg-green-400 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Play
                </button>
                <button className="text-white border border-white/30 hover:border-white/70 p-3 rounded-full transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
                <button className="text-white hover:text-white/70 p-3 transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="content-section bg-gradient-to-b from-[#181818] to-[#121212] min-h-[500px] px-6">
          <AlbumTable />
          <h3 className="text-2xl font-bold mb-4 mt-14">Popular Tracks</h3>

          <div className="tracks-list space-y-2">
            <div className="track-item flex items-center p-2 hover:bg-white/5 rounded-md">
              <span className="mr-4 text-white/50">1</span>
              <div>
                <div className="font-medium">Cirque</div>
                <div className="text-sm text-white/50">Sub Urban</div>
              </div>
            </div>
            <div className="track-item flex items-center p-2 hover:bg-white/5 rounded-md">
              <span className="mr-4 text-white/50">2</span>
              <div>
                <div className="font-medium">Freak</div>
                <div className="text-sm text-white/50">Sub Urban</div>
              </div>
            </div>
            <div className="track-item flex items-center p-2 hover:bg-white/5 rounded-md">
              <span className="mr-4 text-white/50">3</span>
              <div>
                <div className="font-medium">Cradles</div>
                <div className="text-sm text-white/50">Sub Urban</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlbumSection;
