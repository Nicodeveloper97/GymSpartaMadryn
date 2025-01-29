import fuerzaImg from '../assets/Fuerza.png'
import cardioImg from '../assets/Cardio.png'
import quemagrasaImg from '../assets/Quemagrasa.png'
import saludImg from '../assets/salud.png'

export const programsData = [
  {
    
    secondaryImage: <img src={fuerzaImg} alt="Entrenamiento de Fuerza" />,
    heading: "Entrenamiento de Fuerza",
    details:
      "En este programa te entrenarás para mejorar tu fuerza a través de muchos ejercicios.",
  },
  {
    
    secondaryImage: <img src={cardioImg} alt="Entrenamiento Cardiovascular" />,
    heading: "Entrenamiento Cardiovascular",
    details:
      "En este programa, se le capacita para realizar movimientos secuenciales en un rango de 20 a 30 minutos.",
  },
  {
    
    secondaryImage: <img src={quemagrasaImg} alt="Quema de grasa" />,
    heading: "Quema de grasa",
    details:
      "Este programa es adecuado para usted que desea deshacerse de su grasa y perder peso..",
  },
  {
    
    secondaryImage: <img src={saludImg} alt="Salud y fitness" />,
    heading: "Salud y fitness",
    details:
      "Este programa está diseñado para aquellos que hacen ejercicio sólo para acondicionamiento físico, no para culturismo.",
  },
];