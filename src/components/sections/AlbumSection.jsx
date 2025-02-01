function AlbumSection(){
    return(
        <div className="text-white bg-[#181818] w-full h-[88vh] rounded-md mr-3 overflow-y-scroll scrollbar-thumb-white/40 scrollbar ">
        <div className="banner w-full bg-gradient-to-b from-[#545454] to-[#2c2c2c] h-60 relative overflow-hidden">
          {/* Imagen de fondo */}
          <img
            src="https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yMjg3MjIxNi9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTc4Njc0NzAzMH0.jJoO2IcUGdrOsRJ3CwI_inIwsZvqap9TNmzV2liTnIo/img.jpg?width=1200&height=600&coordinates=0%2C0%2C0%2C207"
            alt="info section"
            className="relative w-full h-full object cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent backdrop-blur-sm pointer-events-none"></div>

          <div className="content flex gap-6 pl-4 absolute bottom-5 left-4 w-full">
            <img
              src="https://i.scdn.co/image/ab67616d0000b27309545e98d9172b05b28f5c0a"
              alt=""
              className="size-2/12"
            />
            <div className="flex flex-col bottom-0">
              <h2 className="text-5xl font-semibold tracking-wide">
                Thrill seeker
              </h2>
              <h4 className="text-xl text-white/50">
                Thrill Seeker is a character and alter-ego of the north-american
                <br />
                singer and composer Daniel Virgil Maisonneuve,
                <br />
                better known as Sub Urban.
              </h4>
              <button className="bg-green-500 text-white w-1/4 h-1/3 rounded-full mt-3">
                Play
              </button>
            </div>
          </div>
        </div>
        <div className="banner w-full bg-gradient-to-b from-[#181818] to-[#121212] h-full shadow-2xl shadow-black"></div>
      </div>
    );
}

export default AlbumSection;