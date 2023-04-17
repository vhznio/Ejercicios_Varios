'use client';
import { useState } from 'react'

const PrimeNumbers = ({ getResults }:any) => {
    const [clientString, setClientString] = useState('');

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        getResults(clientString)
    };

    const symbols = "'comma' 'hyphen' or 'space'."

    return (
        <>
            <div className='header bg-black mt-8'>
                <h1 className='text-green-300 text-4xl select-none'>PRIME NUMBERS</h1>
            </div>
            <div className='text-white mt-5 mb-5 w-screen h-auto flex justify-center'>
                <h2>Enter numbers separated by</h2>
                <h3 className='ml-3 text-green-500'>{symbols}</h3>
            </div>
            <div className='w-screen h-auto '>
                <form className='flex flex-col items-center' onSubmit={handleSubmit}>
                    <input
                        className='w-4/5'
                        type='text'
                        placeholder='...'
                        onChange={(e) => setClientString(e.target.value)}
                    />
                    <button className='text-white border w-36 mt-5 border-green-800 hover:border-green-500 rounded-xl mr-4' type='submit'>
                        Search
                    </button>
                </form>
            </div>
        </>
    )
}

export default PrimeNumbers