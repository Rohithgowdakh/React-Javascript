import FirstComponent from "./components/FirstComponent"
import ExapmleRafce from "./components/ExapmleRafce"
import CustomerDetails, { CustomerName } from "./components/Nested"
import './App.css'
import PropsEmployee from "./components/Props"
import Destructuring from "./components/Destructuring"
import Destructuring2 from "./components/Destructuring2"
import Colors from "./components/Array"
import Colors1 from "./components/ArrayMap"
import StudentDemo from "./components/ObjectRender"
import StudentsDemo1 from "./components/ArrayOfObjects"
import EventDemo1 from "./components/Events"
import EventDemo2 from "./components/UseStateHooks"
import Counter from "./components/Counter"
import ArayInEvent from "./components/ArayInEvent"
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
      <Colors/>
      <Colors1/>
      <StudentDemo/>
      <StudentsDemo1/>
      <EventDemo1/>
      <EventDemo2/>
      <Counter/>
      <ArayInEvent/>
    </>
  )
}

export default App
