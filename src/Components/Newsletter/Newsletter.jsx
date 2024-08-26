import React from 'react';

const Newsletter = () => {
   return (
      <div className='flex flex-col gap-2.5 m-auto items-center w-7/12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 to-blue-500 h-2/5 mt-[5rem] mb-[5rem] px-4 py-4 '>
         <h3 className='text-5xl'>Subscribe to our newsletter</h3>
         <p className='text-2xl'>
            Get exclusive offers and discounts just for you</p>

         <form className='flex gap-8 mt-10'>
            <label htmlFor="email"></label>
            <input className='py-2 px-4 ' type="email" placeholder='Enter your email' />

            <button className='bg-stone-600 text-white py-2 px-3 rounded'>Subscribe</button>
         </form>
      </div >
   )
}

export default Newsletter;
