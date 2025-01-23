import React from "react"
import "./footer.css"
import Logo from "../../assets/Logogym.png"
import SportClub from "../../assets/familiaSportClub.png"
import Instagram from "../../assets/instagram.png"

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-section info-section">
                    <h3>Contacto</h3>
                    <div className="contact-info">
                        <a href="https://instagram.com" className="contact-item">
                            <img src={Instagram} alt="Instagram" />
                            <span>@gymspartamadryn</span>
                        </a>
                        <div className="contact-item">
                            <i className="fas fa-envelope"></i>
                            <span>gymspartamadryn@gmail.com</span>
                        </div>
                        <div className="contact-item">
                            <i className="fas fa-phone"></i>
                            <span>02804273920</span>
                        </div>
                        <div className="contact-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Juan Acosta 282</span>
                        </div>
                    </div>
                </div>

                <div className="footer-section schedule-section">
                    <h3>Horarios</h3>
                    <div className="schedule-info">
                        <div className="schedule-item">
                            <span>Lunes a Viernes </span>
                            <span>   7:00 - 22:00 </span>
                        </div>
                        <div className="schedule-item">
                            <span>Sábados</span>
                            <span>10:00 - 14:00</span>
                        </div>
                        
                    </div>
                </div>

                <div className="footer-section logo-section">
                    <div className="logos">
                        <img src={Logo} alt="Logo Gym" className="footer-logo" />
                        <img src={SportClub} alt="Sport Club" className="footer-logo" />
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2025 Todos los derechos reservados.</p>
            </div>
            
            <div className="blur blur-footer-1"></div>
            <div className="blur blur-footer-2"></div>
        </div>
    )
}

export default Footer;