"use client";

import { fetchChars } from '@/components/fetchChars';
import Link from 'next/link';
import Image from 'next/image';

const myLoader = ({ src, width, quality }:any) => {
    return `https://rickandmortyapi.com/api/character/avatar/${src}.jpeg`
}

async function CharData(){
    const data = await fetchChars()
    
    return (
        <>  
        <div className='justify-center text-center mt-5'>
            <h1 className='text-green-500 text-5xl '>CHARACTERS</h1>
        </div>
        <div className='cards_container'>
            {data.map(char => {
            return(
                <div className='cards' key={char.id}>   
                    <h1 className='cards_content'>{char.name} </h1>                   
                        <Image className='rounded-md '
                            loader={myLoader}
                            src={char.id.toString()}
                            alt={char.name}
                            width={400}
                            height={400}
                         />
                </div>
            )
            })}
        </div>
        </>
    )
}

export default CharData