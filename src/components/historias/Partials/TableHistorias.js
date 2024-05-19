import React from 'react'
import { RiDeleteBinFill ,RiEdit2Line } from "react-icons/ri";

function Table({handleShowEdit}) {

    const handleDelete = (data) => {
        if (window.confirm('Estas seguro de eliminar esta Historia?')) {
          // Lógica para eliminar
          console.log('Historia eliminado:', data);
        }
      };

    return (
        <div>
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
                            <button
                                type="button"
                                className="btn btn-sm btn-outline-primary m-1"
                                title="Editar Historia"
                                onClick={() => handleShowEdit({ col1: 'Valor 1.1', col2: 'Valor 1.2', col3: 'Valor 1.3' })}
                            >
                                <RiEdit2Line/>
                            </button>
                            <button type="button" className="btn btn-sm btn-outline-danger" onClick={handleDelete} title="Eliminar Historia">
                                <RiDeleteBinFill />
                            </button> 
                        </td>
                    </tr>
                    <tr>
                        <td>Valor 2.1</td>
                        <td>Valor 2.2</td>
                        <td>Valor 2.3</td>
                        <td>
                            <button
                                type="button"
                                className="btn btn-sm btn-outline-primary m-1"
                                title="Editar Historia"
                                onClick={() => handleShowEdit({ col1: 'Valor 1.1', col2: 'Valor 1.2', col3: 'Valor 1.3' })}
                            >
                                <RiEdit2Line/>
                            </button>
                            <button type="button" className="btn btn-sm btn-outline-danger" onClick={handleDelete} title="Eliminar Historia">
                                <RiDeleteBinFill />
                            </button> 
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table