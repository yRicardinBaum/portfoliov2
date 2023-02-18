import {Component} from "react";
import {Dropdown, Navbar} from "flowbite-react";
import Image from "next/image";
import Link from "next/link";



export default class NavBarMenu extends Component{
    render() {
        return (
            <>
                <div>
                <Navbar fluid={false} rounded={false}>
                    <Navbar.Brand href={"/"}>
                        <Image src="/images/logo-sesi.png" className={"w-20"} alt="Sesi Logo" width={445} height={150}/>
                        <p className={"flex justify-center text-sm pl-2 font-semibold md:text-lg lg:text-xl"}>Ricardo Marinho</p>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Navbar.Link href="/" className={"text-blue-600"}>Home</Navbar.Link>
                        <Dropdown label="Matérias" className={"transition"} inline={true}>
                            <Dropdown.Header>
                                <span className="block text-sm">Minhas Matérias</span>
                            </Dropdown.Header>
                            <Link href="/materias/linguagens">
                                <Dropdown.Item>Linguagens</Dropdown.Item>
                            </Link>
                            <Link href="/materias/matematica">
                            <Dropdown.Item>Matemática</Dropdown.Item>
                            </Link>
                            <Link href="/materias/natureza">
                            <Dropdown.Item>Ciência da Natureza</Dropdown.Item>
                            </Link>
                            <Link href="/materias/humanas">
                            <Dropdown.Item>Ciências Humanas</Dropdown.Item>
                            </Link>
                        </Dropdown>
                    </Navbar.Collapse>
                </Navbar>
                </div>

            </>
        )
    }
}



