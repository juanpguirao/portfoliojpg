import React from 'react';
import img from './img/yo.jpg'
const Header = () => {
  return (
    <header className=" bg-gray-800 text-white py-4 px-8 flex items-center justify-between">
      {/* Imagen/logo a la izquierda */}
      <div className="flex items-center gap-3">
 
        <h1 className="text-2xl font-bold">Mi Portafolio</h1>
      </div>

      {/* Navegación a la derecha */}
      <nav>
        <ul className="flex space-x-6">
          <li>
            <a
              href="#about"
              className="hover:text-gray-400 transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="https://juanpguirao.github.io/naruto/"
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
    </header>
  );
};

export default Header;
