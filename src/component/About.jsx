import React from 'react';
import './stylesheet/About.css';
import './stylesheet/global.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="heading"><h2>About Our Chess Tournament</h2>
        </div>        <p>
          Welcome to the Chess Tournament, where the best minds meet and compete. Our tournament is designed to foster a community of chess enthusiasts, from beginners to grandmasters.
        </p>
        <p>
          We host a variety of tournaments throughout the year, offering players of all levels the opportunity to challenge themselves and improve their skills. Our mission is to promote the game of chess and create a vibrant and inclusive community.
        </p>
        <div className="about-images">
          <img src="https://images.chesscomfiles.com/uploads/v1/event_index/9e8ba5da-122f-11ef-9b75-15848818dd11-2.43529f31.728x410o.d92abd6aa401.png" alt="Tournament" className="responsive-img" />
          <img src="https://images.chesscomfiles.com/uploads/v1/event_index/eb71fed8-a3cd-11ee-8b81-0b949b4ec240-2.bc1a741d.728x410o.a2048df2cd9a.jpg" alt="Chess Match" className="responsive-img" />
        </div>
      </div>
    </div>
  );
};

export default About;
