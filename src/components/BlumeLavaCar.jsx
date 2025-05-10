import { useState, useEffect } from 'react';
import { Phone, Car, Clock, Sparkles, Droplets, Check, MapPin, ChevronDown } from 'lucide-react';
import './BlumeLavaCarStyles.css';

export default function BlumeLavaCar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5551995760430?text=Olá,%20gostaria%20de%20agendar%20um%20serviço%20no%20Blume%20Lava%20Car!', '_blank');
  };
  
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="app-container">
      {/* Header/Navbar */}
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="navbar">
            <div className="logo-container">
              <div className="logo-icon-wrapper">
                <Car size={32} color={isScrolled ? "white" : "black"} />
              </div>
              <h1 className="logo-text" style={{ color: isScrolled ? "white" : "black" }}>BLUME LAVA CAR</h1>
            </div>
            
            <div className="nav-buttons">
              <div className="nav-links">
                <button onClick={() => scrollToSection('services')} className="nav-link">
                  Serviços
                </button>
                <button onClick={() => scrollToSection('about')} className="nav-link">
                  Sobre Nós
                </button>
                <button onClick={() => scrollToSection('contact')} className="nav-link">
                  Contato
                </button>
              </div>
              
              <button className="button button-primary" onClick={handleWhatsAppClick}>
                <Phone size={16} className="button-icon" />
                <span>Agendar Agora</span>
              </button>
            </div>
            
            <button className="mobile-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
          
          {/* Mobile Menu */}
          <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
            <button onClick={() => scrollToSection('services')} className="mobile-nav-link">
              Serviços
            </button>
            <button onClick={() => scrollToSection('about')} className="mobile-nav-link">
              Sobre Nós
            </button>
            <button onClick={() => scrollToSection('contact')} className="mobile-nav-link">
              Contato
            </button>
            <button className="mobile-cta" onClick={handleWhatsAppClick}>
              <Phone size={16} className="button-icon" />
              <span>Agendar Agora</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section - Reorganized */}
      <section className="hero-section">
        <div className="hero-background"></div>
        <div className="container">
          <div className="hero-content-new">
            {/* Full-width image first */}
            <div className="hero-image-full">
              <div className="image-container-full">
                <img 
                  src="src/assets/logo.png" 
                  alt="Blume Lava Car" 
                  className="hero-img-full"
                />
              </div>
            </div>
            
            {/* Hero text below the image, full width */}
            <div className="hero-text-full">
              <div className="hero-tag">
                <span>Lavagem Premium</span>
              </div>
              <h1 className="hero-title">Seu carro merece<br /><span className="highlight">o melhor tratamento</span></h1>
              <p className="hero-description">Cuidamos do seu veículo com excelência e dedicação, utilizando produtos de alta qualidade para garantir resultados impecáveis.</p>
              <div className="hero-buttons">
                <button className="button button-primary hero-button" onClick={handleWhatsAppClick}>
                  <Phone size={20} className="button-icon" />
                  <span>Agendar pelo WhatsApp</span>
                </button>
                <button className="button button-secondary hero-button" onClick={() => scrollToSection('services')}>
                  <span>Ver Serviços</span>
                  <ChevronDown size={20} className="button-icon-right" />
                </button>
              </div>
              <div className="hero-features">
                <div className="hero-feature">
                  <div className="hero-feature-icon">
                    <Check size={16} />
                  </div>
                  <span>Produtos Premium</span>
                </div>
                <div className="hero-feature">
                  <div className="hero-feature-icon">
                    <Check size={16} />
                  </div>
                  <span>Agendamento Flexível</span>
                </div>
                <div className="hero-feature">
                  <div className="hero-feature-icon">
                    <Check size={16} />
                  </div>
                  <span>Tele-Busca</span>
                </div>
              </div>
              <div className="hero-location">
                <MapPin size={18} />
                <span>Dois Irmãos, RS - Atendemos em toda a cidade e região</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-scroll-indicator" onClick={() => scrollToSection('services')}>
          <span>Rolar para baixo</span>
          <ChevronDown size={20} />
        </div>
      </section>

      {/* Services Section */}
      <section className="section section-white" id="services">
        <div className="container">
          <div className="section-title-container">
            <h2 className="section-title">Nossos Serviços</h2>
            <p className="section-description">Oferecemos serviços completos para manter seu carro sempre impecável, como se tivesse acabado de sair da concessionária.</p>
          </div>
          
          <div className="services-grid">
            {/* Service 1 */}
            <div className="service-card">
              <div className="service-icon-container">
                <Car size={24} className="service-icon" />
              </div>
              <h3 className="service-title">Tele-Busca</h3>
              <p className="service-description">Buscamos e entregamos seu veículo onde você estiver, sem complicações.</p>
            </div>
            
            {/* Service 2 */}
            <div className="service-card">
              <div className="service-icon-container">
                <Sparkles size={24} className="service-icon" />
              </div>
              <h3 className="service-title">Polimento</h3>
              <p className="service-description">Revitalize o brilho da pintura do seu carro com nosso polimento profissional.</p>
            </div>
            
            {/* Service 3 */}
            <div className="service-card">
              <div className="service-icon-container">
                <Droplets size={24} className="service-icon" />
              </div>
              <h3 className="service-title">Higienização Interna</h3>
              <p className="service-description">Limpeza completa do interior, eliminando ácaros, bactérias e maus odores.</p>
            </div>
            
            {/* Service 4 */}
            <div className="service-card">
              <div className="service-icon-container">
                <Check size={24} className="service-icon" />
              </div>
              <h3 className="service-title">Lavagem Detalhada</h3>
              <p className="service-description">Limpeza minuciosa de todos os componentes, deixando seu carro impecável.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section section-gray" id="about">
        <div className="container">
          <div className="section-title-container">
            <h2 className="section-title">Por que escolher o Blume Lava Car?</h2>
            <p className="section-description">Somos especialistas em cuidar do seu veículo com a máxima atenção aos detalhes.</p>
          </div>
          
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon-container">
                <Clock size={32} className="feature-icon" />
              </div>
              <h3 className="feature-title">Rapidez</h3>
              <p className="feature-description">Serviço ágil e eficiente, respeitando seu tempo.</p>
            </div>
            
            <div className="feature">
              <div className="feature-icon-container">
                <Sparkles size={32} className="feature-icon" />
              </div>
              <h3 className="feature-title">Qualidade</h3>
              <p className="feature-description">Utilizamos produtos de primeira linha e técnicas avançadas.</p>
            </div>
            
            <div className="feature">
              <div className="feature-icon-container">
                <Check size={32} className="feature-icon" />
              </div>
              <h3 className="feature-title">Confiança</h3>
              <p className="feature-description">Profissionais treinados e comprometidos com excelência.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section className="section section-black" id="contact">
        <div className="container">
          <div className="section-title-container">
            <h2 className="section-title">Agende agora mesmo!</h2>
            <p className="section-description">Deixe seu carro nas mãos de quem entende. Faça seu agendamento pelo WhatsApp e receba um atendimento personalizado.</p>
          </div>
          
          <button 
            onClick={handleWhatsAppClick}
            className="button cta-button"
          >
            <Phone size={20} className="button-icon" />
            <span>Agendar pelo WhatsApp</span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo-container">
              <Car size={24} color="white" />
              <h2 className="logo-text">BLUME LAVA CAR</h2>
            </div>
            
            <div className="footer-text">
              <p>© 2025 Blume Lava Car. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Fixed WhatsApp Button */}
      <div className="whatsapp-fixed">
        <button 
          onClick={handleWhatsAppClick}
          className="whatsapp-button"
        >
          <Phone size={24} />
        </button>
      </div>
    </div>
  );
}