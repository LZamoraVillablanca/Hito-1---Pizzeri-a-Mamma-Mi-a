import { Link } from 'react-router-dom'

const NotFound = () => {
  const imageSrc = 'https://cdni.iconscout.com/illustration/premium/thumb/robot-con-cara-triste-6460628-5334270.png'

  return (
    <div style={{ textAlign: 'center', padding: '50px', backgroundColor: '#f8d7da' }}>
      <h2 style={{ color: '#721c24' }}>404 - Página no encontrada</h2>
      <img
        src={imageSrc}
        alt='Not Found'
        style={{ maxWidth: '400px', width: '100%', borderRadius: '10px', marginBottom: '20px' }}
      />
      <p style={{ color: '#721c24', fontSize: '18px' }}>
        Lo sentimos, la página que buscas no existe.
      </p>
      <Link
        to='/'
        style={{
          textDecoration: 'none',
          backgroundColor: '#28a745',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '5px',
          fontSize: '16px'
        }}
      >
        Volver al inicio
      </Link>
    </div>
  )
}

export default NotFound
