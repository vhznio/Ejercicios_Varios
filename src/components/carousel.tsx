'use client';

import Image from "next/image"
import { FcNext } from 'react-icons/fc'
import { FcPrevious } from 'react-icons/fc'
import { IconContext } from "react-icons";
import { useState } from "react";

// const paths = {
//     img_1:'/01.png',
//     img_2:'/02.png',
//     img_3:'/03.png'
// }

const paths = [
    '/01.png',
    '/02.png',
    '/03.png'
]


function Carousel(){
    const [index, setIndex] = useState<number>(0);

    const prevImg = () => {
       {index > 0 ? ( setIndex((prev) => prev - 1)) : ( setIndex(2))}
    }
    const nextImg = () => {  
       {index < 2 ? ( setIndex((prev) => prev + 1)) : ( setIndex(0))}
    }

    return (
        <div className="flex items-center justify-center p-5 select-none">
            <div className="mt-10 flex flex-row p-2 items-center shadow-md rounded-lg ">
                <div onClick={prevImg} className="text-3xl z-10 cursor-pointer
                 hover:border-green-400 border-l border-black rounded-full p-1">
                    <FcPrevious/>
                </div>
                <div>
                    <Image
                        src={paths[index]}
                        alt="Picture of the author"
                        width={1000}
                        height={800}
                    />
                </div>
                <div onClick={nextImg} className="text-3xl z-10 cursor-pointer
                 hover:border-green-400 border-r border-black rounded-full p-1">
                    <FcNext/>
                </div>
            </div>
        </div>
    )
}

export default Carousel