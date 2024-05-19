import React from 'react'

function Form(props) {
    return (
    <div>
        <div className='row'>
            <div className="form-group col">
                <label className="form-label">Campo 1:</label>
                <input className="form-control" placeholder='Campo 1' type="text" name="Campo1" required/>
            </div>
            <div className="form-group col">
                <label className="form-label">Campo 2:</label>
                <input className="form-control" placeholder='Campo 2' type="text" name="Campo2" required/>
            </div>
        </div>
        <div className='row'>
            <div className="form-group col">
                <label className="form-label">Campo 3:</label>
                <input className="form-control" placeholder='Campo 3' type="text" name="Campo3" required/>
            </div>
            <div className="form-group col">
                <label className="form-label">Campo 4:</label>
                <input className="form-control" placeholder='Campo 4' type="text" name="Campo4" required/>
            </div>
        </div>
        <div className='row'>
            <div className="form-group col">
                <label className="form-label">Combo:</label>
                <select className="form-select" name='combo' required>
                    <option value="-">Seleccione...</option>
                    <option value="valor1">Valor 1</option>
                    <option value="valor2">valor 2</option>
                    <option value="valor3">valor 3</option>
                </select>
            </div>
            <div className="form-group col">
                <label className="form-label">Campo 5:</label>
                <input className="form-control" placeholder='Campo 5' type="text" name="campo5" required/>
            </div>
        </div>
    </div>
    
  )
}

export default Form