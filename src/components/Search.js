import React, {useState, useEffect} from "react";
import List from "./List";
import axios from "axios";
const Search=()=>{

    const [value, setvalue] = useState("");
    const [results, setResults] = useState([]);
    useEffect(()=>{
        let timerID = null;

        if(value){
          
             timerID = setTimeout(async  ()=>{
                const {data} =  await axios.get("https://en.wikipedia.org/w/api.php",{
                params:{
                    action:"query",
                    list: "search",
                    origin: "*",
                    format: "json",
                    srsearch: value 
                }
            });

            setResults(data.query.search);
            },1000)

        }

        return()=>{
            clearTimeout(timerID);
        }
    },[value])

    return (


        <React.Fragment>
        <form className="ui form">
            <input 
            type="text"
            placeholder="Search Wikipedia..."
            value={value}
            onChange={(e)=>setvalue(e.target.value)}
            />
        </form>

        <List results={results}/>
        </React.Fragment>
    );
};
 




export default Search;