
import './App.css'
import LineChart from './assets/Component/LineChart/LineChart'
// import DaisyNav from './assets/Component/DaisyNav/DaisyNav'
import Navbar from './assets/Component/Navbar/Navbar'
import Phones from './assets/Component/Phones/Phones'
import Priceoptions
 from './assets/Component/Priceoptions/Priceoptions'

function App() {

  return (
    <>
      {/* <h1 className='text-2xl bg-orange-400'>Vite + React</h1>  */}
      {/* <DaisyNav></DaisyNav> */}
      <Navbar></Navbar>
      <Priceoptions></Priceoptions>
      <LineChart></LineChart>
      <Phones></Phones>
    </>
  )
}

export default App
