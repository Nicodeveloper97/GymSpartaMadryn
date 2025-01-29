import React from "react"
import "./Hero.css"
import { motion } from "framer-motion"
import NumberCounter from "number-counter"
import Pibe from "../../assets/pibe.png"
import Header from "../../components/Header/Header"

const Hero = React.memo(() => {
    const transition = React.useMemo(() => 
        ({ type: 'tween', duration: 0.5 }), 
    [])

    return (
        <div className="hero-professional">
            <div className="blur heroblur"></div>
            <Header/>
            <div className="hero-grid">
                <div className="hero-content">
                    <motion.div 
                        className="hero-tag"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={transition}
                    >
                        <span>Transformación Fitness Profesional</span>
                    </motion.div>

                    <div className="hero-title">
                        <h1>
                            <span className="texto-transparente">Construye</span>
                            <br />
                            <span>Tu</span>
                            <br />
                            <span className="texto-transparente">Cuerpo Ideal</span>
                        </h1>
                    </div>

                    <p className="hero-description">
                        Aquí te ayudaremos a encontrar tu mejor forma con una metodología personalizada
                    </p>

                    <div className="hero-metrics">
                        <div className="metric">
                            <NumberCounter 
                                end={80} 
                                start={50} 
                                delay='4' 
                                preFix="+" 
                                className="metric-number"
                            />
                            <span className="metric-label">Alumnos</span>
                        </div>
                        <div className="metric">
                            <span className="metric-number">+2</span>
                            <span className="metric-label">Años de Trayectoria</span>
                        </div>
                    </div>

                    <div className="hero-ctas">
                        <button className="btn btn-primary">Inscríbete!</button>
                        <button className="btn btn-secondary">Sobre Nosotros</button>
                    </div>
                </div>

                <div className="hero-visual">
                    <motion.div 
                        className="image-container"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                    >
                        <img 
                            src={Pibe} 
                            alt="Entrenador Fitness" 
                            className="hero-image"
                            style={{
                                background: 'transparent',
                                objectFit: 'contain'
                            }}
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    )
})

export default Hero