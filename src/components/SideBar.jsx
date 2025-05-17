import { Home, Library, Star, User } from 'lucide-react';

function SideBar() {
  return (
    <div className="sidebar text-white bg-[#0d0d0d] h-[88vh] w-1/4 rounded-lg mx-2 p-4 flex flex-col justify-between overflow-y-auto scrollbar-hide">
      <div className='w-full'>
        <nav className="mb-6">
          <ul className="space-y-4 w-[100%]">
            <li className="flex w-full items-center gap-3 hover:text-green-500 cursor-pointer transition-colors">
              <h2 className="text-sm font-semibold uppercase text-gray-200 mb-4">Menu</h2>
            </li>
          </ul>
          <ul className="space-y-4">
            <li className="flex w-full items-center gap-3 hover:text-green-500 cursor-pointer transition-colors border-r-2 border-transparent hover:border-green-500">
              <User size={20} />
              <span className="text-sm font-medium">Discover</span>
            </li>
            <li className="flex w-full items-center gap-3 hover:text-green-500 cursor-pointer transition-colors border-r-2 border-transparent hover:border-green-500">
              <Star size={20} />
              <span className="text-sm font-medium">Podcasts</span>
            </li>
            <li className="flex w-full items-center gap-3 hover:text-green-500 cursor-pointer transition-colors border-r-2 border-transparent hover:border-green-500">
              <Library size={20} />
              <span className="text-sm font-medium">Playlist</span>
            </li>
          </ul>
        </nav>

        {/* Library Section */}
        <div className="pt-0 ">
          <div className="">
            <h2 className="text-sm font-semibold uppercase text-gray-200 mb-4">Library</h2>
            <div className="md -mt-2 mb-2 filtros">
              {/* <button className='p-1 text-sm font-semibold rounded-full w-16 bg-black/40 border-2 border-white'></button> */}
            </div>
          </div>
          <ul className="space-y-4">
            <li className='flex cursor-pointer group/picture'>
              <div className="relative size-12 bg-black rounded-lg">
                <img src="https://i.pinimg.com/736x/3e/52/cf/3e52cfded3494a799836b3b88b8c127c.jpg" className='group-hover/picture:opacity-30 duration-500 ease-in-out size-12 rounded-lg' alt="" />
                <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-8 h-8 fill-white opacity-0 group-hover/picture:opacity-100 ease-in-out duration-500 absolute z-10 top-2 left-2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
              </div>
              <div className="flex flex-col ml-2 w-[75%] truncate">
                <p className='text-xs font-semibold group-hover/picture:text-green-400 ease-in-out duration-500'>ꜱᴏ ꜱᴀᴠᴇ ᴛʜᴀᴛ ʜᴇᴀʀᴛ ꜰᴏʀ ᴍᴇ, 'ᴄᴜᴢ ɢɪʀʟ ʏ'ᴋɴᴏᴡ ᴛʜᴀᴛ ᴜ'ʀᴇ ᴍʏ ᴅᴇꜱᴛɪɴʏ</p>
                <h3 className='text-xs text-white/60'>NeoDev - Playlist</h3>
                <h3 className='text-xs text-white/30'>Music for a car Drive</h3>
              </div>
            </li>



            <li className='flex'>
              <img src="https://i.pinimg.com/736x/3e/52/cf/3e52cfded3494a799836b3b88b8c127c.jpg" className='bg-white size-12 rounded-lg' alt="" />
              <div className="flex flex-col ml-2 w-[75%] truncate">
                <p className='text-xs font-semibold'>ꜱᴏ ꜱᴀᴠᴇ ᴛʜᴀᴛ ʜᴇᴀʀᴛ ꜰᴏʀ ᴍᴇ, 'ᴄᴜᴢ ɢɪʀʟ ʏ'ᴋɴᴏᴡ ᴛʜᴀᴛ ᴜ'ʀᴇ ᴍʏ ᴅᴇꜱᴛɪɴʏ</p>
                <h3 className='text-xs text-white/60'>NeoDev - Playlist</h3>
                <h3 className='text-xs text-white/30'>Music for a car Drive</h3>
              </div>
            </li>


            <li className='flex'>
              <img src="https://i.pinimg.com/736x/3e/52/cf/3e52cfded3494a799836b3b88b8c127c.jpg" className='bg-white size-12 rounded-lg' alt="" />
              <div className="flex flex-col ml-2 w-[75%] truncate">
                <p className='text-xs font-semibold'>ꜱᴏ ꜱᴀᴠᴇ ᴛʜᴀᴛ ʜᴇᴀʀᴛ ꜰᴏʀ ᴍᴇ, 'ᴄᴜᴢ ɢɪʀʟ ʏ'ᴋɴᴏᴡ ᴛʜᴀᴛ ᴜ'ʀᴇ ᴍʏ ᴅᴇꜱᴛɪɴʏ</p>
                <h3 className='text-xs text-white/60'>NeoDev - Playlist</h3>
                <h3 className='text-xs text-white/30'>Music for a car Drive</h3>
              </div>
            </li>


            <li className='flex'>
              <img src="https://i.pinimg.com/736x/3e/52/cf/3e52cfded3494a799836b3b88b8c127c.jpg" className='bg-white size-12 rounded-lg' alt="" />
              <div className="flex flex-col ml-2 w-[75%] truncate">
                <p className='text-xs font-semibold'>ꜱᴏ ꜱᴀᴠᴇ ᴛʜᴀᴛ ʜᴇᴀʀᴛ ꜰᴏʀ ᴍᴇ, 'ᴄᴜᴢ ɢɪʀʟ ʏ'ᴋɴᴏᴡ ᴛʜᴀᴛ ᴜ'ʀᴇ ᴍʏ ᴅᴇꜱᴛɪɴʏ</p>
                <h3 className='text-xs text-white/60'>NeoDev - Playlist</h3>
                <h3 className='text-xs text-white/30'>Music for a car Drive</h3>
              </div>
            </li>


            <li className='flex'>
              <img src="https://i.pinimg.com/736x/3e/52/cf/3e52cfded3494a799836b3b88b8c127c.jpg" className='bg-white size-12 rounded-lg' alt="" />
              <div className="flex flex-col ml-2 w-[75%] truncate">
                <p className='text-xs font-semibold'>ꜱᴏ ꜱᴀᴠᴇ ᴛʜᴀᴛ ʜᴇᴀʀᴛ ꜰᴏʀ ᴍᴇ, 'ᴄᴜᴢ ɢɪʀʟ ʏ'ᴋɴᴏᴡ ᴛʜᴀᴛ ᴜ'ʀᴇ ᴍʏ ᴅᴇꜱᴛɪɴʏ</p>
                <h3 className='text-xs text-white/60'>NeoDev - Playlist</h3>
                <h3 className='text-xs text-white/30'>Music for a car Drive</h3>
              </div>
            </li>


            <li className='flex'>
              <img src="https://i.pinimg.com/736x/3e/52/cf/3e52cfded3494a799836b3b88b8c127c.jpg" className='bg-white size-12 rounded-lg' alt="" />
              <div className="flex flex-col ml-2 w-[75%] truncate">
                <p className='text-xs font-semibold'>ꜱᴏ ꜱᴀᴠᴇ ᴛʜᴀᴛ ʜᴇᴀʀᴛ ꜰᴏʀ ᴍᴇ, 'ᴄᴜᴢ ɢɪʀʟ ʏ'ᴋɴᴏᴡ ᴛʜᴀᴛ ᴜ'ʀᴇ ᴍʏ ᴅᴇꜱᴛɪɴʏ</p>
                <h3 className='text-xs text-white/60'>NeoDev - Playlist</h3>
                <h3 className='text-xs text-white/30'>Music for a car Drive</h3>
              </div>
            </li>


            <li className='flex'>
              <img src="https://i.pinimg.com/736x/3e/52/cf/3e52cfded3494a799836b3b88b8c127c.jpg" className='bg-white size-12 rounded-lg' alt="" />
              <div className="flex flex-col ml-2 w-[75%] truncate">
                <p className='text-xs font-semibold'>ꜱᴏ ꜱᴀᴠᴇ ᴛʜᴀᴛ ʜᴇᴀʀᴛ ꜰᴏʀ ᴍᴇ, 'ᴄᴜᴢ ɢɪʀʟ ʏ'ᴋɴᴏᴡ ᴛʜᴀᴛ ᴜ'ʀᴇ ᴍʏ ᴅᴇꜱᴛɪɴʏ</p>
                <h3 className='text-xs text-white/60'>NeoDev - Playlist</h3>
                <h3 className='text-xs text-white/30'>Music for a car Drive</h3>
              </div>
            </li>


            <li className='flex'>
              <img src="https://i.pinimg.com/736x/3e/52/cf/3e52cfded3494a799836b3b88b8c127c.jpg" className='bg-white size-12 rounded-lg' alt="" />
              <div className="flex flex-col ml-2 w-[75%] truncate">
                <p className='text-xs font-semibold'>ꜱᴏ ꜱᴀᴠᴇ ᴛʜᴀᴛ ʜᴇᴀʀᴛ ꜰᴏʀ ᴍᴇ, 'ᴄᴜᴢ ɢɪʀʟ ʏ'ᴋɴᴏᴡ ᴛʜᴀᴛ ᴜ'ʀᴇ ᴍʏ ᴅᴇꜱᴛɪɴʏ</p>
                <h3 className='text-xs text-white/60'>NeoDev - Playlist</h3>
                <h3 className='text-xs text-white/30'>Music for a car Drive</h3>
              </div>
            </li>








          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
