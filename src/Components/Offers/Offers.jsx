import React from 'react'
import './offers.css'
import offers_image from '../Assets/offers.png'

const Offers = () => {
   return (
      <div className='offers'>
         <div className='offers-left-side'>
            <h3 className='subtitle'>Exclussive <br /> Offers For You</h3>

            <p>Only on best sellers products</p>

            <button className='btn'>Check Now</button>
         </div>
         <div className='offers-right-side'>
            <img src={offers_image} alt="" />
         </div>
      </div>
   )
}

export default Offers
