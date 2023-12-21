import React from "react";

export default class EnlacePagina extends React.Component{

    constructor(props){
        super(props);
        this.state= {
            nombre:"",
            mensaje:""
        }

        this.submitted=this.submitted.bind(this);
        this.changed=this.changed.bind(this);
    }
    submitted(event){
        alert("Se envio el Formulario de  " + this.state.nombre);
        event.preventDefault();
    }
    changed(event){
        this.setState({
            nombre: event.target.value
        });
        }
        render(){
            return(
                <>
                <h2>Enlace</h2>
                <form onSubmit={this.submitted}>
                    <div className="form-group my-2">
                        <label>Nombre</label>
                        <input type="text" className="form-control" onChange={this.changed}/>
                    </div>
                    <button type="submit" className="btn btn-primary mt-2">Enviar</button>
                </form>
                </>
            )
        }
    }