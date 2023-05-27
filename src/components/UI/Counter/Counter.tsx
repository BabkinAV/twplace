import React from 'react';
import Image from 'next/image';
import { StyledCounter } from './Counter.styles';
import ArrowVerticalIcon from '../../assets/images/ArrowVerticalcon.svg';

const Counter = ({
  count,
  countModify,
}: {
  count: number;
  countModify: (modifier: 'inc' | 'dec' | number) => void;
}) => {
  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') {
      countModify(0);
    }

    const newValue = parseInt(e.target.value);
    console.log(newValue);
    if (newValue > 0) {
      countModify(newValue);
    }
  };
  return (
    <StyledCounter>
      <button
        className="counter__btn counter__btn--dec"
        onClick={() => {
          countModify('dec');
        }}
      >
        <Image
          src={ArrowVerticalIcon}
          alt="Decrease quantity"
          className="counter__arrow counter__arrow--down"
        />
      </button>
      <input
        type="number"
        value={count > 0 ? count : ''}
        className="counter__input"
        onChange={handleValueChange}
        min="0"
        max="99"
        step={1}
      />
      <button
        className="counter__btn counter__btn--inc"
        onClick={() => {
          countModify('inc');
        }}
      >
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
