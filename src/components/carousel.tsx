'use client';

import Image from 'next/image'
import {useState, useRef, useEffect} from 'react'
import { MutableRefObject } from "react";

const img_paths:string[] = [
    "/01.png",
    "/02.png",
    "/03.png"
]

const Carousel = () => {

    return (
        <>
            <Image
                src={img_paths[1]}
                alt="x"
                width={500}
                height={500}
            />
        </>
    )
}

export default Carousel 