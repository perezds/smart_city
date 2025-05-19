// MenuPage.jsx
import styles from './MenuPage.module.css';

export default function MenuPage() {
  const menuItems = [
    {
      title: 'Dashboard',
      description: 'Resumo geral em tempo real — Temperatura, umidade, energia e alertas da escola.',
      icon: '📊',
      href: '/dashboard',
    },
    {
      title: 'Mapas',
      description: 'Visualize os mapas e sensores da escola em tempo real.',
      icon: '🗺️',
      href: '/mapas',
    },
    {
      title: 'Mensagem',
      description: 'Envie e receba mensagens da equipe e administração.',
      icon: '💬',
      href: '/mensagem',
    },
    {
      title: 'Configurações',
      description: 'Ajuste preferências e personalizações da plataforma.',
      icon: '⚙️',
      href: '/configuracoes',
    },
    {
      title: 'Contas',
      description: 'Gerencie contas de usuário e permissões.',
      icon: '👤',
      href: '/contas',
    },
    {
      title: 'Ajuda',
      description: 'Suporte técnico e perguntas frequentes.',
      icon: 'ℹ️',
      href: '/ajuda',
    },
  ];

  return (
    <div className={styles.container}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div>
          <h2 className={styles.sectionTitle}>MENU</h2>
          <ul>
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/mapas">Mapas</a></li>
            <li><a href="/menu" className={styles.active}>Menu</a></li>
            <li><a href="/mensagem">Mensagem</a></li>
          </ul>
        </div>
        <div>
          <h2 className={styles.sectionTitle}>OUTROS</h2>
          <ul>
            <li><a href="/configuracoes">Configurações</a></li>
            <li><a href="/contas">Contas</a></li>
            <li><a href="/ajuda">Ajuda</a></li>
          </ul>
        </div>
      </aside>

      {/* Main */}
      <main className={styles.main}>
        <h1 className={styles.title}>Menu</h1>
        <div className={styles.grid}>
          {menuItems.map((item, index) => (
            <a href={item.href} key={index} className={styles.card}>
              <div className={styles.icon}>{item.icon}</div>
              <div className={styles.cardTitle}>{item.title}</div>
              <div className={styles.tooltip}>{item.description}</div>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
