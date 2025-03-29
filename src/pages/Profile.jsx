import { useUserContext } from '../assets/Context/UserContext'

const Profile = () => {
  const { isAuthenticated, user, logout } = useUserContext()

  if (!isAuthenticated) {
    return <p>Usuario no autenticado</p>
  }

  return (
    <div className='Profile'>
      <h1>Hola, {user}</h1>
      <br />
      <p>¿No es tu cuenta?</p>
      <p>
        <button onClick={logout}>Cerrar sesión</button>
      </p>
    </div>
  )
}

export default Profile
