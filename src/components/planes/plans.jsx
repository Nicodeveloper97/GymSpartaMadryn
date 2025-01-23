import "./plans.css"
import {plansData} from "../../data/plansData"
import tildeblanco from "../../assets/whiteTick.png"

const Plans = () => {
    return (
        <div className="planes">

            <div className="blur plansburn1"></div>
            <div className="blur plansburn2"></div>
            <div className="programs-headers" style={{gap: '2rem'}}>
                <span className="texto-transparente"> Preparate para </span>
                <span> Empezar tu transformacion</span>
                <span className="texto-transparente"> con nosotros </span>
            </div>


            <div className="plans"> 
                {plansData.map((plan, i)=> (
                    <div className="plan" key={1}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>$ {plan.price}</span>

                        <div className="features">
                            {plan.features.map((feature, i)=> (
                                <div className="feature">
                                    <img src={tildeblanco} alt="" />
                                    <span key={1}>{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div>
                <span> Para saber mas </span>
            </div>
            <button className="btn"> Unete! </button>
                    </div> 
                ))}
            </div>

            
        </div>
    )
}

export default Plans;