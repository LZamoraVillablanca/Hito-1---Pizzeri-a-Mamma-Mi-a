import { useAuth } from '../assets/Context/AuthContext'

const Profile = () => {
  const { user, logout } = useAuth()

  if (!user) {
    return <p>Usuario no autenticado</p>
  }

  return (
    <div className='Profile'>
      <h1>Hola usuario: {user.email}</h1>
      <br />
      <p>¿No es tu cuenta?</p>
      <p>
        <button onClick={logout}>Cerrar sesión</button>
      </p>
    </div>
  )
}

export default Profile
