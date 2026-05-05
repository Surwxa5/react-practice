import React from 'react'

const ProductCard = ({name,price,inStock}) => {
  return (
    <div style={{border:"1px solid black",borderRadius:"8px",padding:"16px",marginLeft:"8px"}}>
      <h1>{name}</h1>
      <p>{price}</p>
    <p>{inStock ? <span style={{color: "green",fontWeight: "bold"}}>In Stock</span>
    : <span style={{ color:"red", fontWeight: "bold"}}>Out of Stock</span>
} 
    </p>
    </div>
  )
}

export default ProductCard
