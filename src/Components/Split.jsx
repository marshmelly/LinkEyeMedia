import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Dynamically import components
const Home = lazy(() => import('./Components/Home'));
const About = lazy(() => import('./Components/About'));
const Contact = lazy(() => import('./Components/Contact'));
const Portfolio = lazy(() => import('./Components/Portfolio'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </Suspense>
    </Router>
  );
}