"use client";

import { fetchAllChars } from '@/components/fetchAllChars';
import Link from 'next/link';
import Image from 'next/image';

const myLoader = ({ src, width, quality }:any) => {
    return `https://rickandmortyapi.com/api/character/avatar/${src}.jpeg`
}

async function Characters(){
    const data = await fetchAllChars()

    return (
        <>  
        <div className='justify-center text-center mt-8'>
            <h1 className='text-green-300 text-4xl '>CHARACTERS</h1>
        </div>
        <div className='cards_container'>
            {data.map(char => {
            return(
                <div className='cards' key={char.id}>   
                    <h1 className='cards_content'>{char.name} </h1>              
                    <Link className='cards_content' href={`/chars/${char.id}`}>      
                        <Image className='rounded-md '
                            loader={myLoader}
                            src={char.id.toString()}
                            alt={char.name}
                            width={400}
                            height={400}
                         />
                    </Link>
                </div>
            )
            })}
        </div>
        <footer
            className="footer">
            <div className="p-4 text-center text-neutral-700 dark:text-neutral-200">
                © 2023 Copyright:
            </div>
        </footer>
        </>
    )
}

export default Characters