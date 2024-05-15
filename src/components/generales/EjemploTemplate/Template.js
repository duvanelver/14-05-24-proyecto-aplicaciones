import React, {useState} from 'react'
import Navegador from '../Navegador';
import Table from './Table'
import Form from './Form'

function Template() {
    
    const [mostrarLista, setMostrarLista] = useState(true);
    
    const verLista = (e) => {
      if(mostrarLista){
          setMostrarLista(false);
      }
      else{
          setMostrarLista(true);
      }
  }

    return (
        <div>
            <Navegador/>
            {!mostrarLista && <button className="btn btn-secondary" onClick={verLista}>Ver Lista</button>}
            {mostrarLista && <button className="btn btn-secondary" onClick={verLista}>Crear Nuevo</button>}
            {!mostrarLista && <div>
                <Form/>
            </div>}
            {mostrarLista && <Table/>}
        </div>
    )
}

export default Template