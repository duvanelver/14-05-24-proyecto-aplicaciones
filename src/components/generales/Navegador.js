import React from 'react'

function Navegador() {
  return (
    <header className="container">
        <nav>
            <ul className="nav nav-tabs">
                <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="/Historias">Historias</a></li>
                {/* <li className="nav-item"><a className="link-danger" href="/login">Salir</a></li> */}
            </ul> 
        </nav>
    </header>
  )
}

export default Navegador