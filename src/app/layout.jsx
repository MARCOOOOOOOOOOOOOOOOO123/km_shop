
import "./globals.css";
import styles from "@/styles/global-pages.css"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: 'Styles & Performances | Maillots, Baskets, T-Shirts, Équipements Sportifs', // Titre du site
  description: 'Découvrez notre collection exclusive de maillots, baskets, t-shirts, et équipements sportifs pour hommes, femmes et enfants. Qualité et style pour toutes vos passions.', // Description du site
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
<Navbar />
        {children}
<Footer />
      </body>
    </html>
  );
}
