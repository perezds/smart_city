// src/components/Ambientes.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Ambientes.module.css';

const Ambientes = () => {
  const [ambientes, setAmbientes] = useState([]);

  useEffect(() => {
    const fetchAmbientes = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/ambientes/');
        setAmbientes(response.data);
      } catch (error) {
        console.error('Erro ao buscar ambientes:', error);
      }
    };

    fetchAmbientes();
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Ambientes Cadastrados</h2>
      <ul className={styles.list}>
        {ambientes.map((ambiente) => (
          <li key={ambiente.id} className={styles.item}>
            <span className={styles.name}>{ambiente.nome}</span>
            <span className={styles.local}>{ambiente.localizacao}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ambientes;
