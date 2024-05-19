// src/historias/EditModal.js
import React from 'react';
import Form from '../historias/Partials/FormHistorias';

function EditModal({ show, handleClose, editData}) {
  return (
    <div className={`modal ${show ? 'd-block' : 'd-none'}`} tabIndex="-1">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header bg-info">
                    <h5 className="modal-title text-white">Editar Historia</h5>
                    <button type="button" className="btn-close btn-close-white" onClick={handleClose}></button>
                </div>
                <form action='' >
                    <div className="modal-body">
                        <Form/>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={handleClose}>Cerrar</button>
                        <button type="submit" className="btn btn-primary">Actualizar</button>
                    </div>
                </form>

            </div>
        </div>
    </div>
  );
}

export default EditModal;
