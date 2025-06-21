"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/FeaturedProductsGrid.module.css';

const FeaturedProductsGrid = () => {
  const [showWhatsappModal, setShowWhatsappModal] = useState(false);
  // Renommé pour être plus sémantique par rapport aux "produits"
  const [selectedProduct, setSelectedProduct] = useState(null);

  const baseUrl = 'https://km-shop.vercel.app';

  const yourWhatsappNumber = '237698053784';
  const friendWhatsappNumber = '237699471223';

  // Le handler reçoit maintenant 'product'
  const handleBuyClick = (product) => {
    setSelectedProduct(product); // Stocke le produit cliqué
    setShowWhatsappModal(true);
  };

  const closeWhatsappModal = () => {
    setShowWhatsappModal(false);
    setSelectedProduct(null); // Réinitialise le produit sélectionné
  };

  // Les messages WhatsApp sont construits à partir de 'selectedProduct'
  const currentImageUrl = selectedProduct ? `${baseUrl}${selectedProduct.imageSrc}` : '';
  const currentItemTitle = selectedProduct ? selectedProduct.title : 'cet article';
  const whatsappMessage = `Bonjour, je suis intéressé(e) par ${currentItemTitle} (voir l'image : ${currentImageUrl}). J'aimerais en savoir plus.`;

  const yourWhatsappLink = `https://wa.me/${yourWhatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const friendWhatsappLink = `https://wa.me/${friendWhatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const products = [
    {
      tagline: 'Nike',
      title: 'Just Do It !',
      imageSrc: '/images/nike-prism-pack-crampons-1.jpg',
      linkHref: '#',
    },
    {
      tagline: 'Adidas',
      title: 'Impossible Is Nothing !',
      imageSrc: '/images/adidas.webp',
      linkHref: '#',
    },
    {
      tagline: 'Tennis Nike',
      title: 'Libère ta foulée',
      imageSrc: '/images/checklist-randonnée -les-essentiels-à-emporter.avif',
      linkHref: '#',
    },
    {
      tagline: 'Tennis Adidas',
      title: 'Rends ton footing inoubliable',
      imageSrc: '/images/adidas_tennis.jpg',
      linkHref: '#',
    }
  ];

  return (
    <section className={styles.featuredProductsGrid}>
      {products.map((product) => (
        <div key={product.title} className={styles.productCard}>
          <Image
            src={product.imageSrc}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: 'cover' }}
          />
          <div className={styles.cardContent}>
            <p className={styles.cardTagline}>{product.tagline}</p>
            <h2 className={styles.cardTitle}>{product.title}</h2>
            {/* CORRECTION ICI : passer 'product' à handleBuyClick */}
            <button className={styles.cardButton} onClick={() => handleBuyClick(product)}>Acheter</button>
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
                {/* Icône de bulle de dialogue SVG */}
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  {/* Chemin de l'icône de message/bulle de dialogue */}
                  <path d="M20 2H4C2.9 2 2 2.9 2 4v18l4-4h14c1.1 0 2-0.9 2-2V4C22 2.9 21.1 2 20 2zM6 14h12v2H6v-2z" fill="#007bff"/>
                </svg>
              </div>
              <h3 className={styles.modalTitle}>CONTACTEZ-NOUS</h3>
              {/* Le message personnalisé pour la modale, utilise le titre du produit sélectionné */}
              {selectedProduct && (
                <p className={styles.modalDescription}>Vous êtes intéressé(e) par **{selectedProduct.title}**. Avec qui souhaitez-vous discuter ?</p>
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

export default FeaturedProductsGrid;