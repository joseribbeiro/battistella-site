import React from 'react';
import './Header.css';
import logo from '../assets/logo.png';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <img src={logo} alt="Battistella Performance" className="logo" />
        <h1 className="header-title">Battistella Performance</h1>
      </div>
    </header>
  );
}

export default Header;
