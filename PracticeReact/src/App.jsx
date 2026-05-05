import { useState } from 'react'
import ProductCard from './component/ProductCard'
import Likebutton from './component/Likebutton'
function App( ) {
  const [count, setCount] = useState(0)

  return (
    <>
    <div style={{maxWidth:"800px", margin:"auto",padding:"20px",}}>
      <h1>Product List</h1>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",gap:"16px"}}>
      <ProductCard name="Laptop" price={15000} inStock={true}/>
      <ProductCard name="Laptop" price={15000} inStock={false}/>
      <ProductCard name="Mouse" price={500} inStock={true}/>
      <ProductCard name="Monitor" price={3000} inStock={false}/>
      <ProductCard name="Keyboard" price={800} inStock={true}/>
      </div>
    </div>
    {/* use state practice */}
    <Likebutton/>
    </>
  )
}

export default App
