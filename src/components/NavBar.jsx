function NavBar() {
  return (
    <nav className="flex justify-between text-white p-5 ">
      <div className="logo flex gap-2 text-xl">
        <img
          src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/spotify-white-icon.png"
          alt=""
          className="size-9"
        />
        <p>Spotify</p>
      </div>
      <div className="searchBar flex gap-5 text-white">
        <div className="innerImg relative group">
          <div className="grayHover absolute -top-1 -left-1 w-11 h-11 rounded-full -z-10 bg-white/10 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></div>
          <a href="">
            <img
              src="https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=689576991239114&height=300&width=300&ext=1735609155&hash=AbY31jEja-YXeJpGGDc2IyVB"
              alt=""
              className="size-9 rounded-full before:bg-black"
            />
          </a>
        </div>
        <input
          type="text"
          className="rounded-3xl pl-5 w-96 pr-5 bg-white/10 tracking-wider hover:bg-white/20 ease-in-out duration-700 focus:bg-white/20 placeholder:text-white"
          placeholder="Search"
        />
      </div>
      <div className="boton flex gap-5">
        <button className="rounded-3xl font-medium ">Install App</button>
        <button className="bg-white text-black px-4 py-2 rounded-3xl font-medium">
          Explore Premium
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
