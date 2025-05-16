// src/pages/Home.jsx
import React from 'react';
import styles from './Home.module.css';
import {
  FaBell, FaSearch, FaTemperatureHigh, FaTint, FaBolt, FaCloud,
  FaUser, FaVolumeUp, FaChartBar, FaTachometerAlt, FaMapMarkedAlt,
  FaBars, FaEnvelope, FaCogs, FaQuestionCircle
} from 'react-icons/fa';

const Home = () => {
  return (
    <div className={styles.dashboard}>
      <aside className={styles.sidebar}>
        <div className={styles.logo}>Smart City</div>

        <nav aria-label="Navegação principal">
          <p className={styles.section}>MENU</p>
          <ul>
            <li><a href="/" className={styles.active}><FaTachometerAlt /> <span>Dashboard</span></a></li>
            <li><a href="/mapas"><FaMapMarkedAlt /> <span>Mapas</span></a></li>
            <li><a href="/menu"><FaBars /> <span>Menu</span></a></li>
            <li><a href="/mensagens"><FaEnvelope /> <span>Mensagens</span></a></li>
          </ul>
          <p className={styles.section}>OUTROS</p>
          <ul>
            <li><a href="/config"><FaCogs /> <span>Configurações</span></a></li>
            <li><a href="/contas"><FaUser /> <span>Contas</span></a></li>
            <li><a href="/ajuda"><FaQuestionCircle /> <span>Ajuda</span></a></li>
          </ul>
        </nav>
      </aside>

      <div className={styles.mainContent}>
        <header className={styles.topBar}>
          <div className={styles.searchWrapper}>
            <FaSearch className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Pesquisar..."
              className={styles.searchInput}
            />
          </div>

          <div className={styles.actions}>
            <FaBell className={styles.iconRight} title="Notificações" />
            <div className={styles.userMenu}>
              <div className={styles.userIcon}>D</div>
              <div className={styles.dropdown}>
                <a href="/perfil">Perfil</a>
                <a href="front\src\components\Configurcoes.jsx">Configurações</a>
                <a href="/sair">Sair</a>
              </div>
            </div>
          </div>
        </header>

        <main>
          <div className={styles.container}>
            <div className={styles.sectionTitle}>Smart City Senai</div>

            <div className={styles.alertBox}>
              <FaBell className={styles.alertIcon} />
              <span>É possível que haja chuva leve com ventos fortes esta manhã por volta das 10:00 WIB.</span>
            </div>

            <div className={styles.cardsRow}>
              <div className={styles.card}>
                <FaTemperatureHigh className={styles.cardIcon} />
                <p>Temperatura</p>
                <h3>26°C</h3>
                <span>+8%</span>
              </div>
              <div className={styles.card}>
                <FaTint className={styles.cardIcon} />
                <p>Umidade</p>
                <h3>59%</h3>
                <span>-11%</span>
              </div>
              <div className={styles.card}>
                <FaBolt className={styles.cardIcon} />
                <p>Energia Consumida</p>
                <h3>84.3 kWh</h3>
                <span>+5% que ontem</span>
              </div>
              <div className={styles.card}>
                <FaCloud className={styles.cardIcon} />
                <p>CO₂ Atual</p>
                <h3>850 ppm</h3>
                <span>&lt; 1000 ppm</span>
              </div>
              <div className={styles.card}>
                <FaUser className={styles.cardIcon} />
                <p>Pessoas na Sala</p>
                <h3>12</h3>
                <span>Máx: 20</span>
              </div>
              <div className={styles.card}>
                <FaVolumeUp className={styles.cardIcon} />
                <p>Nível de Ruído</p>
                <h3>54 dB</h3>
                <span>Dentro do aceitável</span>
              </div>
            </div>

            <h2 className={styles.sectionTitle}>Variação Temporal</h2>

            <div className={styles.variationRow}>
              <div className={`${styles.variationCard} ${styles.green}`}>
                <p>Temperatura Atual</p>
                <h3>18°C</h3>
                <span>Limite ideal: 18~26°C</span>
              </div>
              <div className={`${styles.variationCard} ${styles.red}`}>
                <p>Umidade Atual</p>
                <h3>90%</h3>
                <span>Limite ideal: 40~60%</span>
              </div>
              <div className={`${styles.variationCard} ${styles.purple}`}>
                <p>Temp. (últimas 24h)</p>
                <h3>30°C</h3>
                <span>4% acima do previsto</span>
                <FaChartBar className={styles.chartIcon} />
              </div>
              <div className={`${styles.variationCard} ${styles.purple}`}>
                <p>Umid. (últimas 24h)</p>
                <h3>70%</h3>
                <span>+30% do ideal</span>
                <FaChartBar className={styles.chartIcon} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
