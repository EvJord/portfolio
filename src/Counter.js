import { useState } from "react"
import "./styles/counter.css"

export default function Counter() {

    const [counter, setCounter] = useState(0);

    function button1Click() {
        setCounter(counter + 1);
    }
 
    function resetCounter() {
        setCounter(counter - counter);
    }

    return (
        <div className="counter-wrapper">
            <div className="counter-parent">
                <h1>Fun little counter</h1>
                <div className="number">{counter}</div>
                <div className="counter-buttons">
                    <button onClick={button1Click}>+1</button>
                    <button onClick={() => setCounter(counter + (Math.floor(Math.random() * 100)))}>Überraschung</button>
                    <button onClick={resetCounter}>Reset</button>
                </div>
         </div>
        </div>
    )
} 