import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"

const App = () => {
  let x = "<b>Conponents</b>"
  return (
    <div>
      {x}
      <Banner/>
      <Footer/>
      <Navbar/>
      <Sidebar/>
    </div>
  )
}

export default App
