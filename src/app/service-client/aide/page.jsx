// src/app/aide/page.jsx
import React from 'react';
import Link from 'next/link';
import styles from '@/styles/base-page.module.css';

const AidePage = () => {
  return (
    <div className={styles.pageContainer}>

      
<div className={styles.backToHomeButtonContainer}>
        <Link href="/" className={styles.primaryButton}>
          Retour à l'accueil
        </Link>
      </div>
      <h1 className={styles.pageTitle}>Centre d'Aide</h1>

      <div className={styles.pageContent}>
        <p>
          Bienvenue dans notre Centre d'Aide ! Que vous ayez des questions sur une commande,
          nos produits ou nos services, vous trouverez ici les informations nécessaires pour
          vous guider.
        </p>

        {/* Section de recherche (simulée) */}
        <div className={styles.searchSection}>
          <input
            type="text"
            placeholder="Rechercher une question ou un sujet..."
            className={styles.searchInput}
          />
          <button className={styles.searchButton}>Rechercher</button>
        </div>

        <h2>Sujets Fréquents</h2>
        <ul className={styles.helpTopics}>
          <li>
            <Link href="/faq" className={styles.helpLink}>
              <span className={styles.icon}>❓</span> Questions Fréquentes (FAQ)
            </Link>
            <p className={styles.topicDescription}>Trouvez des réponses immédiates à vos interrogations courantes.</p>
          </li>
          <li>
            <Link href="/livraison" className={styles.helpLink}>
              <span className={styles.icon}>🚚</span> Livraison & Retours
            </Link>
            <p className={styles.topicDescription}>Informations sur les délais, coûts et procédures de retour.</p>
          </li>
          <li>
            <Link href="/guide-des-tailles" className={styles.helpLink}>
              <span className={styles.icon}>📏</span> Guide des Tailles
            </Link>
            <p className={styles.topicDescription}>Aide pour choisir la taille parfaite de vos vêtements et chaussures.</p>
          </li>
          <li>
            <Link href="/contact" className={styles.helpLink}>
              <span className={styles.icon}>💬</span> Contactez-nous
            </Link>
            <p className={styles.topicDescription}>Si vous ne trouvez pas votre réponse, contactez notre équipe.</p>
          </li>
          <li>
            <Link href="/politique-confidentialite" className={styles.helpLink}>
              <span className={styles.icon}>🔒</span> Politique de Confidentialité
            </Link>
            <p className={styles.topicDescription}>Découvrez comment nous protégeons vos données.</p>
          </li>
          {/* Ajoutez d'autres sujets pertinents */}
        </ul>
      </div>
    </div>
  );
};

export default AidePage;