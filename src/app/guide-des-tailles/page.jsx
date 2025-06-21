// src/app/guide-des-tailles/page.jsx
import React from 'react';
import Image from 'next/image'; // Si vous voulez ajouter des images de guide
import styles from '@/styles/GuideTaillesPage.module.css';
import globalStyles from '@/styles/global-pages.module.css';

const GuideTaillesPage = () => {
  return (
    <div className={globalStyles.pageContainer}>
      <h1 className={globalStyles.pageTitle}>Guide des Tailles</h1>

      <div className={globalStyles.pageContent}>
        <p>
          Trouver la taille parfaite est essentiel pour votre confort et votre style !
          Veuillez utiliser ce guide pour vous aider à prendre les bonnes mesures et
          choisir la taille idéale pour nos vêtements et chaussures.
        </p>

        <h2>Comment prendre vos mesures ?</h2>
        <ol>
          <li>
            <strong>Tour de poitrine :</strong> Mesurez autour de la partie la plus forte de votre poitrine, en gardant le ruban à mesurer horizontal.
          </li>
          <li>
            <strong>Tour de taille :</strong> Mesurez autour de la partie la plus étroite de votre taille naturelle (généralement juste au-dessus du nombril).
          </li>
          <li>
            <strong>Tour de hanches :</strong> Mesurez autour de la partie la plus large de vos hanches, avec vos pieds joints.
          </li>
          <li>
            <strong>Longueur d'entrejambe (pour les pantalons) :</strong> Mesurez de l'entrejambe jusqu'à la cheville.
          </li>
          <li>
            <strong>Longueur de pied (pour les chaussures) :</strong> Mesurez la longueur de votre pied du talon à l'extrémité du plus long orteil.
          </li>
        </ol>
        {/* Vous pouvez ajouter une image illustrative ici */}
        {/* <div className={styles.measurementImage}>
          <Image
            src="/images/guide-mesures.jpg" // Chemin vers votre image d'illustration
            alt="Comment prendre vos mesures"
            width={600}
            height={400}
            layout="responsive"
          />
        </div> */}

        <h2>Tableaux des Tailles</h2>

        <h3>Vêtements - Homme</h3>
        <div className={styles.tableWrapper}>
          <table className={styles.sizeTable}>
            <thead>
              <tr>
                <th>Taille</th>
                <th>Poitrine (cm)</th>
                <th>Taille (cm)</th>
                <th>Hanches (cm)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>S</td><td>88-96</td><td>73-81</td><td>88-96</td></tr>
              <tr><td>M</td><td>96-104</td><td>81-89</td><td>96-104</td></tr>
              <tr><td>L</td><td>104-112</td><td>89-97</td><td>104-112</td></tr>
              <tr><td>XL</td><td>112-124</td><td>97-109</td><td>112-120</td></tr>
              <tr><td>XXL</td><td>124-136</td><td>109-121</td><td>120-128</td></tr>
            </tbody>
          </table>
        </div>

        <h3>Vêtements - Femme</h3>
        <div className={styles.tableWrapper}>
          <table className={styles.sizeTable}>
            <thead>
              <tr>
                <th>Taille</th>
                <th>Poitrine (cm)</th>
                <th>Taille (cm)</th>
                <th>Hanches (cm)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>XS</td><td>76-81</td><td>60-65</td><td>84-89</td></tr>
              <tr><td>S</td><td>81-86</td><td>65-70</td><td>89-94</td></tr>
              <tr><td>M</td><td>86-94</td><td>70-79</td><td>94-102</td></tr>
              <tr><td>L</td><td>94-102</td><td>79-87</td><td>102-110</td></tr>
              <tr><td>XL</td><td>102-114</td><td>87-99</td><td>110-122</td></tr>
            </tbody>
          </table>
        </div>

        <h3>Chaussures - Homme & Femme (Tailles EU)</h3>
        <div className={styles.tableWrapper}>
          <table className={styles.sizeTable}>
            <thead>
              <tr>
                <th>Taille EU</th>
                <th>Longueur du pied (cm)</th>
                <th>Taille US Homme</th>
                <th>Taille US Femme</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>36</td><td>22.5</td><td>-</td><td>5.5</td></tr>
              <tr><td>37</td><td>23</td><td>-</td><td>6</td></tr>
              <tr><td>38</td><td>23.5</td><td>-</td><td>7</td></tr>
              <tr><td>39</td><td>24.5</td><td>6.5</td><td>8</td></tr>
              <tr><td>40</td><td>25</td><td>7</td><td>8.5</td></tr>
              <tr><td>41</td><td>26</td><td>8</td><td>9.5</td></tr>
              <tr><td>42</td><td>26.5</td><td>8.5</td><td>10</td></tr>
              <tr><td>43</td><td>27.5</td><td>9.5</td><td>-</td></tr>
              <tr><td>44</td><td>28</td><td>10</td><td>-</td></tr>
              <tr><td>45</td><td>29</td><td>11</td><td>-</td></tr>
            </tbody>
          </table>
        </div>

        <p className={styles.bottomNote}>
          Si vous avez des doutes ou besoin d'aide supplémentaire, n'hésitez pas à
          <Link href="/contact" className={globalStyles.pageContent.a}> nous contacter</Link>.
        </p>
      </div>
    </div>
  );
};

export default GuideTaillesPage;