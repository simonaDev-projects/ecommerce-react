import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import arrow_down from '../Components/Assets/arrow-down.png';
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
   const { all_products } = useContext(ShopContext);
   return (
      <div className='flex flex-col m-auto items-center mt-8'>
         <img className='size-9/12 h-96' src={props.banner} alt="" />

         <div className='w-9/12 flex mt-5 flex justify-between'>
            <p><span className='font-semibold text-lg'>Showing 1-12</span> out of 36 products</p>
            <p className='flex gap-2 items-center'>Sort by <img className='size-5' src={arrow_down} alt="" /> </p>
         </div>

         <div className='grid grid-cols-4 gap-10'>
            {all_products.map((product, i) => {
               if (props.category === product.category) {
                  return (
                     <Item
                        key={i}
                        id={product.i}
                        image={product.image}
                        name={product.name}
                        old_price={product.old_price}
                        new_price={product.new_price}
                     />
                  )
               } else {
                  return null;
               }
            })}
         </div>
      </div>
   )
}

export default ShopCategory
