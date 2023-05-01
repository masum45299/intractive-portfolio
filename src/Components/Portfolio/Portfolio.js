import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import sideBar from '../../img/sidebar.png';
import ecommerce from '../../img/ecommerce.png';
import Hoc from '../../img/hoc.png';
import MusicApp from '../../img/musicapp.png';
import 'swiper/css';
import './Portfolio.css'

const Portfolio = () => {
    return (
       <div className='portfolio'>
            {/* Heading */}
            <span>Recent Projects</span>
            <span>Portfolio</span>

            {/* Slider */}
            <Swiper
            spaceBetween={30}
            slidesPerView={3}
            >
                <SwiperSlide>
                    <img src={sideBar} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={ecommerce} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Hoc} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={MusicApp} alt='' />
                </SwiperSlide>
            </Swiper>

       </div>
    );
};

export default Portfolio;