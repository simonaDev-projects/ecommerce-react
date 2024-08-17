import React from 'react'
import './popular.css'

import data_product from '../Assets/data'
import Item from '../Item/Item'

const Popular = () => {
   return (
      <div className='popular'>

         <h2 className='popular-title title'>POPULAR PRODUCTS</h2>
         <hr />

         <div className="popular-item">
            {data_product.map((item, i) => {
               return (
                  <Item
                     key={i}
                     id={item.id}
                     image={item.image}
                     name={item.name}
                     // description={item.description}
                     old_price={item.old_price}
                     new_price={item.new_price}
                  />
               )

            })}
         </div>
      </div>
   )
}

export default Popular
