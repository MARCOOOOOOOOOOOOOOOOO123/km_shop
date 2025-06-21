// src/app/conditions-generales-vente/page.jsx
import React from 'react';
import Link from 'next/link';
import styles from '@/styles/base-page.module.css';

const CGVPage = () => {
  return (
    <div className={styles.pageContainer}>

<div className={styles.backToHomeButtonContainer}>
        <Link href="/" className={styles.primaryButton}>
          Retour à l'accueil
        </Link>
      </div>

      <h1 className={styles.pageTitle}>Conditions Générales de Vente (CGV)</h1>

      <div className={styles.pageContent}>
        <p>
          Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre la société KM Shop
          et ses clients. Toute commande passée sur le site www.kmshop.com implique l'acceptation sans réserve par le client
          des présentes CGV.
        </p>

        <h2>Article 1 : Objet</h2>
        <p>
          Les présentes CGV définissent les droits et obligations des parties dans le cadre de la vente en ligne de biens
          proposés par KM Shop au Client.
        </p>

        <h2>Article 2 : Produits</h2>
        <p>
          Les produits proposés sont ceux qui figurent dans le catalogue publié sur le site de KM Shop. Ces produits sont
          proposés dans la limite des stocks disponibles. Chaque produit est accompagné d'un descriptif établi par le Vendeur.
          Les photographies du catalogue sont les plus fidèles possible mais ne peuvent assurer une similitude parfaite
          avec le produit offert, notamment en ce qui concerne les couleurs.
        </p>

        <h2>Article 3 : Prix</h2>
        <p>
          Les prix des produits sont indiqués en FCFA toutes taxes comprises (TTC) hors frais de
          traitement et d'expédition. KM Shop se réserve le droit de modifier ses prix à tout moment, étant toutefois entendu
          que le prix figurant au catalogue le jour de la commande sera le seul applicable au Client.
        </p>

        <h2>Article 4 : Commande</h2>
        <ol>
          <li>Le Client valide sa commande lorsqu'il active le dit de manière explicite au compte marchand.</li>
          <li>KM Shop confirme la commande par courrier électronique ou par message Whatsapp, cette information reprend notamment tous les éléments de la commande et le droit de rétractation du Client.</li>
          <li>Les données enregistrées par KM Shop constituent la preuve de la nature, du contenu et de la date de la commande.</li>
        </ol>

        <h2>Article 5 : Modalités de Paiement</h2>
        <p>
          Le paiement est exigible immédiatement à la commande. Le Client peut effectuer le règlement par Orange Money, Mobile Money (Très bientôt disponible), carte bancaire (Très bientôt disponible). Les paiements en ligne sont sécurisés.
        </p>

        <h2>Article 6 : Livraison</h2>
        <p>
          Les livraisons sont faites à l'adresse indiquée par le client. Les risques sont à la charge du Client
          à compter du moment où les produits ont quitté les locaux de KM Shop. Pour plus de détails, consultez notre page
          dédiée à la <Link href="/service-client/livraison" className={styles.pageContent.a}>Livraison & Retours</Link>.
        </p>

        <h2>Article 7 : Rétractation</h2>
        <p>
          Le Client dispose d'un délai de 14 jours à compter de la réception
          de sa commande pour exercer son droit de rétractation. Les conditions et modalités sont détaillées sur notre page
          <Link href="/service-client/livraison" className={styles.pageContent.a}> Livraison & Retours</Link>.
        </p>

        <h2>Article 8 : Garanties</h2>
        <p>
          Tous les produits fournis par KM Shop bénéficient de la garantie légale de conformité et de la garantie des vices cachés.
        </p>

    
      </div>
    </div>
  );
};

export default CGVPage;