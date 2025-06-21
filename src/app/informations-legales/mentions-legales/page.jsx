// src/app/mentions-legales/page.jsx
import React from 'react';
import styles from '@/styles/base-page.module.css';

const MentionsLegalesPage = () => {
  return (
    <div className={styles.pageContainer}>


<div className={styles.backToHomeButtonContainer}>
        <Link href="/" className={styles.primaryButton}>
          Retour à l'accueil
        </Link>
      </div>

      <h1 className={styles.pageTitle}>Mentions Légales</h1>

      <div className={styles.pageContent}>
        <p>
          Pour la confiance en l'économie numérique,
          il est précisé aux utilisateurs du site KM Shop l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi.
        </p>

        <h2>Éditeur du Site</h2>
        <p>
          Nom de la Société : <strong>KM Shop</strong><br />
          Forme juridique : [SARL, EURL, Auto-entrepreneur, Association, etc.]<br />
          Adresse du groupe : <a href="https://chat.whatsapp.com/IOGOwJSxuO4Kjq4oTCJ56i" className={styles.pageContent.a}>Accédez au groupe !</a><br />
          Adresse e-mail : <a href="marcemaleu@gmail.com" className={styles.pageContent.a}>marcemaleu@gmail.com,</a> <a href="arkevin62@gmail.com" className={styles.pageContent.a}>arkevin62@gmail.com</a><br />
          Numéro de téléphone : 698053784, 699471223
        </p>

        <h2>Directeur de la Publication</h2>
        <p>
          Nom : EMALEU Marc<br />
          Contact : <a href="marcemaleu@gmail.com" className={styles.pageContent.a}>marcemaleu@gmail.com,</a> <a href="https://wa.me/${yourWhatsappNumber}?text=${encodeURIComponent(whatsappMessage)}" className={styles.pageContent.a}>698053784</a>
        </p>

        
        <p>
          <em>
           <strong>Note importante :</strong> Les informations ci-dessus sont des données réelles concernant
    notre entité, KM Shop. Nous les mettons à votre disposition dans un objectif de totale transparence,
    conformément à nos obligations légales, et pour faciliter une communication et des interactions
    légitimes avec nos services.
    <br />
    **Il est impératif de ne pas les utiliser à des fins malsaines, illégales, frauduleuses, de
    démarchage commercial non sollicité (spam), de harcèlement, ou pour toute autre activité
    qui contreviendrait à l'éthique, à nos conditions d'utilisation ou à la législation en vigueur.**
    Toute utilisation abusive de ces informations est formellement interdite et pourra entraîner
    des poursuites judiciaires rigoureuses, conformément aux lois applicables.
          </em>
        </p>
      </div>
    </div>
  );
};

export default MentionsLegalesPage;