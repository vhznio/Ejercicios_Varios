"use client";

import { fetchAllChars } from '@/components/fetchAllChars';
import Link from 'next/link';
import Image from 'next/image';
import Pagination from '@/components/pagination';
import SearchEngine from '@/components/searching';
import { useState, useEffect } from 'react'


const myLoader = ({ src, width, quality }:any) => {
    return `https://rickandmortyapi.com/api/character/avatar/${src}.jpeg`
}

function Characters(){
    const baseUrl = 'https://rickandmortyapi.com/api/character'

    const [data, setData] = useState<Character[] | null>([]);
    const [info, setInfo] = useState<Info>({
        count:0,
        pages:0,
        next: '',
        prev: ''
    });

    const fetchChars = (url:string) => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setData(data.results)
                setInfo(data.info)
            })
            .catch((e) => console.log(e))
    }

    const nextPage = () => { fetchChars(info.next)}
    const prevPage = () => { fetchChars(info.prev)}
    const getSearchResults = (data:any) => {
        setData(data.results)
        setInfo(data.info)
    }

    useEffect(() => {
        fetchChars(baseUrl)
    }, [])

    return (
        <>  
        <div className='header bg-black mt-8'>
            <h1 className='text-green-300 text-4xl '>CHARACTERS</h1>
        </div>
        <SearchEngine getResults={getSearchResults}/>
        
        {data != null ? (
            <>
                <Pagination prev={info.prev} next={info.next} onPrevious={prevPage} onNext={nextPage} />
                < div className='cards_container'>
                    {data.map(char => {
                        return (
                            <div className='cards' key={char.id}>
                                <h1 className='cards_content'>{char.name} </h1>
                                <Link className='cards_content' href={`/chars/${char.id}`}>
                                    <Image className='rounded-md '
                                        loader={myLoader}
                                        src={char.id.toString()}
                                        alt={char.name}
                                        width={300}
                                        height={300}
                                    />
                                </Link>
                            </div>
                        )
                    })}
                </div >
                <Pagination prev={info.prev} next={info.next} onPrevious={prevPage} onNext={nextPage}/>
            </>
        ):(
            <div className='justify-center text-center mt-8'>
                <h1 className='text-green-300 text-4xl '>NOT FOUND</h1>
            </div>
        )} 
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