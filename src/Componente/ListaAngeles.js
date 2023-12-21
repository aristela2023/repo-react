import React from "react";
import AngelesArcangeles from "./AngelesArcangeles";

export default class ListaAngeles extends React.Component {


    render(){
        return(
            <>
            {this.props.angelesarcangeles.map((angelesarcangeles)=> (
                <AngelesArcangeles nombre={angelesarcangeles.nombre} img={angelesarcangeles.img} mision={angelesarcangeles.mision} />
            ))}
            </>
        );
    }

}