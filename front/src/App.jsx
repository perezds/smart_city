import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Configuracoes from './components/Configuracoes';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/config" element={<Configuracoes/>} />

    </Routes>
  );
}

export default App;
