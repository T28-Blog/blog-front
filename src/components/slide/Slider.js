import React from 'react';
import { style } from './SliderStyle';
import { slideImg } from 'assets/index.js';

const Slider = () => {
  return (
    <Container>
      <SlideBg>
        <img src={slideImg.LandScape} alt="LandScape" />
      </SlideBg>
    </Container>
  );
};

export default Slider;

const { Container, SlideBg } = style;
