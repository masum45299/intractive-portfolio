import React from 'react';
import wave from '../../img/wave.png'
import './Footer.css';
import { UilInstagram } from '@iconscout/react-unicons';
import { UilFacebookF } from '@iconscout/react-unicons';
import { UilGithub } from '@iconscout/react-unicons';
import './Footer.css'


const Footer = () => {
    return (
        <div className='footer'>
            <img src={wave} style={{width:"100%"}} alt=''/>
            <div className='f-content'>
            <span>masum459299@gmail.com</span>
            <div className='f-icons'>
                <UilInstagram color="white" size="3rem"/>
                <UilFacebookF color="white" size="3rem"/>
                <UilGithub color="white" size="3rem"/>
            </div>
            </div>

        </div>
    );
};

export default Footer;