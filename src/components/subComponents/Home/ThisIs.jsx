import React from 'react';

  const gradientColors = [
    "from-purple-600 to-blue-600",
    "from-pink-500 to-rose-500",
    "from-green-500 to-teal-500",
    "from-orange-500 to-red-500",
    "from-indigo-500 to-purple-500",
    "from-yellow-400 to-orange-500",
    "from-cyan-500 to-blue-500",
    "from-emerald-500 to-green-500",
  ];

  function getRandomGradient() {
    return gradientColors[Math.floor(Math.random() * gradientColors.length)];
  }

  const thisIsAlbums = [
    {
      name: "This is: Bad Bunny",
      artistImage: "https://media.revistagq.com/photos/5fc0cb787e8773c13e83a61e/16:9/w_2560%2Cc_limit/GettyImages-1280266077.jpg",
      description: "Sus mejores éxitos, todo Bad Bunny.",
      gradient: getRandomGradient(),
      artist: "Bad Bunny",
    },
    {
      name: "This is: Taylor Swift",
      artistImage: "https://www.hola.com/horizon/square/d426f1112bba-gettyimages-1986381340-retocada.jpg",
      description: "Sus mejores éxitos, todo Taylor Swift.",
      gradient: getRandomGradient(),
      artist: "Taylor Swift",
    },
    {
      name: "This is: The Weeknd",
      artistImage: "https://i.scdn.co/image/ab6761610000e5eb214f3cf1cbe7139c1e26ffbb",
      description: "Sus mejores éxitos, todo The Weeknd.",
      gradient: getRandomGradient(),
      artist: "The Weeknd",
    },
    {
      name: "This is: Billie Eilish",
      artistImage: "https://media.losandes.com.ar/p/097aa8193b70c9b4f9d24e4f907cf11c/adjuntos/368/imagenes/100/026/0100026901/1000x0/smart/billie-eilish-cambio-su-configuracion-instagram-y-sorprendio-todos.jpeg",
      description: "Sus mejores éxitos, todo Billie Eilish.",
      gradient: getRandomGradient(),
      artist: "Billie Eilish",
    },
    {
      name: "This is: Drake",
      artistImage: "https://i.scdn.co/image/ab6761610000e5eb4293385d324db8558179afd9",
      description: "Sus mejores éxitos, todo Drake.",
      gradient: getRandomGradient(),
      artist: "Drake",
    },
    {
      name: "This is: Sub urban",
      artistImage: "https://66.media.tumblr.com/e93e5664670e832a3507d1d1e72c9051/695553091372e388-9d/s540x810/11014deec266c222b211c99c4c033b03dd3dd68d.png",
      description: "Sus mejores éxitos, todo Sub urban.",
      gradient: getRandomGradient(),
      artist: "Sub urban",
    }
  ];

function ThisIs() {

  return (
    <div className="thisIs overflow-x-auto scrollbar-hide">
      <ul className="flex space-x-2 w-max">
        {thisIsAlbums && thisIsAlbums.length > 0 ? (
          thisIsAlbums.map((album, index) => (
            <li
              key={index}
              className="ml-5 hover:bg-[#202020] group w-48 p-4 rounded-md cursor-pointer duration-500 ease-in-out"
            >
              <div className="flex flex-col items-center">
                <div className="relative">
                  {/* Contenedor del gradiente y la imagen */}
                  <div className={`size-40 rounded-lg shadow-black/80 shadow-lg bg-gradient-to-br ${album.gradient} flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute top-3 left-3 z-20">
                      <div className="bg-black text-white px-2 py-1 rounded text-xs font-bold flex items-center space-x-1">   
                        <span>THIS IS</span>
                      </div>
                    </div>
                    
                    {/* Imagen del artista */}
                    <img
                      src={album.artistImage}
                      alt={album.artist}
                      className="w-40 h-40 object-cover rounded-full border-4 border-white/20"
                    />
                  </div>

                  {/* Botón de play */}
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

                {/* Información del álbum */}
                <div className="ml-2 mt-2 w-full">
                  <h3 className="text-white font-semibold text-sm truncate mb-1">
                    {album.name}
                  </h3>
                  <p className="text-white/70 text-xs leading-relaxed">
                    {album.description}
                  </p>
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

export default ThisIs;