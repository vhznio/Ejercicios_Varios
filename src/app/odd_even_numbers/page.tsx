'use client';

import { useState } from 'react'
import OddEvenNumbers from "@/components/numbers"

function Numbers(){
    const [evenArray, setEvenArray] = useState<number[]>([]);
    const [oddArray, setOddArray] = useState<number[]>([]);

    const calculate = (s:string) => {
        const regx = /[ *,-]/
        const splitted_array = s.split(regx);
        const numbers_array = splitted_array.map(Number)
        const odd_array:number[] = []
        const even_array = numbers_array.filter((n) => {
            if(n % 2 === 0){
                return n;
            }else{
                odd_array.push(n);
            }
        });

        const final_even_array = even_array.filter((number,index) => {
            return even_array.indexOf(number) === index;
        })
        const final_odd_array = odd_array.filter((number,index) => {
            return odd_array.indexOf(number) === index;
        })

        setEvenArray(final_even_array)
        setOddArray(final_odd_array)

        console.log(oddArray)
    }

    const clear = () => { 
        setEvenArray([])
        setOddArray([]) 
    }
    
    return (
        <>         
            <OddEvenNumbers title="ODD & EVEN NUMBERS" getResults={calculate}/>
            <div className='h-auto w-screen flex items-center justify-center'>
                <button onClick={clear} className='text-gray-500 text-sm border w-16 mt-2 border-green-800 
                hover:border-green-500 rounded-xl mr-4' type='submit'>
                    Clear
                </button>
            </div>
            <div className='w-full grid grid-flow-col justify-around mt-10'>
                <div>
                    <div className='text-white justify-center flex mb-5'>
                        <h1>Even Numbers</h1>
                    </div>
                    < div className='grid gap-5 grid-cols-2 md:grid-cols-4 '>
                        {evenArray.map(number => {
                            return (
                                <div key={number} className='shadow-md shadow-orange-500 rounded-full 
                                w-14 h-14  flex justify-center items-center'>
                                    <h1 className='text-white text-3xl  content-center text-center'>
                                        {number.toString()}
                                    </h1>
                                </div>
                            )
                        })}
                    </div >
                </div>
                        
                <div>
                    <div className='text-white justify-center flex mb-5'>
                        <h1>Odd Numbers</h1>
                    </div>
                    < div className='grid gap-5 grid-cols-2 md:grid-cols-4  '>
                        {oddArray.map(number => {
                            return (
                                <div key={number} className='shadow-md shadow-indigo-500 rounded-full 
                                w-14 h-14 flex justify-center items-center'>
                                    <h1 className='text-white text-3xl content-center text-center'>
                                        {number.toString()}
                                    </h1>
                                </div>
                            )
                        })}
                    </div >
                </div>
            </div>     
        </>
    )
}

export default Numbers