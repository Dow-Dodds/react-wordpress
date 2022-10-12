// grab the useState hook from react 
// the curly brackets are an example of destructuring 
// they help us grab specific things from an object

import { useState } from "react";

const FirstUseState = () => {
    //the first variable is the name of the state 
    //the second variable is a function which changes the state 
    const [name, setName] = useState("...");
    
    // this function will grab the username and update the name state
    const inputName = () => {
        let newName = prompt("What's your name?");
        setName(newName);
    }

    return(
        <div className="section">
            <h2>First use state</h2>
            <p>This is React useState. USeState is a way React can keep track of data.</p>
            <p>useState is only available to the components we gie it to.</p>

            <p>Your name is {name}</p>
            <button onClick={inputName}>Enter your name</button>
        </div>
    )
}

export default FirstUseState;