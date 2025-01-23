
import "./reasons.css";
import plantabajapro from "../../assets/planta baja pro.jpg"
import Carrizo from "../../assets/Carri.jpg"
import Bici from "../../assets/Bicis.jpg"
import Tick from "../../assets/tick.png"
const Reasons = () => {
    return (
        <div className="Reasons" id="reason">
            <div className="left-r">
                <img src={Carrizo} alt="" />
                <img src={plantabajapro} alt="" />
                <img src={Bici} alt="" />
                
            </div>

            <div className="right-r"> 
                
                <div className="textor">
                <span> Razones </span>
                    <span className="texto-transparente"><br />Por la cual</span>
                    <span><br /> Elegirnos!</span>
                </div>
                <div className="detalles">
                    <div>
                        <img src={Tick} alt="" />
                        <span> 2 PROFESORES CALIFICADOS </span>
                    </div>
                    <div>
                        <img src={Tick} alt="" />
                        <span> Mejora tu rendimiento y maximiza tus resultados </span>
                    </div>
                    <div>
                        <img src={Tick} alt="" />
                        <span> Entrenamientos personalizados </span>
                    </div>
                    <div>
                        <img src={Tick} alt="" />
                        <span> Equipamiento profesional </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reasons;