import {Archives, getAtividadeFiles, IAtividade} from "../../../mongo/Atividade";
import {NextPage} from "next";
import Header from "../../../components/Header";
import {Label, Select} from "flowbite-react";
import Image from "next/image";
import {ChangeEvent, useState} from "react";




const Linguagens: NextPage<{ atividade: Array<IAtividade>, files: Array<Archives>}> = props => {

    const [semestreOption, setSemestreOption] = useState("Todas as unidades");
    const [nome, setNome] = useState("");
    function onSelect(e: ChangeEvent) {
        // @ts-ignore
        setSemestreOption(e.target.value);

    }

    return (<>

        <div className={"m-5"}>
            <Header/>
        </div>
        <h1 className="mt-40 flex justify-center mb-4 text-4xl font-extrabold text-blue-600 leading-none tracking-tight md:text-5xl lg:text-6xl ">Linguagens</h1>
        <p className="text-center mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 ">Aqui irei depositar os trabalhos de linguagens</p>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
        {props.atividade.length === 0 ? <></> : <>
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
                        <Label htmlFor="nome" value="Filtrar nome"/>
                    </div>
                    <input id="nome" type="text"
                           className="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" onChange={e => {
                        setNome(e.target.value)
                    }}/>
                </div>
            </div>
        </>}
        <div className={"flex justify-center"}>
                <div className={"space-y-5 md:space-y-0 md:grid md:grid-cols-2 md:gap-20 "}>








                {props.atividade.length > 0 ? props.atividade.map((e) => {
                        if (e.nome.toLowerCase().includes(nome.toLowerCase()) || nome === '') {
                            switch (semestreOption) {
                                default: {
                                    let files = props.files.filter(id => id.id === e._id);
                                    let archives = files.map(e => e.files);
                                    let png = archives.map(e => e.filter(e => e.endsWith(".png") || e.endsWith(".jpeg") || e.endsWith(".jpg")))
                                    let thumb = png.map(e => e[0]);
                                    let dir = "/activities/" + e._id + "/" + thumb;
                                    return (
                                        <>

                                            <div
                                                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                                { archives.length > 0 ?  <Image width={400} height={400} className="rounded-t-lg max-w-auto max-h-[200px]" src={dir} alt="Thumb"/> : <Image width={400} height={400} className="rounded-t-lg max-w-auto max-h-[200px]" src={"/images/sem_imagem.png"} alt="Thumb"/>}
                                                <div className="p-5 max-h-[500px] text-ellipsis overflow-hidden ">
                                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{e.nome}</h5>
                                                    <div className={"max-h-[270px] max-w-[340px] line-clamp-6 mb-2"}>

                                                        {e.descricao.map(e => {
                                                            return (
                                                                <>
                                                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{e}</p>
                                                                </>
                                                            )
                                                        })}
                                                    </div>
                                                    <p className={"text-gray-400 mb-2"}>Data de postagem: {e.data}</p>
                                                    <div className={"items-end justify-end align-bottom"}>
                                                        <a href="#"
                                                           className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                            Ler Mais
                                                            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1"
                                                                 fill="currentColor" viewBox="0 0 20 20"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <path fillRule="evenodd"
                                                                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                                      clipRule="evenodd"></path>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )

                                }
                                case "1º unidade": {
                                    if (e.unidade === "1º") {
                                        let files = props.files.filter(id => id.id === e._id);
                                        let archives = files.map(e => e.files);
                                        let png = archives.map(e => e.filter(e => e.endsWith(".png") || e.endsWith(".jpeg") || e.endsWith(".jpg")))
                                        let thumb = png.map(e => e[0]);
                                        let dir = "/activities/" + e._id + "/" + thumb;
                                        return (
                                            <>

                                                <div
                                                    className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                                    { archives.length > 0 ?  <Image width={400} height={400} className="rounded-t-lg max-w-auto max-h-[200px]" src={dir} alt="Thumb"/> : <Image width={400} height={400} className="rounded-t-lg max-w-auto max-h-[200px]" src={"/images/sem_imagem.png"} alt="Thumb"/>}
                                                    <div className="p-5 max-h-[500px] text-ellipsis overflow-hidden ">
                                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{e.nome}</h5>
                                                        <div className={"max-h-[270px] max-w-[340px] line-clamp-6 mb-2"}>

                                                            {e.descricao.map(e => {
                                                                return (
                                                                    <>
                                                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{e}</p>
                                                                    </>
                                                                )
                                                            })}
                                                        </div>
                                                        <p className={"text-gray-400 mb-2"}>Data de postagem: {e.data}</p>
                                                        <div className={"items-end justify-end align-bottom"}>
                                                            <a href="#"
                                                               className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                                Ler Mais
                                                                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1"
                                                                     fill="currentColor" viewBox="0 0 20 20"
                                                                     xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd"
                                                                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                                          clipRule="evenodd"></path>
                                                                </svg>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    }
                                    break;
                                }
                                case "2º unidade": {
                                    if (e.unidade === "2º") {
                                        let files = props.files.filter(id => id.id === e._id);
                                        let archives = files.map(e => e.files);
                                        let png = archives.map(e => e.filter(e => e.endsWith(".png") || e.endsWith(".jpeg") || e.endsWith(".jpg")))
                                        let thumb = png.map(e => e[0]);
                                        let dir = "/activities/" + e._id + "/" + thumb;
                                        return (
                                            <>

                                                <div
                                                    className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                                    { archives.length > 0 ?  <Image width={400} height={400} className="rounded-t-lg max-w-auto max-h-[200px]" src={dir} alt="Thumb"/> : <Image width={400} height={400} className="rounded-t-lg max-w-auto max-h-[200px]" src={"/images/sem_imagem.png"} alt="Thumb"/>}
                                                    <div className="p-5 max-h-[500px] text-ellipsis overflow-hidden ">
                                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{e.nome}</h5>
                                                        <div className={"max-h-[270px] max-w-[340px] line-clamp-6 mb-2"}>

                                                            {e.descricao.map(e => {
                                                                return (
                                                                    <>
                                                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{e}</p>
                                                                    </>
                                                                )
                                                            })}
                                                        </div>
                                                        <p className={"text-gray-400 mb-2"}>Data de postagem: {e.data}</p>
                                                        <div className={"items-end justify-end align-bottom"}>
                                                            <a href="#"
                                                               className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                                Ler Mais
                                                                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1"
                                                                     fill="currentColor" viewBox="0 0 20 20"
                                                                     xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd"
                                                                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                                          clipRule="evenodd"></path>
                                                                </svg>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    }
                                    break;
                                }
                                case "3º unidade": {
                                    if (e.unidade === "3º") {
                                        let files = props.files.filter(id => id.id === e._id);
                                        let archives = files.map(e => e.files);
                                        let png = archives.map(e => e.filter(e => e.endsWith(".png") || e.endsWith(".jpeg") || e.endsWith(".jpg")))
                                        let thumb = png.map(e => e[0]);
                                        let dir = "/activities/" + e._id + "/" + thumb;
                                        return (
                                            <>

                                                <div
                                                    className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                                    { archives.length > 0 ?  <Image width={400} height={400} className="rounded-t-lg max-w-auto max-h-[200px]" src={dir} alt="Thumb"/> : <Image width={400} height={400} className="rounded-t-lg max-w-auto max-h-[200px]" src={"/images/sem_imagem.png"} alt="Thumb"/>}
                                                    <div className="p-5 max-h-[500px] text-ellipsis overflow-hidden ">
                                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{e.nome}</h5>
                                                        <div className={"max-h-[270px] max-w-[340px] line-clamp-6 mb-2"}>

                                                            {e.descricao.map(e => {
                                                                return (
                                                                    <>
                                                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{e}</p>
                                                                    </>
                                                                )
                                                            })}
                                                        </div>
                                                        <p className={"text-gray-400 mb-2"}>Data de postagem: {e.data}</p>
                                                        <div className={"items-end justify-end align-bottom"}>
                                                            <a href="#"
                                                               className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                                Ler Mais
                                                                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1"
                                                                     fill="currentColor" viewBox="0 0 20 20"
                                                                     xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd"
                                                                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                                          clipRule="evenodd"></path>
                                                                </svg>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    }
                                    break;
                                }
                                case "4º unidade": {
                                    if (e.unidade === "4º") {
                                        let files = props.files.filter(id => id.id === e._id);
                                        let archives = files.map(e => e.files);
                                        let png = archives.map(e => e.filter(e => e.endsWith(".png") || e.endsWith(".jpeg") || e.endsWith(".jpg")))
                                        let thumb = png.map(e => e[0]);
                                        let dir = "/activities/" + e._id + "/" + thumb;
                                        return (
                                            <>

                                                <div
                                                    className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                                    { archives.length > 0 ?  <Image width={400} height={400} className="rounded-t-lg max-w-auto max-h-[200px]" src={dir} alt="Thumb"/> : <Image width={400} height={400} className="rounded-t-lg max-w-auto max-h-[200px]" src={"/images/sem_imagem.png"} alt="Thumb"/>}
                                                    <div className="p-5 max-h-[500px] text-ellipsis overflow-hidden ">
                                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{e.nome}</h5>
                                                        <div className={"max-h-[270px] max-w-[340px] line-clamp-6 mb-2"}>

                                                            {e.descricao.map(e => {
                                                                return (
                                                                    <>
                                                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{e}</p>
                                                                    </>
                                                                )
                                                            })}
                                                        </div>
                                                        <p className={"text-gray-400 mb-2"}>Data de postagem: {e.data}</p>
                                                        <div className={"items-end justify-end align-bottom"}>
                                                            <a href="#"
                                                               className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                                Ler Mais
                                                                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1"
                                                                     fill="currentColor" viewBox="0 0 20 20"
                                                                     xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd"
                                                                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                                          clipRule="evenodd"></path>
                                                                </svg>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    }
                                    break;
                                }

                            }
                        }
                    })
                    : <></>

                }
            </div>
        </div>

        {props.atividade.length > 0 ? <></> :
            <>
                <div className={"text-center"}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-36 h-36 text-blue-500 mx-auto">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z"/>
                    </svg>
                    <p className={"text-2xl text-gray-700"}>Sem atividade.</p>
                </div>
            </>
        }
        <br/><br/><br/><br/><br/><br/>


        <p>{props.atividade.length}</p>

        </>

    )
}







export async function getServerSideProps() {
    let api = await fetch("http://localhost:3000/api/activitys?method=getAllActivities&materia=linguagens")
    let atividade: Array<IAtividade> = await api.json();
    let files = await getAtividadeFiles(atividade);
    return {
        props: { atividade, files }
    };
}


export default Linguagens;