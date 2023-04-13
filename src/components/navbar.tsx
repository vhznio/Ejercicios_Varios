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
                <GiBrain className="header_logo"/>
            </div>
            <ul className="md:flex md:items-center gap-10">
                <Button addr="/chars" name="Rick & Morty"/>
                <Button addr="/calc" name="Calculadora"/>
                <Button addr="/numbers" name="Numeros Primos"/>
            </ul>
        </nav>
    )
}

export default NavBar