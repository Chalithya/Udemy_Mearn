import React, {useState, useEffect} from "react";

// class Seconds extends React.Component{
//     constructor(){
//         super();
//         this.state = {counter: 0};
//         this.timer = null;
//     }

//     componentDidMount(){
//         this.timer= setInterval(()=>{
//             this.setState({counter: this.state.counter+1});
//         }, 1000);
//     }

//     componentWillUnmount(){
//         clearInterval(this.timer);
//     }

//     render(){
//         return <span>You have spent {this.state.counter} seconds</span>;
//     }


// }



const Seconds = ()=> {

    const [counter, setCounter] = useState(0);


    useEffect(()=>{
        const timer = setInterval(()=>{

            //also can write setCounter(counter=>counter+1);
            setCounter((counter)=>{return counter+1;});
        },1000);

        return ()=>{
            clearInterval(timer);
        }

    }, []);

    useEffect(()=>{
        console.log("Every refresh")
    });

    return <span>You have spent {counter} seconds</span>
}
export default Seconds;