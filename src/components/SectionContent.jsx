import { useSection } from "./Contexts/HomeContext";
import MyProfile from "./sections/MyProfile";
import Home from "./sections/Home";
import ArtistProfile from "./sections/ArtistProfile";
import AlbumSection from "./sections/AlbumSection";
import SearchSection from "./sections/SearchSection";

function SectionContent() {
  const { section } = useSection();

  const sectionsMap = {
    home: <Home />,
    profile: <ArtistProfile />,
    myProfile: <MyProfile />,
    album: <AlbumSection />,
    SearchSection: <SearchSection />,
  };

  // Devuelve el componente correspondiente basado en el valor de `section`
  return sectionsMap[section] || null;
}

export default SectionContent;
