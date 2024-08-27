import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrums from '../Components/Breadcrums';
import DisplayProducts from '../Components/DisplayProducts';


const Product = () => {
   const { all_products } = useContext(ShopContext);
   const { productId } = useParams();

   const product = all_products.find(item => item.id === Number(productId)) //Surandame konkretu reikiama produkta pagal produkto Id
   return (
      <div className='flex flex-col m-10'>
         <Breadcrums product={product} />
         <DisplayProducts product={product} />
      </div>
   )
}

export default Product
