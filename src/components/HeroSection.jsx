import React from 'react';
import "../stylesheets/herosection.css";
import heroImg from "../assets/download.png";
import float1 from "../assets/download (1).png"
import float2 from "../assets/download (2).png"
import float3 from "../assets/download (3).png"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"


function HeroSection({handleClick}) {

    function ripplesFunc(e) {
        let x = e.pageX - e.target.offsetLeft;
        let y = e.pageY - e.target.offsetTop;

        let color = "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16)

        let ripples = document.createElement("span");

        ripples.style.left = x + "px";
        ripples.style.top = y + "px";
        ripples.style.borderColor = color;

        e.target.appendChild(ripples);

        setTimeout(() => {
            ripples.remove()
        }, 2000)
    }


   

    return (
        <div id="herosection">
            <div className='hero-text'>
                <h2 className="text-4xl">I am Full Stack Developer</h2>
                <p className='text-lg'>Writing code is my passion. I firmly believe in the transformative and enhancing power of programming, and how it can improve the lives of those around the world.</p>
                <div className='hero-buttons'>
                    <span className='hire-me text-lg'onClick={()=>{handleClick(4)}}>Hire Me</span>
                    <Link to="https://drive.google.com/file/d/15PTjIevzlgM8ZExsTf3hpqz0ykQZzPbV/view?usp=share_link"  target="_blank" rel="noopener noreferrer" onClick={ripplesFunc} className='text-lg cv'>Download CV <i className="ri-download-2-line"></i></Link>
                </div>
            </div>
            <div className='hero-img'>
                <motion.span className="float1" animate={{ y: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 3, delay: 0.8 }}><img src={float1} alt="img" /></motion.span>
                <motion.span className="float2" animate={{ y: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}><img src={float2} alt="img" /></motion.span>
                <motion.span className="float3" animate={{ y: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 3, delay: 0.2 }}><img src={float3} alt="img" /></motion.span>
                <img src={heroImg} alt="img" />
            </div>
        </div>
    )
}

export default HeroSection;