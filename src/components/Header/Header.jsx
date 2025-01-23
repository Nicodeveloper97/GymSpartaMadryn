import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../../assets/Logogym.png"
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header-container">
      <div className="header">
        <img src={Logo} alt="" className="logo" />
        
        <button 
          className="hamburger-button"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className={`header-menu ${isOpen ? 'mobile-menu-open' : ''}`}>
          <li>Inicio</li>
          <li>Entrenamientos</li>
          <li>Sobre nosotros</li>
          <li>Planes</li>
          <li>Contacto</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;