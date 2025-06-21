'use client'; // This component will have state for slider

import React, { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/IconicModelsSlider.module.css'

const IconicModelsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const models = [
    {
      name: 'Air Force 1',
      imageSrc: '/images/AF1.jpg', // Replace with your actual image path
      linkHref: '#',
    },
    {
      name: 'Nike Off White',
      imageSrc: '/images/nike_oui.jpg', // Replace with your actual image path
      linkHref: '#',
    },
    {
      name: 'Adidas',
      imageSrc: '/images/adidas_petite.jpg', // Replace with your actual image path
      linkHref: '#',
    },
    {
      name: 'Samba', // Example additional model
      imageSrc: '/images/samba.jpg',
      linkHref: '#',
    },
    {
      name: 'Cortez', // Example additional model
      imageSrc: '/images/CORTEZ.png',
      linkHref: '#',
    },
    {
      name: 'Nike Dunk Low', // Example additional model
      imageSrc: '/images/chaussures/IMG-20250621-WA0029.jpg',
      linkHref: '#',
    },
    {
      name: 'Nike SB Dunk Low Pro', // Example additional model
      imageSrc: '/images/chaussures/IMG-20250621-WA0030.jpg',
      linkHref: '#',
    },
    {
      name: 'Nike Air Jordan', // Example additional model
      imageSrc: '/images/chaussures/IMG-20250621-WA0032.jpg',
      linkHref: '#',
    },
    {
      name: 'Nike Jack Cacktus', // Example additional model
      imageSrc: '/images/chaussures/IMG-20250621-WA0035.jpg',
      linkHref: '#',
    },
    {
      name: 'Nike G-TEK', // Example additional model
      imageSrc: '/images/chaussures/IMG-20250621-WA0034.jpg',
      linkHref: '#',
    },
  ];

  // Logic for displaying only 3 items at a time
  const visibleModels = models.slice(currentIndex, currentIndex + 7);

  const goToNext = () => {
    if (currentIndex + 7 < models.length) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <section className={styles.iconicModelsSection}>
      <div className={styles.sectionHeader}>
        <h2>Nos dernières sorties de chaussures</h2>
        <div className={styles.navigationArrows}>
          <button onClick={goToPrev} disabled={currentIndex === 0} className={styles.arrowButton}>
            &lt;
          </button>
          <button onClick={goToNext} disabled={currentIndex + 1 >= models.length} className={styles.arrowButton}>
            &gt;
          </button>
        </div>
      </div>

      <div className={styles.sliderContainer}>
        {visibleModels.map((model) => (
          <div key={model.name} className={styles.modelCard}>
            <Image
              src={model.imageSrc}
              alt={model.name}
              fill
              sizes="(max-width: 768px) 90vw, 30vw"
              style={{ objectFit: 'cover' }}
            />
            <div className={styles.modelNameOverlay}>
              <h3>{model.name}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.progressBar}>
        <div
          className={styles.progressBarFill}
          style={{ width: `${((currentIndex + 1) / (models.length - 2)) * 100}%` }}
        ></div>
      </div>
    </section>
  );
};

export default IconicModelsSlider;