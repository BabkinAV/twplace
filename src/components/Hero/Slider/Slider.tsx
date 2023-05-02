// Inspired by the article: https://betterprogramming.pub/how-to-implement-star-rating-widget-with-react-js-and-optimize-it-e3625f3104f
import React, { useEffect, useState, TouchEvent } from 'react';
import Image from 'next/image';
import { StyledSlider } from './Slider.styles';

import Arrow from './Arrow/Arrow';

const sliderArr = [
  {
    title: 'Slide 1',
    url: '/img/slides/baner.png',
  },
  {
    title: 'Slide 2',
    url: '/img/slides/baner.png',
  },
  {
    title: 'Slide 3',
    url: '/img/slides/baner.png',
  },
];

const Slider = () => {
  const [items, setItems] = useState(sliderArr);
  const [slideNumber, setSlideNumber] = useState(0);
  const [touchPosition, setTouchPosition] = useState(0);

  const changeSlide = (direction = 1) => {
    let updatedSlideNumber = 0;

    if (slideNumber + direction < 0) {
      updatedSlideNumber = items.length - 1;
    } else {
      updatedSlideNumber = (slideNumber + direction) % items.length;
    }
    setSlideNumber(updatedSlideNumber);
  };

  const handleTouchStart = (e: TouchEvent) => {
    const touchDown = e.touches[0].clientX;

    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (touchPosition === 0) {
      return;
    }

    const currentPosition = e.touches[0].clientX;
    const direction = touchPosition - currentPosition;

    if (direction > 10 && slideNumber < items.length - 1) {
      changeSlide(1);
    }

    if (direction < -10 && slideNumber > 0) {
      changeSlide(-1);
    }

    setTouchPosition(0);
  };

  return (
    <StyledSlider onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
      <div className="slider__arrows">
        <Arrow
          changeSlide={changeSlide}
          side="left"
          inactive={slideNumber === 0}
          onClick={slideNumber > 0 ? () => changeSlide(-1) : undefined}
        />
        <Arrow
          changeSlide={changeSlide}
          side="right"
          inactive={slideNumber === items.length - 1}
          onClick={
            slideNumber < items.length - 1 ? () => changeSlide(1) : undefined
          }
        />
      </div>
      <div className="slide-list">
        {items.map((slide, index) => (
          <div
            key={index}
            className="slide"
            style={{ transform: `translateX(-${slideNumber * 100}%)` }}
          >
            <Image
              src={slide.url}
              alt={slide.title}
              className="slide-image"
							sizes="(max-width: 1920px) 100vw,
							70vw"
              fill
            />
          </div>
        ))}
      </div>
    </StyledSlider>
  );
};

export default Slider;
