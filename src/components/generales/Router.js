import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
//import Login from '../usuarios/Login'
import Home from './Home'
import Historias from '../historias/Historias'
import Template from './EjemploTemplate/Template' 
function Router() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                {/* <Route path='/login' element={<Login/>}></Route> */}
                <Route path='/Historias' element={<Historias/>}></Route>
                <Route path='/Template' element={<Template/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router