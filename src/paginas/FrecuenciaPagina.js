import React from "react";

export default class FrecuenciaPagina extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            frecuencia:[]
        }
    }
    componentDidMount(){
        fetch("https://musicbrainz.org/ws/2/release?artist=9fdaa16b-a6c4-4831-b87c-bc9ca8ce7eaa&fmt=json")
       
        .then( res => res.json())
        .then( (result)=> {
            console.log(result)
            this.setState({
                frecuencia: result.releases
            });
        })
    }
    render() {
        return(
            <>
            {this.state.frecuencia.map((frecuencia)=> (
                <p>{frecuencia.title} ({frecuencia.date})</p>
            ))}

            </>
        );
    }
}