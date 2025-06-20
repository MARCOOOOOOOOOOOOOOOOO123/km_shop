"use client"
import React from 'react';
import Image from 'next/image';
import styles from '../styles/AthleteShowcaseSection.module.css';

const AthleteShowcaseSection = () => {
  // Remplace ceci par l'URL réelle de ton site (avec https://)
  // C'est important pour que l'image soit accessible via un lien public
  const baseUrl = ' http://localhost:3001/'; // <--- TRÈS IMPORTANT : METS TON VRAI DOMAINE ICI

  // REMPLACE 'VOTRE_NUMERO_WHATSAPP' PAR TON NUMÉRO AU FORMAT INTERNATIONAL SANS '+'
  const yourWhatsappNumber = '237698053784'; // Exemple pour le Cameroun, remplace 'xxxxxxxx' par le reste de ton numéro
                                           // Exemple pour la France : '33612345678'

  const imageUrl = `${baseUrl}/images/street-nike.webp`;

  // Message pré-rempli qui inclut le lien de l'image
  const whatsappMessage = `Bonjour, je suis intéressé par cet article : ${imageUrl}. J'aimerais en savoir plus.`;

  // Le lien WhatsApp direct vers ton numéro avec le message pré-rempli
  const whatsappLink = `https://wa.me/${yourWhatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // Fonction pour gérer le clic du bouton
  const handleBuyClick = () => {
    // Redirige l'utilisateur vers le lien WhatsApp dans un nouvel onglet
    window.open(whatsappLink, '_blank', 'noopener noreferrer');
  };

  return (
    <section className={styles.athleteShowcaseSection}>
      <Image
        src="/images/street-nike.webp" // Replace with your actual image path
        alt="Alexia Putellas - La sélection des athlètes"
        fill
        sizes="100vw"
        style={{ objectFit: 'cover' }}
        priority // Consider priority loading for large hero images
      />
      <div className={styles.contentOverlay}>
        <p className={styles.tagline}>La sélection des wears</p>
        <h2 className={styles.athleteName}>Nike, Adidas, LV, ... </h2>
        <button className={styles.actionButton} onClick={handleBuyClick}>Acheter</button>
      </div>
    </section>
  );
};

export default AthleteShowcaseSection;