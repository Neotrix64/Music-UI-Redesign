import React from 'react';

// Componente para "Discover new favorites"
function DiscoverNewFavorites() {
  const neonColors = {
    electric: "#00FFFF",
    neonPink: "#FF007F",
    lime: "#00FF00",
    purple: "#8A2BE2",
    orange: "#FF4500",
    yellow: "#FFFF00",
    magenta: "#FF00FF",
    green: "#39FF14"
  };

  function getRandomNeonColor() {
    const keys = Object.keys(neonColors);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return neonColors[randomKey];
  }

  const albums = [
    {
      name: "Hidden Gems",
      albumCover: "https://i.scdn.co/image/ab67616d0000b273c5649add07ed3720be9d5526",
      context: "Alternative Rock",
      color: getRandomNeonColor(),
      idArtist: {
        name: ["Arctic Monkeys", "The Strokes", "Cage The Elephant", "Foster The People"]
      }
    },
    {
      name: "Indie Vibes",
      albumCover: "https://i.scdn.co/image/ab67616d0000b273757c2d89c5e4749ba5a9b452",
      context: "Indie Pop",
      color: getRandomNeonColor(),
      idArtist: {
        name: ["Tame Impala", "Mac DeMarco", "Boy Pablo", "Still Woozy"]
      }
    },
    {
      name: "Electronic Fusion",
      albumCover: "https://i.scdn.co/image/ab67616d0000b273df55e326ed144ab4f5cecf95",
      context: "Electronic",
      color: getRandomNeonColor(),
      idArtist: {
        name: ["Flume", "ODESZA", "Porter Robinson", "Madeon"]
      }
    },
    {
      name: "New Wave",
      albumCover: "https://i.scdn.co/image/ab67616d0000b273a048415db06a5b6fa7ec4e1a",
      context: "Synthwave",
      color: getRandomNeonColor(),
      idArtist: {
        name: ["The Midnight", "FM-84", "Timecop1983", "Gunship"]
      }
    }
  ];

  return (
    <div className="albums overflow-x-auto scrollbar-hide">
      <ul className="flex space-x-2 w-max">
        {albums && albums.length > 0 ? (
          albums.map((album, index) => (
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
                      background: `${album.color}`,
                      backdropFilter: 'blur(2px)',
                      border: `0px solid ${album.color}44`
                    }}
                    className={`absolute font-inter text-sm text-black font-extrabold tracking-widest size-5 w-full shadow-black/60 shadow-md bottom-4 ease-in-out duration-300 transform flex items-center justify-center z-20`}
                  >
                    <p
                      className="truncate"
                      style={{ textShadow: `0 0 10px ${album.color}` }}
                    >
                      {album.context}
                    </p>
                  </div>

                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      // handleGreenPlay(album);
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
                            // handleChange(artista);
                            // handleSectionProfile();
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
          ))
        ) : (
          <li className="ml-5 p-4">Loading albums...</li>
        )}
      </ul>
    </div>
  );
}

export default DiscoverNewFavorites;