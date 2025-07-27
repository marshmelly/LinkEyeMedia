import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { FaArrowDown } from 'react-icons/fa';
import styled from 'styled-components';

// Images for parallax layers (use your own images)
const images = {
  bg1: 'https://images.unsplash.com/photo-1586082588570-0c8b1c0b5e36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  bg2: 'https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80',
  bg3: 'https://images.unsplash.com/photo-1529632316988-4f2a39c9357c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80',
  fg1: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
};

const ParallaxScroll = () => {
  return (
    <ParallaxContainer>
      <Parallax pages={3}>
        {/* Background Layer 1 */}
        <ParallaxLayer offset={0} speed={0.5}>
          <BackgroundImage src={images.bg1} alt="Background 1" />
        </ParallaxLayer>

        {/* Foreground Content 1 */}
        <ParallaxLayer offset={0} speed={0.8}>
          <ContentContainer>
            <h1>Capturing Timeless Moments</h1>
            <p>Professional photography that tells your story</p>
            <ScrollIndicator>
              <FaArrowDown />
            </ScrollIndicator>
          </ContentContainer>
        </ParallaxLayer>

        {/* Background Layer 2 */}
        <ParallaxLayer offset={1} speed={0.3}>
          <BackgroundImage src={images.bg2} alt="Background 2" />
        </ParallaxLayer>

        {/* Foreground Content 2 */}
        <ParallaxLayer offset={1} speed={0.5}>
          <ContentContainer dark>
            <h2>Wedding Photography</h2>
            <p>Preserving your special day with artistic vision</p>
          </ContentContainer>
        </ParallaxLayer>

        {/* Background Layer 3 */}
        <ParallaxLayer offset={2} speed={0.2}>
          <BackgroundImage src={images.bg3} alt="Background 3" />
        </ParallaxLayer>

        {/* Foreground Content 3 */}
        <ParallaxLayer offset={2} speed={0.4}>
          <ContentContainer>
            <h2>Portrait Sessions</h2>
            <p>Showcasing your unique personality and style</p>
          </ContentContainer>
        </ParallaxLayer>

        {/* Floating foreground element */}
        <ParallaxLayer offset={1.5} speed={1.2} style={{ pointerEvents: 'none' }}>
          <FloatingImage src={images.fg1} alt="Floating foreground" />
        </ParallaxLayer>
      </Parallax>
    </ParallaxContainer>
  );
};

// Styled Components
const ParallaxContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 2rem;
  text-align: center;
  color: ${props => props.dark ? '#fff' : '#333'};
  text-shadow: ${props => props.dark ? '2px 2px 4px rgba(0,0,0,0.5)' : 'none'};
  
  h1, h2 {
    font-size: 3rem;
    margin-bottom: 1rem;
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  
  p {
    font-size: 1.5rem;
    max-width: 800px;
    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  font-size: 2rem;
  animation: bounce 2s infinite;
  color: white;
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-20px);
    }
    60% {
      transform: translateY(-10px);
    }
  }
`;

const FloatingImage = styled.img`
  width: 300px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  transform: rotate(-5deg);
  
  @media (max-width: 768px) {
    width: 200px;
    height: 150px;
  }
`;

export default ParallaxScroll;