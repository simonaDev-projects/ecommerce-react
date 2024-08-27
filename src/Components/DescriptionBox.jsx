import React from 'react'

const DescriptionBox = (props) => {
   const { product } = props;
   return (
      <div className='mt-10 '>
         <div className='mt-2'>
            <span className='border-solid border-2 border-neutral-200 p-2 text-xl'>Description</span>
            <span className='border-solid border-2 border-neutral-200 p-2 text-xl'>Reviews: 122</span>
         </div>

         <div className='mt-3 border-solid border-2 border-neutral-200 py-5 px-2'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt consectetur optio quisquam ratione, illo deserunt aliquam facilis voluptate esse velit!</p>
            <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id unde quia autem aperiam iusto error aliquid, porro consectetur. Repellendus iste magnam, perspiciatis veniam aspernatur a, est animi natus et commodi suscipit reprehenderit sit. Quia corporis animi hic tempore. Numquam quis nihil asperiores laudantium nam blanditiis, iste inventore aliquam consequatur voluptates!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita hic rem, illum error delectus eius.
            </p>
         </div>
      </div>
   )
}

export default DescriptionBox
