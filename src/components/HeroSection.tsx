import React from 'react';
import robotImage from '../assets/robot-car.jpg';

const HeroSection: React.FC = () => {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '80vh',
      overflow: 'hidden'
    }}>
      <img 
        src={robotImage}
        alt="Robot arm in car"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        textAlign: 'center',
        fontSize: '3rem',
        fontWeight: 'bold',
        textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
        width: '100%',
        padding: '0 20px'
      }}>
        Revolutionizing autonomous vehicle cleaning
      </div>
    </div>
  );
};

export default HeroSection; 