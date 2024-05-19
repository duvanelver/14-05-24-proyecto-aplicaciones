import React,{useState}from 'react';
import Navegador from '../generales/Navegador';
import Footer from '../generales/Footer'
import { FaPlusSquare } from "react-icons/fa";
import EditModal from './Edit';
import CreateModal from './Create';
//Importar tabla Historias
import Table from '../historias/Partials/TableHistorias';
function Historias() {

  const [showEdit, setShowEdit] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const [editData, setEditData] = useState({ col1: '', col2: '', col3: '' });
  //const [createData, setCreateData] = useState({ col1: '', col2: '', col3: '' });


  const handleCloseEdit = () => setShowEdit(false);

  const handleShowEdit = (data) => {
      setEditData(data);
      setShowEdit(true);
  };

  const handleCloseCreate = () => setShowCreate(false);
  const handleShowCreate = () => setShowCreate(true);

  return (
    <div>
      <Navegador/>
      <div className="container-sm d-flex flex-column">       
        <div className="card mt-4">
          <div className="card-header">
            <div className="d-flex flex-row justify-content-between">
              <div>
                  <h4 className="card-title">Historias</h4>
              </div>
              <button className="btn btn-outline-success btn-round" onClick={handleShowCreate} title='Crear Historia'>
                <FaPlusSquare />
              </button>
            </div>
          </div>
          <div className="card-body">
            <Table 
              handleShowEdit={handleShowEdit}
            />
          </div>
        </div>
      </div>
      <EditModal
        show={showEdit}
        handleClose={handleCloseEdit}
        editData={editData}
      />
      <CreateModal
        show={showCreate}
        handleClose={handleCloseCreate}
        //createData={createData}
      />
      <Footer/>
    </div>
  )
}

export default Historias