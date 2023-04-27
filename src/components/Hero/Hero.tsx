import React from 'react';
import { StyledHero } from './Hero.styles';
import Container from '../layout/Container/Container';
import CategoriesNavigaion from './CategoriesNavigaion/CategoriesNavigation';
import Slider from './Slider/Slider';

const Hero = () => {
  return (
    <StyledHero>
      <Container>
        <div className="column-left">
          <CategoriesNavigaion />
        </div>
        <div className="column-right">
          <Slider />
        </div>
      </Container>
    </StyledHero>
  );
};

export default Hero;
