import './Navbar.css';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png'; // ajuste o caminho se estiver diferente

function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const fecharMenu = () => {
    setMenuAberto(false);
  };

  const links = [
    { nome: 'Quem Somos', id: 'quem-somos' },
    { nome: 'Serviços', id: 'serviços' },
    { nome: 'Galeria', id: 'galeria' },
    { nome: 'Contato', id: 'contato' },
    { nome: 'Redes Sociais', id: 'redes-sociais' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* Brand */}
        <div className="brand">
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <img src={logo} alt="Logo" className="brand-logo" />
    <span className="brand-name">Battistella Performance</span>
  </div>

  {/* Botão Sanduíche */}
  <div className="menu-toggle" onClick={toggleMenu}>
    {menuAberto ? <X size={28} /> : <Menu size={28} />}
  </div>
</div>

{/* Links de navegação */}
<div className={`nav-links ${menuAberto ? 'active' : ''}`}>
  {links.map((link, index) => (
    <a key={index} href={`#${link.id}`} onClick={fecharMenu}>
      {link.nome}
    </a>
  ))}
</div>

      </div>
    </nav>
  );
}

export default Navbar;
