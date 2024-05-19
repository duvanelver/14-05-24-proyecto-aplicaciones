import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
//import Login from '../usuarios/Login'
import Home from './Home'
import Historias from '../historias/Historias'
import Agendamiento from '../agendamiento/Agendamiento'
import Medicamentos from '../medicamentos/Medicamentos'
import Citas from '../citas/Citas'

import Template from './EjemploTemplate/Template' 
function Router() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                {/* <Route path='/login' element={<Login/>}></Route> */}
                <Route path='/Historias' element={<Historias/>}></Route>
                <Route path='/Agendamiento' element={<Agendamiento/>}></Route>
                <Route path='/Medicamentos' element={<Medicamentos/>}></Route>
                <Route path='/Citas' element={<Citas/>}></Route>
                <Route path='/Template' element={<Template/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router