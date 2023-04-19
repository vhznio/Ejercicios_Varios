'use client';

import Image from 'next/image'
import {useState, useRef, useEffect} from 'react'
import { MutableRefObject } from "react";
import { register } from 'swiper/element/bundle';

register();

const img_paths:string[] = [
    "/01.png",
    "/02.png",
    "/03.png"
]

const Carousel = () => {

    return (
        <Image className='rounded-md '
                                        
                                        src={img_paths[0]}
                                        alt={"xd"}
                                        width={500}
                                        height={500}
                                    />
    )
}

export default Carousel 