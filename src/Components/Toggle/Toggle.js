import React from 'react';
import './Toggle.css';
import { UilSun } from '@iconscout/react-unicons';
import { UilMoon } from '@iconscout/react-unicons';
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Toggle = () => {

    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;
    const clickHandle=()=>{
        theme.dispatch({type:"toggle"})
    }

    return (
        <div className='toggle'>
            <UilMoon/>
            <UilSun/>
            <div className='t-button' onClick={clickHandle}
            style={darkMode?{left:"2px"}: {right:"2px"}}>

            </div>

        </div>
    );
};

export default Toggle;