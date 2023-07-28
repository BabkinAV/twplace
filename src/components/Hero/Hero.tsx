import CategoriesNavigation from './CategoriesNavigation/CategoriesNavigation';
import { StyledHero } from './Hero.styles';
import Slider from './Slider/Slider';

const Hero = () => {
  return (
    <StyledHero>
        <div className="hero__navigation-wrapper">
          <CategoriesNavigation />
        </div>
        <div className="hero__slider-wrapper">
          <Slider />
        </div>
    </StyledHero>
  );
};

export default Hero;
