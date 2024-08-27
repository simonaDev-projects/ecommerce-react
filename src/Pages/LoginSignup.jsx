import React from 'react';

const LoginSignup = () => {
   return (
      <div className='w-6/12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-10 flex justify-center items-center m-auto mt-10'>
         <div className=''>
            <h3 className='text-4xl font-semibold'>Sign Up</h3>

            <form className='w-4/5 flex flex-col gap-2 mt-4 '>
               <label htmlFor="username"></label>
               <input className='bg-slate-200 py-3 px-3 text-lg' type="text" placeholder='Enter your Name' />
               <label htmlFor="email"></label>
               <input className='bg-slate-200 py-3 px-3 text-lg' type="email" placeholder='Enter your Email' />
               <label htmlFor="password"></label>
               <input className='bg-slate-200 py-3 px-3 text-lg' type="password" placeholder='Enter your Password' />

               <button className='bg-green-700 py-2 text-white font-semibold text-xl mt-2'>Continue</button>

               <div className='text-lg'>
                  <p className='ml-8 my-2.5'>Already have an Account? <span className='text-white font-semibold cursor-pointer'>Login Here</span></p>
                  <div className='flex items-center '>
                     <label htmlFor="agree"></label>
                     <input type="checkbox" name='agree' id='agree' required />
                     <p className='ml-5'>By continuing, I agree with terms of use and privacy policy.</p>
                  </div>

               </div>

            </form>
         </div>
      </div>
   )
}

export default LoginSignup;
