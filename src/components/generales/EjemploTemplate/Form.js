import React from 'react'

function Form(props) {
    return (
    <div>
        <form>
            <div className='row'>
                <div className="col">
                    <label className="form-label">Campo 1:</label>
                    <input className="form-control" type="text" name="Campo1" />
                </div>
                <div className="col">
                    <label className="form-label">Campo 2:</label>
                    <input className="form-control" type="text" name="Campo2" />
                </div>
            </div>
            <div className='row'>
                <div className="col">
                    <label className="form-label">Campo 3:</label>
                    <input className="form-control" type="text" name="Campo3" />
                </div>
                <div className="col">
                    <label className="form-label">Campo 4:</label>
                    <input className="form-control" type="text" name="Campo4" />
                </div>
            </div>
            <div className='row'>
                <div className="col">
                    <label className="form-label">Combo:</label>
                    <select className="form-select" name='combo' >
                        <option value="-">Seleccione...</option>
                        <option value="valor1">Valor 1</option>
                        <option value="valor2">valor 2</option>
                        <option value="valor3">valor 3</option>
                    </select>
                </div>
                <div className="col">
                    <label className="form-label">Campo 5:</label>
                    <input className="form-control" type="text" name="campo5"/>
                </div>
            </div>
        </form>
        <div >
            <button className="btn btn-info" >Boton 1</button>
            <span> </span>
            <button className="btn btn-warning" >Boton 2</button>
        </div>
    </div>
    
  )
}

export default Form