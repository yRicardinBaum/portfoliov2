import NavBarMenu from "../../components/Header";
import {FormEvent, useState} from "react";
import {Button, Spinner} from "flowbite-react";

export default function Home() {

    const [active, setActive] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [succes, setSucces] = useState(false);
    async function submit(e: FormEvent) {
        e.preventDefault();
        let name: any = document.getElementById("name");
        let description: any = document.getElementById("description")
        let materia: any = document.getElementById("materias");
        let semestre: any = document.getElementById("unidade")
        let files: any = document.getElementById("matfiles");
        let data: any = new Date();

        data =  ((data.getDate() < 10) ? "0": "") + data.getDate() + "/" +  ((data.getMonth() < 10) ? "0": "") + (data.getMonth() + 1) + " " + ((data.getHours() < 10) ? "0": "") + data.getHours() + ":" + ((data.getMinutes() < 10) ? "0": "") + data.getMinutes();
        const formData = new FormData();
        for (const file of files.files) {
            formData.append('files',file,file.name)
        }
        const options = {
            method: "POST",
            body: formData
        };
        await fetch("/api?name=" + name.value + "&description=" + description.value.replaceAll(/\r\n|\r|\n/g, '?n') + "&materia=" + materia.value.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase() + "&semestre=" + semestre.value + "&data=" + data, options).then(e => {
            if(e.status === 200) {
                setActive(false)
                setSucces(true)

            } else {
                setActive(false)
                setError(true)
            }
        })
    }


    function accept(e: FormEvent) {
        e.preventDefault()
        document.getElementsByTagName("MAIN")[0].classList.add("blur-sm")
        document.getElementsByTagName("BODY")[0].classList.add("overflow-hidden")
        setActive(true)
    }
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
                <hr id={"sobre"} className="h-px my-8 bg-gray-200 border-0"/>

                <form method={"POST"} encType={"multipart/form-data"} className={"p-10 mx-auto max-w-2xl"} onSubmit={(e) => accept(e)}>

                    <div className="relative z-0 mb-10 group mx-auto ">
                        <input type="text" name={"name"} id="name"
                               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                               placeholder=" " required/>
                        <label
                            className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nome da atividade</label>
                    </div>

                    <div className="relative z-0 max-w-2xl mb-6 group mx-auto">
                        <textarea id="description" name={"descricao"} rows={4}
                                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                                  placeholder="Breve descrição" required></textarea>
                    </div>

                    <div className={"max-w-2xl mx-auto mb-5"}>
                        <label className="block mb-2 text-sm font-medium text-gray-900"
                               htmlFor="matfiles">Arquivos</label>
                        <input name={"files"}
                               className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer focus:outline-none "
                               aria-describedby="matfiles_help" id="matfiles" type="file" multiple={true} accept={".jpg, .png, .pptx, jpeg"}/>
                    </div>

                    <div className={"max-w-2xl mb-5 mx-auto"}>
                        <label htmlFor="materias" className="block mb-2 text-sm font-medium text-gray-900 ">Escolha a matéria</label>
                        <select id="materias"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option>Matemática</option>
                            <option>Linguagens</option>
                            <option>Natureza</option>
                            <option>Humanas</option>
                        </select>
                    </div>

                    <div className={"max-w-2xl mb-10 mx-auto"}>
                        <label htmlFor="unidade" className="block mb-2 text-sm font-medium text-gray-900">Escolha a unidade</label>
                        <select id="unidade"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option>1º</option>
                            <option>2º</option>
                            <option>3º</option>
                            <option>4º</option>
                        </select>
                    </div>
                    <div className={"text-center"}>
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center">Enviar
                        </button>

                    </div>
                </form>
            </main>
            {active ?
                <div id="defaultModal" tabIndex={-1}
                     className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 filter-none">
                    <div className="relative w-full h-full max-w-2xl md:h-auto">
                        <div className="relative bg-white rounded-lg shadow ">
                            <div
                                className="flex items-start justify-between p-4 border-b rounded-t ">
                                <h3 className="text-xl font-semibold text-gray-900 ">
                                    Criar atividades.
                                </h3>
                            </div>
                            <div className="p-6 space-y-6">
                                <p className="text-base leading-relaxed text-gray-500 ">
                                    Você realmente deseja criar essa atividade?<br/>
                                    O uso excessivo dessa função pode acarretar problemas. <br/>
                                </p>
                            </div>
                            <div
                                className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b ">
                                <button data-modal-hide="defaultModal" hidden={loading} type="submit"
                                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                        onClick={async e => {
                                            setLoading(true)
                                            await submit(e);
                                        }}>Continuar
                                </button>
                                {loading ?
                                    <Button className={""} disabled>
                                        <div className="mr-2">
                                            <Spinner size="sm" light={true}/>
                                        </div>
                                        Carregando
                                    </Button>
                                    : <button data-modal-hide="defaultModal" type="button"
                                              className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 text-red-400"
                                              onClick={() => {
                                                  document.getElementsByTagName("MAIN")[0].classList.remove("blur-sm")
                                                  document.getElementsByTagName("BODY")[0].classList.remove("overflow-hidden")
                                                  setActive(false)
                                              }}>Cancelar
                                    </button>
                                }
                            </div>
                        </div>
                    </div>
                </div> : <></>
            }
            {error ?
                <div id="popup-modal" tabIndex={-1}
                     className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                    <div className="relative w-full h-full max-w-md md:h-auto">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <div className="p-6 text-center">
                                <svg aria-hidden="true"
                                     className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200"
                                     fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Ocorreu um
                                    erro ao tentar criar a atividade</h3>
                                <button data-modal-hide="popup-modal" type="button"
                                        className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2" onClick={e => {
                                        setError(false)
                                        setLoading(false)
                                    document.getElementsByTagName("MAIN")[0].classList.remove("blur-sm")
                                    document.getElementsByTagName("BODY")[0].classList.remove("overflow-hidden")
                                        }
                                }>
                                    Fechar
                                </button>
                            </div>
                        </div>
                    </div>
                </div> : <></>
            }

            {succes ?

                <div id="popup-modal" tabIndex={-1}
                     className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                    <div className="relative w-full h-full max-w-md md:h-auto">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <div className="p-6 text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                     className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200"
                                     width="48" height="48"
                                     viewBox="0 0 48 48">
                                    <path fill="#c8e6c9" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path><path fill="#4caf50" d="M34.586,14.586l-13.57,13.586l-5.602-5.586l-2.828,2.828l8.434,8.414l16.395-16.414L34.586,14.586z"></path>
                                </svg>
                                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Atividade criada com sucesso!</h3>
                                <button data-modal-hide="popup-modal" type="button"
                                        className="text-black bg-emerald-500 hover:bg-emerald-600 focus:ring-4 focus:outline-none focus:ring-emerald-300 dark:focus:ring-emerald-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2" onClick={e => {
                                    setSucces(false)
                                    setLoading(false)
                                    document.getElementsByTagName("MAIN")[0].classList.remove("blur-sm")
                                    document.getElementsByTagName("BODY")[0].classList.remove("overflow-hidden")
                                }
                                }>
                                    Fechar
                                </button>
                            </div>
                        </div>
                    </div>
                </div> : <></>
            }






        </>
    )
}