'use client';

import { useState } from "react";

function Calc(){
    const [displayText, setDisplayText] = useState<string>('0');

    const clickNumber = (n:number) => {
        if(displayText !== '0'){
            setDisplayText((prevState => prevState + n.toString()))
        }else{
            setDisplayText('')
            setDisplayText((prevState => prevState + n.toString()))
        }
        
    }
    const clickOp = (op:string) => {
        const chars = ['+','-','*','/','.']
        let match:boolean = false;
        let x:number = 0;
        chars.forEach(element => {
           if(element === displayText.slice(-1)){
                x++;
           } 
           if(x>0){
            match = true;
           }else{
            match = false;
           }
        });

        if(!match){
            setDisplayText((prevState => prevState + op))
        }
    }
    const clean = () => {
        setDisplayText('0')
    }
    const calculate = (op:string) => {
        setDisplayText(eval(op))
    }


    return (
        <div className="h-auto w-screen mt-48 items-center justify-center flex flex-col">
            <div className='-mt-16'>
                <div className="calc_display">
                    <span className="calc_display_text">
                        {displayText}
                    </span>
                </div>
            </div> 
            <div className="calc_container">
                <button className="calc_button_number cursor-default hover:shadow-black bg-black shadow-black border border-green-900" type="button"></button>
                <button className="calc_button_number cursor-default hover:shadow-black bg-black shadow-black border border-green-900" type="button"></button>
                <button className="calc_button_number cursor-default hover:shadow-black bg-black shadow-black border border-green-900" type="button"></button>
                <button onClick={() => clickOp('/')} className="calc_button_char" type="button">÷</button>
                <button onClick={() => clickNumber(7)} className="calc_button_number" type="button">7</button>
                <button onClick={() => clickNumber(8)} className="calc_button_number" type="button">8</button>
                <button onClick={() => clickNumber(9)} className="calc_button_number" type="button">9</button>
                <button onClick={() => clickOp('*')} className="calc_button_char" type="button">x</button>
                <button onClick={() => clickNumber(4)} className="calc_button_number" type="button">4</button>
                <button onClick={() => clickNumber(5)} className="calc_button_number" type="button">5</button>
                <button onClick={() => clickNumber(6)} className="calc_button_number" type="button">6</button>
                <button onClick={() => clickOp('-')} className="calc_button_char" type="button">-</button>
                <button onClick={() => clickNumber(1)} className="calc_button_number" type="button">1</button>
                <button onClick={() => clickNumber(2)} className="calc_button_number" type="button">2</button>
                <button onClick={() => clickNumber(3)} className="calc_button_number" type="button">3</button>
                <button onClick={() => clickOp('+')} className="calc_button_char" type="button">+</button>
                <button onClick={() => clickOp('.')} className="calc_button_char" type="button">.</button>
                <button onClick={() => clickNumber(0)} className="calc_button_number" type="button">0</button>
                <button onClick={() => clean()} className="calc_button_char text-gray-500 text-3xl" type="button">C</button>
                <button onClick={() => calculate(displayText)} className="calc_button_char text-6xl" type="button">=</button>
            </div>
        </div>
    )
}


export default Calc