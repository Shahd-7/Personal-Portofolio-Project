import React from "react"
import Herosection from "./componants/pages/home/Herosection";
import Navbar from "./componants/pages/home/Navbar";
import AboutMe from "./componants/pages/home/AboutMe";
import MySkills from "./componants/pages/home/MySkills";
import MyPortfolio from "./componants/pages/home/MyPortfolio";
import Footer from "./componants/pages/home/Footer";

function App() {
 
  return (
    <div>
      <Herosection/>
      <Navbar/>
      <AboutMe/>
      <MyPortfolio/>
      <MySkills/>
      <Footer/>
      

    </div>

  )
}

export default App
