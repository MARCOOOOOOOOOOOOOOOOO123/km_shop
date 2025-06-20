import React from 'react';
import Image from 'next/image';
import styles from '../styles/FeaturedProductsGrid.module.css';

const FeaturedProductsGrid = () => {
  const products = [
    {
      tagline: 'Nike',
      title: 'Just Do It !',
      imageSrc: '/images/nike-prism-pack-crampons-1.jpg', // Replace with your actual image path
      linkHref: '#',
    },
    {
      tagline: 'Adidas',
      title: 'Impossible Is Nothing !',
      imageSrc: '/images/adidas.webp', // Replace with your actual image path
      linkHref: '#',
    },
     {
      tagline: 'Tennis Nike',
      title: 'Libère ta foulée',
      imageSrc: '/images/checklist-randonnée -les-essentiels-à-emporter.avif', // Replace with your actual image path
      linkHref: '#',
    },
    {
      tagline: 'Tennis Adidas',
      title: 'Rends ton footing inoubliable',
      imageSrc: '/images/adidas_tennis.jpg', // Replace with your actual image path
      linkHref: '#',
    }

  ];

  return (
    <section className={styles.featuredProductsGrid}>
      {products.map((product) => (
        <div key={product.title} className={styles.productCard}>
          <Image
            src={product.imageSrc}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: 'cover' }}
          />
          <div className={styles.cardContent}>
            <p className={styles.cardTagline}>{product.tagline}</p>
            <h2 className={styles.cardTitle}>{product.title}</h2>
            <button className={styles.cardButton}>Acheter</button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FeaturedProductsGrid;