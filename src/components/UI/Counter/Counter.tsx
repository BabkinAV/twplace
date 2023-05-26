import React from 'react';
import Image from 'next/image';
import { StyledCounter } from './Counter.styles';
import ArrowVerticalIcon from '../../assets/images/ArrowVerticalcon.svg';

const Counter = ({
  count,
  countModify,
}: {
  count: number;
  countModify?: (direction: 'inc' | 'dec' | number) => void;
}) => {
  return (
    <StyledCounter>
      <button className="counter__btn counter__btn--dec">
        <Image
          src={ArrowVerticalIcon}
          alt="Decrease quantity"
          className="counter__arrow counter__arrow--down"
        />
      </button>
      <input type="text" defaultValue={1} className="counter__input" />
      <button className="counter__btn counter__btn--inc">
        <Image
          src={ArrowVerticalIcon}
          alt="Increase quantity"
          className="counter__arrow counter__arrow--up"
        />
      </button>
    </StyledCounter>
  );
};

export default Counter;
