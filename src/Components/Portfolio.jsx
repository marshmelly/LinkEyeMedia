import React, { useState } from 'react';
import styled from 'styled-components';
import { FiSearch, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import sunrise from '../Components/project files/sunrise2.jpg';
import bride from '../Components/project files/bridal moment 2.jpg'


// Sample data items for the portfolio
const portfolioItems = [
  { id: 1, category: 'nature', title: 'Adventure Photography',imageUrl:sunrise},
  { id: 2, category: 'portrait', title: 'Urban Portrait', imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format' },
  { id: 3, category: 'wedding', title: 'Bridal Moment', imageUrl:bride },
  { id: 4, category: 'nature', title: 'Forest Pathway', imageUrl: 'https://images.unsplash.com/photo-1682695796954-bad0d0f59ff1?w=800&auto=format' },
  { id: 5, category: 'urban', title: 'Cityscape', imageUrl: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&auto=format' },
  { id: 6, category: 'portrait', title: 'Studio Session', imageUrl: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=800&auto=format' },
];

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = portfolioItems.filter(item => {
    const matchesCategory = activeFilter === 'all' || item.category === activeFilter;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleImageClick = (item) => {
    setSelectedImage(item);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction) => {
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    } else {
      newIndex = (currentIndex + 1) % filteredItems.length;
    }
    
    setSelectedImage(filteredItems[newIndex]);
  };

  return (
    <PortfolioContainer id="portfolio">
      <SectionHeader>
        <h2>Our Portfolio</h2>
        <p>Capturing moments that tell your story</p>
      </SectionHeader>

      <Controls>
        <FilterButtons>
          {['all', 'nature', 'portrait', 'wedding', 'urban'].map(filter => (
            <FilterButton 
              key={filter}
              active={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </FilterButton>
          ))}
        </FilterButtons>
        
        <SearchBox>
          <FiSearch />
          <input 
            type="text" 
            placeholder="Search photos..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </SearchBox>
      </Controls>

      <GalleryGrid>
        {filteredItems.length > 0 ? (
          filteredItems.map(item => (
            <GalleryItem key={item.id} onClick={() => handleImageClick(item)}>
              <img src={item.imageUrl} alt={item.title} loading="lazy" />
              <Overlay>
                <h3>{item.title}</h3>
                <span>{item.category}</span>
              </Overlay>
            </GalleryItem>
          ))
        ) : (
          <EmptyMessage>No photos match your search criteria</EmptyMessage>
        )}
      </GalleryGrid>

      {/* Lightbox */}
      {selectedImage && (
        <Lightbox>
          <LightboxContent>
            <CloseButton onClick={closeLightbox}><FiX /></CloseButton>
            <NavButton position="left" onClick={() => navigateImage('prev')}>
              <FiChevronLeft />
            </NavButton>
            
            <LightboxImage>
              <img src={selectedImage.imageUrl} alt={selectedImage.title} />
              <Caption>
                <h3>{selectedImage.title}</h3>
                <p>{selectedImage.category}</p>
              </Caption>
            </LightboxImage>
            
            <NavButton position="right" onClick={() => navigateImage('next')}>
              <FiChevronRight />
            </NavButton>
          </LightboxContent>
        </Lightbox>
      )}
    </PortfolioContainer>
  );
};

// Styled Components
const PortfolioContainer = styled.section`
  padding: 4rem 5%;
  background: #f9f9f9;
  margin: 0;
  padding: 0.5;
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

const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const FilterButtons = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  background: ${props => props.active ? '#333' : 'transparent'};
  color: ${props => props.active ? 'white' : '#333'};
  border: 1px solid #ddd;
  padding: 0.5rem 1.5rem;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.active ? '#333' : '#f0f0f0'};
  }
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  background: white;
  border: 1px solid #ddd;
  border-radius: 30px;
  padding: 0.5rem 1rem;
  width: 300px;
  max-width: 100%;

  svg {
    margin-right: 0.5rem;
    color: #666;
  }

  input {
    border: none;
    outline: none;
    width: 100%;
    font-size: 1rem;
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  color: white;
  gap: 1.5rem;
`;

const GalleryItem = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  aspect-ratio: 4/3;
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  color: white;

  ${GalleryItem}:hover & {
    opacity: 1;
  }

  h3 {
    margin-bottom: 0.5rem;
    color: white;
    font-size: 1.2rem;
  }

  span {
    font-size: 0.9rem;
    text-transform: capitalize;
  }
`;

const EmptyMessage = styled.p`
  grid-column: 1 / -1;
  text-align: center;
  padding: 2rem;
  color: #666;
`;

const Lightbox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const LightboxContent = styled.div`
  position: relative;
  width: 90%;
  max-width: 1200px;
  height: 90%;
  display: flex;
  align-items: center;
`;

const CloseButton = styled.button`
  position: absolute;
  top: -50px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  padding: 0.5rem;
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  ${props => props.position === 'left' ? 'left: -50px' : 'right: -50px'};
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.5rem;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.4);
  }

  @media (max-width: 768px) {
    ${props => props.position === 'left' ? 'left: 10px' : 'right: 10px'};
    background: rgba(0, 0, 0, 0.5);
  }
`;

const LightboxImage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 90%;
    object-fit: contain;
  }
`;

const Caption = styled.div`
  height: 10%;
  color: white;
  text-align: center;
  padding: 1rem;

  h3 {
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
  }

  p {
    text-transform: capitalize;
    color: #ccc;
  }
`;

export default PortfolioSection;