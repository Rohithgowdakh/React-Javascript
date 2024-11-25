import { BrowserRouter, Route, Routes } from "react-router-dom"
import DisplayMaterialDetails from "./components/DisplayMaterialDetails"
import DisplayMaterials from "./components/DisplayMaterials"
import HomePage from "./pages/HomePage"
import FooterComponent from "./components/FooterComponent"
import NavBarComponent from "./components/NavBarComponents"
import './App.css'
import AddMaterials from "./components/AddMaterials"

function App() {
  

  return (
    <>
    <BrowserRouter>
    <NavBarComponent />
      <Routes>
          
          <Route path='/home' element={<HomePage />} ></Route>
          <Route path='/material' element={<DisplayMaterials/>} ></Route>
          <Route path='/materialDetail' element={<DisplayMaterialDetails/>} ></Route>
          <Route path='/addmaterial' element={<AddMaterials/>} ></Route>
      </Routes>
      <FooterComponent/>
    </BrowserRouter>
  </>
  )
}

export default App
