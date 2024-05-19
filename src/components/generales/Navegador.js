import React, { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

function Navegador() {
  const location = useLocation();

  const [usuarioActivo, setUsuarioActivo] = useState(null);
  const navegar = useNavigate();

  useEffect(() => {
    const usuario = localStorage.getItem('usuarioActivo');
    setUsuarioActivo(usuario);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('usuarioActivo');
    navegar('/');
  };
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-info">
        <div className="container-fluid">
          <img src="../../../logoClinica.png" className="rounded mx-auto d-block" width='40px' alt="Logo"/>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-10">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink className={`nav-link text-white ${location.pathname === '/' ? 'active' : ''}`} to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className={`nav-link text-white ${location.pathname === '/Historias' ? 'active' : ''}`} to="/Historias">Historias</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className={`nav-link text-white ${location.pathname === '/Agendamiento' ? 'active' : ''}`} to="/Agendamiento">Agendamiento</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className={`nav-link text-white ${location.pathname === '/Medicamentos' ? 'active' : ''}`} to="/Medicamentos">Medicamentos</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className={`nav-link text-white ${location.pathname === '/Citas' ? 'active' : ''}`} to="/Citas">Citas</NavLink>
                    </li>
                  </ul>
                </div>
                <div className="col-md-2 text-end">
                  <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <FaUser />
                    </button>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="/">Perfil</a></li>
                      <li><a className="dropdown-item" href="/">Cerrar Sesion</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navegador;
