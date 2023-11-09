import Navbar from "./components/Navbar/Navbar";
import './App.css'
import Intro from "./components/Navbar/Intro/Intro";
import FloatingDiv from "./components/FloatingDiv/FloatingDiv";
import Services from "./components/Services/Services";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/Contact-form/Contact";
import Footer from "./components/Footer/Footer";
import { themeContest } from "./Context";
import { useContext } from "react";
function App() {
  const theme = useContext(themeContest);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
      style={{
        background : darkMode? 'black': '',
        color : darkMode? 'white': '',
      }}
    >
      <Navbar/>
      <Intro/>
      <FloatingDiv/>
      <Services/>
      <Experience/>
      <Works/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
