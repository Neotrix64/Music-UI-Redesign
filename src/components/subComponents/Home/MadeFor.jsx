function MadeFor() {
  const pastelColors = {
    blueGray: "#809bce",
    skyBlue: "#95b8d1",
    mint: "#b8e0d2",
    lightMint: "#d6eadf",
    softPink: "#eac4d5",
    pink1: "#FFB5E8",
    pink2: "#FF9CEE",
    pink3: "#FFCCF9",
    pink4: "#FCC2FF",
    violet1: "#B28DFF",
    violet2: "#C5A3FF",
    violet3: "#D5AAFF",
    lightPurple: "#ECD4FF",
    lilac: "#DCD3FF",
    periwinkle: "#A79AFF",
    lightBlue: "#AFCBFF",
    aqua: "#AFF8DB",
    lightAqua: "#C4FAF8",
    sky: "#85E3FF",
    ocean: "#6EB5FF",
    mintGreen: "#BFFCC6",
    paleGreen: "#DBFFD6",
    ivory: "#FFFFD1",
    blush: "#FFC9DE",
    coral: "#FFABAB",
    peach: "#FFEBBC",
    softYellow: "#FFF5BA",
  };

  function getRandomPastelColor() {
    const keys = Object.keys(pastelColors);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return pastelColors[randomKey];
  }

  const albums = [
    {
      name: "Blabla",
      albumCover: "https://i.scdn.co/image/ab67616d0000b273db24b29159c900a3822efa84",
      context: "Chill mix",
      color: getRandomPastelColor(),
      idArtist: {
        name: [
          "Billie Eillish",
          "Kendrick Lamar",
          "Katy Perry",
          "XXXTentacion",
        ],
      },
    },
    {
      name: "Blabla",
      albumCover: "https://preview.redd.it/billie-eilish-shooting-the-album-cover-for-hit-me-hard-and-v0-4hs2acpimm1f1.jpeg?width=1000&format=pjpg&auto=webp&s=523536732141eb1e815a1268c8591e955e64e44a",
      context: "Sad mix",
      color: getRandomPastelColor(),
      idArtist: {
        name: [
          "Regina Spektor",
          "Nirvana",
          "Sleeping At Last",
          "Lord Huron",
        ],
      },
    },
    {
      name: "Blabla",
      albumCover: "https://dims.apnews.com/dims4/default/3a7ac7b/2147483647/strip/false/crop/3000x3000+0+0/resize/1486x1486!/quality/90/?url=https%3A%2F%2Fstorage.googleapis.com%2Fafs-prod%2Fmedia%2Fa6ebbda01ffa4f13ba319910bd652849%2F3000.jpeg",
      context: "Focus mix",
      color: getRandomPastelColor(),
      idArtist: {
        name: [
            "Tom odell",
            "Twenty One Pilots",
            "AJR",
            "Miniature Tigers"
        ],
      },
    },
  ];
  return (
    <div className="albums overflow-x-auto scrollbar-hide">
      <ul className="flex space-x-2 w-max">
        
        {albums && albums.length > 0 ? (
          albums.map((album, index) => (
            <li
  key={index}
  //   onClick={() => handleAlbumChange(album)}
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
        style={{ background: album.color }}
        className={`absolute font-inter text-sm text-black font-extrabold tracking-widest size-5 w-full shadow-black/60 shadow-md bottom-4 ease-in-out duration-300 transform flex items-center justify-center z-20`}
      >
        <p
          className="truncate "
          style={{ textShadow: "2px 2px 6px rgba(0, 1, 1, 0.5)" }}
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

export default MadeFor;
