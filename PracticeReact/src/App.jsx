import { useState,useEffect} from 'react'
import ProductCard from './component/ProductCard'
import Likebutton from './component/Likebutton'
import Todolist from './component/Todolist'
import UserCard from './component/UserCard'
function App( ) {
  // const [count, setCount] = useState(0)
  const [users,setUsers] = useState([])
  const [loading,setLoading] = usestate(true)
  useEffect(() => {
    async function loadUsers() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await res.json()
        setUsers(data)
        setLoading(false)
      } catch (error) {
        console.log("Failed to load", error)
        setLoading(false)
      }
    }
    loadUsers()
  }, [])
  return (
    <>
    {/* // this is for cards */}
    {/* <div style={{maxWidth:"800px", margin:"auto",padding:"20px",}}>
      <h1>Product List</h1>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",gap:"16px"}}>
      <ProductCard name="Laptop" price={15000} inStock={true}/>
      <ProductCard name="Laptop" price={15000} inStock={false}/>
      <ProductCard name="Mouse" price={500} inStock={true}/>
      <ProductCard name="Monitor" price={3000} inStock={false}/>
      <ProductCard name="Keyboard" price={800} inStock={true}/>
      </div>
    </div> */}
    {/* use state practice */}
    {/* <Likebutton/> */}

    {/* Todo list work */}
    {/* <Todolist/> */}





    {/* user directories */}
    <div>
      <h1>User Directories</h1>
{loading?<p>Loading....</p>:<p>{users.length}user found</p>}
    </div>

    </>
  )
}

export default App
