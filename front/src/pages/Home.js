import React, { useEffect, useState } from 'react';
import { fetchAmbientes } from '../services/api';
import Ambientes from '../components/Ambientes';

const Home = () => {
    const [ambientes, setAmbientes] = useState([]);

    useEffect(() => {
        const loadAmbientes = async () => {
            const data = await fetchAmbientes();
            setAmbientes(data);
        };

        loadAmbientes();
    }, []);

    return (
        <div>
            <h1>Bem-vindo à Smart City</h1>
            <Ambientes ambientes={ambientes} />
        </div>
    );
};

export default Home;
