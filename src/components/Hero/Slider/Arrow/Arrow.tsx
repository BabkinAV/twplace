import React from 'react';
import { StyledArrow } from './Arrow.styles';
import ArrowIcon from '../Arrows/ArrowIcon/ArrowIcon';

const Arrow = ({
  side,
	inactive,
	onClick
}: {
  side: 'left' | 'right';
  changeSlide: (direction: number) => void;
	inactive?: boolean
	onClick: () => void
}) => {
  return (
    <StyledArrow side={side} inactive={inactive} onClick={onClick}>
      <ArrowIcon inactive={inactive}/>
    </StyledArrow>
  );
};

export default Arrow;
