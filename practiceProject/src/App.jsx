import FirstComponent from "./components/FirstComponent"
import ExapmleRafce from "./components/ExapmleRafce"
import CustomerDetails, { CustomerName } from "./components/Nested"
import './App.css'
import PropsEmployee from "./components/Props"
import Destructuring from "./components/Destructuring"
import Destructuring2 from "./components/Destructuring2"
function App() {

  return (
    <>
      <FirstComponent />
      <ExapmleRafce/>
      <CustomerDetails/>
      <CustomerName/>
      <PropsEmployee name="Rohith" age="20" city="Bengaluru"/>
      <Destructuring name="manu" age="21"/>
      <Destructuring2 name="Sai" age="22" city="Hassan"  />
    </>
  )
}

export default App
