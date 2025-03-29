import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUserContext } from '../assets/Context/UserContext'
import 'bootstrap/dist/css/bootstrap.min.css'

const Register = () => {
  const { register } = useUserContext()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!email || !password || !confirmPassword) {
      setError('Todos los campos son obligatorios')
      return
    }

    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres')
      return
    }

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden')
      return
    }

    try {
      await register(email, password)
      navigate('/profile')
    } catch (error) {
      setError('Error al registrar usuario')
    }
  }

  return (
    <div className='container mt-5'>
      <h2 className='text-center'>Registro</h2>
      <form onSubmit={handleSubmit} className='w-50 mx-auto'>
        {error && <p className='text-danger text-center'>{error}</p>}
        <div className='mb-3'>
          <label className='form-label'>Email</label>
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
        <div className='mb-3'>
          <label className='form-label'>Confirmar Contraseña</label>
          <input
            type='password'
            className='form-control'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-primary w-100'>
          Registrarse
        </button>
      </form>
    </div>
  )
}

export default Register
