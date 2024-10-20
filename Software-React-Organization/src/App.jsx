import { BrowserRouter,Routes,Route } from "react-router-dom"
import NavbarComponent from "./components/NavbarComponent"
import HomeContent from "./components/HomeContent"
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Services from "./pages/Services";
import Home from "./pages/Home";
import Footer from "./components/footer";
function App() {
  return (
    <>
   
    <BrowserRouter>
    <NavbarComponent/>
    <Routes>
      <Route path="/AboutUs" element={<AboutUs/>}></Route>
      <Route path="/ContactUs" element={<ContactUs/>}></Route>
      <Route path="/Services" element={<Services/>}></Route>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Home" element={<Home/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
   
    </>
  )
}

export default App
