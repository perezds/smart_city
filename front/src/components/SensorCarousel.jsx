import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import styles from './SensorCarousel.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SensorCarousel = () => {
  const [sensores, setSensores] = useState([]);

  useEffect(() => {
    const fetchSensores = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/sensores/');
        setSensores(response.data);
      } catch (error) {
        console.error('Erro ao buscar sensores:', error);
      }
    };

    fetchSensores();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.carouselWrapper}>
      <h2 className={styles.title}>Sensores em Destaque</h2>
      <Slider {...settings}>
        {sensores.map((sensor) => (
          <div key={sensor.id} className={styles.card}>
            <h3>{sensor.nome}</h3>
            <p><strong>Tipo:</strong> {sensor.tipo}</p>
            <p><strong>Unidade:</strong> {sensor.unidade_medida}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SensorCarousel;
