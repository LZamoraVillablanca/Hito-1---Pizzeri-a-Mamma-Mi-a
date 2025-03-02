import { Link } from 'react-router-dom'
import { formatPriceCLP } from '../assets/FormatNumber'
const Navbar = () => {
  const total = 25000
  const token = false
  return (
    <div className='container'>
      <nav className='navbar'>
        <ul>
          <li><Link to='/'>🍕 Home</Link></li>
          <li><Link to='/profile'>🔓 Profile</Link></li>
          <li><Link to='/logout'>🔒 Logout</Link></li>
          <li><Link to='/login'>🔐 Login</Link></li>
          <li><Link to='/register'>🔐 Register</Link></li>
          <li><Link to='/cart'>🛒 Total: {formatPriceCLP(total)}</Link></li>
        </ul>
      </nav>

    </div>
  )
}

export default Navbar
