import SideBar from "./SideBar";
import SectionContent from "./SectionContent";
import { HomeSectionProvider } from "./Contexts/HomeContext";

function middlePageInfo() {
    return (
      <>
      <div className="flex">
      <SideBar/>
      <SectionContent/>
      </div>
      </>   
    );
  }
  
  export default middlePageInfo;
  