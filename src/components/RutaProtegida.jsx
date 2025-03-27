import { Navigate } from 'react-router-dom'
import { useUserContext } from '../assets/Context/UserContext'

const RutaProtegida = ({ element }) => {
  const { isAuthenticated } = useUserContext()

  if (!isAuthenticated) {
    return <Navigate to='/login' />
  }

  return element
}

export default RutaProtegida
