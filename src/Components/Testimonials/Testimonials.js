import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import profilePic1 from '../../img/profile1.jpg';
import profilePic2 from '../../img/profile2.jpg';
import profilePic3 from '../../img/profile3.jpg';
import profilePic4 from '../../img/profile4.jpg';
import {Pagination} from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css'

import './Testimonials.css'

const Testimonials = () => {

const clients=[
    {
    id:1,
    img:profilePic1,
    review:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!"
},
    {
    id:2,
    img:profilePic2,
    review:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!"
},
    {
    id:3,
    img:profilePic3,
    review:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!"
},
    {
    id:4,
    img:profilePic4,
    review:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!"
},
]


    return (
        <div className='t-wrapper'>
            <div className='t-heading'>
                <span>Clients always get</span>
                <span>Exceptional work</span>
                <span>from me...</span>
                <div className='blur t-blur1' style={{background:"var(--purple)"}}>
                </div>
                <div className='blur t-blur2' style={{background:"var(--skyblue)"}}>
                </div>

                {/* slider */}
                <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{clickable:true}}
                >
                  {clients.map((client,index)=>{
                    return(
                        <SwiperSlide
                        key={index}
                        >
                        <img src={client.img} alt=''/>
                        <span>{client.review}</span>
                        </SwiperSlide>
                    )
                  })}
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;