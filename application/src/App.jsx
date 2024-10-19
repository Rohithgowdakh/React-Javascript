import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Courses from "./pages/Courses"
import Services from "./pages/Services"
import NavbarComponents from "./components/NavbarComponents"
import Contact from "./pages/Contact"

function App() {

  return (
    <>
      <BrowserRouter>
      <NavbarComponents/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Courses" element={<Courses/>}></Route>
        <Route path="/Services" element={<Services/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
        
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
