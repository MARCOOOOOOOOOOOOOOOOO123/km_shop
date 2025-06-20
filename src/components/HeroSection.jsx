// Pas besoin de 'use client' ici si c'est un composant pur sans hooks ou events

import React from 'react';
import styles from '../styles/HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <video className={styles.videoBackground} autoPlay loop muted playsInline>
        <source src="/videos/Nike Spec AD - Sony FX3 Cinematic Video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.heroContent}>
        <h1>KM SHOP</h1>
        <p>Votre Passion, Votre Style. Équipez-vous.</p>
        <button className={styles.heroButton}>Acheter</button>
      </div>
    </section>
  );
};

export default HeroSection;