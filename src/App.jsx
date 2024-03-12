import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"

const App = () => {
  let x = "These are Conponents."
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
