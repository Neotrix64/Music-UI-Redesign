import useArtistStore from "../../store/useAppStore";
import ProfileSongs from "../ArtistProfile/ProfileSongs";
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
    <div className="text-white bg-[#181818] w-full h-[88vh] rounded-md mr-3 overflow-y-scroll scrollbar-thumb-white/40 scrollbar">
      {selectedArtist && (
        <>
          <div className="banner w-full bg-gradient-to-b from-[#545454] to-[#2c2c2c] h-96 content-center relative overflow-hidden">
            {/* Imagen de fondo */}
            <img
              src={selectedArtist.banner}
              alt={selectedArtist.name}
              className="relative w-full h-full object-cover"
            />

            {/* Inner Shadow */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-full h-[19%] bg-black opacity-0 pointer-events-none"></div>

            {/* Contenido superpuesto */}
            <div className="separador flex justify-center items-center absolute inset-0">
              <div className="text-center">
                <span className="text-blue-100 font-semibold text-xl pointer-events-none">
                  Verified Artist
                </span>
                <h2 className="text-7xl font-bold pointer-events-none">
                  {selectedArtist.name}
                </h2>
                <p className="pointer-events-none">
                  {selectedArtist.monthListeners.toLocaleString()} Monthly
                  Listeners
                </p>
                <div className="buttons flex justify-center gap-3 font-semibold">
                  <button className="p-2 mt-2 w-1/5 rounded-full bg-green-500 text-white shadow-2xl shadow-black">
                    Play
                  </button>
                  <button className="p-2 mt-2 w-1/5 rounded-full bg-black shadow-2xl shadow-black">
                    Follow
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="banner w-full bg-gradient-to-b from-[#222222] to-[#121212] shadow-2xl shadow-black pb-96 ">
            <div className="content h-fit">
              <h1 className="pt-5 pl-3 flex justify-center text-lg font-semibold tracking-wide">
                <ul className="flex gap-3 text-white/50">
                  {filtros.map((filtro, index) => {
                    return (
                      <li
                        key={index}
                        className={`ease-in-out duration-300 border-b-2 cursor-pointer ${
                          useProfileFilter === filtro.filterChange
                            ? "border-white/100 text-white"
                            : "border-transparent hover:text-white"
                        }`}
                      >
                        <button
                          onClick={() => {
                            handleFilterChange(filtro.filterChange);
                          }}
                        >
                          {filtro.paragraph}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </h1>


                  
                  {useProfileFilter === "popular" && <Popular artist={selectedArtist}/>}








            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ArtistProfile;
