import { Dropdown, Navbar } from "flowbite-react";
import Image from "next/image";

export default function Home() {
  // @ts-ignore
    return (
    <>
      <main>
        <header className={"p-5"}>
          <Navbar
              fluid={true}
              rounded={true}
          >
              <Navbar.Brand>
                  <Image src="/images/logo-sesi.png" className="w-[60px] h-[30px] md:h-[40px] md:w-[110px]" alt="Sesi Logo" height={100} width={100}/>
              </Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse className={"pr-10"} >
                  <Navbar.Link href="/" active={true}>Home</Navbar.Link>
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
        </header>


      </main>
    </>
  )
}
