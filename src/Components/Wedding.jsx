import React, { useState } from 'react';
import './Wedding.css';
import { useNavigate } from 'react-router-dom';

import pic1 from './Wedding/wedding1.jpeg';
import pic2 from './Wedding/wedding2.jpeg';
import pic3 from './Wedding/wedding3.jpeg';
import pic4 from './Wedding/wedding4.jpeg';
import pic5 from './Wedding/pic5.jpeg';

const WeddingPhotography = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const navigate = useNavigate();
  
  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };


  const weddingPhotos = [
    {
      id: 1,
      src: pic1,
      alt: 'Bride and groom portrait',
      caption: 'Sarah & Michael - Summer Garden Wedding'
    },
    {
      id: 2,
      src: pic2,
      alt: 'First dance',
      caption: 'Jessica & David - Romantic Ballroom Wedding'
    },
    {
      id: 3,
      src: pic3,
      alt: 'Ceremony kiss',
      caption: 'Amanda & James - Beachfront Wedding'
    },
    {
      id: 4,
      src: pic4,
      alt: 'Bridal party',
      caption: 'Nicole & Robert - Vineyard Wedding'
    }
  ];
  

  const pricingPlans = [
    {
      id: 1,
      name: 'Diamond',
      price: 35000,
      features: [
        '4 hours coverage',
        '1 photographer',
        '150+ edited images',
        'Online gallery',
        'Digital delivery'
      ],
      featured: false
    },
    {
      id: 2,
      name: 'Lifestyle',
      price: 80000,
      features: [
        '8 hours coverage',
        '2 photographers',
        '400+ edited images',
        'Online gallery',
        'Digital delivery',
        '10×10 photo album'
      ],
      featured: true
    },
    {
      id: 3,
      name: 'Exucutive',
      price: 150000,
      features: [
        'Full day coverage',
        '2 photographers',
        '600+ edited images',
        'Online gallery',
        'Digital delivery',
        '12×12 premium album',
        'Engagement session',
        'Canvas print'
      ],
      featured: false
    }
  ];

  const faqs = [
    {
      question: 'How far in advance should we book?',
      answer: 'We recommend booking 6-12 months in advance, especially for popular wedding dates. Some couples book up to 18 months ahead.'
    },
    {
      question: 'Do you travel for weddings?',
      answer: 'Yes! We\'re available for destination weddings. Travel fees may apply depending on location.'
    },
    {
      question: 'How many photos will we receive?',
      answer: 'The exact number varies by package and wedding duration, but we typically deliver 50-100 images per hour of coverage.'
    },
    {
      question: 'Can we request specific shots?',
      answer: 'Absolutely! We\'ll work with you before the wedding to create a shot list of must-have photos.'
    }
  ];

  const testimonials = [
    {
      id: 1,
      quote: 'Our wedding photos are absolutely stunning! They captured every special moment perfectly.',
      couple: 'Emily & Ryan',
      image: pic1 
    },
    {
      id: 2,
      quote: 'Working with them was such a pleasure. The photos tell the complete story of our day.',
      couple: 'Sophia & Mark',
      image: pic2
    }
  ];

    const heroImage = [
        pic5,
      {
   
    alt: 'Wedding couple in a romantic embrace'
  }
]

  return (
    <div className="wedding-photography">
      {/* Hero Section */}
      <section className="wedding-hero">
        <div className="hero-image-container">
          <img src={heroImage.src} alt={heroImage.alt} className="hero-image" /> 
        </div>
        <h1>Capturing Your Perfect Wedding Moments</h1>
        <p>Professional wedding photography that tells your unique love story</p>
        <button className="cta-button" onClick={() => navigate('/portfolio')}>View Our Portfolio</button>
      </section>

      {/* Gallery Section */}
      <section className="wedding-gallery">
        <h2>Recent Wedding Stories</h2>
        <div className="gallery-grid">
          {weddingPhotos.map((photo) => (
            <div key={photo.id} className="gallery-item">
              <img src={photo.src} alt={photo.alt} />
              <div className="gallery-caption">{photo.caption}</div>
            </div>
          ))}
        </div>
        
      </section>

      {/* Pricing Section */}
      <section className="pricing-plans">
        <h2>Wedding Photography Packages</h2>
        <p>Custom packages available - all include high-resolution edited images</p>
        
        <div className="plans-container">
          {pricingPlans.map((plan) => (
            <div 
              key={plan.id} 
              className={`plan-card ${plan.featured ? 'featured' : ''}`}
            >
              {plan.featured && <div className="popular-badge">Most Popular</div>}
              <h3>{plan.name}</h3>
              <div className="price">Ksh{plan.price.toLocaleString()}</div>
              <ul className="features">
                {plan.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button className={plan.featured ? 'cta-button' : 'inquiry-button'}>
                Inquire Now
              </button>
            </div>
          ))}
        </div>
        
        <div className="custom-option">
          <p>Need something different? <a href="/contact">Request a custom quote</a></p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="wedding-testimonials">
        <h2>Happy Couples</h2>
        <div className="testimonial-carousel">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial">
              <img src={testimonial.image} alt={testimonial.couple} />
              <blockquote>"{testimonial.quote}"</blockquote>
              <div className="couple-name">- {testimonial.couple}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="wedding-faq">
        <h2>Wedding Photography Questions</h2>
        
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button 
              className={`faq-question ${activeFaq === index ? 'active' : ''}`}
              onClick={() => toggleFaq(index)}
            >
              {faq.question}
            </button>
            <div 
              className="faq-answer"
              style={{ display: activeFaq === index ? 'block' : 'none' }}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
        
        <div className="faq-contact">
          <p>Have more questions? <a href="/contact">Contact us</a> - we're happy to help!</p>
        </div>
      </section>
    </div>
  );
};

export default WeddingPhotography;