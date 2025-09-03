import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FaCamera, FaVideo, FaBroadcastTower } from 'react-icons/fa';


const ServicesSection = () => {
  const navigate = useNavigate();
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
            
            <LearnMoreButton onClick={() => navigate('/contact')}>Inquire →</LearnMoreButton>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </ServicesContainer>
  );
};

// Styled Components
const ServicesContainer = styled.section`
  padding: 2rem 5%;
  background: #f8f9fa;
  margin: 0.5;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  
  h2 {
    font-size: 2.2rem;
    color: #333;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: #666;
    font-size: 1rem;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ServiceCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  }
`;

const ServiceIcon = styled.div`
  font-size: 2.2rem;
  color: #e74c3c;
  margin-bottom: 1.2rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
  color: #333;
`;

const ServiceDescription = styled.p`
  color: #666;
  line-height: 1.5;
  margin-bottom: 1.2rem;
  font-size: 0.95rem;
`;

const EventList = styled.div`
  margin: 1.2rem 0;
  
  h4 {
    font-size: 0.95rem;
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
    padding: 0.25rem 0.7rem;
    border-radius: 18px;
    font-size: 0.85rem;
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
  gap: 0.3rem;
  padding: 0;
  font-size: 0.95rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #c0392b;
  }
`;

export default ServicesSection;