import React from 'react'
import './item.css'


const Item = (props) => {
   return (
      <div className='item'>
         <img src={props.image} alt="product image" />

         <div className="item-description">
            <p className='item-title'>{props.name}</p>
            <p className='description'>{props.description}</p>
         </div>

         <div className="item-prices">
            <span className='price item-old-price'>{props.old_price}€</span>
            <span className='price item-new-price'>{props.new_price}€</span>
         </div>

      </div>
   )
}

export default Item
