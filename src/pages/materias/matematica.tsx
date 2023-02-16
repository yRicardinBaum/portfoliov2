import {NextPage} from "next";
import Header from "../../../components/Header"
import {Card, Label, Select, TextInput} from "flowbite-react";
import {ChangeEvent, useState} from "react";
import {getAtividades, IAtividade} from "../../../mongo/Atividade";
import axios from "axios";


const Matematica: NextPage<{ atividade: Array<IAtividade>, semestre: string }> = props => {
    const [semestreOption, setSemestreOption] = useState(props.semestre);
    function onSelect(e: ChangeEvent) {
        // @ts-ignore
        setSemestreOption(e.target.value);
    }


    return (
        <>
        <div className={"m-5"}>
            <Header/>
        </div>
            <h1 className="mt-40 flex justify-center mb-4 text-4xl font-extrabold text-blue-600 leading-none tracking-tight md:text-5xl lg:text-6xl ">Linguagens</h1>
            <p className="text-center mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 ">Aqui irei depositar os trabalhos de linguagem</p>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
            <div className={"flex flex-rows space-x-5 justify-center"}>
                <div id="select">
                    <div className="mb-2 block text-center">
                        <Label htmlFor="unidade" value="Filtrar unidades"/>
                    </div>
                    <Select id="unidade" required={true} className={"max-w-[200px] mx-auto"} onChange={e => {onSelect(e)}}>
                        <option selected>
                            Todas as unidades
                        </option>
                        <option >
                            1º unidade
                        </option>
                        <option>
                            2º unidade
                        </option>
                        <option>
                            3º unidade
                        </option>
                        <option>
                            4º unidade
                        </option>
                    </Select>
                </div>
                <div>
                    <div className="mb-2 block text-center">
                        <Label htmlFor="nome" value="Filtrar nomes"/>
                    </div>

                    <TextInput id="nome" type="text" placeholder={"Nome"} sizing="md" className={"max-w-[600px]"}/>
                </div>
            </div>


            <div className="max-w-[600px] mx-auto mt-5">
                <Card horizontal={true} imgSrc="https://flowbite.com/docs/images/blog/image-4.jpg">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy technology acquisitions 2021
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    </p>
                </Card>
            </div>

                {props.atividade.map((e) => {
                switch (semestreOption) {
                    case "1º unidade": {
                        if(e.unidade === "1º") {
                            return(
                                <>
                                    <p>Nome: {e.nome}</p>
                                     <p>Descrição: {e.descricao}</p>
                                </>
                            )
                        }
                        break;
                    }
                    case "2º unidade": {
                        if(e.unidade === "2º") {
                            return(
                                <>
                                    <p>Nome: {e.nome}</p>
                                    <p>Descrição: {e.descricao}</p>
                                </>
                            )
                        }
                        break;
                    }
                    case "3º unidade": {
                        if(e.unidade === "3º") {
                            return(
                                <>
                                    <p>Nome: {e.nome}</p>
                                    <p>Descrição: {e.descricao}</p>
                                </>
                            )
                        }
                        break;
                    }
                    case "4º unidade": {
                        if(e.unidade === "4º") {
                            return(
                                <>
                                    <p>Nome: {e.nome}</p>
                                    <p>Descrição: {e.descricao}</p>
                                </>
                            )
                        }
                        break;
                    }
                    default: {
                        return(
                            <>
                                <p>Nome: {e.nome}</p>
                                {e.descricao.map(e => {
                                    e.replaceAll('"', "")
                                    return(
                                        <p key={e}>{e}</p>
                                    )
                                })}
                            </>
                        )
                    }
                }
                })

                }
        </>
    )
}

// This gets called on every request
export async function getServerSideProps() {
    // console.log("TENTANDO...")
    // let atividade: Array<IAtividade> = await getAtividades("matematica");
    let api = await fetch("http://localhost:3000/api/activitys?method=getAllActivities&materia=matematica")

    let atividade: Array<IAtividade> = await api.json();
    return {
        props: { atividade, semestre: "Todas as unidade" }
    };
}


export default Matematica;