import {Component} from "react";
import {Dropdown, Navbar} from "flowbite-react";
import Image from "next/image";



export default class NavBarMenu extends Component{
    render() {
        return (
            <>
                <Navbar
                    fluid={true}
                    rounded={true}
                >
                    <Navbar.Brand>
                        <Image src="/images/logo-sesi.png" className="w-[60px] h-[30px] md:h-[40px] md:w-[110px]" alt="Sesi Logo" height={100} width={100}/>
                        <h1 className={"flex justify-center pl-2 font-semibold text-lg"}>Ricardo Marinho do Prado</h1>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className={"pr-10"} >
                        <Navbar.Link href="/" className={"text-blue-600"}>Home</Navbar.Link>
                        <Dropdown label="Matérias" className={"transition"} inline={true}>
                            <Dropdown.Header>
                                <span className="block text-sm">Minhas Matérias</span>
                            </Dropdown.Header>
                            <Dropdown.Item>
                                Linguagens
                            </Dropdown.Item>
                            <Dropdown.Item>
                                Matemática
                            </Dropdown.Item>
                            <Dropdown.Item>
                                Ciência da Natureza
                            </Dropdown.Item>
                            <Dropdown.Item>
                                Ciências Humanas
                            </Dropdown.Item>
                        </Dropdown>
                    </Navbar.Collapse>
                </Navbar>
            </>
        )
    }
}



