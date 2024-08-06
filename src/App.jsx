import React from "react";
import Navbar from "../src/Components/Navbar";
import "./index.css";
import Herosection from "./Components/Herosection";
import AboutUs from "./Components/AboutUs";
import Features from "./Components/Features";
import Performance from "./Components/Performance";
import Whyus from "./Components/Whyus";
import OurClients from "./Components/OurClients";
import Events from "./Components/Events";
import Family from "./Components/Family";
import Message from "./Components/Message"
import Footer from "./Components/Footer"
function App() {
  return (
    <div className="App">
      <Navbar />
      <Herosection />
      <AboutUs />
      <Features />
      <Performance />
      <Whyus />
      <OurClients />
      <Events />
      <Family />
      <Message/>
      <Footer/>
    </div>
  );
}

export default App;
