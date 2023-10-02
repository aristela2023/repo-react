import React from "react";

export default class Artista extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="row">
                <div className="col 12">
                    <h2>{this.props.nombre}</h2>
                    <p>{this.props.descripcion}</p>
                </div>
            </div>
        )
    }
}