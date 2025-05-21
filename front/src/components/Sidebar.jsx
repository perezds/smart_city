import styles from './Sidebar.module.css';
import {
  FaTachometerAlt, FaMapMarkedAlt, FaBars,
  FaEnvelope, FaCogs, FaUser, FaQuestionCircle
} from 'react-icons/fa';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>Smart City</div>

      <nav aria-label="Navegação principal">
        <p className={styles.section}>MENU</p>
        <ul>
          <li><a href="/home" className={styles.active}><FaTachometerAlt /> <span>Dashboard</span></a></li>
          <li><a href="/mapas"><FaMapMarkedAlt /> <span>Mapas</span></a></li>
          <li><a href="/menu"><FaBars /> <span>Menu</span></a></li>
          <li><a href="/mensagens"><FaEnvelope /> <span>Mensagens</span></a></li>
        </ul>
        <p className={styles.section}>OUTROS</p>
        <ul>
          <li><a href="/config"><FaCogs /> <span>Configurações</span></a></li>
          <li><a href="/ajuda"><FaQuestionCircle /> <span>Ajuda</span></a></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
