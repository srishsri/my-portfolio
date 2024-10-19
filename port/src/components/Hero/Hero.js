import React from 'react';
import "./Hero.css";
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Hero = () => {

    const [text] = useTypewriter({
        words: [ 'Front-end', 'WordPress', 'Shopify', 'Freelance' ],
        loop: {},
    });

    return (
        <div>
            <div className='hero-banner'>
                <div className="hero-mask opacity-8 bg-dark"></div>
                <div className='hero-content'>
                    <h3>Welcome</h3>
                    <h1>I'm <span>{text}</span><Cursor/> Developer.</h1>
                    <p>I am a Frontend developer from Coimbatore , with 5+ years of experience.</p>
                    <div className='hero-buttons'>
                        <a href="#" className='connect-me'> Contact With Me </a>
                        <a href="#" className='hire'> Hire Me </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
