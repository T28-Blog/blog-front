import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styled from "styled-components";
import nature1 from "assets/banner1.jpeg";
import nature2 from "assets/banner2.jpeg";
import nature3 from "assets/banner3.jpeg";

const SlideBackground = styled.div`
  height: 350px;
  background-color: rgba(0, 0, 0, 0.9);
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1000px;
  height: 100%;
  color: #fff;
  margin: 0 auto;
  text-align: left;
  font-size: 50px;
`;

export default function Slideshow() {
  return (
    <div className="slide-container">
      <Slide>
        <div className="each-slide">
          <SlideBackground style={{ backgroundImage: `url(${nature1})` }}>
            <Title>5 Reasons to Take a solo trip</Title>
          </SlideBackground>
        </div>
        <div className="each-slide">
          <SlideBackground style={{ backgroundImage: `url(${nature2})` }}>
            <Title>Non-stop Party in Rio Brazil</Title>
          </SlideBackground>
        </div>
        <div className="each-slide">
          <SlideBackground style={{ backgroundImage: `url(${nature3})` }}>
            <Title>Travel. Adventure. People. Planet. Care.</Title>
          </SlideBackground>
        </div>
      </Slide>
    </div>
  );
}
