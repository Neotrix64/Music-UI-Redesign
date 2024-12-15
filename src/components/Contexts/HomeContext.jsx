import { createContext, useState, useContext } from "react";

const HomeContext = createContext();

export const HomeSectionProvider = ({ children }) =>{
    const [section, setSection] = useState("home");
    return(
        <HomeContext.Provider value ={{section, setSection}}>
            {children}
        </HomeContext.Provider>
    )
}

export const useSection = () => useContext(HomeContext);