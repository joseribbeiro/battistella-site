// src/App.js
import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import QuemSomos from './components/QuemSomos';
import Servicos from './components/Servicos';
import Galeria from './components/Galeria';
import Contato from './components/Contato';
import RedesSociais from './components/RedesSociais';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />

      <main>
        <section id="quem-somos">
          <QuemSomos />
        </section>

        <section id="servicos">
          <Servicos />
        </section>

        <section id="galeria">
          <Galeria />
        </section>

        <section id="contato">
          <Contato />
        </section>

        <section id="redes-sociais">
          <RedesSociais />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
