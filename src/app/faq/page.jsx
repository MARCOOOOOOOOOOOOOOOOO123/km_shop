// src/app/faq/page.jsx
"use client"; // Indique que c'est un Client Component
import React, { useState } from 'react';
import styles from '@/styles/FAQPage.module.css';
import globalStyles from '@/styles/global-pages.module.css';
import Link from 'next/link';
const FAQPage = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqItems = [
    {
      id: 'commande',
      question: 'Comment passer une commande ?',
      answer: 'Pour passer une commande, parcourez notre catalogue, ajoutez les articles souhaités à votre panier, puis suivez les étapes de paiement sécurisé. Si vous avez des questions spécifiques sur un article, n\'hésitez pas à nous contacter via WhatsApp.',
    },
    {
      id: 'livraison',
      question: 'Quels sont les délais et les coûts de livraison ?',
      answer: 'Nos délais de livraison varient en fonction de votre localisation et du type de produit. Généralement, les livraisons standard prennent entre 3 et 7 jours ouvrables. Les coûts sont calculés au moment du paiement. Pour plus de détails, consultez notre page dédiée à la <a href="/livraison" class="faq-link">Livraison & Retours</a>.',
    },
    {
      id: 'retour',
      question: 'Quelle est votre politique de retour ?',
      answer: 'Nous acceptons les retours dans les 14 jours suivant la réception de votre commande, à condition que les articles soient neufs, non portés et dans leur emballage d\'origine. Les articles personnalisés ne sont pas éligibles au retour. Pour la procédure complète, visitez notre page <a href="/livraison" class="faq-link">Livraison & Retours</a>.',
    },
    {
      id: 'taille',
      question: 'Comment choisir la bonne taille ?',
      answer: 'Nous vous recommandons de consulter notre <a href="/guide-des-tailles" class="faq-link">Guide des Tailles</a> détaillé, disponible pour chaque catégorie de produits (vêtements, chaussures, etc.). Si vous hésitez entre deux tailles, nous sommes là pour vous conseiller.',
    },
    {
      id: 'paiement',
      question: 'Quels sont les modes de paiement acceptés ?',
      answer: 'Nous acceptons les paiements via [Liste des modes de paiement, ex: cartes de crédit/débit (Visa, MasterCard), PayPal, Mobile Money via (MTN MoMo, Orange Money)]. Toutes les transactions sont sécurisées.',
    },
    {
      id: 'personnalisation',
      question: 'Comment fonctionnent les produits personnalisés (chaînes, bijoux) ?',
      answer: 'Pour les produits personnalisés, vous pouvez choisir vos options de gravure, de couleur ou de design directement sur la page du produit. Un aperçu peut être disponible avant la commande. Les délais de fabrication pour ces articles peuvent être légèrement plus longs.',
    },
    {
      id: 'garantie_leds',
      question: 'Y a-t-il une garantie sur les LEDs et accessoires informatiques ?',
      answer: 'Oui, tous nos produits électroniques (LEDs, accessoires informatiques) bénéficient d\'une garantie constructeur d\'un an contre les défauts de fabrication. Conservez votre preuve d\'achat. Pour toute question sur la garantie, contactez notre support.',
    },
  ];

  const toggleQuestion = (id) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <div className={globalStyles.pageContainer}>
      <h1 className={globalStyles.pageTitle}>Questions Fréquentes (FAQ)</h1>

      <div className={globalStyles.pageContent}>
        <p>
          Vous trouverez ici les réponses aux questions les plus fréquemment posées concernant
          nos produits, commandes, livraisons et services.
        </p>

        <div className={styles.faqList}>
          {faqItems.map((item) => (
            <div key={item.id} className={styles.faqItem}>
              <button
                className={styles.faqQuestion}
                onClick={() => toggleQuestion(item.id)}
                aria-expanded={openQuestion === item.id}
              >
                {item.question}
                <span className={styles.icon}>{openQuestion === item.id ? '−' : '+'}</span>
              </button>
              <div
                className={`${styles.faqAnswer} ${openQuestion === item.id ? styles.open : ''}`}
                // Utilise dangerouslySetInnerHTML pour les liens HTML dans la réponse
                dangerouslySetInnerHTML={{ __html: item.answer }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;