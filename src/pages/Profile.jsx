import { useUserContext } from '../assets/Context/UserContext'

const Profile = () => {
  const { isAuthenticated, logout } = useUserContext() // Usamos el contexto UserContext

  if (!isAuthenticated) {
    return <p>Usuario no autenticado</p>
  }

  return (
    <div className='Profile'>
      <h1>Hola usuario</h1> {/* Puedes personalizarlo según lo que desees mostrar */}
      <br />
      <p>¿No es tu cuenta?</p>
      <p>
        <button onClick={logout}>Cerrar sesión</button>
      </p>
    </div>
  )
}

export default Profile
