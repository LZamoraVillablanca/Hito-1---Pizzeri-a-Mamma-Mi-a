import { Navigate } from 'react-router-dom'
import { useUserContext } from '../assets/Context/UserContext'

const RutaProtegida = ({ children }) => {
  const { isAuthenticated } = useUserContext()

  if (!isAuthenticated) {
    return <Navigate to='/login' />
  }

  return children
}

export default RutaProtegida
