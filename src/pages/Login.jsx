import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUserContext } from '../assets/Context/UserContext'
import 'bootstrap/dist/css/bootstrap.min.css'

const Login = () => {
  const { setIsAuthenticated, setUser } = useUserContext()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !password) {
      setError('Todos los campos son obligatorios')
      return
    }
    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres')
      return
    }
    if (email === 'test@test.com' && password === '123123') {
      setIsAuthenticated(true)
      setUser({ email })
      navigate('/profile')
    } else {
      setError('Credenciales incorrectas')
    }
  }

  return (
    <div className='d-flex justify-content-center align-items-center vh-100 bg-light'>
      <form className='bg-white p-4 rounded shadow w-25' onSubmit={handleSubmit}>
        <h2 className='text-center mb-4'>Iniciar Sesión</h2>
        {error && <p className='text-danger text-center'>{error}</p>}
        <div className='mb-3'>
          <label className='form-label'>Correo Electrónico</label>
          <input
            type='email'
            className='form-control'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Contraseña</label>
          <input
            type='password'
            className='form-control'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-primary w-100'>
          Iniciar Sesión
        </button>
      </form>
    </div>
  )
}

export default Login
