"use client";
import React, { useState, useEffect, useMemo } from 'react'; // Importe useMemo
import Image from 'next/image';
import styles from '@/styles/AthleteShowcaseSection.module.css';

const AthleteShowcaseSection = () => {
  const [showWhatsappModal, setShowWhatsappModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // État pour l'index de l'image actuelle

  // Tableau des images pour le carrousel
  // TU PEUX AJOUTER/MODIFIER TES IMAGES ICI
  const images = [
    { src: '/images/montres/WhatsApp Image 2025-06-21 à 04.27.44_f9a31268.jpg', alt: 'Montre Bracelet Cuir' },
    { src: '/images/montres/WhatsApp Image 2025-06-21 à 04.27.45_09689f29.jpg', alt: 'Montre Classique Acier' },
    { src: '/images/pochettes/pochettes.jpg', alt: 'Pochette de Soirée Élégante' },
    { src: '/images/pochettes/WhatsApp Image 2025-06-21 à 04.37.16_19ec404e.jpg', alt: 'Pochette de Voyage Compacte' },
    { src: '/images/LEDS/WhatsApp Image 2025-06-21 à 03.53.34_73859d67.jpg', alt: 'Ruban LED Multicolore' },
    { src: '/images/LEDS/WhatsApp Image 2025-06-21 à 04.22.21_7bd94563.jpg', alt: 'Lampe LED Design' },
    { src: '/images/Maillots/WhatsApp Image 2025-06-21 à 04.04.22_996a5280.jpg', alt: 'Maillot de Bain Homme Sport' },
    { src: '/images/Maillots/WhatsApp Image 2025-06-21 à 04.04.57_9789767a.jpg', alt: 'Maillot de Bain Femme Floral' },
    { src: '/images/Vetements/WhatsApp Image 2025-06-21 à 04.13.51_18a6ad31.jpg', alt: 'Vêtement Sportswear T-shirt' },
    { src: '/images/Vetements/WhatsApp Image 2025-06-21 à 04.13.51_240848f2.jpg', alt: 'Vêtement Casual Chemise' },
  ];

  const baseUrl = 'https://km-shop.vercel.app'; // TRÈS IMPORTANT : URL de ton site déployé

  const yourWhatsappNumber = '237698053784';
  const friendWhatsappNumber = '237699471223';

  // Définir l'article actuellement affiché dans le carrousel
  const currentFeaturedItem = images[currentImageIndex];

  // Utilise useMemo pour recalculer le message WhatsApp et les liens UNIQUEMENT si l'image actuelle change
  const { whatsappMessage, yourWhatsappLink, friendWhatsappLink } = useMemo(() => {
    // Le titre de l'article pour le message WhatsApp sera le alt text de l'image actuelle
    const itemTitle = currentFeaturedItem.alt;
    const itemImageSrc = currentFeaturedItem.src;
    const itemImageUrl = `${baseUrl}${itemImageSrc}`;

    const message = `Bonjour, je suis intéressé(e) par l'article "${itemTitle}" (voir l'image : ${itemImageUrl}). J'aimerais en savoir plus.`;

    return {
      whatsappMessage: message,
      yourWhatsappLink: `https://wa.me/${yourWhatsappNumber}?text=${encodeURIComponent(message)}`,
      friendWhatsappLink: `https://wa.me/${friendWhatsappNumber}?text=${encodeURIComponent(message)}`,
    };
  }, [currentImageIndex, currentFeaturedItem, baseUrl, yourWhatsappNumber, friendWhatsappNumber]); // Dépendances de useMemo


  // useEffect pour le défilement automatique du carrousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % images.length
      );
    }, 4000); // Change d'image toutes les 5 secondes (5000 ms)

    return () => clearInterval(interval);
  }, [images.length]);

  // Fonction pour ouvrir la modale
  const handleBuyClick = () => {
    setShowWhatsappModal(true);
  };

  // Fonction pour fermer la modale
  const closeWhatsappModal = () => {
    setShowWhatsappModal(false);
  };

  return (
    <section className={styles.athleteShowcaseSection}>
      {/* Utilise l'image courante du carrousel */}
      <Image
        src={currentFeaturedItem.src}
        alt={currentFeaturedItem.alt}
        fill
        sizes="100vw"
        style={{ objectFit: 'cover' }}
        priority // Charger la première image en priorité (celle affichée au chargement)
        className={styles.carouselImage}
      />
      <div className={styles.contentOverlay}>
        <p className={styles.tagline}></p>
        {/* Le titre H2 peut rester générique ou être rendu dynamique si l'alt text est court et pertinent */}
        <h2 className={styles.athleteName}>{currentFeaturedItem.alt.includes('Montre') ? 'Montres' : currentFeaturedItem.alt.includes('Pochette') ? 'Pochettes' : currentFeaturedItem.alt.includes('LED') ? 'LEDS' : currentFeaturedItem.alt.includes('Maillot') ? 'Maillots' : currentFeaturedItem.alt.includes('Vêtement') ? 'Vêtements' : 'Notre Collection'}</h2>
        <button className={styles.actionButton} onClick={handleBuyClick}>Acheter</button>
      </div>

      {/* LA MODALE WHATSAPP */}
      {showWhatsappModal && (
        <div className={styles.whatsappModalOverlay} onClick={closeWhatsappModal}>
          <div className={styles.whatsappModalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeModalButton} onClick={closeWhatsappModal}>
              &times;
            </button>
            <div className={styles.modalHeader}>
              <div className={styles.iconCircle}>
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 2H4C2.9 2 2 2.9 2 4v18l4-4h14c1.1 0 2-0.9 2-2V4C22 2.9 21.1 2 20 2zM6 14h12v2H6v-2z" fill="#007bff"/>
                </svg>
              </div>
              <h3 className={styles.modalTitle}>CONTACTEZ-NOUS</h3>
              {/* Le message personnalisé pour la modale utilise le titre de l'image actuelle */}
              <p className={styles.modalDescription}>Vous êtes intéressé(e) par **{currentFeaturedItem.alt}**. Avec qui souhaitez-vous discuter ?</p>
            </div>
            <div className={styles.whatsappButtonsContainer}>
              <a
                href={yourWhatsappLink} // Lien dynamique
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactButton}
                onClick={closeWhatsappModal}
              >
                Contacter Marco !
              </a>
              <a
                href={friendWhatsappLink} // Lien dynamique
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