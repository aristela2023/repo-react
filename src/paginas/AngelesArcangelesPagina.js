import React  from "react";
import ListaAngeles from "../Componente/ListaAngeles";


export default class AngelesArcangelesPagina extends React.Component {

  angeles =[
     {
        nombre: 'Gabriel',
        img: '/imagen/numeroHexagonal.jpg',
        mision: 'Angel primcipal mensajero cercano al Yo Soy '
  },
  {
    nombre: 'Rafael',
    img: '/imagen/metatron.jpg.mp4',
    mision: 'Medico por excelencia, sanando fisicamente,emocional y mental'

  },
  {
    nombre: 'Miguel',
    img: '/imagen/numeroHexagonal.jpg',
    mision: 'Excelencia de la proteccion e iluminacion'

  }
]
    render(){
        return(
            <>
                    <h2> Angeles </h2>
                    <ListaAngeles angelesarcangeles={this.angelesarcangeles} />
      
            
            </>
        )
    }
}