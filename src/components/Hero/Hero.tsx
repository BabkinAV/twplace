import React from 'react';
import { StyledHero } from './Hero.styles';
import StyledRowDoubleColumns from '../layout/RowDoubleColumns/RowDoubleColumns';
import CategoriesNavigation from './CategoriesNavigaion/CategoriesNavigation';
import Slider from './Slider/Slider';

const Hero = () => {
  return (
    <StyledHero>
      <StyledRowDoubleColumns>
        <div className="column-left">
          <CategoriesNavigation />
        </div>
        <div className="column-right">
          <Slider />
        </div>
      </StyledRowDoubleColumns>
    </StyledHero>
  );
};

export default Hero;
