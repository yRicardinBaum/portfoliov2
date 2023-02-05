import {Component} from "react";
import {Dropdown, Navbar} from "flowbite-react";
import Image from "next/image";



export default class NavBarMenu extends Component{
    render() {
        return (
            <>
                <div>
                <Navbar
                    fluid={true}
                    rounded={true}
                >
                    <Navbar.Brand>
                        <Image src="/images/logo-sesi.png" className={"w-20"} alt="Sesi Logo" width={445} height={150}/>
                        <p className={"flex justify-center text-sm pl-2 font-semibold md:text-lg lg:text-xl"}>Ricardo Marinho</p>
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
                </div>

            </>
        )
    }
}



