import HeroSection from './page-accueil/HeroSection';
import CategoryCardsSection from './page-accueil/CategoryCardsSection';
import FeaturedProductsGrid from './page-accueil/FeaturedProductsGrid';
import AthleteShowcaseSection from './page-accueil/AthleteShowcaseSection';
import IconicModelsSlider from './page-accueil/IconicModelsSlider';
import ProductLinksGrid from './page-accueil/ProductLinksGrid'



export default function Home() {
  return (
    <div>
     
      <main>
        <HeroSection />
        <CategoryCardsSection />
        <FeaturedProductsGrid />
        <AthleteShowcaseSection />
        <IconicModelsSlider />
        <ProductLinksGrid />
      </main>
      
    </div>
  );
}