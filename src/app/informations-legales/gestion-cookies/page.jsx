// src/app/gestion-cookies/page.jsx
import React from 'react';
import Link from 'next/link';
import styles from '@/styles/base-page.module.css';

const GestionCookiesPage = () => {
  return (
    <div className={styles.pageContainer}>

        <div className={styles.backToHomeButtonContainer}>
        <Link href="/" className={styles.primaryButton}>
          Retour à l'accueil
        </Link>
      </div>

      <h1 className={styles.pageTitle}>Gestion des Cookies</h1>

      <div className={styles.pageContent}>
        <p>
          Cette page vous informe sur l'utilisation des cookies et autres traceurs sur notre site web
          www.kmshop.com et vous explique comment vous pouvez les gérer.
        </p>

        <h2>1. Qu'est-ce qu'un cookie ?</h2>
        <p>
          Un cookie est un petit fichier texte stocké sur votre terminal (ordinateur, tablette, smartphone)
          lorsque vous visitez un site web. Il permet au site de mémoriser certaines informations vous concernant,
          comme vos préférences, les articles de votre panier, ou de collecter des statistiques de navigation.
        </p>

        <h2>2. Types de cookies utilisés</h2>
        <p>Nous utilisons différents types de cookies pour des finalités variées :</p>
        <h3>Cookies strictement nécessaires</h3>
        <p>
          Ces cookies sont indispensables au bon fonctionnement du site et ne peuvent pas être désactivés
          dans nos systèmes. Ils sont généralement établis en réponse à des actions que vous effectuez
          qui constituent une demande de services, comme la définition de vos préférences de confidentialité,
          la connexion ou le remplissage de formulaires.
        </p>
        <ul>
          <li>Exemples : cookies de session, cookies de visites.</li>
        </ul>

        <h3>Cookies de performance (Analytiques)</h3>
        <p>
          Ces cookies nous permettent de compter les visites et les sources de trafic afin de mesurer
          et d'améliorer les performances de notre site. Ils nous aident à savoir quelles pages sont
          les plus et les moins populaires et à voir comment les visiteurs se déplacent sur le site.
          Les informations collectées par ces cookies sont agrégées et donc anonymisées.
        </p>
        <ul>
          <li>Exemples : Google Analytics, etc.</li>
        </ul>

        <h3>Cookies de fonctionnalité</h3>
        <p>
          Ces cookies permettent au site de fournir des fonctionnalités et une personnalisation améliorées.
          Ils peuvent être définis par nous ou par des fournisseurs tiers dont nous avons ajouté les services
          à nos pages.
        </p>
        <ul>
          <li>Exemples : mémorisation de la langue, mémorisation des préférences d'affichage.</li>
        </ul>

        <h3>Cookies de ciblage / Publicitaires</h3>
        <p>
          Ces cookies peuvent être définis par nos partenaires publicitaires. Ils peuvent être utilisés
          par ces sociétés pour créer un profil de vos intérêts et vous montrer des publicités pertinentes
          sur d'autres sites. Ils ne stockent pas directement des informations personnelles, mais sont
          basés sur l'identification unique de votre navigateur et de votre appareil Internet.
        </p>
        <ul>
          <li>Exemples : cookies de retargeting, cookies des réseaux sociaux.</li>
        </ul>

        <h2>3. Votre Consentement</h2>
        <p>
          Lors de votre première visite sur notre site, un bandeau d'information sur les cookies s'affiche
          pour vous demander votre consentement. Vous pouvez à tout moment modifier vos préférences via
          la section ci-dessous ou les paramètres de votre navigateur.
        </p>

        <h2>4. Comment Gérer vos Cookies ?</h2>
  

        <h3> Via les paramètres de votre navigateur</h3>
        <p>
          Vous pouvez configurer votre navigateur pour accepter ou refuser tous les cookies, ou pour être
          alerté lorsqu'un cookie est envoyé. La désactivation de certains cookies peut affecter la
          fonctionnalité du site.
        </p>
        <ul>
          <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className={styles.pageContent.a}>Gérer les cookies sur Chrome</a></li>
          <li><a href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies-preferences" target="_blank" rel="noopener noreferrer" className={styles.pageContent.a}>Gérer les cookies sur Firefox</a></li>
          <li><a href="https://support.microsoft.com/fr-fr/windows/supprimer-et-g%C3%A9rer-les-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className={styles.pageContent.a}>Gérer les cookies sur Edge / Internet Explorer</a></li>
          <li><a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className={styles.pageContent.a}>Gérer les cookies sur Safari</a></li>
        </ul>

        
      </div>
    </div>
  );
};

export default GestionCookiesPage;