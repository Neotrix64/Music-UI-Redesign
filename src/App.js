import "./input.css";
import NavBar from "./components/NavBar";
import MiddlePageInfo from "./components/MiddlePageInfo";
import MusicFooter from "./components/MusicFooter"
import Theme from './pages/Theme'
import { HomeSectionProvider } from "./components/Contexts/HomeContext";

function App() {
  return (
    <>
      <NavBar />
      <MiddlePageInfo />
      <MusicFooter/>
    </>
  );
}

export default App;
