import React from 'react';
import './Works.css'

const Works = () => {
    return (
        <div className='works'>
            <div className='left-service'>
                <span>Works for All these</span>
                <span>Brand & Clients</span>
                <span>Lorem ipsum is a simple dummy text of printing lorem  <br/>ipsum is a simple dummy text of printing printing lorem <br/>Lorem ipsum is a simple dummy text of printing lorem <br/>Lorem ipsum is a simple dummy text of printing lorem
                </span>
                <button className='button s-button'>Download CV</button>
                <div className='blur s-blur' style={{background:"#ABF1FF94"}}>
                </div>
            </div>
        </div>
    );
};

export default Works;