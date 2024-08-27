import React from 'react';
import yellow_star from './Assets/star-icon.png';
import grey_star from './Assets/grey-star-icon.png';
import RelatedProduct from './RelatedProduct';

const DisplayProducts = (props) => {
   const { product } = props;
   let quantity;
   return (
      <div className='flex'>
         <div className='flex w-6/12'>
            <div className=''>
               <img className='w-3/5 mt-4' src={product.image} alt="product" />
               <img className='w-3/5 mt-4' src={product.image} alt="product" />
               <img className='w-3/5 mt-4' src={product.image} alt="product" />
               <img className='w-3/5 mt-4' src={product.image} alt="product" />
            </div>
            <img className='w-4/5' src={product.image} alt="product" />
         </div>

         <div className='flex flex-col ml-10 w-5/12'>
            <h2 className='title'>{product.name}</h2>
            <div className='flex gap-2 items-center'>
               <img className='w-[25px] h-[25px] mt-5 mb-5' src={yellow_star} alt="" />
               <img className='w-[25px] h-[25px] mt-5 mb-5' src={yellow_star} alt="" />
               <img className='w-[25px] h-[25px] mt-5 mb-5' src={yellow_star} alt="" />
               <img className='w-[25px] h-[25px] mt-5 mb-5' src={yellow_star} alt="" />
               <img className='w-[25px] h-[25px] mt-5 mb-5' src={grey_star} alt="" />
               <span>122</span>
            </div>

            <div className='flex mb-10 gap-10'>
               <p className='text-xl font-semibold line-through text-slate-400'>{product.old_price} €</p>
               <p className='text-xl font-semibold text-red-500 '>{product.new_price} €</p>

            </div>

            <div className='mb-10'>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores blanditiis ducimus facilis hic repudiandae a obcaecati vel voluptatibus explicabo sapiente, delectus incidunt, omnis enim, nobis provident error nostrum. Quasi omnis, nisi repellendus numquam perferendis error molestiae culpa ea magni beatae, minima provident maiores pariatur laboriosam impedit reiciendis repudiandae! Repellendus, esse?
            </div>

            <div className='flex flex-col gap-2 text-lg'>
               <p className=''>Pasirinkite parametrus:</p>
               <label className='font-medium' htmlFor="size">Dydis:</label>
               <select className='bg-slate-100 p-2 ' name="size" id="size">
                  <option value="s">S</option>
                  <option value="m">M</option>
                  <option value="l">L</option>
                  <option value="lxl">XL</option>
               </select>
               <label className='font-medium' htmlFor="quantity">Kiekis:</label>
               <input className='bg-slate-100 p-2 mb-10' type="number" value={quantity} />
            </div>

            <div className='flex flex-col gap-5 text-lg'>
               <p className='font-bold text-2xl'>Total:</p>

               <button className='bg-[#ff4141] text-white font-semibold py-5 mt-10 text-lg'>Add to cart</button>
            </div>
         </div>
      </div>
   )
}

export default DisplayProducts
