import React, { useEffect, useState } from 'react';
import Smilylogo from './Smilylogo.jpg'
const netflixLogo='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
const smilyLogo='https://images.app.goo.gl/gTWR52Qgx5sQcyzX7';
function NavBar() {
 const [show, handleShow]=useState();
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
           window.scrollY>150?handleShow(true):handleShow(false)
        });
        return()=>{
            window.removeEventListener('scroll')
        };
    },[])
    return (
        <>
           <div className={`NavBar ${show?"NavBar_bg":null}`}>
               <img className='NavBar_logo1'  src={netflixLogo} alt="netflixLogo"/>
               <img className='NavBar_logo2' src={Smilylogo} alt="smilyLogo"/>
           </div>
        </>
    )
}

export default NavBar
