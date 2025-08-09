import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Cse from './pages/Cse';
import Ece from './pages/Ece';
import Civil from './pages/Civil';
import Mech from './pages/Mech';

function App() {
  return (
    <div>
      <h1>E-Library</h1>
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Cse" element={<Cse />}></Route>
      <Route path="/Ece" element={<Ece />}></Route>
      <Route path="/Mech" element={<Mech />}></Route>
      <Route path="/Civil" element={<Civil />}></Route>
      <Route path="*" element={<h2>404 - Page Not Found</h2>}></Route>
      </Routes>
    </div>
  );
}

export default App;
