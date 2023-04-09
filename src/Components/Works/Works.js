import React from 'react';
import upworks from '../../img/Upwork.png';
import fiver from '../../img/fiverr.png';
import shopify from '../../img/Shopify.png';
import facebook from '../../img/Facebook.png';
import amazon from '../../img/amazon.png';
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
            <div className='w-right'>
                <div className='w-maincircle'>
                    <div className='w-secondcircle'>
                        <img src={upworks} alt='' />
                    </div>
                    <div className='w-secondcircle'>
                        <img src={fiver} alt='' />
                    </div>
                    <div className='w-secondcircle'>
                        <img src={amazon} alt='' />
                    </div>

                    <div className='w-secondcircle'>
                        <img src={shopify} alt='' />
                    </div>
                    <div className='w-secondcircle'>
                        <img src={facebook} alt='' />
                    </div>
                </div>
                <div className='w-bgcircle bluecircle'></div>
                <div className='w-bgcircle yellowcircle'></div>
            </div>
        </div>
    );
};

export default Works;