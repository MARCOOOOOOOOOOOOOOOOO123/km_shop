import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Use Link for internal navigation
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Section 1: Logo & Social Media */}
        <div className={styles.footerSection}>
          <div className={styles.logoContainer}>
            <Image src="/nike-logo.svg" alt="KM Shop Logo" width={80} height={30} />
          </div>
          <p className={styles.tagline}>
            Votre passion, votre style. Équipez-vous.
          </p>
          <div className={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Image src="/icons/facebook.svg" alt="Facebook" width={24} height={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Image src="/icons/instagram.svg" alt="Instagram" width={24} height={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Image src="/icons/twitter.svg" alt="Twitter" width={24} height={24} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <Image src="/icons/youtube.svg" alt="YouTube" width={24} height={24} />
            </a>
          </div>
        </div>

        {/* Section 2: Quick Links (Ma Boutique) */}
        <div className={styles.footerSection}>
          <h3>Ma Boutique</h3>
          <ul className={styles.footerLinks}>
            <li><Link href="/nouveautes">Nouveautés</Link></li>
            <li><Link href="/promotions">Promotions</Link></li>
            <li><Link href="/homme">Homme</Link></li>
            <li><Link href="/femme">Femme</Link></li>
            <li><Link href="/enfant">Enfant</Link></li>
            <li><Link href="/collections">Collections</Link></li>
          </ul>
        </div>

        {/* Section 3: Customer Service */}
        <div className={styles.footerSection}>
          <h3>Service Client</h3>
          <ul className={styles.footerLinks}>
            <li><Link href="/contact">Contactez-nous</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/aide">Aide</Link></li>
            <li><Link href="/livraison">Livraison & Retours</Link></li>
            <li><Link href="/guide-des-tailles">Guide des Tailles</Link></li>
          </ul>
        </div>

        {/* Section 4: Legal & Information */}
        <div className={styles.footerSection}>
          <h3>Informations Légales</h3>
          <ul className={styles.footerLinks}>
            <li><Link href="/mentions-legales">Mentions Légales</Link></li>
            <li><Link href="/conditions-generales-vente">Conditions Générales de Vente</Link></li>
            <li><Link href="/politique-confidentialite">Politique de Confidentialité</Link></li>
            <li><Link href="/gestion-cookies">Gestion des Cookies</Link></li>
          </ul>
        </div>
      </div>

      {/* Payment Methods & Copyright */}
      <div className={styles.bottomBar}>
        <div className={styles.paymentMethods}>
          <Image src="/icons/visa.svg" alt="Visa" width={40} height={25} />
          <Image src="/icons/mastercard.svg" alt="Mastercard" width={40} height={25} />
          <Image src="/icons/paypal.svg" alt="PayPal" width={40} height={25} />
          {/* Add more payment icons as needed */}
        </div>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} KM Shop. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;