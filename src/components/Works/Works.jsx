import React from 'react'
import './Works.css'
import upwork from "../../img/Upwork.png"
import fiverr from "../../img/fiverr.png"
import amazon from "../../img/amazon.png"
import shopify from "../../img/Shopify.png"
import facebook from "../../img/Facebook.png"
const Works = () => {
  return (
    <div className="works">
    <div className="awesome">
            <span>Works for All These</span>
            <span>Brands & Clients</span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 <br />
                 soluta aliquid eveniet voluptatum expedita minus quos.
                 <br />
                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 <br />
                 soluta aliquid eveniet voluptatum expedita minus quos.
                 </span>
                  <button className="button s-button">Hire me</button>
                 <div className="blur s-blur" style={{background: "#ABF1FF94"}}></div>
        </div>
        {/* right side */}
                <div className="w-right">
                    <div className="w-maincircle">
                        <div className="w-seccircle">
                            <img src={upwork} alt="" />
                        </div>
                        <div className="w-seccircle">
                            <img src={fiverr} alt="" />
                        </div>
                        <div className="w-seccircle">
                            <img src={amazon} alt="" />
                        </div>
                        <div className="w-seccircle">
                            <img src={shopify} alt="" />
                        </div>
                        <div className="w-seccircle">
                            <img src={facebook} alt="" />
                        </div>
                    </div>
                    {/* background circle */}
                    <div className="w-backcircle bluecircle"></div>
                    <div className="w-backcircle yellowcircle"></div>
                </div>
        </div>
  )
}

export default Works