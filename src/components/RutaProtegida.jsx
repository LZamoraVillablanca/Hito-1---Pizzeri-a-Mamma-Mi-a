import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../assets/Context/AuthContext'

const RutaProtegida = ({ children }) => {
  const { user } = useContext(AuthContext)

  if (!user) {
    return <Navigate to='/login' />
  }

  return children
}

export default RutaProtegida
