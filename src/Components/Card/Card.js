import React from 'react';
import './Card.css'

const Card = ({heartemji,heading,details}) => {
    return (
        <div className='card'>
            <img src={heartemji} alt=''/>
            <span>{heading}</span>
            <span>{details}</span>
        </div>
    );
};

export default Card;