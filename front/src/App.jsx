import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import SettingsPage from './components/SettingsPage';
import MenuPage from './components/MenuPage';
import MensagensPage from './components/MensagensPage';
import Geral from './components/Geral';
import Profile from './components/Profile';
import Footer from './components/Footer';



function App() {
  return (
    <><Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/config" element={<SettingsPage />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/mensagens" element={<MensagensPage />} />
      <Route path="/settings/geral" element={<Geral />} />
      <Route path="/settings/sensores" element={<Geral />} />
      <Route path="/settings/perfil" element={<Profile/>} />
  


    </Routes><Footer /></>
  );
}

export default App;
