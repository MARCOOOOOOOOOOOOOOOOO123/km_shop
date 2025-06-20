"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/AthleteShowcaseSection.module.css';

const AthleteShowcaseSection = () => {
  const [showWhatsappModal, setShowWhatsappModal] = useState(false);
  // selectedCategory n'est plus nécessaire car l'article est fixe pour cette section


  const baseUrl = 'https://km-shop.vercel.app'; // TRÈS IMPORTANT : URL de ton site déployé

  const yourWhatsappNumber = '237698053784';
  const friendWhatsappNumber = '237699471223';

  // Définir les détails de l'article pour cette section directement
  const featuredItemTitle = 'l\'article Nike, Adidas, LV'; // Titre statique pour le message WhatsApp
  const featuredItemImageSrc = '/images/street-nike.webp'; // Image statique pour le message WhatsApp
  const featuredItemImageUrl = `${baseUrl}${featuredItemImageSrc}`;

  // Message WhatsApp pré-rempli, adapté pour cet article unique
  const whatsappMessage = `Bonjour, je suis intéressé(e) par ${featuredItemTitle} (voir l'image : ${featuredItemImageUrl}). J'aimerais en savoir plus.`;

  const yourWhatsappLink = `https://wa.me/${yourWhatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const friendWhatsappLink = `https://wa.me/${friendWhatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // Fonction pour ouvrir la modale (plus besoin de passer de 'category')
  const handleBuyClick = () => {
    setShowWhatsappModal(true);
  };

  // Fonction pour fermer la modale
  const closeWhatsappModal = () => {
    setShowWhatsappModal(false);
  };

  return (
    <section className={styles.athleteShowcaseSection}>
      <Image
        src="/images/street-nike.webp" // Chemin de ton image de fond principale
        alt="Alexia Putellas - La sélection des athlètes" // Alt text pertinent
        fill
        sizes="100vw"
        style={{ objectFit: 'cover' }}
        priority // Charger cette image en priorité
      />
      <div className={styles.contentOverlay}>
        <p className={styles.tagline}>La sélection des wears</p>
        <h2 className={styles.athleteName}>Nike, Adidas, LV, ... </h2>
        {/* Appel de handleBuyClick sans argument */}
        <button className={styles.actionButton} onClick={handleBuyClick}>Acheter</button>
      </div>

      {/* LA MODALE WHATSAPP */}
      {showWhatsappModal && (
        <div className={styles.whatsappModalOverlay} onClick={closeWhatsappModal}>
          <div className={styles.whatsappModalContent} onClick={(e) => e.stopPropagation()}>
            {/* Bouton de fermeture */}
            <button className={styles.closeModalButton} onClick={closeWhatsappModal}>
              &times;
            </button>

            {/* Header de la modale */}
            <div className={styles.modalHeader}>
              <div className={styles.iconCircle}>
                {/* Icône de bulle de dialogue SVG. Remplacer le contenu du path si tu veux une autre icône */}
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  {/* Chemin de l'icône de message/bulle de dialogue */}
                  <path d="M20 2H4C2.9 2 2 2.9 2 4v18l4-4h14c1.1 0 2-0.9 2-2V4C22 2.9 21.1 2 20 2zM6 14h12v2H6v-2z" fill="#007bff"/>
                </svg>
              </div>
              <h3 className={styles.modalTitle}>CONTACTEZ-NOUS</h3>
              {/* Le message personnalisé pour la modale, utilise le titre fixe */}
              <p className={styles.modalDescription}>Vous êtes intéressé(e) par **{featuredItemTitle}**. Avec qui souhaitez-vous discuter ?</p>
            </div>

            {/* Contenu des boutons de contact */}
            <div className={styles.whatsappButtonsContainer}>
              <a
                href={yourWhatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactButton}
                onClick={closeWhatsappModal}
              >
                Contacter Marco !
              </a>
              <a
                href={friendWhatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactButton}
                onClick={closeWhatsappModal}
              >
                Contacter Arnold Kevin !
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AthleteShowcaseSection;
