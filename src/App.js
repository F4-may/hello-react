import React from "react";
import Button from "./Component/Button";


// let obj={color:"brown",textAlign:"center"};
// JSX rule
const App=()=>{
    // let a=10;
    // let b=5;
    return (
    <div>
        {/* <h1 className='heading'>Hello World</h1>
        <h1 style={obj}>value of a : {a}</h1>
        <p style={{color:"blue",textAlign:"left"}}>{a>b?"a is greater":"b is greater"}</p>
        <p>Hello , How are you ?</p> */}
        <Button 
           buttonText="Apple"
           buttonColor="green"
           >
            <h1>Hey this is apple</h1>
        </Button>
        <Button 
            buttonText="Mango"
           buttonColor="yellow">

        </Button>
        <Button 
        buttonText="Kiwi"
           buttonColor="red"
           >
            <h1>
                Hey this is kiwi
            </h1>
            <p>I am Dhoni pet name</p>
        </Button>
    </div>
    )
}

export default App