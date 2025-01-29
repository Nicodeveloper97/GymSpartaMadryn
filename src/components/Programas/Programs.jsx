import React from "react"
import "./Programs.css"
import {programsData} from "../../data/programsData"

const Programs = () => {
    return(
        <div className="Programs" id="programs">
            <hr />
            <div className="programs-header">
                <span className="texto-transparente">Conoce nuestros</span>
                <span>Entrenamientos</span>
                <span className="texto-transparente">Personalizados</span>
            </div>

            <div className="programas-categorias">
                {programsData.map((program)=>(
                    <div className="categoria">
                        <div className="imagen-secundaria">
                            {program.secondaryImage}
                        </div>
                        <div className="categoria-contenido">
                            <div className="categoria-header">
                                <div className="imagen-svg">
                                    {program.image}
                                </div>
                                <span className="categoria-titulo">{program.heading}</span>
                            </div>
                            <span className="categoria-detalles">{program.details}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Programs;