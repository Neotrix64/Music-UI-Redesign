// Componente para "Focus zone"
function FocusZone() {
  const focusColors = {
    deep: "#2C3E50",
    forest: "#27AE60",
    ocean: "#3498DB",
    earth: "#8B4513",
    stone: "#95A5A6",
    midnight: "#191970"
  };

  const albums = [
    {
      name: "Deep Work",
      albumCover: "https://i.scdn.co/image/ab67616d0000b273c8b444df094279e70d0ed856",
      context: "Instrumental",
      color: focusColors.deep,
      idArtist: {
        name: ["Ólafur Arnalds", "Nils Frahm", "Max Richter", "Kiasmos"]
      }
    },
    {
      name: "Nature Sounds",
      albumCover: "https://i.scdn.co/image/ab67616d0000b273a5b8e6e04fcfa29b77a6321b",
      context: "Ambient",
      color: focusColors.forest,
      idArtist: {
        name: ["Brian Eno", "Tim Hecker", "Stars of the Lid", "Grouper"]
      }
    },
    {
      name: "Study Beats",
      albumCover: "https://i.scdn.co/image/ab67616d0000b273c654fb90bb50dc9e26be2738",
      context: "Lo-fi Hip Hop",
      color: focusColors.ocean,
      idArtist: {
        name: ["Nujabes", "J Dilla", "Emancipator", "Bonobo"]
      }
    },
    {
      name: "Meditation",
      albumCover: "https://i.scdn.co/image/ab67616d0000b27355c38bc34d1fe852f2657c2e",
      context: "Zen",
      color: focusColors.stone,
      idArtist: {
        name: ["Ludovico Einaudi", "GoGo Penguin", "Portico Quartet", "Mammal Hands"]
      }
    }
  ];

  return (
    <div className="albums overflow-x-auto scrollbar-hide">
      <ul className="flex space-x-2 w-max">
        {albums.map((album, index) => (
          <li
            key={index}
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
                  style={{ 
                    backgroundColor: `${album.color}E6`,
                    borderLeft: `4px solid ${album.color}`
                  }}
                  className="absolute font-mono text-xs text-white font-semibold tracking-wide px-3 py-2 bottom-4 left-3 right-3 ease-in-out duration-300 transform flex items-center justify-center z-20 backdrop-blur-md"
                >
                  <p className="truncate">🎯 {album.context}</p>
                </div>

                <div
                  onClick={(e) => {
                    e.stopPropagation();
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
                {Array.isArray(album.idArtist.name) ? (
                  <>
                    {album.idArtist.name.slice(0, 2).map((artista, i) => (
                      <p
                        key={i}
                        className="text-white/50 hover:text-white duration-300 text-xs font-semibold"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        {artista}
                      </p>
                    ))}
                    {album.idArtist.name.length > 2 && (
                      <p className="text-white/30 text-xs font-semibold">
                        +{album.idArtist.name.length - 2} más
                      </p>
                    )}
                  </>
                ) : (
                  <p
                    className="text-white/50 hover:text-white duration-300 text-xs font-semibold"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    {album.idArtist.name}
                  </p>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default FocusZone