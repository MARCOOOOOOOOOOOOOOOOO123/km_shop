"use client"
import React, { useState } from 'react';
import styles from '@/styles/HeroSection.module.css';
import Image from 'next/image';
const HeroSection = () => {
  const [showWhatsappModal, setShowWhatsappModal] = useState(false);
  

  const baseUrl = 'https://km-shop.vercel.app';

  const yourWhatsappNumber = '237698053784';
  const friendWhatsappNumber = '237699471223';

  // Définir les détails de l'article pour cette section directement
  // Ou rendre le message WhatsApp générique si le bouton "Acheter" n'est pas lié à un produit spécifique.
  // Pour l'exemple, j'assume un "produit" générique pour le Hero.
  const heroItemTitle = 'les articles de la section principale KM Shop';


  // Le handler ne reçoit plus d'argument
  const handleBuyClick = () => {
    setShowWhatsappModal(true);
  };

  const closeWhatsappModal = () => {
    setShowWhatsappModal(false);
  };

  // Les messages WhatsApp sont construits à partir des détails génériques du hero
  const whatsappMessage = `Bonjour, je suis intéressé(e) par ${heroItemTitle}  J'aimerais en savoir plus.`;

  const yourWhatsappLink = `https://wa.me/${yourWhatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const friendWhatsappLink = `https://wa.me/${friendWhatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className={styles.heroSection}>
        <Image
        src="/images/km_pp.jpg" // Chemin de votre image
        alt="km_pp"             // Texte alternatif pour l'accessibilité
        layout="fill"           // Pour que l'image remplisse le conteneur parent
        objectFit="cover"       // Pour que l'image couvre l'espace sans être déformée
        priority                // Charge l'image en priorité (pour le LCP)
      />
       
      <div className={styles.heroContent}>
        <h1>KM SHOP</h1>
        <p>Plus qu'une boutique, une Expérience.</p>
        {/* Appel de handleBuyClick sans argument */}
        <button className={styles.heroButton} onClick={handleBuyClick}>Acheter</button>
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
                {/* Icône de bulle de dialogue SVG */}
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 2H4C2.9 2 2 2.9 2 4v18l4-4h14c1.1 0 2-0.9 2-2V4C22 2.9 21.1 2 20 2zM6 14h12v2H6v-2z" fill="#007bff"/>
                </svg>
              </div>
              <h3 className={styles.modalTitle}>CONTACTEZ-NOUS</h3>
              {/* Le message personnalisé pour la modale, utilise le titre fixe du hero */}
              <p className={styles.modalDescription}>Vous êtes intéressé(e) par **{heroItemTitle}**. Avec qui souhaitez-vous discuter ?</p>
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

export default HeroSection;