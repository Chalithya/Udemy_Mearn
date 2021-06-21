import React, {useState} from "react";


const Counter = ()=>{
    const [clicks,setClicks] = useState(0);

    function handleButtonClick(){
      setClicks(clicks+1);
    }

return (
<>
    <span> You cliked {clicks} times</span>
    
    <br/>
    <button onClick={handleButtonClick}>Click Me</button>
    
</>   );


};






export default Counter;
