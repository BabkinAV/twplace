
import React, { useEffect, useState } from 'react';
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
  const [slide, setSlide] = useState(0);
  return (
    <StyledSlider>
			<Arrows />
      <div className="slide-list">
        {items.map((slide, index) => (
          <div key={index} className='slide'>
						{/* TODO: replace img with <Image /> component */}
						{/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={slide.url} alt={slide.title} className="slide-image" />
          </div>
        ))}
      </div>
    </StyledSlider>
  );
};

export default Slider;
