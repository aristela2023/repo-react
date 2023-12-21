import React  from "react";
import ListaAngeles from "../Componente/ListaAngeles";

export default class AngelesArcangelesPagina extends React.Component {

    angelesarcangeles =[
      {
        nombre: "Metatron" ,
        img: "/imagen/GeomeMetatron.jpg",
        mision: "Dire StraitsLa Fuerza creativa de la expancion diseñada con la Geometria Sagrada, la sabiduria del Ser, Hacer y Tener de la fuerza original de la creacion. " 
      },
            
      {
           nombre: "Angel de Conciencia Gabriel",
           img: "/imagen/flordelavidaGabriel.png",
           mision: 'Angel primcipal mensajero cercano al Yo Soy '
     },

     {
       nombre: 'Rafael',
       img: "/imagen/arcangeldelavida.jpg",
       mision: 'Medico por excelencia y sananador de los estados fisicamente,emocional y mental del nacimiento del ser'
     },
     {
       nombre: ' Semilla Estelar Miguel',
       img: "/imagen/semillaestelar.jpg",
       mision: 'Excelencia de la proteccion e iluminacion'
   
     }
   ]

    render(){
        return(
            <>
                    <h2> AngelesArcangeles </h2>
                    <ListaAngeles angelesarcangeles={this.angelesarcangeles} />
            </>
        )
    }
  }