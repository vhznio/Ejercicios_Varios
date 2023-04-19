'use client';

import Link from "next/link";
import { GiBrain } from "react-icons/gi";
import { CiMenuFries } from "react-icons/ci"
import { useState } from "react"

function Button( {name, addr, collapse} : any ) {
    return (
        <li className="header_links_li">
            <Link onClick={collapse} href={addr}>{name}</Link>
        </li>
    )
}

function NavBar(){
    const [navbar, setNavbar] = useState(false);

    return(
        <nav className="header">
            <div className="header_logo">
                <Link href={'/'}>
                    <GiBrain className="header_logo"/>
                </Link>
            </div>
            <div className="header_logo_mobile">
                <Link href={'/'}>
                    <CiMenuFries onClick={() => setNavbar(!navbar)} className="header_logo_mobile"/>
                </Link>
            </div>
            <div className={`header_links_container ${navbar ? 'p-12 md:p-0 block' : 'max-[1024px]:hidden'}`}>
                    <ul className="header_links">
                        <Button collapse={() => {setNavbar(!navbar)}} addr="/chars" name="Rick and Morty"/>
                        <Button collapse={() => {setNavbar(!navbar)}} addr="/calc" name="Calculator"/>
                        <Button collapse={() => {setNavbar(!navbar)}} addr="/prime_numbers" name="Prime Numbers"/>
                        <Button collapse={() => {setNavbar(!navbar)}} addr="/odd_even_numbers" name="Odd & Even Numbers"/>
                    </ul>
            </div>
        </nav> 
    )
}

export default NavBar