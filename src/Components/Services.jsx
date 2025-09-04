import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FaCamera, FaVideo, FaBroadcastTower } from 'react-icons/fa';


import photographyBg from './Background/photo.jpeg';
import videographyBg from './Background/video.jpeg';
import livestreamingBg from './Background/livestream.jpeg';

const ServicesSection = () => {
  const navigate = useNavigate();
  const services = [
    {
      icon: <FaCamera />,
      title: "Photography",
      description: "Capturing timeless moments with professional-grade equipment and artistic vision.",
      events: ["Weddings", "Parties", "Formal Functions", "Funerals"],
      background: photographyBg
    },
    {
      icon: <FaVideo />,
      title: "Videography",
      description: "Cinematic storytelling that preserves your special occasions in motion.",
      events: ["Weddings", "Corporate Events", "Birthday Parties", "Memorials"],
      background: videographyBg
    },
    {
      icon: <FaBroadcastTower />,
      title: "Livestreaming",
      description: "High-quality live broadcasts for remote guests with multi-camera setups.",
      events: ["Weddings", "Funerals", "Conferences", "Special Ceremonies"],
      background: livestreamingBg
    }
  ];

  return (
    <ServicesContainer id="services">
      <SectionHeader>
        <h2>Our Services</h2>
        <p>Professional media coverage for life's most important moments</p>
      </SectionHeader>

      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceCard key={index} background={service.background}>
            <CardContent>
              <ServiceIcon>{service.icon}</ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              
              <EventList>
                <h4>Available For:</h4>
                <ul>
                  {service.events.map((event, i) => (
                    <li key={i}>{event}</li>
                  ))}
                </ul>
              </EventList>
              
              <LearnMoreButton onClick={() => navigate('/contact')}>Inquire →</LearnMoreButton>
            </CardContent>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </ServicesContainer>
  );
};

// Styled Components
const ServicesContainer = styled.section`
  padding: 4rem 5%;
  background: #f8f9fa;
  margin:0
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  
  h2 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 0.8rem;
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
  max-width: 1200px;
  margin: 0 auto;
`;

const ServiceCard = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
              url(${props => props.background}) center/cover;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  color: white;
  min-height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(231, 76, 60, 0.2), rgba(52, 152, 219, 0.2));
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 0;
  }
  
  &:hover::before {
    opacity: 1;
  }
`;

const CardContent = styled.div`
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ServiceIcon = styled.div`
  font-size: 2.5rem;
  color: #e74c3c;
  margin-bottom: 1.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const ServiceTitle = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 1rem;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const ServiceDescription = styled.p`
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 1rem;
`;

const EventList = styled.div`
  margin: 1.5rem 0;
  
  h4 {
    font-size: 1rem;
    color: white;
    margin-bottom: 0.8rem;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  }
  
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
    list-style: none;
    padding: 0;
  }
  
  li {
    background: rgba(231, 76, 60, 0.9);
    color: white;
    padding: 0.4rem 0.9rem;
    border-radius: 20px;
    font-size: 0.9rem;
    backdrop-filter: blur(4px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
`;

const LearnMoreButton = styled.button`
  background: rgba(255, 255, 255, 0.15);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  transition: all 0.3s ease;
  border-radius: 30px;
  backdrop-filter: blur(4px);
  margin-top: auto;
  align-self: flex-start;
  
  &:hover {
    background: rgba(231, 76, 60, 0.9);
    border-color: rgba(231, 76, 60, 0.9);
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

export default ServicesSection;