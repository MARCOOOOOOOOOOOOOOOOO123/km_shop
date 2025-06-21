// src/pages/nouveautes.jsx
"use client";

import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import styles from '@/styles/NewArrivalsPage.module.css'
import allProducts from '@/api/products/route';// <-- Importation des produits depuis le fichier de données

const page = () => {
  const [filters, setFilters] = useState({
    categories: [],
    gender: [],
    priceRange: '', // e.g., '0-50', '50-100', '100-plus'
    sport: [],
    brand: [],
    style: [],
  });
  const [sortOrder, setSortOrder] = useState('featured'); // 'featured', 'newest', 'price-asc', 'price-desc'
  const [showFilters, setShowFilters] = useState(true); // State for toggling filter bar visibility

  // Extract unique filter options from allProducts
  const filterOptions = useMemo(() => {
    const options = {
      categories: new Set(),
      gender: new Set(),
      sport: new Set(),
      brand: new Set(),
      style: new Set(),
    };
    allProducts.forEach(product => {
      options.categories.add(product.category);
      options.gender.add(product.gender);
      options.sport.add(product.sport);
      options.brand.add(product.brand);
      options.style.add(product.style);
    });
    return {
      categories: Array.from(options.categories).sort(),
      gender: Array.from(options.gender).sort(),
      sport: Array.from(options.sport).sort(),
      brand: Array.from(options.brand).sort(),
      style: Array.from(options.style).sort(),
    };
  }, [allProducts]);

  // Apply filters and sorting
  const filteredAndSortedProducts = useMemo(() => {
    let currentProducts = [...allProducts];

    // Apply filters
    if (filters.categories.length > 0) {
      currentProducts = currentProducts.filter(p => filters.categories.includes(p.category));
    }
    if (filters.gender.length > 0) {
      // Gérer la logique spécifique pour "Enfant - Garçon" et "Enfant - Fille" si "Enfant" est sélectionné
      if (filters.gender.includes('Enfant')) {
        currentProducts = currentProducts.filter(p => filters.gender.includes(p.gender) || p.gender.startsWith('Enfant'));
      } else {
        currentProducts = currentProducts.filter(p => filters.gender.includes(p.gender));
      }
    }
    if (filters.sport.length > 0) {
      currentProducts = currentProducts.filter(p => filters.sport.includes(p.sport));
    }
    if (filters.brand.length > 0) {
      currentProducts = currentProducts.filter(p => filters.brand.includes(p.brand));
    }
    if (filters.style.length > 0) {
      currentProducts = currentProducts.filter(p => filters.style.includes(p.style));
    }

    if (filters.priceRange) {
      currentProducts = currentProducts.filter(p => {
        if (filters.priceRange === '0-50') return p.price <= 50;
        if (filters.priceRange === '50-100') return p.price > 50 && p.price <= 100;
        if (filters.priceRange === '100-200') return p.price > 100 && p.price <= 200; // Nouvelle tranche
        if (filters.priceRange === '200-plus') return p.price > 200; // Nouvelle tranche
        return true;
      });
    }

    // Apply sorting
    currentProducts.sort((a, b) => {
      if (sortOrder === 'newest') {
        // Pour un exemple réel, vous auriez une propriété `dateAdded` ou similaire.
        // Ici, nous allons trier par ID pour simuler un ordre de "récence" basique
        return b.id.localeCompare(a.id); // Les plus grands IDs (plus récents) en premier
      }
      if (sortOrder === 'price-asc') {
        return a.price - b.price;
      }
      if (sortOrder === 'price-desc') {
        return b.price - a.price;
      }
      // 'featured' (default) - pas de tri spécifique ou ajouter une logique personnalisée
      return 0;
    });

    return currentProducts;
  }, [filters, sortOrder]);

  const handleFilterChange = (filterType, value, isChecked) => {
    setFilters(prevFilters => {
      if (filterType === 'priceRange') {
        return {
          ...prevFilters,
          priceRange: value === prevFilters.priceRange ? '' : value, // Toggle price range
        };
      } else {
        const currentValues = prevFilters[filterType];
        if (isChecked) {
          // Gérer le cas "Enfant" qui doit inclure "Enfant - Garçon" et "Enfant - Fille"
          if (filterType === 'gender' && value === 'Enfant') {
            return { ...prevFilters, [filterType]: [...currentValues, 'Enfant - Garçon', 'Enfant - Fille', value] };
          }
          return { ...prevFilters, [filterType]: [...currentValues, value] };
        } else {
          // Gérer le dé-sélection de "Enfant"
          if (filterType === 'gender' && value === 'Enfant') {
            return { ...prevFilters, [filterType]: currentValues.filter(item => item !== 'Enfant' && !item.startsWith('Enfant - ')) };
          }
          return { ...prevFilters, [filterType]: currentValues.filter(item => item !== value) };
        }
      }
    });
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  // Les options de genre uniques, avec "Enfant" comme option groupée
  const uniqueGenders = useMemo(() => {
    const genders = new Set();
    filterOptions.gender.forEach(g => {
      if (g.startsWith('Enfant -')) {
        genders.add('Enfant');
      } else {
        genders.add(g);
      }
    });
    return Array.from(genders).sort();
  }, [filterOptions.gender]);


  return (
    <div className={styles.newArrivalsPage}>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <h1 className={styles.pageTitle}>Nouveautés KM ({filteredAndSortedProducts.length})</h1>
        </div>
        <div className={styles.headerRight}>
          <button className={styles.toggleFilterButton} onClick={() => setShowFilters(!showFilters)}>
            {showFilters ? 'Masquer les filtres' : 'Afficher les filtres'}
          </button>
          <div className={styles.sortDropdown}>
            <label htmlFor="sort-by">Trier par :</label>
            <select id="sort-by" value={sortOrder} onChange={handleSortChange}>
              <option value="featured">En vedette</option>
              <option value="newest">Les plus récents</option>
              <option value="price-desc">Prix: Décroissant</option>
              <option value="price-asc">Prix: Croissant</option>
            </select>
          </div>
        </div>
      </header>

      <div className={styles.mainContent}>
        {showFilters && (
          <aside className={styles.filterSidebar}>
            {/* Categories */}
            <div className={styles.filterGroup}>
              <h3>Catégories</h3>
              {filterOptions.categories.map(category => (
                <label key={category} className={styles.filterCheckbox}>
                  <input
                    type="checkbox"
                    checked={filters.categories.includes(category)}
                    onChange={(e) => handleFilterChange('categories', category, e.target.checked)}
                  />
                  {category}
                </label>
              ))}
            </div>

            {/* Genre */}
            <div className={styles.filterGroup}>
              <h3>Genre</h3>
              {uniqueGenders.map(gender => (
                <label key={gender} className={styles.filterCheckbox}>
                  <input
                    type="checkbox"
                    // Vérifier si "Enfant" est coché ou si "Enfant - Garçon/Fille" sont cochés individuellement
                    checked={
                      filters.gender.includes(gender) ||
                      (gender === 'Enfant' && (filters.gender.includes('Enfant - Garçon') || filters.gender.includes('Enfant - Fille')))
                    }
                    onChange={(e) => handleFilterChange('gender', gender, e.target.checked)}
                  />
                  {gender === 'Enfant' ? 'Enfant (Garçon/Fille)' : gender}
                </label>
              ))}
            </div>

            {/* Prix */}
            <div className={styles.filterGroup}>
              <h3>Rechercher par prix</h3>
              <label className={styles.filterRadio}>
                <input
                  type="radio"
                  name="priceRange"
                  value="0-50"
                  checked={filters.priceRange === '0-50'}
                  onChange={(e) => handleFilterChange('priceRange', e.target.value, e.target.checked)}
                />
                Moins de 50€
              </label>
              <label className={styles.filterRadio}>
                <input
                  type="radio"
                  name="priceRange"
                  value="50-100"
                  checked={filters.priceRange === '50-100'}
                  onChange={(e) => handleFilterChange('priceRange', e.target.value, e.target.checked)}
                />
                50€ à 100€
              </label>
              <label className={styles.filterRadio}>
                <input
                  type="radio"
                  name="priceRange"
                  value="100-200" // Nouvelle tranche
                  checked={filters.priceRange === '100-200'}
                  onChange={(e) => handleFilterChange('priceRange', e.target.value, e.target.checked)}
                />
                100€ à 200€
              </label>
              <label className={styles.filterRadio}>
                <input
                  type="radio"
                  name="priceRange"
                  value="200-plus" // Nouvelle tranche
                  checked={filters.priceRange === '200-plus'}
                  onChange={(e) => handleFilterChange('priceRange', e.target.value, e.target.checked)}
                />
                Plus de 200€
              </label>
            </div>

            {/* Sport */}
            <div className={styles.filterGroup}>
              <h3>Sport</h3>
              {filterOptions.sport.map(sport => (
                <label key={sport} className={styles.filterCheckbox}>
                  <input
                    type="checkbox"
                    checked={filters.sport.includes(sport)}
                    onChange={(e) => handleFilterChange('sport', sport, e.target.checked)}
                  />
                  {sport}
                </label>
              ))}
            </div>

            {/* Marque */}
            <div className={styles.filterGroup}>
              <h3>Marque</h3>
              {filterOptions.brand.map(brand => (
                <label key={brand} className={styles.filterCheckbox}>
                  <input
                    type="checkbox"
                    checked={filters.brand.includes(brand)}
                    onChange={(e) => handleFilterChange('brand', brand, e.target.checked)}
                  />
                  {brand}
                </label>
              ))}
            </div>

            {/* Style */}
            <div className={styles.filterGroup}>
              <h3>Style</h3>
              {filterOptions.style.map(style => (
                <label key={style} className={styles.filterCheckbox}>
                  <input
                    type="checkbox"
                    checked={filters.style.includes(style)}
                    onChange={(e) => handleFilterChange('style', style, e.target.checked)}
                  />
                  {style}
                </label>
              ))}
            </div>
          </aside>
        )}

        <section className={styles.productGrid}>
          {filteredAndSortedProducts.length > 0 ? (
            filteredAndSortedProducts.map((product) => (
              <div key={product.id} className={styles.productCard}>
                <div className={styles.productImageContainer}>
                  <Image
                    src={product.imageSrc}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className={styles.productInfo}>
                  <p className={styles.productCategory}>Dernières sorties</p>
                  <h3 className={styles.productName}>{product.name}</h3>
                  <p className={styles.productDescription}>{product.description}</p>
                  <p className={styles.productPrice}>{product.price.toFixed(2)} €</p>
                </div>
              </div>
            ))
          ) : (
            <p className={styles.noProducts}>Aucun article ne correspond à vos filtres.</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default page;