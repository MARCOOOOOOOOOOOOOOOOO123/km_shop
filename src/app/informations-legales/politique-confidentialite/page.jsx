// src/app/politique-confidentialite/page.jsx
import React from 'react';
import Link from 'next/link';
import styles from '@/styles/base-page.module.css';

const PolitiqueConfidentialitePage = () => {
  return (
    <div className={styles.pageContainer}>

<div className={styles.backToHomeButtonContainer}>
        <Link href="/" className={styles.primaryButton}>
          Retour à l'accueil
        </Link>
      </div>

      <h1 className={styles.pageTitle}>Politique de Confidentialité</h1>

      <div className={styles.pageContent}>
        <p>
          La présente Politique de Confidentialité décrit comment KM Shop (ci-après "nous", "notre", "nos")
          collecte, utilise et protège les informations personnelles que vous nous fournissez lorsque vous
          visitez et utilisez notre site web www.kmshop.com.
        </p>

        <h2>1. Collecte des Informations Personnelles</h2>
        <p>Nous collectons les types d'informations personnelles suivants lorsque vous :</p>
        <ul>
    
          <li><strong>Naviguez sur le site :</strong> Adresse IP, type de navigateur, pages visitées, temps de visite (via cookies et technologies similaires).</li>
          <li><strong>Nous contactez :</strong> Nom, adresse e-mail, contenu du message (via message pop-up de contact, e-mail, WhatsApp).</li>
        </ul>

        <h2>2. Utilisation des Informations Collectées</h2>
        <p>Nous utilisons vos informations personnelles pour :</p>
        <ul>
          <li>Gérer vos commandes et livraisons.</li>
          <li>Personnaliser votre expérience d'achat.</li>
          <li>Améliorer notre site web et nos services.</li>
          <li>Vous envoyer des communications marketing (avec votre consentement).</li>
          <li>Répondre à vos demandes et questions.</li>
          <li>Assurer la sécurité de notre site et prévenir la fraude.</li>
          <li>Respecter nos obligations légales.</li>
        </ul>

        <h2>3. Partage des Informations</h2>
        <p>
          Nous ne vendons, n'échangeons ni ne louons vos informations personnelles à des tiers.
          Cependant, nous pouvons partager vos informations avec :
        </p>
        <ul>
          <li>Des prestataires de services tiers (ex: services de livraison, ...)
              qui nous aident à opérer notre entreprise, sous contrat et dans le respect de cette politique.</li>
          <li>Les autorités compétentes si requis par la loi.</li>
        </ul>

        <h2>4. Vos Droits</h2>
        <p>Conformément aux réglementations applicables (ex: RGPD), vous disposez des droits suivants concernant vos données personnelles :</p>
        <ul>
          <li><strong>Droit d'accès :</strong> Obtenir une copie des données que nous détenons sur vous.</li>
          <li><strong>Droit de rectification :</strong> Demander la correction de données inexactes.</li>
          <li><strong>Droit à l'effacement ("droit à l'oubli") :</strong> Demander la suppression de vos données.</li>
          <li><strong>Droit à la limitation du traitement :</strong> Limiter la manière dont nous utilisons vos données.</li>
          <li><strong>Droit à la portabilité des données :</strong> Recevoir vos données dans un format structuré et couramment utilisé.</li>
          <li><strong>Droit d'opposition :</strong> Vous opposer au traitement de vos données pour certaines finalités.</li>
        </ul>
        <p>
          Pour exercer ces droits, veuillez nous contacter à <a href="mailto:marcemaleu@gmail.com" className={styles.pageContent.a}>marcemaleu@gmail.com,</a> <a href="arkevin62@gmail.com" className={styles.pageContent.a}>arkevin62@gmail.com</a><br />
        </p>

        <h2>5. Sécurité des Données</h2>
        <p>
          Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos
          données personnelles contre l'accès non autorisé, l'altération, la divulgation ou la destruction.
        </p>

        <h2>6. Cookies</h2>
        <p>
          Notre site utilise des cookies pour améliorer votre expérience. Pour plus d'informations sur les cookies
          et comment les gérer, veuillez consulter notre page dédiée à la <Link href="/informations-legales/gestion-cookies" className={styles.pageContent.a}>Gestion des Cookies</Link>.
        </p>

        
      </div>
    </div>
  );
};

export default PolitiqueConfidentialitePage;