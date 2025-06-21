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
            <Image src="/images/logo_km_shopppp.jpg" alt="KM Shop Logo" width={80} height={80} />
          </div>
          <p className={styles.tagline}>
            Votre passion, votre style. Équipez-vous.
          </p>
          <div className={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Image src="/images/facebook.png" alt="Facebook" width={24} height={24} />
            </a>
            <a href="https://www.instagram.com/k_m_shop237?igsh=cnJnczk2N251d28w" target="_blank" rel="noopener noreferrer">
              <Image src="/images/insta.jpeg" alt="Instagram" width={25} height={25} />
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
            <li><Link href="/collections">Collections</Link></li>
          </ul>
        </div>

        {/* Section 3: Customer Service */}
        <div className={styles.footerSection}>
          <h3>Service Client</h3>
          <ul className={styles.footerLinks}>
            <li><Link href="/service-client/contact">Contactez-nous</Link></li>
            <li><Link href="/service-client/faq">FAQ</Link></li>
            <li><Link href="/service-client/aide">Aide</Link></li>
            <li><Link href="/service-client/livraison">Livraison & Retours</Link></li>
            <li><Link href="/service-client/guide-des-tailles">Guide des tailles</Link></li>
          </ul>
        </div>

        {/* Section 4: Legal & Information */}
        <div className={styles.footerSection}>
          <h3>Informations Légales</h3>
          <ul className={styles.footerLinks}>
            <li><Link href="/informations-legales/mentions-legales">Mentions Légales</Link></li>
            <li><Link href="/informations-legales/conditions-generales-vente">Conditions Générales de Vente</Link></li>
            <li><Link href="/informations-legales/politique-confidentialite">Politique de Confidentialité</Link></li>
            <li><Link href="/informations-legales/gestion-cookies">Gestion des Cookies</Link></li>
          </ul>
        </div>
      </div>

      {/* Payment Methods & Copyright */}
      <div className={styles.bottomBar}>
     
        <p className={styles.copyright}>
          © {new Date().getFullYear()} KM Shop. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;