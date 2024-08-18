import React from 'react'
import './newCollections.css'
import new_collections from '../Assets/new-collections'
import Item from '../Item/Item'

const NewCollections = () => {
   return (
      <div className='newcollections'>
         <h2 className='title'>New Collections</h2>
         <hr />

         <div className="collection">
            {new_collections.map((item, i) => {
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

export default NewCollections
