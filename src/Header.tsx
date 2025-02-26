import React, { useEffect, useState } from 'react';
import img from './img/yo.jpg'



const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Mostrar el botón al hacer scroll hacia abajo
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Función para desplazarse hacia arriba
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <header id='header' className=" bg-gray-800 text-white py-4 px-8 flex items-center justify-between">
      {/* Imagen/logo a la izquierda */}
      <div className="flex items-center gap-3">

        <h1 className="text-2xl font-bold">Mi Portafolio</h1>
      </div>

      {/* Navegación a la derecha */}
      <nav>
        <ul className="flex space-x-6">
          <li>
            <a
              href="#experience"
              className="hover:text-gray-400 transition duration-300"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#proyectos"
              className="hover:text-gray-400 transition duration-300"
            >
              Proyectos
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-gray-400 transition duration-300"
            >
              Contacto
            </a>
          </li>
        </ul>
      </nav>
      {/* Botón para subir */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-12 right-4 bg-blue-600 text-white text-4xl p-2 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
        >
          ↑
        </button>
      )}
    </header>
  );
};

export default Header;
