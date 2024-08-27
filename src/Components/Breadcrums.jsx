import React from 'react';
import arrow_icon from './Assets/right-icon.png';

const Breadcrums = (props) => {
   const { product } = props;

   return (
      <div className='flex gap-2 items-center mb-10'>
         HOME <img className='size-4' src={arrow_icon} alt="right arrow" /> Shop <img className='size-4' src={arrow_icon} alt="right arrow" /> {product.category} <img className='size-4' src={arrow_icon} alt="right arrow" /> {product.name}
      </div>
   )
}

export default Breadcrums;
