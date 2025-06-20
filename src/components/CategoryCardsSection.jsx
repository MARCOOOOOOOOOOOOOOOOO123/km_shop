import React from 'react';
import Image from 'next/image';
import styles from '../styles/CategoryCardsSection.module.css';

const CategoryCardsSection = () => {
  const categories = [
    {
      title: 'Femme',
      imageSrc: '/images/femme.webp', // Replace with your actual image path
      linkHref: '#',
    },
    {
      title: 'Homme',
      imageSrc: '/images/olmoooooo.jpg', // Replace with your actual image path
      linkHref: '#',
    },
    {
      title: 'Ado Enfant',
      imageSrc: '/images/Mini-ensemble_Domicile_Arsenal_24-25_Enfants_Rouge_IS8146_21_model.avif', // Replace with your actual image path
      linkHref: '#',
    },
  ];

  return (
    <section className={styles.categoryCardsSection}>
      {categories.map((category) => (
        <div key={category.title} className={styles.card}>
          <Image
            src={category.imageSrc}
            alt={category.title}
            fill // Make image fill the parent
            sizes="(max-width: 768px) 100vw, 33vw" // Responsive image sizes
            style={{ objectFit: 'cover' }} // Cover the area
          />
          <div className={styles.cardContent}>
            <h2 className={styles.cardTitle}>{category.title}</h2>
            <button className={styles.cardButton}>Acheter</button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CategoryCardsSection;