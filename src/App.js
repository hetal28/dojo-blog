
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from 'react-router-dom';

//pages
import Home from './pages/Home'
import Create from './pages/blogs/create';
import BlogDetails from './pages/blogs/BlogDetail';
import NotFound from './pages/NotFound';
import Update from './pages/blogs/update';
import About from './pages/About';
import Faq from './pages/help/Faq';
import Contact, { contactAction } from './pages/help/Contact';
import CareerDetails, { careerDetailsLoader } from './pages/careers/CareerDetails';
import Careers, { careersLoader } from './pages/careers/Careers';
import CareerError from './pages/careers/CareerError';
import Error from './pages/Error';

//loaders
import { authorLoader } from './Loaders/AuthorLoader';

//layouts
import RootLayout from './layouts/RootLayout';
import HelpLayout from './layouts/HelpLayout';
import CareersLayout from './layouts/CareersLayout';
import ToggleTheme from './components/ToggleTheme';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>} errorElement={<Error/>} >
      <Route index element={<Home />}/>
      <Route path="create" element={<Create/>} loader={authorLoader}/>
      <Route path="blogs/:id" element={<BlogDetails />} />
      <Route path="blogs/update/:id" element={<Update />} loader={authorLoader} />
      <Route path="about" element={<About />} />

      <Route path="help" element={<HelpLayout />} >
        <Route path="faq" element={<Faq/>} /> 
        <Route path="contact" element={<Contact/>} action={contactAction}/>
      </Route>

      <Route path="careers" element={<CareersLayout />} >
        <Route index element={<Careers />} loader={careersLoader} />
        <Route path=":id" element={<CareerDetails />} loader={careerDetailsLoader}/>
      </Route>

      <Route path="theme" element={< ToggleTheme/>}></Route>
      
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {
  return (      
        <RouterProvider router={router} />
  );
}

export default App;
