import Link from "next/link";
import { GiBrain } from "react-icons/gi";

export default function NavBar(){
    return(
        <nav className="header">
            <div>
                <GiBrain className="header_logo"/>
            </div>
            <ul className="md:flex md:items-center gap-10">
                <Button addr="/####" name="Rick&Morty"/>
                <Button addr="/" name="Calculadora"/>
                <Button addr="/" name="Numeros Primos"/>
            </ul>
        </nav>
    )
}

function Button( {name, addr}:any ) {
    return (
        <li className="header_section_name">
            <Link href={addr}>{name}</Link>
        </li>
    )
}