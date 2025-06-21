import React from 'react';
import styles from '@/styles/ProductLinksGrid.module.css';

const ProductLinksGrid = () => {
  const categories = [
    {
      title: 'Chaussures',
      links: [
        { text: 'Chaussure Samba', href: '#' }, // Modifié
        { text: 'Chaussure Tm Air Nike', href: '#' }, // Modifié
        { text: 'Chaussures Air Force One', href: '#' },
        { text: 'Air Jordan One', href: '#' },
      ],
    },
    {
      title: 'Vêtements',
      links: [
        { text: 'Joggings', href: '#' },
        { text: 'T-shirts', href: '#' },
      ],
    },

    {
      title: 'LEDS',
      links: [
        { text: 'Astro-Projeteur', href: '#' },
        { text: 'LEDS Neon', href: '#' },
      ],
    },
    
    {
      title: 'Articles du moment',
      links: [
        { text: 'Maillots saison 25/26', href: '#' },
        { text: 'Air Force One', href: '#' },
        { text: 'Montres et Bijoux personnalisés', href: '#' },
        { text: 'Godasses', href: '#' },
      ],
    },

     {
      title: 'Articles !',
      links: [
        { text: 'En route vers les articles !', href: '#' },
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