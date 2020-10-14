import React, { useState,useEffect } from 'react';

const Clock = () =>{
    const [clock,setClock]=useState('00:00:00');
    
const timeUpdate =() => {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();

    setClock(` 
    ${hours < 10 ? `0${hours}` : hours}:
    ${minutes < 10 ? `0${minutes}` : minutes}:
    ${seconds < 10 ? `0${seconds}` : seconds}`);
}

    useEffect(()=>{
        setInterval(timeUpdate,1000)
    },[clock])

    return <div className="clockCon"><h1> {clock}</h1></div>

}

export default Clock;

      