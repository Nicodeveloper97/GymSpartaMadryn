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
                        {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Programs;