import React, { useEffect, useState, useRef } from 'react';
import Header from './components/Header';
import Section from './components/Section';
import BitcoinPrice from './components/BitcoinPrice';
import './App.css';

const App = () => {
  const sectionsRef = useRef([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    
    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <Section
        ref={(el) => (sectionsRef.current[0] = el)}
        id="section1"
        title="Welcome to Weboasis"
        content="Empowering decentralized AI and blockchain solutions."
        className="parallax fade-in"
        backgroundImage="https://picsum.photos/1920/1080"
      />
      <Section
        ref={(el) => (sectionsRef.current[1] = el)}
        id="section2"
        title="Our Mission"
        content="We aim to democratize AI computations through decentralized systems."
        className="slide-up"
        backgroundImage="https://picsum.photos/1920/1080?random=1"
      />
      <Section
        ref={(el) => (sectionsRef.current[2] = el)}
        id="section3"
        title="Bitcoin Price"
        content={<BitcoinPrice />}
        className="fade-in"
        backgroundImage="https://picsum.photos/1920/1080?random=2"
      />
    </div>
  );
};

export default App;
