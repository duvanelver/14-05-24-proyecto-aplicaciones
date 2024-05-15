import React, {useState, useEffect} from 'react'
import Navegador from './Navegador'
import { useNavigate } from 'react-router-dom';

function Home() {
  const navegar = useNavigate();
  const [usuarioActivo, setUsuarioActivo] = useState(null)
  
  useEffect(() => {
    setUsuarioActivo(localStorage.getItem("usuarioActivo"));
    if(localStorage.getItem("usuarioActivo") === null)
      navegar("/")
      //navegar("/login")
  }, [navegar, usuarioActivo])
  
  return (
    <div><Navegador/>Home</div>
  )
}

export default Home