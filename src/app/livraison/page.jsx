// src/app/livraison/page.jsx
import React from 'react';
import Link from 'next/link';
import styles from '@/styles/base-page.module.css';

const LivraisonRetoursPage = () => {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Livraison & Retours</h1>

      <div className={styles.pageContent}>
        <p>
          Chez KM Shop, nous nous engageons à vous offrir une expérience d'achat fluide,
          de la commande à la réception de vos articles. Voici nos politiques de
          livraison et de retour détaillées.
        </p>

        <h2>1. Livraison</h2>
        <h3>Délais de livraison</h3>
        <ul>
          <li><strong>Livraison Standard :</strong> 3 à 7 jours ouvrables (peut varier selon la destination).</li>
          <li><strong>Livraison Express :</strong> 1 à 3 jours ouvrables (disponible pour certaines régions, avec frais supplémentaires).</li>
          <li><strong>Articles Personnalisés :</strong> Veuillez prévoir un délai supplémentaire de 5 à 10 jours ouvrables pour la fabrication avant l'expédition.</li>
        </ul>
        <p>
          Les délais de livraison sont des estimations et peuvent être affectés par les jours fériés,
          les conditions météorologiques ou les retards des transporteurs.
        </p>

        <h3>Frais de livraison</h3>
        <ul>
          <li>Les frais de livraison sont calculés au moment du paiement en fonction du poids,
              de la taille de votre commande et de votre adresse de livraison.</li>
          <li>La livraison est <strong>gratuite pour toute commande supérieure à [montant, ex: 100€]</strong>.</li>
        </ul>

        <h3>Suivi de commande</h3>
        <p>
          Une fois votre commande expédiée, vous recevrez un email de confirmation contenant
          un numéro de suivi. Vous pourrez suivre l'état de votre colis directement sur le site du transporteur.
        </p>

        <h2>2. Retours & Échanges</h2>
        <p>
          Votre satisfaction est notre priorité. Si un article ne vous convient pas,
          vous disposez d'un délai de retour.
        </p>

        <h3>Politique de retour</h3>
        <ul>
          <li>Vous avez <strong>14 jours</strong> à compter de la date de réception de votre commande
              pour effectuer un retour.</li>
          <li>Les articles doivent être retournés dans leur état d'origine, non portés, non lavés,
              avec toutes les étiquettes et dans leur emballage d'origine.</li>
          <li>Les articles personnalisés (chaînes, bijoux, etc.) ne sont pas éligibles au retour,
              sauf en cas de défaut de fabrication avéré.</li>
          <li>Les articles en promotion ou en liquidation peuvent être soumis à des conditions
              de retour différentes, spécifiées sur la page du produit.</li>
        </ul>

        <h3>Procédure de retour</h3>
        <ol>
          <li><strong>Contactez-nous :</strong> Envoyez un email à <a href="mailto:retours@kmshop.com" className={styles.pageContent.a}>retours@kmshop.com</a>
              ou contactez-nous via WhatsApp pour signaler votre intention de retourner un article.
              Indiquez votre numéro de commande et le(s) article(s) concerné(s).</li>
          <li><strong>Préparez votre colis :</strong> Emballez soigneusement l'article dans son emballage d'origine.</li>
          <li><strong>Expédition :</strong> Nous vous fournirons les instructions d'expédition. Les frais
              de retour sont à la charge du client, sauf en cas d'article défectueux ou d'erreur de notre part.</li>
          <li><strong>Remboursement/Échange :</strong> Une fois l'article reçu et inspecté, le remboursement
              sera traité dans un délai de 5 à 10 jours ouvrables sur le mode de paiement original.
              Pour un échange, le nouvel article sera expédié après réception et vérification du retour.</li>
        </ol>

        <h3>Articles défectueux ou non conformes</h3>
        <p>
          Si vous recevez un article défectueux ou non conforme à votre commande, veuillez nous
          contacter immédiatement. Nous organiserons le retour et l'échange ou le remboursement
          à nos frais.
        </p>

        <p className={styles.bottomNote}>
          Pour toute question supplémentaire concernant la livraison ou les retours,
          n'hésitez pas à <Link href="/contact" className={styles.pageContent.a}>nous contacter</Link>.
        </p>
      </div>
    </div>
  );
};

export default LivraisonRetoursPage;