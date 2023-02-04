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
                  <Image
                      src="/images/logo-sesi.png"
                      className="mr-3 h-6 sm:h-9"
                      alt="Sesi Logo"
                      height={100}
                      width={100}
                  />
              </Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse className={"flex justify-center"}>
                  <Navbar.Link href="/" active={true} className={"flex justify-center"}>Home</Navbar.Link>
                  <Dropdown label="Matérias" inline={true}>
                      <Dropdown.Header>
    <span className="block text-sm">
      Bonnie Green
    </span>
                          <span className="block text-sm font-medium truncate">
      bonnie@flowbite.com
    </span>
                      </Dropdown.Header>
                      <Dropdown.Item>
                          Dashboard
                      </Dropdown.Item>
                      <Dropdown.Item>
                          Settings
                      </Dropdown.Item>
                      <Dropdown.Item>
                          Earnings
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item>
                          Sign out
                      </Dropdown.Item>
                  </Dropdown>
              </Navbar.Collapse>
          </Navbar>
        </header>


      </main>
    </>
  )
}
