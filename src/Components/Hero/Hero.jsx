import React from 'react'
import './hero.css'
import hand_icon from '../Assets/hand-icon.svg'
import hero_image from '../Assets/hero.png'
import right_arrow_icon from '../Assets/right-icon.png'

const Hero = () => {
   return (
      <div className='hero'>
         <div className='hero-left'>
            <img src={hero_image} alt="screaming woman" />
         </div>
         <div className='hero-right'>
            <h3 className='subtitle'>NEW ARRIVALS ONLY</h3>
            <div>

               <h1 className='main-title'>
                  <div className="hand-icon">
                     <p className='main-title'>new</p>
                     <img src={hand_icon} alt="hand icon" />
                  </div>
                  collections <br /> for everyone</h1>
            </div>
            <div className="hero-latest-btn btn">
               <div>Latest Collection</div>
               <img src={right_arrow_icon} alt="right arrow" />
            </div>
         </div>

      </div>
   )
}

export default Hero
