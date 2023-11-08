import React from 'react'
import './Intro.css'
import github from '../../../img/github.png'
import linkedin from '../../../img/linkedin.png'
import instagram from '../../../img/instagram.png'
import vector1 from '../../../img/Vector1.png'
import vector2 from '../../../img/Vector2.png'
import boy from '../../../img/boy.png'
import thumbup from '../../../img/thumbup.png'
import crown from '../../../img/crown.png'
import glassesimoji from '../../../img/glassesimoji.png'
import FloatingDiv from '../../FloatingDiv/FloatingDiv'
export default function () {
  return (
    <div className='intro'>
        <div className="i-left">
            <div className="i-name">
                <span>Hy! I AM</span>
                <span>Muhammad Okasha</span>
                <span>Frontend Developer with high
                level of Experience in web development 
                and designing, producting the 
                Quality work.</span>
            </div>
            <button className='button i-button'>Hire me</button>
            <div className="i-icons">
                <img src={github} alt="" />
                <img src={linkedin} alt="" />
                <img src={instagram} alt="" />
            </div>
        </div>
        <div className="i-right">
            <img src={vector1} alt="" />
            <img src={vector2} alt="" />
            <img src={boy} alt="" />
            <img src={glassesimoji} alt="" />
            <div style={{top:'-4%', left:'68%'}}>
                <FloatingDiv image={crown} txt1='Web' txt2='Developer'/>
            </div>
            <div style={{top:'18rem', left:'0rem'}}>
                <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award'/>
            </div>
            {/* blurdiv */}
            <div className="blur" style={{background: "rgb (238 210 255)"}}></div>
            <div className="blur" style={{
                background:'#C1F5FF',
                top:'17rem',
                width:'21rem',
                height:'11rem',
                left:'-9rem'
                }}></div>
        </div>
    </div>
  )
}