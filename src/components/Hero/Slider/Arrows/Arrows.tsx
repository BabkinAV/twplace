import React from 'react';
import { StyledArrows } from './Arrows.styles';

const Arrows = ({
  changeSlide,
}: {
  changeSlide: (direction: number) => void;
}) => {
  return (
    <StyledArrows>
      <div className="arrow left" onClick={() => changeSlide(-1)}>
        left
      </div>
      <div className="arrow right" onClick={() => changeSlide(1)}>
        right
      </div>
    </StyledArrows>
  );
};

export default Arrows;
