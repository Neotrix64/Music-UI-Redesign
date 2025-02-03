import { useSection } from "./Contexts/HomeContext";
import MyProfile from "./sections/MyProfile";
import Home from "./sections/Home";
import ArtistProfile from "./sections/ArtistProfile";
import AlbumSection from "./sections/AlbumSection";
import SearchSection from "./sections/SearchSection";

function SectionContent() {
  const { section } = useSection();

  console.log(section)


  if (section === "home") {
    return (
      <Home/>
    );
  }

  if (section === "profile") {
    return (
     <ArtistProfile/>
    );
  }

  // Manejo de otras secciones si es necesario
  if (section === "myProfile") {
    return (
      <MyProfile/>
    );
  }

  if (section === "album") {
    return (
      <AlbumSection/>
    );
  }

  if (section === "SearchSection") {
    return (
      <SearchSection/>
    );
  }
}

export default SectionContent;
