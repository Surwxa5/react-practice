import React from 'react'

const ProductCard = ({name,price,inStock}) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{price}</p>
      <p>{inStock?<span className='green'>In Stock</span> : <span className='red'>Out of Stock</span>}</p>
    </div>
  )
}

export default ProductCard
