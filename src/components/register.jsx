import "bootstrap/dist/css/bootstrap.min.css";

const Register = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;
    
    if (!email || !password || !confirmPassword) {
      alert("Todos los campos son obligatorios.");
      return;
    }
    
    if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres.");
      return;
    }
    
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }
    
    alert("Registro exitoso");
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Registro</h2>
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
        <div className="mb-3">
          <label className="form-label">Confirmar Contraseña</label>
          <input 
            type="password" 
            name="confirmPassword"
            className="form-control"
            placeholder="Confirme su contraseña"
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default Register;
