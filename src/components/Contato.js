import React from 'react';

function Contato() {
  return (
    <section id="contato" data-aos="fade-up">
      <div className="container">
        <h2 className="section-title">Contato</h2>

        {/* Usamos <div> em vez de <p> para conter vários parágrafos */}
        <div className="text-gray-700 mb-6" style={{ textAlign: 'center' }}>
          <p>Fale conosco para orçamentos ou dúvidas:</p>
          <p>
            <strong>Endereço:</strong> Rua Professora Carmem Lima de Almeida, 87 – Bacacheri, Curitiba – PR, 82600-710
          </p>
          <p><strong>Telefone:</strong> (41) 9 8774-8320</p>
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:battistellaprojetos@gmail.com" style={{ color: '#ff6f00' }}>
              battistellaprojetos@gmail.com
            </a>
          </p>
          <p>
            <a
              href="https://api.whatsapp.com/send?phone=5541937748320"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fale pelo WhatsApp
            </a>
          </p>
        </div>

        {/* Google Maps incorporado */}
        <div style={{ marginTop: '50px' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.088170010887!2d-49.22098812482937!3d-25.401859077579726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce780ec327033%3A0xc5c2d3f4f32d8138!2sBattistella%20Performance!5e0!3m2!1spt-BR!2sbr!4v1745424460286!5m2!1spt-BR!2sbr"
            width="100%"
            height="450"
            style={{
              border: 0,
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização Battistella Performance"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contato;
