import React from 'react';
import './Intro.css';
import github from "../../img/github.png";
import linkId from "../../img/linkedin.png";
import instragram from "../../img/instagram.png";
import vector1 from '../../img/Vector1.png';
import vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import 

const Intro = () => {
    return (
        <div className='intro'>
            <div className='i-left'>
                <div className='i-name'>
                    <span>Hy! I Am</span>
                    <span>MASUM ALI</span>
                    <span>Frontend Developer with high level of experience in web designing and development, producting the Quality work</span>
                </div>
                <button className='button i-button'>Hire me</button>
                <div className='i-icons'>
                    <img src={github} alt=''/>
                    <img src={linkId} alt=''/>
                    <img src={instragram} alt=''/>
                </div>
            </div>
            <div className='i-right'>
                Hey i am the right side
            </div>
        </div>
    );
};

export default Intro;