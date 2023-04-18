'use client';

import Link from "next/link";
import { GiBrain } from "react-icons/gi";
import { CiMenuFries } from "react-icons/ci"
import { useState } from "react"

function Button( {name, addr} : any ) {
    return (
        <li className="header_links_li">
            <Link href={addr}>{name}</Link>
        </li>
    )
}

function NavBar(){
    const colapsed = "bg-red-500 header_links_container"
    const [menuClass, setMenuClass] = useState<string>(colapsed);

    const colapse = () => { 
        menuClass === colapsed ? setMenuClass('header_links_container') :setMenuClass(colapsed)
        return menuClass
    }

    return(
        <nav className="header">
            <div className="header_logo">
                <Link href={'/'}>
                    <GiBrain className="header_logo"/>
                </Link>
            </div>
            <div className="header_logo_mobile">
                <Link href={'/'}>
                    <CiMenuFries onClick={colapse} className="header_logo_mobile"/>
                </Link>
            </div>
            <div className={menuClass}>
                    <ul className="header_links">
                        <Button addr="/chars" name="Rick and Morty"/>
                        <Button addr="/calc" name="Calculator"/>
                        <Button addr="/prime_numbers" name="Prime Numbers"/>
                        <Button addr="/odd_even_numbers" name="Odd & Even Numbers"/>
                    </ul>
            </div>
        </nav> 
    )
}

export default NavBar