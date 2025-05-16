import { FaTachometerAlt, FaMapMarkedAlt, FaBars, FaEnvelope, FaCogs, FaUserAlt, FaQuestionCircle } from 'react-icons/fa';
import styles from './Sidebar.module.css';

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.title}>MENU</h2>
      <ul className={styles.menu}>
        <li><a href="/dashboard"><FaTachometerAlt /> Dashboard</a></li>
        <li><a href="/mapas"><FaMapMarkedAlt /> Mapas</a></li>
        <li><a href="/menu"><FaBars /> Menu</a></li>
        <li><a href="/mensagens"><FaEnvelope /> Mensagem</a></li>
      </ul>
      <h2 className={styles.title}>OUTROS</h2>
      <ul className={styles.menu}>
        <li><a href="/configuracoes"><FaCogs /> Configurações</a></li>
        <li><a href="/contas"><FaUserAlt /> Contas</a></li>
        <li><a href="/ajuda"><FaQuestionCircle /> Ajuda</a></li>
      </ul>
    </aside>
  );
}
