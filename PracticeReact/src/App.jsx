import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Home from './pages/Home'
import User from './pages/User'

function App(){
  return(
    <BrowserRouter>
    <nav style={{padding:"16px",borderBottom:"1px solid #eee",display:"flex",gap:'16px'}}>
      <Link to='/'>Home</Link>
      <Link to='/User'>User</Link>
    </nav>
    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/user' element={<Users />}/>
    </Routes>

    </BrowserRouter>
  )
}
export default App