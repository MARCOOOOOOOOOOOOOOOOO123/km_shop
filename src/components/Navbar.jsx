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

  const menuItems = [
    // ... (garde ta constante menuItems exactement comme elle est) ...
    {
      name: 'Nouveautés et articles du moment',
      path: '/nouveautes',
      type: 'multicolumn',
      columns: [ /* Ces colonnes ne seront pas rendues sur mobile */ ],
    },
    {
      name: 'Homme',
      path: '/homme',
      type: 'simple',
      submenu: [ /* Ces sous-menus ne seront pas rendues sur mobile */ ],
    },
    {
      name: 'Femme',
      path: '/femme',
      type: 'simple',
      submenu: [ /* Ces sous-menus ne seront pas rendues sur mobile */ ],
    },
    {
      name: 'Enfant',
      path: '/enfant',
      type: 'simple',
      submenu: [ /* Ces sous-menus ne seront pas rendues sur mobile */ ],
    },
    {
      name: 'Offres',
      path: '/offres',
      type: 'simple',
      submenu: [ /* Ces sous-menus ne seront pas rendues sur mobile */ ],
    },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.mainNav}>
        <div className={styles.logo}>
          <Link href="/" onClick={handleMobileLinkClick}>
            <Image src="/images/logo.jpg" alt="KM SHOP Logo" width={66} height={66} />
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
          <ul className={styles.mobileMenuOverlay}> {/* Utilise styles.mobileMenuOverlay ici */}
            {menuItems.map((item) => (
              <li
                key={item.name}
                className={styles.navItem}
                // PAS de onMouseEnter/Leave ici, car pas de déroulement sur mobile
              >
                {/* Ces liens sont les SEULS éléments affichés dans le menu mobile */}
                <Link href={item.path} className={styles.navLink} onClick={handleMobileLinkClick}>
                  {item.name}
                </Link>
                {/* NE PAS RENDRE DE SOUS-MENUS ICI POUR MOBILE */}
                {/* Tu avais un bloc ici:
                {activeMenu === item.name && !isMobileMenuOpen && ( ... ) }
                Je l'ai laissé mais il sera toujours false sur mobile.
                Si tu ne veux ABSOLUMENT AUCUN sous-lien, supprime simplement tout ce bloc. */}
              </li>
            ))}

            {/* Si tu veux la barre de recherche DANS le menu mobile, remets-la ici */}
            {/* <li className={styles.searchBarNavItem}>
              <div className={styles.searchBar}>
                <input type="text" placeholder="Rechercher" className={styles.searchInput} />
                <button className={styles.searchButton} onClick={handleMobileLinkClick}>
                  <Image src="/search-icon.svg" alt="Search" width={16} height={16} />
                </button>
              </div>
            </li> */}

            {/* Si tu veux les icônes de nav DANS le menu mobile, remets-les ici */}
            {/* <div className={`${styles.navIcons} ${styles.mobileNavIcons}`}>
              <Link href="/favoris" onClick={handleMobileLinkClick}>
                <Image src="/heart-icon.svg" alt="Favorites" width={20} height={20} />
              </Link>
              <Link href="/panier" onClick={handleMobileLinkClick}>
                <Image src="/bag-icon.svg" alt="Cart" width={20} height={20} />
              </Link>
            </div> */}

             {/* Bouton de fermeture du menu mobile */}
            <button className={styles.closeMenuButton} onClick={toggleMobileMenu}>
              &times; {/* Le caractère 'x' */}
            </button>
          </ul>
        )}

        {/* Les liens de navigation et la barre de recherche pour le desktop (cachés sur mobile) */}
        {/* Ces éléments doivent toujours être rendus pour le desktop */}
        <ul className={styles.navLinks}>
          {menuItems.map((item) => (
            <li
              key={item.name}
              className={styles.navItem}
              onMouseEnter={() => handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}
            >
              <Link href={item.path} className={styles.navLink}> {/* Utilise styles.navLink pour le desktop */}
                {item.name}
              </Link>
              {/* Rendre les sous-menus UNIQUEMENT sur desktop */}
              {activeMenu === item.name && (
                item.type === 'simple' ? (
                  <ul className={styles.dropdownMenuSimple}>
                    {item.submenu.map((subItem, index) => (
                      <li key={subItem.text || index}>
                        <Link href={subItem.href}>{subItem.text}</Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className={styles.dropdownMenuMultiColumn}>
                    {item.columns.map((column) => (
                      <div key={column.title} className={styles.dropdownColumn}>
                        <h4 className={styles.dropdownColumnTitle}>{column.title}</h4>
                        <ul className={styles.dropdownColumnLinks}>
                          {column.links.map((link, index) => (
                            <li key={link.text || index}>
                              <Link href={link.href}>{link.text}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )
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