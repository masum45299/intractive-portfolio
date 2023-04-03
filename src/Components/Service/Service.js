import React from 'react';
import './Service.css';
import heartemji from '../../img/heartemoji.png';
import glasses from '../../img/glasses.png';
import humber from '../../img/humble.png';
import Card from '../Card/Card';

const Service = () => {
    return (
        <div className='service'>
            <div className='left-service'>
                <span>My Awesome</span>
                <span>Service</span>
                <span>Lorem ipsum is a simple dummy text of printing lorem <br/>ipsum is a simple dummy text of printing
                </span>
                <button className='button s-button'>Download CV</button>
                <div className='blur s-blur' style={{background:"#ABF1FF94"}}>
                </div>
            </div>
            <div className='right-service'>
                <Card
                heartemji={heartemji}
                heading={"Desinger"}
                details={"Figma,Sketch,Photoshop,Adobe Photoshop"}
                />
            </div>
        </div>
    );
};

export default Service;