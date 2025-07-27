import React from 'react';
import styled from 'styled-components';
import { FaCamera, FaVideo, FaBroadcastTower } from 'react-icons/fa';

const ServicesSection = () => {
  const services = [
    {
      icon: <FaCamera />,
      title: "Photography",
      description: "Capturing timeless moments with professional-grade equipment and artistic vision.",
      events: ["Weddings", "Parties", "Formal Functions", "Funerals"]
    },
    {
      icon: <FaVideo />,
      title: "Videography",
      description: "Cinematic storytelling that preserves your special occasions in motion.",
      events: ["Weddings", "Corporate Events", "Birthday Parties", "Memorials"]
    },
    {
      icon: <FaBroadcastTower />,
      title: "Livestreaming",
      description: "High-quality live broadcasts for remote guests with multi-camera setups.",
      events: ["Weddings", "Funerals", "Conferences", "Special Ceremonies"]
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
          <ServiceCard key={index}>
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
            
            <LearnMoreButton>Learn More →</LearnMoreButton>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </ServicesContainer>
  );
};

// Styled Components
const ServicesContainer = styled.section`
  padding: 5rem 5%;
  background: #f8f9fa;
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
  max-width: 1200px;
  margin: 0 auto;
`;

const ServiceCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.1);
  }
`;

const ServiceIcon = styled.div`
  font-size: 2.5rem;
  color: #e74c3c;
  margin-bottom: 1.5rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
`;

const ServiceDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const EventList = styled.div`
  margin: 1.5rem 0;
  
  h4 {
    font-size: 1rem;
    color: #333;
    margin-bottom: 0.5rem;
  }
  
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    list-style: none;
    padding: 0;
  }
  
  li {
    background: #f1f1f1;
    color: #333;
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.9rem;
  }
`;

const LearnMoreButton = styled.button`
  background: transparent;
  color: #e74c3c;
  border: none;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  transition: color 0.3s ease;
  
  &:hover {
    color: #c0392b;
  }
`;

export default ServicesSection;