import React from "react";
// import Form from "./components/Form";
// import Counter from "./components/Counter";
// import Test from "./components/Test";
// import Seconds from "./components/Seconds";
import Search from "./components/Search";

import axios from "axios";



class App extends React.Component{
    render(){
        return (
                <div className="ui grid container center aligned">
                    <div className="column eight wide">
                         <Search />
                    </div>
                </div>
        
            );
    }
}



export default App;