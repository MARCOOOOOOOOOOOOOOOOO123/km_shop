import React from 'react';
import styles from '../styles/ProductLinksGrid.module.css';

const ProductLinksGrid = () => {
  const categories = [
    {
      title: 'Chaussures',
      links: [
        { text: 'Chaussures de running Homme', href: '#' }, // Modifié
        { text: 'Chaussures de running Femme', href: '#' }, // Modifié
        { text: 'Chaussures Nike P-60...', href: '#' },
        { text: 'Nike Initiator', href: '#' },
      ],
    },
    {
      title: 'Vêtements',
      links: [
        { text: 'Pantalons de yoga', href: '#' },
        { text: 'Pantalons de survêtement', href: '#' },
        { text: 'Tech Fleece', href: '#' },
      ],
    },
    {
      title: 'Enfant',
      links: [
        { text: 'Chaussures noires pour Enfant', href: '#' }, // Modifié
        { text: 'Chaussures colorées pour Enfant', href: '#' }, // Modifié (ou autre)
      ],
    },
    {
      title: 'Articles du moment',
      links: [
        { text: 'Clubs de football', href: '#' },
        { text: 'Football', href: '#' },
        { text: 'Nike England', href: '#' },
        { text: 'Nike Run Club', href: '#' },
      ],
    },
  ];

  return (
    <section className={styles.productLinksGrid}>
      {categories.map((category) => (
        <div key={category.title} className={styles.categoryColumn}>
          <h3 className={styles.columnTitle}>{category.title}</h3>
          <ul className={styles.columnLinks}>
            {category.links.map((link) => (
              // Ici, link.text est maintenant unique pour chaque lien
              <li key={link.text}>
                <a href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default ProductLinksGrid;