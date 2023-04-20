'use client';
import { useState } from "react";

const SearchEngine = ({ getResults }:any) => {
    const [query, setQuery] = useState('');

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${query}`);
        const chars = await res.json();
        getResults(chars)
    };

    return (
        <div className="search_container">
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='query'
                    placeholder='Search chars...'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button className='min-[1024px]:mr-20 border border-green-500 rounded-full w-20 text-sm' type='submit'>
                    Search
                </button>
            </form>
        </div>
    ) 
}

export default SearchEngine