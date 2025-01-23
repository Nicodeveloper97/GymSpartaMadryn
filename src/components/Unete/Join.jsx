import React from "react"
import "./Join.css"


const Join = () => {


    return (
        <div className="Join" id="joinus">
            <div className="leftt">
                <hr />
                <div>
                    <span className="texto-transparente"> Listo para </span>
                    <span> Mejorar  </span>
                </div>
                <div>
                    <span> Tu cuerpo </span>
                    <span className="texto-transparente"> Con nosotros? </span>
                </div>
            </div>
            <div className="rightt">
                <form action="" className="email-container" >
                    <input type="email" name="user_email" placeholder="Ingrese su email" />
                    <button className="btn btnj"> Unete ahora!</button>
                </form>
            </div>
        </div>
    )

}

export default Join;