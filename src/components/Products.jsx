import React from 'react'
import  {ApiTopProducts}  from '../apifolder/TopProductsApi'
import Product from './Product'

function Products() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 '>
      {
        ApiTopProducts.map((product, index) =>(
          <Product item={product} key={index} />
        ))
      }
        
      
    </div>


  )
}

export default Products
