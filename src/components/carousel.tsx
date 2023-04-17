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
        <>  
        <swiper-container slides-per-view="3" speed="500" loop="true" css-mode="true">
        <swiper-slide>{img_paths[0]}</swiper-slide>
        <swiper-slide>{img_paths[1]}</swiper-slide>
        <swiper-slide>{img_paths[2]}</swiper-slide>
        ...
        </swiper-container>
        </>
    )
}

export default Carousel 