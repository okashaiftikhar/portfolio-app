import React from 'react'
import './Portfolio.css'
import sidebar from "../../img/sidebar.png"
import Ecommerce from "../../img/ecommerce.png"
import musicapp from "../../img/musicapp.png"
import hoc from "../../img/hoc.png"
import 'swiper/css'
import {Swiper, SwiperSlide} from 'swiper/react'
import { themeContest } from '../../Context'
import { useContext } from 'react'
const Portfolio = () => {
  const theme = useContext(themeContest);
  const darkMode = theme.state.darkMode;
  return (
   <div className="portfolio" id='Portfolio'>
    {/* heading */}
    <span style={{color: darkMode? 'white': ''}}>Recent Projects</span>
    <span>Portfolio</span>

        {/* slider */}
        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          grabCursor={true}
          className='portfolio-slider'
        >
              <SwiperSlide>
                <img src={sidebar} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Ecommerce} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={musicapp} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={hoc} alt="" />
              </SwiperSlide>
        </Swiper>
   </div>
  )
}

export default Portfolio