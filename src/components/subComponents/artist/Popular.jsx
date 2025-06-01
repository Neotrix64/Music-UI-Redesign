import useArtistStore from "../../../store/useAppStore";

function Popular({artist}) {
  const {selectedArtist} = useArtistStore();
  
  return (
    <div className="w-full h-full max-w-screen-lg mx-auto px-4">
      <div className="flex justify-between ml-10">
        <div className="tracks-list space-y-2 w-[60%]">
          <h3 className="text-2xl font-bold mb-4 mt-20">Popular Releases</h3>
          <p className="text-white/70 mb-6">Based on what people loves</p>

          <div className="space-y-2">
            <div className="track-item flex items-center p-2 hover:bg-white/5 rounded-md cursor-pointer">
              <img
                src="/api/placeholder/40/40"
                alt="Recommended song"
                className="h-10 w-10 rounded mr-3"
              />
              <div className="flex-1">
                <div className="font-medium">Test Song 1</div>
                <div className="text-sm text-white/50">Artist Name</div>
              </div>
              <button className="text-white/70 hover:text-white p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </button>
            </div>

            <div className="track-item flex items-center p-2 hover:bg-white/5 rounded-md cursor-pointer">
              <img
                src="/api/placeholder/40/40"
                alt="Recommended song"
                className="h-10 w-10 rounded mr-3"
              />
              <div className="flex-1">
                <div className="font-medium">Test Song 1</div>
                <div className="text-sm text-white/50">Artist Name</div>
              </div>
              <button className="text-white/70 hover:text-white p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </button>
            </div>

            <div className="track-item flex items-center p-2 hover:bg-white/5 rounded-md cursor-pointer">
              <img
                src="/api/placeholder/40/40"
                alt="Recommended song"
                className="h-10 w-10 rounded mr-3"
              />
              <div className="flex-1">
                <div className="font-medium">Test Song 1</div>
                <div className="text-sm text-white/50">Artist Name</div>
              </div>
              <button className="text-white/70 hover:text-white p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </button>
            </div>

            <div className="track-item flex items-center p-2 hover:bg-white/5 rounded-md cursor-pointer">
              <img
                src="/api/placeholder/40/40"
                alt="Recommended song"
                className="h-10 w-10 rounded mr-3"
              />
              <div className="flex-1">
                <div className="font-medium">Test Song 1</div>
                <div className="text-sm text-white/50">Artist Name</div>
              </div>
              <button className="text-white/70 hover:text-white p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </button>
            </div>

            <div className="track-item flex items-center p-2 hover:bg-white/5 rounded-md cursor-pointer">
              <img
                src="/api/placeholder/40/40"
                alt="Recommended song"
                className="h-10 w-10 rounded mr-3"
              />
              <div className="flex-1">
                <div className="font-medium">Test Song 1</div>
                <div className="text-sm text-white/50">Artist Name</div>
              </div>
              <button className="text-white/70 hover:text-white p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="mr-10 flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-4 mt-20">Most Popular Album</h3>
          <div className="relative">
            <div className="h-56 w-96 rounded-md bg-gray-500 hover:scale-110 ease-in-out duration-500 cursor-pointer">
              <div className="absolute bottom-10 translate-x-5 font-semibold text-xl">
                Album Name Here
              </div>
              <div className="absolute bottom-5 translate-x-5 font-semibold text-base text-white/60">
                Artist Name Here
              </div>
            </div>

            <div className="absolute albums overflow-x-auto scrollbar-hide">
          <ul className="flex ">
            <div className="size-24 mt-3 rounded-md bg-gray-500 hover:scale-110 ease-in-out duration-500 cursor-pointer"></div>

            <div className="size-24 mt-3 rounded-md bg-gray-500 hover:scale-110 ease-in-out duration-500 cursor-pointer"></div>

            <div className="size-24 mt-3 rounded-md bg-gray-500 hover:scale-110 ease-in-out duration-500 cursor-pointer"></div>

            <div className="size-24 mt-3 rounded-md bg-gray-500 hover:scale-110 ease-in-out duration-500 cursor-pointer"></div>

            <div className="size-24 mt-3 rounded-md bg-gray-500 hover:scale-110 ease-in-out duration-500 cursor-pointer"></div>
          </ul>
          </div>
          </div>


        </div>
      </div>
      <div className="see more flex justify-center my-5 ">
        <h3 className="text-base font-bold cursor-pointer text-white/60 hover:text-white duration-500">
          See more
        </h3>
      </div>



      <div className="flex justify-center w-full ">
        <div className="size-80  w-screen rounded-md flex bg-white overflow-hidden hover:scale-105 ease-in-out duration-300">
        <img src="https://i.imgur.com/HuIgRO7.png" alt="" className="size-80 w-full object-cover flex" />
        </div>
      </div>

      <div className="flex gap-2">
        <div className="box size-20 rounded-md flex flex-col items-center justify-center shadow-black shadow-md bg-white/10">
        {/* hacer una funcion que abrevie recibiendo un mes ej: Enero y devuelva las 3 primeras siglas o algo similar ENE, Febrero = Feb, mayo: May */}
        <span className="uppercase text-xl font-semibold ">APR</span>
        <span className="uppercase text-xl font-semibold ">19</span>
        </div>
        <div className="content flex flex-col w-48">
          <h4 className="text-xl tracking-widest font-semibold uppercase">Mineapolis</h4>
          <h5 className="text-xs tracking-widest font-semibold uppercase text-ellipsis text-white/80">Grand national tour: kendrick Lamar and Sza</h5>
          <div className="flex gap-2">
            <div className="text-[10px] tracking-widest font-semibold uppercase text-ellipsis text-white/60 cursor-pointer hover:text-white">
              Sat 7:00 PM
            </div>
            <div className="text-[10px] tracking-widest font-semibold uppercase text-ellipsis estadio text-white/60 cursor-pointer hover:text-white">
              Us Bank Stadium
            </div>
          </div>
        </div>
      </div>




    </div>
  );
}

export default Popular;
