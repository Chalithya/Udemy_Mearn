import React, {useEffect} from "react";

const Test = ()=>{

    useEffect(()=>{
        alert("This is use effect");
    }, []);



    return <h1>This is test</h1>
}







export default Test;