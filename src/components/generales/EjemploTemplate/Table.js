import React from 'react'

function Table() {
  return (
    <table className="table table-striped">
        <thead className="table-primary">
          <tr>
            <th>Columna 1</th>
            <th>Columna 2</th>
            <th>Columna 3</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
        <tr>
              <td>Valor 1.1</td>
              <td>Valor 1.2</td>
              <td>Valor 1.3</td>
              <td>
                <button className="btn btn-danger btn-sm" >Eliminar</button>
                <button className="btn btn-secondary btn-sm">Ver</button>  
              </td>
            </tr>
            <tr>
              <td>Valor 2.1</td>
              <td>Valor 2.2</td>
              <td>Valor 2.3</td>
              <td>
                <button className="btn btn-danger btn-sm" >Eliminar</button>
                <button className="btn btn-secondary btn-sm">Ver</button>  
              </td>
            </tr>
        </tbody>
      </table>
  )
}

export default Table