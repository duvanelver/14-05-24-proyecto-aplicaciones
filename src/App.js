import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/generales/Home';

import Navegador from './components/generales/Navegador';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Navegador" element={<Navegador />} />
          {/* Otras rutas que puedas tener */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
  
  

