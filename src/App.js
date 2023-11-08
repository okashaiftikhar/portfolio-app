import Navbar from "./components/Navbar/Navbar";
import './App.css'
import Intro from "./components/Navbar/Intro/Intro";
import floatingDiv from "./components/FloatingDiv/FloatingDiv";
import Services from "./components/Services/Services";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonials/Testimonial";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <floatingDiv/>
      <Services/>
      <Experience/>
      <Works/>
      <Portfolio/>
      <Testimonial/>
    </div>
  );
}

export default App;
