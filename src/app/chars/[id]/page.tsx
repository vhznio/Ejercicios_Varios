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
        <div className='header bg-black mt-8'>
            <h1 className='text-green-300 text-4xl'>{data.name.toUpperCase()}</h1>
        </div>
        <div className='flex h-auto justify-center items-center select-none' key={data.id}>
            <div className='char_card'>
                <div>
                    <Image className='rounded-md '
                        loader={myLoader}
                        src={data.id.toString()}
                        alt={data.name}
                        width={300}
                        height={300}
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