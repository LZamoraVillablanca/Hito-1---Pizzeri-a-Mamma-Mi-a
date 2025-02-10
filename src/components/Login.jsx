import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    
    const email = event.target.email.value;
    const password = event.target.password.value;
    
    if (!email || !password) {
      alert("Todos los campos son obligatorios.");
      return;
    }
    
    if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres.");
      return;
    }
    
    alert("Inicio de sesión exitoso");
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Login</h2>
      <form onSubmit={handleSubmit} className="w-50 mx-auto">
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input 
            type="email" 
            name="email"
            className="form-control"
            placeholder="Ingrese su email"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input 
            type="password" 
            name="password"
            className="form-control"
            placeholder="Ingrese su contraseña"
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

export default Login;
