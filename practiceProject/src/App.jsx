import FirstComponent from "./components/FirstComponent"
import ExapmleRafce from "./components/ExapmleRafce"
import CustomerDetails, { CustomerName } from "./components/Nested"
import './App.css'
import PropsEmployee from "./components/Props"
import Destructuring from "./components/Destructuring"
function App() {

  return (
    <>
      <FirstComponent />
      <ExapmleRafce/>
      <CustomerDetails/>
      <CustomerName/>
      <PropsEmployee name="Rohith" age="20" city="Bengaluru"/>
      <Destructuring name="manu" age="21"/>
    </>
  )
}

export default App
