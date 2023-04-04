import React from 'react';
import './Service.css';
import heartemji from '../../img/heartemoji.png';
import glasses from '../../img/glasses.png';
import humber from '../../img/humble.png';
import Card from '../Card/Card';
import Resume from './Masum cv.pdf'

const Service = () => {
    return (
        <div className='service'>
            <div className='left-service'>
                <span>My Awesome</span>
                <span>Service</span>
                <span>Lorem ipsum is a simple dummy text of printing lorem <br/>ipsum is a simple dummy text of printing
                </span>
                <a href={Resume} download><button className='button s-button'>Download CV</button></a>
                <div className='blur s-blur' style={{background:"#ABF1FF94"}}>
                </div>
            </div>
            <div className='right-service'>
                <div style={{left:"14rem"}}>
                    <Card
                    heartemji={heartemji}
                    heading={"Desinger"}
                    details={"Figma,Sketch,Photoshop,Adobe Photoshop"}
                    />
                </div>
                <div style={{top:"-2rem",left:"-4rem"}}>
                    <Card
                    heartemji={glasses}
                    heading={"Developer"}
                    details={"Figma,Sketch,Photoshop,Adobe Photoshop"}
                    />
                </div>
                <div style={{top:"-10rem",left:"15rem"}}>
                    <Card
                    heartemji={humber}
                    heading={"UY/UX"}
                    details={"lorem is a dummy printed text"}
                    />
                </div>
                <div className='blur s-blur2' style={{background:"var(--purple)"}}>
                </div>
            </div>
        </div>
    );
};

export default Service;