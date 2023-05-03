import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import sideBar from '../../img/sidebar.png';
import ecommerce from '../../img/ecommerce.png';
import Hoc from '../../img/hoc.png';
import MusicApp from '../../img/musicapp.png';
import 'swiper/css';

import './Portfolio.css'


const Portfolio = () => {
    const slideimages=[
        {id:1,
         img:sideBar
        },
        {id:2,
         img:ecommerce
        },
        {id:3,
         img:Hoc
        },
        {id:4,
         img:MusicApp
        },
    ]
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
                {/* try another */}
                {slideimages.map(slideimage=><SwiperSlide
                id={slideimage.id}>
                    <img src={slideimage.img} alt=''/>
                </SwiperSlide>)}
            </Swiper>

       </div>
    );
};

export default Portfolio;