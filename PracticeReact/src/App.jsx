import { useState,useEffect} from 'react'
import ProductCard from './component/ProductCard'
import Likebutton from './component/Likebutton'
import Todolist from './component/Todolist'
import UserCard from './component/UserCard'
function App( ) {
  // const [count, setCount] = useState(0)
  const [users,setUsers] = useState([])
  const [loading,setLoading] = useState(true)
  const [search, setSearch] = useState("")
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

  const filtered = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  )
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
    <div style={{maxWidth:"900px",margin:"0 auto", padding:"20px"}}>
      <h1>User Directories</h1>

      <input type='text'value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='Search by name...'/>
{loading?<p>Loading....</p>:<p>{filtered.length} user found</p>}

      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(250px, 1fr))",gap:"16px"}}>

        {filtered.map(user=>(
          <UserCard key={user.id}
          name={user.name}
          email={user.email}
          city={user.address.city}
          company={user.company.name}
          />
        ))}
      </div>
    </div>

    </>
  )
}

export default App
