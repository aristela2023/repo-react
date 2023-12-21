
import React from "react";
import './AngelesArcangeles.css';

export default class AngelesArcangeles extends React.Component {

    constructor(props) {
    super(props);
    this.state={
        escondido: false
    }
        this.toggleEsconder = this.toggleEsconder.bind(this);
    }

    toggleEsconder(){
        this.setState(prevState => ({
            escondido: !prevState.escondido

        }))
    }
    render() {
        return(
            <div className= {"row my-4 "  +  (this.state.escondido ?  'd-none' : '')}>
                <div className="col-12 d-flex align-item-center">
                    <img src={this.props.img} alt={this.props.nombre} className="band-thumb"/>
                    <div className="px-3">
                    <h2>{this.props.nombre} </h2>
                    <p>{this.props.mision} </p>
                    <button className="btn btn-success " onClick={this.toggleEsconder}>Ocultar</button>
                        </div>
                     </div>
                </div>
        )
     }
    }