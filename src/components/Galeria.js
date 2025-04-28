import { useEffect } from 'react';

function Galeria() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.setAttribute("data-use-service-core", "true");
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="galeria" className="py-16 bg-gray-100 text-center" data-aos="fade-up">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="section-title mb-4">Galeria de Projetos</h2>

        <p className="text-gray-700 mb-6" style={{ textAlign: 'center' }}>
          Confira alguns dos nossos projetos direto do Instagram:
        </p>

        {/* Reduz a escala da galeria */}
        <div style={{ transform: 'scale(0.85)', transformOrigin: 'top center', maxWidth: '100%', margin: '0 auto' }}>
          <div className="elfsight-app-db7a7b77-dcf6-4305-a514-1c7ffb6d7eaa"></div>
        </div>
      </div>
    </section>
  );
}

export default Galeria;
