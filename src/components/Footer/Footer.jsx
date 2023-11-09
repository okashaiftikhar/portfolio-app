import React from 'react'
import './Footer.css'
import wave from '../../img/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Whatsapp from '@iconscout/react-unicons/icons/uil-whatsapp'

const Footer = () => {
  return (
    <div className="footer">
        <img src={wave} alt="" style={{width: '100%'}} />
        <div className="f-content">
            <span>muhammadokashaiftikhar@outlook.com</span>
            <div className="f-icons">
                <a href="https://api.whatsapp.com/send/?phone=971561964214&text&type=phone_number&app_absent=0"><Whatsapp color='white' size='3rem'/></a>
                <a href="https://www.facebook.com/profile.php?id=100009961113772"><Facebook color='white' size='3rem'/></a>
                <a href="https://github.com/okashaiftikhar"><Github color='white' size='3rem'/></a>
            </div>
        </div>
    </div>
  )
}

export default Footer