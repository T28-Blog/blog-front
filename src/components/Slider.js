import React from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import styled from 'styled-components'
import nature1 from 'assets/nature1.jpeg'
import nature2 from 'assets/nature2.jpeg'
import nature3 from 'assets/nature3.png'

const SlideBackground = styled.div`
  height: 400px;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

const Title = styled.a`
  color: #fff;
  text-decoration: none;
  &:hover{
    color: #000;
  }
`;


export default function Slideshow(){
  return (
    <div className="slide-container">
      <Slide>
        <div className="each-slide">
          <SlideBackground style={{'backgroundImage': `url(${nature1})`}}>
            <Title>Slide 1</Title>
          </SlideBackground>
        </div>
        <div className="each-slide">
          <SlideBackground style={{'backgroundImage': `url(${nature2})`}}>
            <Title>Slide 2</Title>
          </SlideBackground>
        </div>
        <div className="each-slide">
          <SlideBackground style={{'backgroundImage': `url(${nature3})`}}>
            <Title>Slide 3</Title>
          </SlideBackground>
        </div>
      </Slide>
    </div>
  )
}