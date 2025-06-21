// src/components/CategoryCardsSection.js

"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/CategoryCardsSection.module.css';
// import Link from 'next/link'; // On utilise <a> pour les liens externes

const CategoryCardsSection = () => {
  const [showWhatsappModal, setShowWhatsappModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const baseUrl = 'https://km-shop.vercel.app';

  const yourWhatsappNumber = '237698053784';
  const friendWhatsappNumber = '237699471223';

  const handleBuyClick = (category) => {
    setSelectedCategory(category);
    setShowWhatsappModal(true);
  };

  const closeWhatsappModal = () => {
    setShowWhatsappModal(false);
    setSelectedCategory(null);
  };

  const currentImageUrl = selectedCategory ? `${baseUrl}${selectedCategory.imageSrc}` : '';
  const currentItemTitle = selectedCategory ? selectedCategory.title : 'cet article';
  const whatsappMessage = `Bonjour, je suis intéressé(e) par ${currentItemTitle} (voir l'image : ${currentImageUrl}). J'aimerais en savoir plus.`;

  const yourWhatsappLink = `https://wa.me/${yourWhatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const friendWhatsappLink = `https://wa.me/${friendWhatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const categories = [
    { title: 'Maillots', imageSrc: '/images/femme.webp', linkHref: '#' },
    { title: 'Vêtements', imageSrc: '/images/street-nike.webp', linkHref: '#' },
    { title: 'Chaussures', imageSrc: '/images/new_balance.jpg', linkHref: '#' },
  ];

  return (
    <section className={styles.categoryCardsSection}>
      {categories.map((category) => (
        <div key={category.title} className={styles.card}>
          <Image
            src={category.imageSrc}
            alt={category.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            style={{ objectFit: 'cover' }}
          />
          <div className={styles.cardContent}>
            <h2 className={styles.cardTitle}>{category.title}</h2>
            <button className={styles.cardButton} onClick={() => handleBuyClick(category)}>Acheter</button>
          </div>
        </div>
      ))}

      {/* LA MODALE WHATSAPP - MISE À JOUR POUR LE NOUVEAU STYLE */}
      {showWhatsappModal && (
        <div className={styles.whatsappModalOverlay} onClick={closeWhatsappModal}>
          <div className={styles.whatsappModalContent} onClick={(e) => e.stopPropagation()}>
            {/* Bouton de fermeture positionné en haut à droite */}
            <button className={styles.closeModalButton} onClick={closeWhatsappModal}>
              &times;
            </button>

            {/* Header de la modale */}
            <div className={styles.modalHeader}>
              <div className={styles.iconCircle}>
                {/* Icône d'enveloppe ou de bulle de dialogue, comme sur l'image */}
                {/* Tu peux remplacer ceci par un SVG d'enveloppe ou d'icône de chat */}
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zM12 11.5a1 1 0 100-2 1 1 0 000 2zM12 14.5a1 1 0 100-2 1 1 0 000 2zM12 17.5a1 1 0 100-2 1 1 0 000 2z" opacity="0" />{/* Masque le cercle externe */}
                  {/* Icône de message/bulle de dialogue, tu peux choisir n'importe quelle icône qui te plaît */}
                  <path d="M20 2H4C2.9 2 2 2.9 2 4v18l4-4h14c1.1 0 2-0.9 2-2V4C22 2.9 21.1 2 20 2zM6 14h12v2H6v-2z" fill="#007bff"/> {/* Exemple d'icône de bulle de dialogue */}
                </svg>
              </div>
              <h3 className={styles.modalTitle}>CONTACTEZ-NOUS</h3> {/* Titre comme "SUBSCRIBE" */}
              {selectedCategory && (
                <p className={styles.modalDescription}>Vous êtes intéressé(e) par **{selectedCategory.title}**. Avec qui souhaitez-vous discuter ?</p>
              )}
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

export default CategoryCardsSection;