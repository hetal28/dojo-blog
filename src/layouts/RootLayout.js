import { Outlet } from "react-router-dom";
import Navbar from '../pages/Navbar'
import Breadcrumbs from "../components/Breadcrumbs";
import ThemeContextProvider from "../contexts/ThemeContext";

export default function RootLayout() {
  return (
    <div className="content">
      <ThemeContextProvider>
          <Navbar /> 
          <Breadcrumbs />
          <main>
              <Outlet />
          </main>
        </ThemeContextProvider>
    </div>
    
  )
}
