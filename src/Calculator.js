import "./styles/calculator.css"
import { useState } from "react";

export default function Calculator() {

    const [calculation, setCalculation] = useState("")
    const operators = ['+', '-', '*', '/', '.']

    const updateCalculator = value => {
        if(
            operators.includes(value) && calculation === '' ||
            operators.includes(value) && operators.includes(calculation.slice(-1))
        ) return;

        setCalculation(calculation + value); 
    }

    
    const makeNumbers = () => {
        const numbers = [];

        for (let i = 1; i < 10; i++) {
            numbers.push(
                <button onClick={() => updateCalculator(i.toString())} key={i}>
                 {i}
                </button>
            )
        }
        return numbers.reverse();
    }

    const istEqualCalculation = () => {
        setCalculation(eval(calculation).toString());
    }

    const deleteLastEntry = () => {
        if (calculation == '') {
            return;
        } 
        const value = calculation.slice(0, -1);

        setCalculation(value);
    }

    const deleteAll = () => {
        setCalculation("");
    }
        
  
    return(
        <div className="calculator-wrapper">
            <div className="calculator-grid">
            
                <div className="digits-field">
                    <div className="current-numbers">{calculation || "0"}</div>
                </div>

                <div className="buttons-field">
                    <button className="delete-all" onClick={() => deleteAll()}>DEL</button>
                    <button className="delete-entry" onClick={() => deleteLastEntry()}>CE</button>
                    
                    <button onClick={() => updateCalculator("+")}>+</button>
                    <button onClick={() => updateCalculator("-")}>-</button>
                    <button onClick={() => updateCalculator("*")}>x</button>
                    <button onClick={() => updateCalculator("/")}>/</button>
                    
                    {makeNumbers()}

                    <button onClick={() => updateCalculator("0")}>0</button>
                    <button onClick={() => updateCalculator(".")}>.</button>
                    <button className="ist-equal" onClick={istEqualCalculation}>=</button>
                    
                </div>
            </div>
        </div>
    );
}