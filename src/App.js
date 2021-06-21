import React from "react";
import Form from "./components/Form";
import Counter from "./components/Counter";
import Test from "./components/Test";
import Seconds from "./components/Seconds";
import axios from "axios";



class App extends React.Component{
    render(){
        return (
                <div>
                    <Seconds />
                </div>
        
            );
    }
}



export default App;