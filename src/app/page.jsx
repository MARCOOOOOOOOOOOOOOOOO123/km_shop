import Navbar from '../components/Navbar';
import HeroSection from './HeroSection';
import CategoryCardsSection from './CategoryCardsSection';
import FeaturedProductsGrid from './FeaturedProductsGrid';
import AthleteShowcaseSection from './AthleteShowcaseSection';
import IconicModelsSlider from './IconicModelsSlider';
import ProductLinksGrid from './ProductLinksGrid';
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