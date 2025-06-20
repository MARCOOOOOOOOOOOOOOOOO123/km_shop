import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import CategoryCardsSection from '../components/CategoryCardsSection';
import FeaturedProductsGrid from '../components/FeaturedProductsGrid';
import AthleteShowcaseSection from '../components/AthleteShowcaseSection';
import IconicModelsSlider from '../components/IconicModelsSlider';
import ProductLinksGrid from '../components/ProductLinksGrid';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection />
        <CategoryCardsSection />
        <FeaturedProductsGrid />
        <AthleteShowcaseSection />
        <IconicModelsSlider />
        <ProductLinksGrid />
      </main>
      <Footer />
    </div>
  );
}