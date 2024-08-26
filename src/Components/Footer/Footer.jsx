import React from 'react';
import logo from '../Assets/logo.png';
import fb_icon from '../Assets/fb-icon.png';
import pinterest_icon from '../Assets/pinterest-icon.png';
import yt_icon from '../Assets/youtube-icon.png';
import { Link } from 'react-router-dom';

const Footer = () => {
   return (
      <>
         <hr />
         <div className='flex flex-col items-center gap-4 justify-center m-2.5'>

            <div className='flex items-center gap-2.5 font-semibold text-3xl'>
               <img className='w-[80px]' src={logo} alt="" />
               <p className=''>e-SHOP</p>
            </div>

            <div>
               <div>
                  <ul className='flex gap-8 text-2xl'>
                     <li className='cursor-pointer hover:text-sky-700'>Shop</li>
                     <li className='cursor-pointer hover:text-sky-700'>Mens</li>
                     <li className='cursor-pointer hover:text-sky-700'>Womens</li>
                     <li className='cursor-pointer hover:text-sky-700'>Kids</li>
                  </ul>
               </div>
               <div>
                  <ul className='flex gap-8 mt-2 items-center justify-center mt-10'>
                     <li>
                        <Link to='https://www.facebook.com/people/MR-matoma-reklama/61553965983064/' target='_blank' className='size-10 cursor-pointer'><img src={fb_icon} target='_blank' className='size-10 cursor-pointer' alt="" /></Link>
                     </li>
                     <li>
                        <img className='size-10 cursor-pointer' src={pinterest_icon} alt="" />
                     </li>
                     <li>
                        <img className='size-10 cursor-pointer' src={yt_icon} alt="" />
                     </li>
                  </ul>
               </div>
            </div>
            <hr />
            <div className='text-base'> &copy; Copyright 2024 | visos teisės saugomos</div>
         </div>
      </>
   )
}

export default Footer;
