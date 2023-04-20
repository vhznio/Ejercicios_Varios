'use client';


import { useState } from 'react'
import PrimeNumbers from "@/components/numbers"

function Numbers(){
    const [numberArray, setNumberArray] = useState<number[]>([]);

    const calculate = (s:string) => {
        const regx = /[ *,-]/
        const splitted_array = s.split(regx);
        const numbers_array = splitted_array.map(Number)
        const prime_array = numbers_array.filter((n) => {
            for (let i = 2; i <= Math.sqrt(n); i++) {
                if (n % i === 0) {
                  return false;
                }
              }
            return n > 1;
        });
        const final_array = prime_array.filter((number,index) => {
            return prime_array.indexOf(number) === index;
        })

        setNumberArray(final_array)
    }

    const clear = () => { 
        setNumberArray([]) 
    }
    
    return (
        <>         
            <PrimeNumbers title="PRIME NUMBERS" getResults={calculate}/>
            <div className='h-auto w-screen flex items-center justify-center'>
                <button onClick={clear} className='text-gray-500 text-sm border w-16 mt-2 border-green-800 
                hover:border-green-500 rounded-xl mr-4' type='submit'>
                    Clear
                </button>
            </div>
            < div className='prime_numbers_container'>
                {numberArray.map(number => {
                    return (
                        <div key={number} className='shadow-md shadow-green-500 rounded-full w-14 h-14 flex justify-center items-center'>
                            <h1 className='text-white text-3xl content-center text-center'>
                                {number.toString()}
                            </h1>
                        </div>
                    )
                })}
            </div >
        </>
    )
}

export default Numbers