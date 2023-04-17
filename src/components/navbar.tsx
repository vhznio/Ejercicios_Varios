import Link from "next/link";
import { GiBrain } from "react-icons/gi";

function Button( {name, addr} : any ) {
    return (
        <li className="header_section_name">
            <Link href={addr}>{name}</Link>
        </li>
    )
}

function NavBar(){
    return(
        <nav className="header">
            <div>
                <Link href={'/'}>
                    <GiBrain className="header_logo"/>
                </Link>
            </div>
            <ul className="md:flex md:items-center gap-10">
                <Button addr="/chars" name="Rick & Morty"/>
                <Button addr="/calc" name="Calculator"/>
                <Button addr="/prime_numbers" name="Prime Numbers"/>
                <Button addr="/odd_even_numbers" name="Odd & Even Numbers"/>
            </ul>
        </nav>
    )
}

export default NavBar