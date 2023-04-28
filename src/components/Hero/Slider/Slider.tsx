// Inspired by the article: https://betterprogramming.pub/how-to-implement-star-rating-widget-with-react-js-and-optimize-it-e3625f3104f
import React, { useEffect, useState, TouchEvent } from 'react';
import Image from 'next/image';
import { StyledSlider } from './Slider.styles';

import Arrows from './Arrows/Arrows';

const sliderArr = [
  {
    title: 'Slide 1',
    url: '/img/slides/baner01.png',
  },
  {
    title: 'Slide 2',
    url: '/img/slides/baner02.png',
  },
  {
    title: 'Slide 3',
    url: '/img/slides/baner03.png',
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

    if (direction > 10) {
      changeSlide(1);
    }

    if (direction < -10) {
      changeSlide(-1);
    }

    setTouchPosition(0);
  };

  return (
    <StyledSlider>
      <Arrows changeSlide={changeSlide} />
      <div
        className="slide-list"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {items.map((slide, index) => (
          <div
            key={index}
            className="slide"
            style={{ transform: `translateX(-${slideNumber * 100}%)` }}
          >
            {/* TODO: replace img with <Image /> component */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            {/* <img src={slide.url} alt={slide.title} className="slide-image" /> */}
            <Image src={slide.url} alt={slide.title} className="slide-image" fill/>
          </div>
        ))}
      </div>
    </StyledSlider>
  );
};

export default Slider;
