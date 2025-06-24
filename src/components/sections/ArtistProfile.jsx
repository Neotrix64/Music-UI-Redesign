import useArtistStore from "../../store/useAppStore";
import useProfileStore from "../../store/useProfileFilter";
import Popular from "../subComponents/artist/Popular";

function ArtistProfile() {
  const { selectedArtist } = useArtistStore();
  const { useProfileFilter, setProfileFilter } = useProfileStore();
  
  const filtros = [
    {
      filterChange: "popular",
      paragraph: "Popular",
    },
    {
      filterChange: "artistpick",
      paragraph: "Artist Pick",
    },
    {
      filterChange: "discography",
      paragraph: "Discography",
    },
    {
      filterChange: "featuring",
      paragraph: "Featuring",
    },
    {
      filterChange: "Loved",
      paragraph: "Loved By Fans",
    },
    {
      filterChange: "appearsOn",
      paragraph: "Appears On",
    },
    {
      filterChange: "About",
      paragraph: "About",
    },
  ];

  const handleFilterChange = (artist) => {
    setProfileFilter(artist);
  };

  return (
    <div className="text-white bg-gradient-to-br from-gray-900 via-gray-800 to-black w-full h-[88vh] rounded-xl mr-3 overflow-y-scroll scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent backdrop-blur-sm">
      {selectedArtist && (
        <>
          {/* Hero Banner Section - Responsive */}
          <div className="relative w-full h-[400px] sm:h-[450px] lg:h-[500px] overflow-hidden rounded-t-xl">
            {/* Background Image with Enhanced Gradients */}
            <div className="absolute inset-0">
              <img
                src={selectedArtist.banner}
                alt={selectedArtist.name}
                className="w-full h-full object-cover"
              />
              {/* Multi-layered gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/90"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>

            {/* Floating Content - Responsive */}
            <div className="absolute inset-0 flex items-end justify-center pb-8 sm:pb-12 lg:pb-16">
              <div className="text-center max-w-4xl px-4 sm:px-6 lg:px-8">
                {/* Verification Badge */}
                <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500/20 backdrop-blur-md rounded-full border border-blue-400/30 mb-4 sm:mb-6">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-400 rounded-full flex items-center justify-center">
                    <svg className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-blue-100 font-medium text-xs sm:text-sm tracking-wide">Verified Artist</span>
                </div>

                {/* Artist Name with Glow Effect - Responsive */}
                <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black mb-3 sm:mb-4 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent drop-shadow-2xl">
                  {selectedArtist.name}
                </h1>

                {/* Monthly Listeners - Responsive */}
                <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 font-light tracking-wide">
                  <span className="text-green-400 font-semibold">
                    {selectedArtist.monthListeners.toLocaleString() || "none"}
                  </span> Monthly Listeners
                </p>

                {/* Action Buttons - Responsive */}
                <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                  <button className="group px-8 sm:px-10 lg:px-12 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 rounded-full text-black font-bold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-green-500/25">
                    <div className="flex items-center justify-center gap-2 sm:gap-3">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                      Play
                    </div>
                  </button>
                  <button className="px-6 sm:px-8 py-3 sm:py-4 bg-black/40 backdrop-blur-md hover:bg-black/60 rounded-full border border-white/20 hover:border-white/40 font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
                    Follow
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation and Content Section */}
          <div className="bg-gradient-to-b from-custom-black/100 to-custom-black/90 backdrop-blur-sm">
            {/* Enhanced Navigation Tabs - Responsive */}
            <div className="sticky top-0 z-10 bg-black/60 backdrop-blur-lg border-b border-white/10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                <nav className="flex justify-center">
                  {/* Desktop Navigation */}
                  <ul className="hidden md:flex gap-4 lg:gap-6 bg-black/30 rounded-full p-1.5 backdrop-blur-md border border-white/10">
                    {filtros.map((filtro, index) => (
                      <li key={index} className="relative">
                        <button
                          onClick={() => handleFilterChange(filtro.filterChange)}
                          className={`px-3 lg:px-4 py-2 rounded-full font-medium text-sm lg:text-base tracking-wide transition-all duration-300 ${
                            useProfileFilter === filtro.filterChange
                              ? "bg-white text-black shadow-lg transform scale-105"
                              : "text-white/70 hover:text-white hover:bg-white/10"
                          }`}
                        >
                          {filtro.paragraph}
                        </button>
                      </li>
                    ))}
                  </ul>

                  {/* Mobile Navigation - Horizontal Scroll */}
                  <div className="md:hidden w-full overflow-x-auto scrollbar-hide">
                    <ul className="flex gap-3 bg-black/30 rounded-full p-1.5 backdrop-blur-md border border-white/10 min-w-max mx-auto">
                      {filtros.map((filtro, index) => (
                        <li key={index} className="relative flex-shrink-0">
                          <button
                            onClick={() => handleFilterChange(filtro.filterChange)}
                            className={`px-3 py-2 rounded-full font-medium text-sm tracking-wide transition-all duration-300 whitespace-nowrap ${
                              useProfileFilter === filtro.filterChange
                                ? "bg-white text-black shadow-lg"
                                : "text-white/70 hover:text-white hover:bg-white/10"
                            }`}
                          >
                            {filtro.paragraph}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </nav>
              </div>
            </div>

            {/* Content Area - Responsive */}
            <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
              {useProfileFilter === "popular" && <Popular artist={selectedArtist}/>}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ArtistProfile;