import React from "react";
import { Link } from "react-router-dom";
export default class Menu extends React.Component {

    render(){
        return(
           <div className="row bg-light fixed-top px-5 py-3">
            <div className="col-12 d-flex align-items-center bg.light fixed-top py-3 px-5">
                <h1>Proyecto Mistico</h1>
                <Link to="/" className="mx-3"> Inicio </Link>
                <Link to="/angelesarcangeles" className="mx-3"> AngelesArcangeles </Link>
                <Link to="/enlace" className="mx-3"> Enlace </Link>
                <Link to="/frecuencia" className="mx-3">  Frecuencia </Link>
            </div>
           </div>

             
        )
    }

}