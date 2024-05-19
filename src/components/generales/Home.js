import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';


function Home() {
  const navegar = useNavigate();
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleLogin = () => {
    // Verificar las credenciales aquí
    console.log('Usuario ingresado:', usuario);
    console.log('Contraseña ingresada:', contrasena);

    if (usuario === 'admin' && contrasena === '123') {
      localStorage.setItem('usuarioActivo', usuario);
      navegar('/Navegador');
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center vh-100" style={{ background: "#d7ecf96b" }}>
        <div className="bg-white p-5 rounded-5 text-secondary shadow" style={{ width: "25rem" }}>
          <div className="text-center fs-1 fw-bold">Iniciar Sesión</div>
          <div className="input-group mt-4">
            <div className="col-12">
              <label htmlFor="inputusuario" className="form-label">Usuario</label>
              <input 
                type="text" 
                className="form-control" 
                id="inputusuario" 
                value={usuario} 
                onChange={(e) => setUsuario(e.target.value)} 
              />
            </div>
            <div className="col-12">
              <label htmlFor="inputcontraseña" className="form-label">Contraseña</label>
              <input 
                type="password" 
                className="form-control" 
                id="inputcontraseña" 
                value={contrasena} 
                onChange={(e) => setContrasena(e.target.value)} 
              />
            </div>
            <button 
              type="button" 
              className="btn btn-info text-white w-100 mt-4 fw-semibold shadow-sm"
              onClick={handleLogin}
            >
              Iniciar Sesión
            </button>
          </div>
          <div className="d-flex gap-1 justify-content-center mt-1">
            <div>No tienes cuenta?</div>
            <a href="#" className="text-decoration-none text-info fw-semibold">Regístrate</a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;