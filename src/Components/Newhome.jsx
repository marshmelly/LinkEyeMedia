import React, {useState, useEffect} from 'react';
import { useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import { FaCamera, FaArrowRight } from 'react-icons/fa';
import SlideButton from '../Components/Button'


//importing images from project files folder
import bride from '../Components/project files/bride.jpg';
import hero from '../Components/project files/hero.jpg';
import paul from '../Components/project files/paul-abrahams-T7HZoPFcQoc-unsplash.jpg';
import richard from '../Components/project files/richard-stachmann-mm_aV4S5qQE-unsplash.jpg';

// Sample images (replace with your actual images)
const images = {
  portrait: 'https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80',
  wedding:'https://images.unsplash.com/photo-1529632316988-4f2a39c9357c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80',
  event: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
};

const carouselImages = [
  paul,
  richard,
  hero
 
]

const Homepage = () => {
  const navigate = useNavigate();
   const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fade, setFade] = useState(true);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setFade(false); // Start fade out
        
        setTimeout(() => {
          setCurrentImageIndex((prevIndex) => 
            prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
          );
          setFade(true); // Complete transition and fade in new image
        }, 1000); // This matches the transition duration
      }, 5000); // Change image every 5 seconds
  
      return () => clearInterval(interval);
    }, []);

  return (
    <HomeContainer>
      {/* Hero Section */}
     <HeroSection>
            {carouselImages.map((image, index) => (
              <HeroImage
                key={index}
                src={image}
                alt="Hero background"
                active={index === currentImageIndex}
                fade={fade}
              />
            ))}
            <HeroOverlay>
              <h1>Capturing Excellence</h1>
              <p>Professional photography that celebrates your magic moments</p>
              <SlideButton onClick={() => navigate('/portfolio')}>
                View Portfolio <FaArrowRight />
              </SlideButton>
            </HeroOverlay>
          </HeroSection>

      {/* Services Section */}
      <Section>
        <SectionHeader>
          <h2>Our Services</h2>
          <p>Specializing in authentic representation</p>
        </SectionHeader>
        
        <ServicesGrid>
          <ServiceCard>
            <ServiceImage src={images.portrait} alt="Portrait photography" />
            <ServiceContent>
              <FaCamera />
              <h3>Portrait Photography</h3>
              <p>Stunning individual and family portraits that capture your essence</p>
              <ServiceLink onClick={() => navigate('/photography')}>
                See examples <FaArrowRight />
              </ServiceLink>
            </ServiceContent>
          </ServiceCard>

          <ServiceCard>
            <ServiceImage src={bride} alt="Wedding photography" />
            <ServiceContent>
              <FaCamera />
              <h3>Wedding Photography</h3>
              <p>Timeless memories of your special day with artistic flair</p>
              <ServiceLink onClick={() => navigate('/weddings')}>
                View packages <FaArrowRight />
              </ServiceLink>
            </ServiceContent>
          </ServiceCard>

          <ServiceCard>
            <ServiceImage src={images.event} alt="Event photography" />
            <ServiceContent>
              <FaCamera />
              <h3>Event Photography</h3>
              <p>Professional coverage for all your important occasions</p>
              <ServiceLink onClick={() => navigate('/contact')}>
                Learn more <FaArrowRight />
              </ServiceLink>
            </ServiceContent>
          </ServiceCard>
        </ServicesGrid>
      </Section>

      {/* About Section */}
      <AboutSection>
        <AboutContent>
          <h2>About Our Vision</h2>
          <p>
            We specialize in showcasing the beauty, strength, and diversity of your diverse experience.
            Our photography highlights authentic moments with technical excellence and cultural awareness.
          </p>
          <SlideButton onClick={() => navigate('/about')}>
            Our Story <FaArrowRight />
          </SlideButton>
        </AboutContent>
        <AboutImage src={images.portrait} alt="Photographer's vision" />
      </AboutSection>
    </HomeContainer>
  );
};

// Styled Components
const HomeContainer = styled.div`
  font-family: 'Poppins', sans-serif;
  color: #333;
`;

const HeroSection = styled.section`
  height: 100vh;
  background: url(${props => props.bgImage}) center/cover no-repeat;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  opacity: ${props => props.active ? (props.fade ? 1 : 0) : 0};
  transition: opacity 1s ease-in-out;
`;


const HeroOverlay = styled.div`
  text-align: center;
  color: white;
  max-width: 800px;
  padding: 0 2rem;
  
  h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    color: #f8f9fa;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
    animation: fadeInDown 1s ease-out;
  }
  
  p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
    animation: fadeIn 2s ease-in;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }
    
    p {
      font-size: 1.2rem;
    }
  }
`;



const Section = styled.section`
  padding: 5rem 10%;
  background: white;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  
  h2 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: #666;
    font-size: 1.1rem;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ServiceCard = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const ServiceContent = styled.div`
  padding: 1.5rem;
  text-align: center;
  
  svg {
    font-size: 2rem;
    color: #e74c3c;
    margin-bottom: 1rem;
  }
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  p {
    color: #666;
    margin-bottom: 1.5rem;
  }
`;

const ServiceLink = styled.button`
  background: none;
  border: none;
  color: #e74c3c;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 auto;
  padding: 0;
  
  &:hover {
    text-decoration: underline;
  }
`;

const AboutSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 500px;
  background: #f8f9fa;
  
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

const AboutImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  
  @media (max-width: 768px) {
    height: 300px;
  }
`;

export default Homepage;