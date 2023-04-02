import React from 'react';
import './Floting.css';

const Floting = ({img,txt1,txt2}) => {
    return (
        <div className='floting'>
            <img src={img} alt=''/>
            <span>{txt1} <br/>{txt2}</span>
        </div>
    );
};

export default Floting;