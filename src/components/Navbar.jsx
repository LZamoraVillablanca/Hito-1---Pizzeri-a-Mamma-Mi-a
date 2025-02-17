import { formatPriceCLP } from '../assets/FormatNumber'
const Navbar = () => {
  const total = 25000
  const token = false
  return (
    <div className='container'>
      <nav className='navbar'>
        <ul>
          <button><li>🍕Home</li></button>
          <button><li>🔓Profile</li></button>
          <button><li>🔒Logout</li></button>
          <button><li>🔐Login</li></button>
          <button><li>🔐Register</li></button>
          <button><li>🛒Total:{formatPriceCLP(total)}</li></button>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
