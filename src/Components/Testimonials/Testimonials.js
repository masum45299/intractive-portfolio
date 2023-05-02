import React from 'react';
import profilepic1 from '../../img/profile1.jpg';
import profilepic2 from '../../img/profile2.jpg';
import profilepic3 from '../../img/profile3.jpg';
import profilepic4 from '../../img/profile4.jpg';
import profilepic5 from '../../img/profile5.jpg';
import profilepic6 from '../../img/profile6.jpg';
import './Testimonials.css'
import { Swiper, SwiperSlide,  } from 'swiper/react';
import 'swiper/css/bundle';

import { Pagination } from 'swiper';


const Testimonials = () => {
    const clients=[
        {id:1,
         img:profilepic1,
         review:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?"
        },
        {id:2,
         img:profilepic2,
         review:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?"
        },
        {id:3,
         img:profilepic3,
         review:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?"
        },
        {id:4,
         img:profilepic4,
         review:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?"
        },
        {id:5,
         img:profilepic5,
         review:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?"
        },
        {id:6,
         img:profilepic6,
         review:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?"
        },
    ]
    return (
        <div className='t-wrapper'>
            <div className='t-heading'>
                <span>Clients projects</span>
                <span>clients hire me</span>
                <span>from me...</span>
                <div className='blur t-blur1' style={{backgroundColor:"var(--purple)"}}></div>
                <div className='blur t-blur2' style={{backgroundColor:"var(--purple)"}}></div>
            </div>
            {/* slider */}
            <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{ clickable: true }}
            >
                {
                    clients.map(client=><SwiperSlide
                    id={client.id}>
                        <img src={client.img} alt='' />
                        <span>{client.review}</span>
                    </SwiperSlide>)
                }
            </Swiper>

        </div>
    );
};

export default Testimonials;