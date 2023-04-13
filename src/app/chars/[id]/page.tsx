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
    console.log(data)
    return (
        <div></div>
    )
}

export default CharData