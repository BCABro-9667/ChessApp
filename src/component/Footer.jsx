import React from 'react';
import './stylesheet/global.css';

function Footer() {
  return (
    <>
      <footer>
        © Copyright 2024 | CheckmateClub | All rights reserved | 
        <span> Powered by <b style={{color: '#81B64C'}}> BCABro</b></span>
      </footer>
      <div className="arrow">
        <div className="arrowmark"></div>
      </div>
    </>
  );
}

export default Footer;
