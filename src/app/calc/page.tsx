'use client';

import { useState } from "react";

function Calc(){
    const [result, setResult] = useState<number | null>(null);
    const [currentValue, setCurrentValue] = useState<number>(0);

    const setNumber = (number: number) => {
        setCurrentValue(prevValue => prevValue * 10 + number)
    }

    const clean = () => {
        setCurrentValue(0);
        setResult(null);
    };

    const calculate = (op:String) => {
        console.log({op})
    }

    return (
        <div className="h-auto w-screen mt-28 items-center justify-center flex flex-col">
            <div className='-mt-16'>
                <div className="calc_display">
                    <span className="calc_display_text">
                       {result !== null ? result : currentValue}
                    </span>
                </div>
            </div> 
            <div className="calc_container">
                <button className="calc_button_number cursor-default hover:shadow-black bg-black shadow-black border border-green-900" type="button"></button>
                <button className="calc_button_number cursor-default hover:shadow-black bg-black shadow-black border border-green-900" type="button"></button>
                <button onClick={() => clean()} className="calc_button_char" type="button">C</button>
                <button onClick={() => calculate('+')} className="calc_button_char" type="button">÷</button>
                <button onClick={() => setNumber(7)} className="calc_button_number" type="button">7</button>
                <button onClick={() => setNumber(8)} className="calc_button_number" type="button">8</button>
                <button onClick={() => setNumber(9)} className="calc_button_number" type="button">9</button>
                <button onClick={() => calculate('*')} className="calc_button_char" type="button">x</button>
                <button onClick={() => setNumber(4)} className="calc_button_number" type="button">4</button>
                <button onClick={() => setNumber(5)} className="calc_button_number" type="button">5</button>
                <button onClick={() => setNumber(6)} className="calc_button_number" type="button">6</button>
                <button onClick={() => calculate('-')} className="calc_button_char" type="button">-</button>
                <button onClick={() => setNumber(1)} className="calc_button_number" type="button">1</button>
                <button onClick={() => setNumber(2)} className="calc_button_number" type="button">2</button>
                <button onClick={() => setNumber(3)} className="calc_button_number" type="button">3</button>
                <button onClick={() => calculate('+')} className="calc_button_char" type="button">+</button>
                <button onClick={() => calculate('-')} className="calc_button_char text-xl" type="button">*/-</button>
                <button onClick={() => setNumber(0)} className="calc_button_number" type="button">0</button>
                <button onClick={() => calculate('.')} className="calc_button_char" type="button">.</button>
                <button className="calc_button_char text-6xl" type="button">=</button>
            </div>
        </div>
    )
}


export default Calc