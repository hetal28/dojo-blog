import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({children}) => {

    const[isLightTheme, setIsLightTheme] = useState(true);
    const[lightTheme, setLightTheme] = useState({
        syntax: '#555',
        ui: '#ddd',
        bg: '#eee'
    });
    const[darkTheme, setDarkTheme] = useState({
        syntax: '#fff',
        ui: '#333',
        bg: '#555'
    });

    const toggleTheme = () => {
        setIsLightTheme(!isLightTheme);
    }

    return ( 
        <ThemeContext.Provider value={{isLightTheme, lightTheme, darkTheme, toggle: toggleTheme}}>
            {children}
        </ThemeContext.Provider>
     );
}
 
export default ThemeContextProvider;
