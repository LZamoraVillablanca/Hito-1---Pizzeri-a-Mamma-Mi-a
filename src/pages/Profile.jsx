const Profile = () => {
  const id = Date.now()
  return (
    <>
      <div className='Profile'>
        <h1>Hola usuario: {id}@gmail.com</h1>
        <br />
        <p>no es tu cuenta?</p>
        <p><button>cerrar sesión</button></p>
      </div>
    </>
  )
}

export default Profile
