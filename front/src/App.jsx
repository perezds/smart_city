import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Configuracoes from './components/Configuracoes';
import MenuPage from './components/MenuPage';
import MensagensPage from './components/MensagensPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/config" element={<Configuracoes/>} />
      <Route path="/menu" element={<MenuPage/>} />
      <Route path="/mensagens" element={<MensagensPage/>} />

    </Routes>
  );
}

export default App;
