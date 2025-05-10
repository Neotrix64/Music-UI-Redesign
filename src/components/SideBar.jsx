import { Home, Library, Star, User } from 'lucide-react';

function SideBar() {
  return (
    <div className="sidebar text-white bg-[#181818] h-[88vh] w-1/3 rounded-lg mx-2 p-4 flex flex-col justify-between">
      <div>
        {/* Top Navigation */}
        <nav className="mb-6">
          <ul className="space-y-4">
            <li className="flex items-center gap-3 hover:text-green-500 cursor-pointer transition-colors">
              <Home size={20} />
              <span className="text-sm font-medium">Home</span>
            </li>
          </ul>
        </nav>

        {/* Library Section */}
        <div className="border-t border-gray-700 pt-4">
          <div className="flex">
            <h2 className="text-sm font-semibold uppercase text-gray-400 mb-4">My Library</h2>
          </div>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 hover:text-green-500 cursor-pointer transition-colors">
              <User size={20} />
              <span className="text-sm font-medium">Artists</span>
            </li>
            <li className="flex items-center gap-3 hover:text-green-500 cursor-pointer transition-colors">
              <Star size={20} />
              <span className="text-sm font-medium">Pins</span>
            </li>
            <li className="flex items-center gap-3 hover:text-green-500 cursor-pointer transition-colors">
              <Library size={20} />
              <span className="text-sm font-medium">Playlist</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
