import React from "react";

class Form extends React.Component{


    constructor(){
        super();
        this.state = {value: "Write your name"};

    }

    handleInputChange(event){
        this.setState({value: event.target.value});
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        alert(this.state.value.toUpperCase());
    }
    render(){
        return (
            <form onSubmit={this.handleFormSubmit}>
                
            <input id="name" type="text" value={this.state.value} onChange={(event)=> this.handleInputChange(event)} />
            <input type="submit"/>

            </form>
        );
    }

}


export default Form;