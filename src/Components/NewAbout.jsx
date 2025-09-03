import React from 'react';
import photo from './project files/IMG-20250404-WA0032 (1).jpg';
import styled from 'styled-components';

const NewAbout = () => {
  return (
    <div className='About'>
      <AboutSection>
        <AboutContent>
          <h2>About Our Vision</h2>
          <p>
            Hey there! I'm Zadock, lead corporator photographer at Link Eye, we specialize in the artistry of manipulating light to create stunning photographs.
            Over the past decade, we have endeavored to create magical moments and capture the most memorable moments to be treasured for years to come.
            Our photography journey has been a real page turner, filled with awesome clients, and rock-solid friendships that last a lifetime.
            We would like you to be part of our story by joining us and let us create magic.
          </p>
        </AboutContent>
        <AboutImage>
          <img src={photo} alt="Photographer's vision" />
        </AboutImage>
      </AboutSection>
    </div>
  );
};

const AboutSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 500px;
  background: #FAF6F9;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutContent = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  
  p {
    line-height: 1.6;
    margin-bottom: 2rem;
  }
`;

const AboutImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  
  img {
    width: 90%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
  
  @media (max-width: 768px) {
    height: 300px;
    padding: 0 1rem 2rem 1rem;
  }
`;

export default NewAbout;