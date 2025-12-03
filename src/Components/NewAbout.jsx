import React from 'react';
import photo from './project files/Zash.jpg';
import styled from 'styled-components';

const NewAbout = () => {
  return (
    <div className='About'>
      <AboutSection>
        <AboutContent>
          <h2>About Us (Link Eye Media) </h2>
          <p>
            Hey there! I'm Zadock (a.k.a Zash), lead cameraman at Link Eye Media. We specialize in the artistry of manipulation using light to create mystical and stunning photographs.
            Over the past decade, we have endeavored to create magical moments that capture the most memorable moments treasured for years to come.
            Our photography journey has been a real page turner, filled with awesome clients, and rock-solid friendships that transcends into decades.
            Kindly journey with us as we continue to explore places.
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
  margin:0;
  
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