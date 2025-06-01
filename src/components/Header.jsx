import React from 'react';
import './Header.css'; // make sure to import the CSS file

const Header = () => {
  return (
    <header id="header" className="header">
      <div className="overlay">
        <h1 className="title">CodeBaseCamp</h1>
        <p className="tagline">Chase your goal with industry-ready tech training</p>
        <p className="offer">Courses starting at ₹999/- | Admission Open</p>
        <button
          onClick={() => {
            const formSection = document.getElementById('inquiry');
            if (formSection) {
              formSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          Inquire Now
        </button>
      </div>
    </header>
  );
};

export default Header;
