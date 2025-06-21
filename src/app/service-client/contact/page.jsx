// src/app/contact/page.jsx
import React from 'react';
import Link from 'next/link';
import styles from '@/styles/base-page.module.css'; 

const ContactPage = () => {
  const yourWhatsappNumber = '237698053784';
  const friendWhatsappNumber = '237699471223';

  const whatsappMessage = encodeURIComponent("Bonjour KM Shop, j'aimerais vous contacter concernant une question générale.");

  return (
    // Utilisez styles pour les classes communes
    <div className={styles.pageContainer}>

      
<div className={styles.backToHomeButtonContainer}>
        <Link href="/" className={styles.primaryButton}>
          Retour à l'accueil
        </Link>
      </div>
      <h1 className={styles.pageTitle}>Contactez-nous</h1>

      <div className={styles.pageContent}>
        <p>
          Nous sommes là pour répondre à toutes vos questions ! N'hésitez pas à nous contacter
          via les méthodes ci-dessous.
        </p>

        <h2>Par WhatsApp</h2>
        <p>C'est le moyen le plus rapide de nous joindre pour toute question sur nos produits, commandes ou autres demandes.</p>
        <div className={styles.whatsappButtons}>
          <a
            href={`https://wa.me/${yourWhatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            // Utilisez styles pour primaryButton, puis styles pour whatsappButton
            className={`${styles.primaryButton} ${styles.whatsappButton}`}
          >
            Contacter Marco
          </a>
          <a
            href={`https://wa.me/${friendWhatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.primaryButton} ${styles.whatsappButton}`}
          >
            Contacter Arnold Kevin
          </a>
        </div>
        <p className={styles.whatsappNote}>
          Cliquez sur le bouton ci-dessus pour démarrer une conversation WhatsApp.
        </p>

        <h2>Par Email</h2>
        <p>
          Pour des demandes moins urgentes ou des questions détaillées, vous pouvez nous envoyer un email à :
          <br />
          <a href="arkevin62@gmail.com" className={styles.pageContent.a}>arkevin62@gmail.com</a> <br />
          <a href="mailto:marcemaleu@gmail.com" className={styles.pageContent.a}>marcemaleu@gmail.com</a>
        </p>

        <h2>Adresse et Horaires</h2>
        <p>
          Bien que notre boutique soit principalement en ligne, nous sommes disponibles pour vous
          assister pendant nos heures d'ouverture :
        </p>
        <ul>
          <li><strong>Du Lundi au Vendredi :</strong> 9h00 - 18h00 (heure locale)</li>
          <li><strong>Samedi :</strong> 10h00 - 14h00 (heure locale)</li>
          <li><strong>Dimanche :</strong> Fermé</li>
        </ul>

        <h2>Nous Trouver sur les Réseaux Sociaux</h2>
        <p>
          Suivez-nous sur nos réseaux sociaux pour les dernières nouveautés et offres spéciales !
        </p>
        <p>
          <Link href="https://www.instagram.com/k_m_shop237?igsh=cnJnczk2N251d28w" target="_blank" rel="noopener noreferrer" className={styles.pageContent.a}> Instagram</Link>
        </p>
      </div>
    </div>
  );
};

export default ContactPage;