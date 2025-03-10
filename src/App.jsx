import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import OnePizza from './pages/Pizza'
import Footer from './components/Footer'
import Register from './pages/register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import NotFound from './components/NotFound'
import Profile from './pages/profile'
import { CartProvider } from './assets/Context/CartContext'
import { AuthProvider } from './assets/Context/AuthContext'
const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/pizza/p001' element={<OnePizza />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/404' element={<NotFound />} />
          </Routes>
          <Footer />
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
