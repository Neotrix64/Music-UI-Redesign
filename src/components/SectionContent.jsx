import { useSection } from "./Contexts/HomeContext";
import MyProfile from "./sections/MyProfile";
import Home from "./sections/Home";
import ArtistProfile from "./sections/ArtistProfile";
import AlbumSection from "./sections/AlbumSection";
import SearchSection from "./sections/SearchSection";
import PlaylistSection from "./sections/PlaylistSection"

function SectionContent() {
  const { section } = useSection();

  const sectionsMap = {
    home: <Home />,
    profile: <ArtistProfile />,
    myProfile: <MyProfile />,
    album: <AlbumSection />,
    playlist: <PlaylistSection/>,
    SearchSection: <SearchSection />,
  };

  return sectionsMap[section] || null;
}

export default SectionContent;
