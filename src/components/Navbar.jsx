// src/components/Navbar.jsx
"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css'; // Assure-toi que le chemin est correct

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMouseEnter = (menuName) => {
    // N'active le menu déroulant qu'en mode desktop
    if (window.innerWidth >= 768) {
      setActiveMenu(menuName);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      setActiveMenu(null);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveMenu(null); // Réinitialise activeMenu pour s'assurer qu'aucun sous-menu n'est "actif"
  };

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false); // Ferme le menu mobile
    setActiveMenu(null);
  };

  // --- MISE À JOUR IMPORTANTE ICI : DÉFINITION DES SOUS-MENUS ET COLONNES ---
  // J'ai rempli les `submenu` et `columns` avec des exemples pour montrer comment ça fonctionnerait.
  // Tu devras adapter ces données à la structure réelle de ton site.
  const menuItems = [
    {
      name: 'Nouveautés et articles du moment',
      path: '/nouveautes', // Ce lien pointe maintenant vers notre page /nouveautes
      type: 'multicolumn',
      columns: [
        {
          title: 'Explorer les Nouveautés',
          links: [
            { text: 'Tous les Nouveaux Articles', href: '/nouveautes' }, // Lien direct vers la page de nouveautés
            { text: 'Nouveautés Homme', href: '/nouveautes?gender=Homme' }, // Exemple de lien avec filtre pré-appliqué
            { text: 'Nouveautés Femme', href: '/nouveautes?gender=Femme' },
            { text: 'Nouveautés Enfant', href: '/nouveautes?gender=Enfant' },
          ],
        },
        {
          title: 'Collections Phares',
          links: [
            { text: 'Collection Hiver 2025', href: '/collections/hiver-2025' },
            { text: 'Tendances du Mois', href: '/tendances' },
            { text: 'Édition Limitée', href: '/edition-limitee' },
          ],
        },
        {
          title: 'Inspirations',
          links: [
            { text: 'Guides de Style', href: '/guides' },
            { text: 'Histoires de Produits', href: '/histoires' },
            { text: 'Événements à Venir', href: '/evenements' },
          ],
        },
      ],
    },
    {
      name: 'Homme',
      path: '/homme', // Point vers la page homme (à créer si ce n'est pas déjà fait)
      type: 'simple',
      submenu: [
        { text: 'Chaussures Homme', href: '/homme/chaussures' },
        { text: 'Vêtements Homme', href: '/homme/vetements' },
        { text: 'Accessoires Homme', href: '/homme/accessoires' },
        { text: 'Football', href: '/homme/football' },
        { text: 'Running', href: '/homme/running' },
        // ... ajoute d'autres sous-catégories
      ],
    },
    {
      name: 'Femme',
      path: '/femme', // Point vers la page femme
      type: 'simple',
      submenu: [
        { text: 'Chaussures Femme', href: '/femme/chaussures' },
        { text: 'Vêtements Femme', href: '/femme/vetements' },
        { text: 'Accessoires Femme', href: '/femme/accessoires' },
        { text: 'Training', href: '/femme/training' },
        // ...
      ],
    },
    {
      name: 'Enfant',
      path: '/enfant', // Point vers la page enfant
      type: 'simple',
      submenu: [
        { text: 'Garçons', href: '/enfant/garcons' },
        { text: 'Filles', href: '/enfant/filles' },
        { text: 'Bébés et Tout-petits', href: '/enfant/bebes' },
        { text: 'Chaussures Enfant', href: '/enfant/chaussures' },
        // ...
      ],
    },
    {
      name: 'Offres',
      path: '/offres', // Point vers la page des offres
      type: 'simple',
      submenu: [
        { text: 'Promotions actuelles', href: '/offres/promotions' },
        { text: 'Ventes flash', href: '/offres/flash' },
        { text: 'Nouveaux arrivages en promo', href: '/offres/nouveautes-promo' },
      ],
    },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.mainNav}>
        <div className={styles.logo}>
          <Link href="/" onClick={handleMobileLinkClick}>
            <Image src="/images/logo_km_shopppp.jpg" alt="KM SHOP Logo" width={66} height={66} />
          </Link>
        </div>

        {/* Burger Icon for Mobile */}
        <button className={styles.hamburger} onClick={toggleMobileMenu}>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>

        {/* L'overlay du menu mobile, conditionnellement affiché */}
        {isMobileMenuOpen && (
          <ul className={styles.mobileMenuOverlay}>
            {menuItems.map((item) => (
              <li
                key={item.name}
                className={styles.navItem}
              >
                {/* Ces liens sont les SEULS éléments affichés dans le menu mobile */}
                {/* Chaque lien du menu mobile redirige directement vers son chemin principal */}
                <Link href={item.path} className={styles.navLink} onClick={handleMobileLinkClick}>
                  {item.name}
                </Link>
                {/* NOTE : Sur mobile, les sous-menus ne sont pas affichés par défaut.
                    Si tu veux qu'ils s'ouvrent, il faudrait une logique de `useState` supplémentaire
                    pour gérer l'ouverture/fermeture des sous-menus individuels sur mobile,
                    et adapter le CSS en conséquence. Pour l'instant, je les laisse cachés.
                */}
              </li>
            ))}

            {/* Si tu veux la barre de recherche DANS le menu mobile, remets-la ici */}
            <li className={styles.searchBarNavItemMobile}> {/* Nouveau style pour mobile si désiré */}
              <div className={styles.searchBarMobile}> {/* Nouveau style pour mobile si désiré */}
                <input type="text" placeholder="Rechercher" className={styles.searchInput} />
                <button className={styles.searchButton} onClick={handleMobileLinkClick}>
                  <Image src="/images/search.png" alt="Rechercher" width={16} height={16} />
                </button>
              </div>
            </li>

            {/* Si tu veux les icônes de nav DANS le menu mobile, remets-les ici */}
            <div className={`${styles.navIcons} ${styles.mobileNavIcons}`}>
              <Link href="/favoris" onClick={handleMobileLinkClick}>
                <Image src="/images/heart.png" alt="Favoris" width={20} height={20} />
              </Link>
              <Link href="/panier" onClick={handleMobileLinkClick}>
                <Image src="/images/cart.png" alt="Panier" width={20} height={20} />
              </Link>
            </div>

            {/* Bouton de fermeture du menu mobile */}
            <button className={styles.closeMenuButton} onClick={toggleMobileMenu}>
              &times; {/* Le caractère 'x' */}
            </button>
          </ul>
        )}

        {/* Les liens de navigation et la barre de recherche pour le desktop (cachés sur mobile via CSS) */}
        <ul className={styles.navLinks}>
          {menuItems.map((item) => (
            <li
              key={item.name}
              className={styles.navItem}
              onMouseEnter={() => handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}
            >
              <Link href={item.path} className={styles.navLink}>
                {item.name}
              </Link>
              {/* Rendre les sous-menus UNIQUEMENT sur desktop */}
              {/* Le rendu du sous-menu est conditionnel à `activeMenu` */}
              {activeMenu === item.name && (item.submenu || item.columns) && ( // S'assure qu'il y a des données de sous-menu
                item.type === 'simple' && item.submenu ? ( // Vérifie que submenu existe pour type 'simple'
                  <ul className={styles.dropdownMenuSimple}>
                    {item.submenu.map((subItem, index) => (
                      <li key={subItem.text || index}>
                        <Link href={subItem.href}>{subItem.text}</Link>
                      </li>
                    ))}
                  </ul>
                ) : item.type === 'multicolumn' && item.columns ? ( // Vérifie que columns existe pour type 'multicolumn'
                  <div className={styles.dropdownMenuMultiColumn}>
                    {item.columns.map((column, colIndex) => (
                      <div key={column.title || colIndex} className={styles.dropdownColumn}>
                        <h4 className={styles.dropdownColumnTitle}>{column.title}</h4>
                        <ul className={styles.dropdownColumnLinks}>
                          {column.links.map((link, linkIndex) => (
                            <li key={link.text || linkIndex}>
                              <Link href={link.href}>{link.text}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : null // Si pas de sous-menu ou de colonnes définies, ne rien rendre
              )}
            </li>
          ))}
          {/* Barre de recherche et icônes pour le desktop */}
          <li className={styles.searchBarNavItem}>
            <div className={styles.searchBar}>
              <input type="text" placeholder="Rechercher" className={styles.searchInput} />
              <button className={styles.searchButton}>
                <Image src="/images/search.png" alt="Search" width={16} height={16} />
              </button>
            </div>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;