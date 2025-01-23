import React from "react"
import "./Hero.css"
import Header from "../../components/Header/Header"
import Pibe from "../../assets/pibe.png"
import { motion } from "framer-motion"
import NumberCounter from "number-counter"

const Hero = React.memo(() => {
    const transition = React.useMemo(() => 
        ({ type: 'spring', duration: 3 }), 
    [])

    return (
        <div className="hero">
            <div className="blur heroblur"></div>
            <div className="left-h">
                <Header/>

                <div className="anuncio">
                    <motion.div
                        initial={{ left: '200px' }}
                        whileInView={{ left: '8px' }}
                        transition={{ ...transition, type: 'tween' }}
                    />
                    <span>Haz que cada repetición cuente</span>
                </div>

                <div className="hero-text">
                    <div>
                        <span className="texto-transparente">Construye</span>
                        <span> Tu</span>
                    </div>
                    <div>
                        <span>Cuerpo Ideal</span>
                    </div>
                    <div>
                        <span>
                            Aqui te ayudaremos a encontrar tu mejor forma
                        </span>
                    </div>
                </div>

                <div className="figuras">
                    <div>
                        <span>
                            <NumberCounter end={80} start={50} delay='4' preFix="+"/> 
                        </span>
                        <span>Alumnos</span>
                    </div>
                    <div>
                        <span>+2</span>
                        <span>años de trayectoria</span>
                    </div>
                </div>

                <div className="hero-botones">
                    <button className="btn">Inscribite!</button>
                    <button className="btn">Sobre nosotros</button>
                </div>
            </div>

            <div className="right-h">
                <button className="btn">Comienza ahora</button>
                <img src={Pibe} alt="Hero Image" className="hero-imagen" />
            </div>
        </div>
    )
})

export default Hero