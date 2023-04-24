import React from 'react';
import { StyledHero } from './Hero.styles';
import Container from '../layout/Container/Container';

const Hero = () => {
  return (
    <StyledHero>
      <Container>
				<div className='column-left'>
					Main navigation

				</div>
				<div className='column-right'>
					Slider

				</div>
			</Container>
    </StyledHero>
  );
};

export default Hero;
