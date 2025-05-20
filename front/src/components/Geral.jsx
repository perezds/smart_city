import React from 'react';
import estilos from './SettingsPage.module.css';
import { useNavigate } from 'react-router-dom';
import Header from './HeaderHome';
import Sidebar from './Sidebar';

export default function Geral() {
  const navigate = useNavigate();

  return (
    <div className={estilos.menuContainer}>
      <Sidebar />
      <div className={estilos.menuContent}>
        <Header />
        <h1 className={estilos.titulo}>Configurações</h1>
        <div className={estilos.caixas}>
          <div className={estilos.caixa} onClick={() => navigate('/settings/perfil')}>
            <h2>👤 Perfil</h2>
            <p>Gerencie seus dados de usuário</p>
          </div>
          <div className={estilos.caixa} onClick={() => navigate('/settings/sensores')}>
            <h2>🖥️ Sensores</h2>
            <p>Configure sensores e alertas</p>
          </div>
          <div className={estilos.caixa} onClick={() => navigate('/settings/geral')}>
            <h2>🏙️ Geral</h2>
            <p>Informações gerais da cidade inteligente</p>
          </div>
        </div>
      </div>
    </div>
  );
}
