import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './assets/Context/CartContext'
import { UserProvider } from './assets/Context/UserContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import NotFound from './components/NotFound'
import RutaProtegida from './components/RutaProtegida'
import Home from './pages/Home'
import OnePizza from './pages/Pizza'
import Register from './pages/register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Profile from './pages/Profile'
import Details from './pages/details'

const App = () => {
  return (
    <UserProvider>

      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/pizza/p001' element={<OnePizza />} />
            <Route path='/pizza/:id' element={<Details />} />
            <Route
              path='/profile'
              element={
                <RutaProtegida>
                  <Profile />
                </RutaProtegida>
              }
            />
            <Route path='/404' element={<NotFound />} />
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </UserProvider>
  )
}

export default App
