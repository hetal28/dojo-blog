import { useContext } from 'react';
import { ThemeContext, ThemeContextProvider } from '../contexts/ThemeContext';

const ToggleTheme = () => {
    const {toggle} = useContext(ThemeContext);
    return ( 
        <button onClick={toggle}>Toggle Theme</button>
     );
}
 
export default ToggleTheme;