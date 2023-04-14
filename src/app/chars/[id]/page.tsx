"use client";

import { fetchChar } from '@/components/fetchChar';
import Image from 'next/image';

type Params = {
    params: {
        id: number
    }
}


const myLoader = ({ src, width, quality }:any) => {
    return `https://rickandmortyapi.com/api/character/avatar/${src}.jpeg`
}

async function CharData({ params: {id} }: Params){
    const data = await fetchChar(id)
    return (
        <>
        <div className='text-green-300 text-4xl content-center text-center mt-8'>
            <h1>{data.name.toUpperCase()}</h1>
        </div>
        <div className='flex h-auto justify-center items-center select-none' key={data.id}>
            <div className='p-10 mt-10 h-auto flex shadow-lg shadow-green-400 justify-center items-center'>
                <div>
                    <Image className='rounded-md '
                        loader={myLoader}
                        src={data.id.toString()}
                        alt={data.name}
                        width={400}
                        height={400}
                    />
                </div>
                <div className='ml-10'>
                    <ul className='text-white list-disc'>
                        <li>{data.gender}</li>
                        <li>{data.species}</li>
                        <li>{data.status}</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default CharData