import React from 'react';
import './Servicos.css';

function Servicos() {
  const servicos = [
    {
      titulo: 'Reprogramação de central (ECU e TCU)',
      descricao: 'Ajustes eletrônicos precisos para maior performance e eficiência.',
      imagem: '/imagens/ecu-tcu.png'
    },
    {
      titulo: 'Instalação de turbinas e kits de performance',
      descricao: 'Potencialize seu motor com componentes de alta performance.',
      imagem: '/imagens/turbina-kit.png'
    },
    {
      titulo: 'Downpipes, Intakes, Pressurização, Escapamentos full inox',
      descricao: 'Melhore o fluxo de ar e gases com peças customizadas em inox.',
      imagem: '/imagens/downpipe-inox.png'
    },
    {
      titulo: 'Downpipes, Intakes, Pressurização, Escapamentos em Titanium',
      descricao: 'Fluxo otimizado, peso reduzido e durabilidade máxima com tecnologia em titanium.',
      imagem: '/imagens/titanium.jpg'
    },
    {
      titulo: 'Peças em Fibra de carbono',
      descricao: 'Leveza e estilo com componentes em fibra de carbono.',
      imagem: '/imagens/fibra-carbono.png'
    },
  
    {
      titulo: 'Consultoria e projetos personalizados',
      descricao: 'Soluções sob medida para cada tipo de projeto automotivo.',
      imagem: '/imagens/remapeamento.png'
    },
 
  
  ];

  return (
    <section id="serviços" className="servicos-section" data-aos="fade-up">
      <div className="container">
        <h2 className="section-title">Serviços</h2>
        <div className="servicos-grid">
          {servicos.map((servico, index) => (
            <div className="servico-card" key={index}>
              <img src={servico.imagem} alt={servico.titulo} className="servico-img" />
              <h3>{servico.titulo}</h3>
              <p>{servico.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Servicos;
