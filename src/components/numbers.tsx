'use client';
import { useState } from 'react'

const Numbers = ({ getResults, title}:any) => {
    const [clientString, setClientString] = useState('');

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        getResults(clientString)
    };

    const symbols = "'comma' 'hyphen' or 'space'."

    return (
        <>
            <div className='flex justify-center bg-black mt-8'>
                <h1 className='text-green-300 text-2xl select-none'>{title}</h1>
            </div>
            <div className='number_instructions'>
                <h2>Enter numbers separated by</h2>
                <h3 className='text-green-500'>{symbols}</h3>
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

export default Numbers