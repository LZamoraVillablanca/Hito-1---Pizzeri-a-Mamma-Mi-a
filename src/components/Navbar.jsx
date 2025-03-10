import { Link } from 'react-router-dom'
import { useAuth } from '../assets/Context/AuthContext'
import { useCart } from '../assets/Context/CartContext'

const Navbar = () => {
  const { isAuthenticated, login, logout } = useAuth()
  const { total } = useCart()

  return (
    <div className='container'>
      <nav className='navbar'>
        <ul>
          <li><Link to='/'>🍕 Home</Link></li>
          {isAuthenticated
            ? (
              <>
                <li><Link to='/profile'>🔓 Profile</Link></li>
                <li><button onClick={logout}>🔒 Logout</button></li>
              </>
              )
            : (
              <>
                <li><Link to='/login' onClick={login}>🔐 Login</Link></li>
                <li><Link to='/register'>🔐 Register</Link></li>
              </>
              )}
          <li><Link to='/cart'>🛒 Total: {total}</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
