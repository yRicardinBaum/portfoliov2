import NavBarMenu from "../../components/Header";
import DropDownTypes from "../../components/DropDownTypes.jsx";
import ActivityParameters from "../../components/ActivityParameters.jsx";

export default function Home() {
    return (
        <>
            <main>
                <header className={"md:p-5"}>
                    <NavBarMenu/>
                </header>

                <div className={"mx-auto text-center pt-[50px] md:pt-[100px]"}>
                    <h1 className="text-center font-sans text-blue-600 mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl ">Adicionar atividades</h1>
                    <p className="text-center mb-6 text-lg font-normal text-gray-600 lg:text-xl sm:px-16 xl:px-48 ">Esta página serve para criar atividades para o meu portfolio! Use-a com moderação</p>
                </div>
                <hr id={"sobre"} className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>

                    <ActivityParameters></ActivityParameters>
            </main>
        </>
    )
}