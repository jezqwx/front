import React from "react";
import StepCounter from "./StepCounter.jsx";

function CounterApp(){
    return(
        <div>
            <h2>CounterApp</h2>

            <StepCounter initialValue={0} step={1}/>
            <StepCounter initialValue={10} step={5}/>
        </div>
    );
}

export default CounterApp;