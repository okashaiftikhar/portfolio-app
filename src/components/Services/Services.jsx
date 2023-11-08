import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from '../Card/Card'
import Resume from './Resume.pdf'
const Services  = () => {
  return (
    <div className="services">
        {/* left side */}
        <div className="awesome">
            <span>My Awesome</span>
            <span>Services</span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 <br />
                 soluta aliquid eveniet voluptatum expedita minus quos.
                 </span>  
                 <a href={Resume} download>
                  <button className="button s-button">Download CV</button>
                  </a>
                 <div className="blur s-blur" style={{background: "#ABF1FF94"}}></div>
        </div>
        {/* right side */}
        <div className="cards">
                <div style={{left: '14rem' }}>
                  <Card
                    emoji={HeartEmoji}
                    detail={"Figma, Sketch, Photoshop, Adobe"}
                  />
                </div>
                {/* second card */}
                <div style={{ top: "12rem", left:"-4rem"}}>
                  <Card
                    emoji={Glasses}
                    detail={"Html5, CSS3, Javascript, React.js "}
                  />
                </div>
                {/* third card */}
                <div style={{top: "19rem", left:"12rem"}}>
                  <Card 
                    emoji={Humble}
                    detail={"lorem ispum dummy text are usally use in section where it is use as a dummy"}
                  />
                </div>
                <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
        </div>
    </div>
  )
}

export default Services