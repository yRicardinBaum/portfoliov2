import NavBarMenu from "../../components/Header";
import { useState } from "react";
import AlertManeiro from "../../components/Alert.jsx";

export default function Home() {
    const [visible] = useState(false);

    return (
    <>
      <main>
        <AlertManeiro/>

        <header className={"p-5"} hidden={visible}>
            <NavBarMenu/>
        </header>

      </main>
    </>
  )
}
