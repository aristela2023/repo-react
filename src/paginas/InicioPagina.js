import React from "react";
import AngelesArcangeles from '../Componente/AngelesArcangeles'

export default class InicioPagina extends React.Component{

render(){
    return(
        <>
             <h2>Inicio</h2>
     <p> Bienvenido a mi pagina de angeles de la divinidades del reconocimiento divino del Alma</p>

  <AngelesArcangeles nombre="Metatron" 
  img="/imagen/GeomeMetatron.jpg"
  mision="Fuerza creativa de la expancion diseñada con la Geometria Sagrada, la sabiduria del Ser, Hacer y Tener de la fuerza original de la creacion. " /> 

  <AngelesArcangeles nombre="Gabriel" 
 img="/imagen/angelmaestro.jpg"
  mision="Gabriel es el lirio con el malantial de pureza el cual lo prerfecciona el mestro cuando supera su nivel espiritual"/>
  
  <AngelesArcangeles nombre="Rafael"
  img="/imagen/Arcangel Rafael.jpg"
  mision="Rayo divino de conservar la salud, hablando directamente del amor consentrado directamente a tu corazon" />

<AngelesArcangeles nombre="Miguel"
  img="/imagen/miguelprotege.jpg"
  mision="Voluntad del YO SOY con la espada de luz de la decision
   y proteccin de todos los implicados de forma justa" />

        </>
            
       )
   }
}