// Configuracoes.jsx
import styles from './Configuracoes.module.css';

export default function Configuracoes() {
  return (
    <div className={styles.configContainer}>
      <div className={styles.profileHeader}>
        <div className={styles.avatar}>D</div>
        <div className={styles.buttons}>
          <button className={styles.editBtn}>Editar</button>
          <button className={styles.removeBtn}>Remover</button>
        </div>
      </div>

      <div className={styles.tabs}>
        <a className={styles.activeTab} href="#">Geral</a>
        <a href="#">Perfil</a>
        <a href="#">Sensores</a>
        <a className={styles.deleteTab} href="#">Deletar conta</a>
      </div>

      <form className={styles.form}>
        <label>Nome</label>
        <input type="text" value="Maria E. Perez" readOnly />

        <label>Biografia</label>
        <textarea placeholder="Escreva algo sobre você..." />

        <label>Tema</label>
        <select>
          <option>Tema Claro</option>
          <option>Tema Escuro</option>
        </select>

        <button className={styles.saveBtn} type="submit">Salvar Alterações</button>
      </form>
    </div>
  );
}
