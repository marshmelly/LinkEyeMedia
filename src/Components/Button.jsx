import React from 'react';
import styled, { keyframes } from 'styled-components';

const slideInFromLeft = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const StyledButton = styled.button`
  position: relative;
  overflow: hidden;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  color: #333;
  max-width: 200px;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: 2px solid #333;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #22333B; /* Change this to your preferred hover color */
    z-index: -1;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }
  
  &:hover {
    color: white;
    
    &::before {
      transform: translateX(0);
    }
  }

  /* Optional variants */
  &.right::before {
    transform: translateX(100%);
  }
  
  &.right:hover::before {
    transform: translateX(0);
  }
  
  &.top::before {
    transform: translateY(-100%);
    width: 100%;
  }
  
  &.top:hover::before {
    transform: translateY(0);
  }
  
  &.bottom::before {
    transform: translateY(100%);
    width: 100%;
  }
  
  &.bottom:hover::before {
    transform: translateY(0);
  }
`;

const SlideButton = ({ children, direction = 'left', ...props }) => {
  return (
    <StyledButton className={direction} {...props}>
      {children}
    </StyledButton>
  );
};

export default SlideButton;