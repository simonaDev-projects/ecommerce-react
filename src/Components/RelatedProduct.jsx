import React from 'react';
import data_products from './Assets/data';
import Item from './Item/Item';


const RelatedProduct = () => {
   return (
      <div className='flex gap-10 mt-10'>
         {data_products.map((product, i) => {
            return (
               <Item
                  key={i}
                  id={product.id}
                  image={product.image}
                  name={product.name}
                  old_price={product.old_price}
                  new_price={product.new_price}
               />
            )

         })}
      </div>
   )
}

export default RelatedProduct
