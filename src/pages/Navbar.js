import { useContext } from "react";
import { NavLink } from "react-router-dom";
import {ThemeContext} from "../contexts/ThemeContext";


const Navbar = () => {
    const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);
    const theme = isLightTheme ? lightTheme : darkTheme;

    return (  
        <nav className="navbar" style={{background: theme.bg, color: theme.syntax}}>
            <h1>The Dojo Blog</h1>
            <div className="links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="create">New Blog</NavLink>
                <NavLink to="about">About us</NavLink>
                <NavLink to="help">Help</NavLink>
                <NavLink to="careers">Careers</NavLink>
                <NavLink to="theme">Toggle Theme</NavLink>
            </div>
        </nav>
    );
}
 
export default Navbar; 