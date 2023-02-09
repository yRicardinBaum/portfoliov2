import {Component} from "react";
import DropDownTypes from "./DropDownTypes";
import axios from "axios";



export default class ActivityParameters extends Component{



    render() {
        async function submit(e) {
            e.preventDefault();
            let name = document.getElementById("name").value;
            let description = document.getElementById("description").value;
            let materia = document.getElementById("materias").value;
            let files = document.getElementById("matfiles").files;
            const formData = new FormData();
            for (const file of files) {
                formData.append('files',file,file.name)
            }
            const options = {
                method: "POST",
                body: formData
            };
            await fetch("/api?name=" + name + "&description=" + description + "&materia=" + materia.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase(), options).then(e => {
                if(e.status === 200) {
                    alert("Atividade criada com sucesso!")
                } else {
                    alert("Ocorreu um erro ao tentar criar a atividade, consulte o suporte")
                }
            })
        }
        return (
            <>
                <form method={"POST"} encType={"multipart/form-data"} className={"p-10"} onSubmit={(e) => submit(e)}>

                    <div className="relative z-0 max-w-2xl mb-10 group mx-auto">
                        <input type="text" name={"name"} id="name"
                               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                               placeholder=" " required/>
                        <label
                               className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nome da atividade</label>
                    </div>

                    <div className="relative z-0 max-w-2xl mb-6 group mx-auto">
                        <textarea id="description" name={"descricao"} rows="4"
                              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                              placeholder="Breve descrição" required></textarea>
                    </div>

                <div className={"max-w-2xl mx-auto mb-5"}>
                    <label className="block mb-2 text-sm font-medium text-gray-900"
                           htmlFor="matfiles">Arquivos</label>
                    <input name={"files"}
                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-blue-500 focus:outline-none "
                        aria-describedby="matfiles_help" id="matfiles" type="file" multiple="multiple" accept={".jpg, .png, .pptx, jpeg"}/>
                </div>

                        <div className={"max-w-2xl mb-10 mx-auto"}>
                        <DropDownTypes></DropDownTypes>
                    </div>
                    <div className={"text-center"}>
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center">Enviar
                        </button>
                    </div>
                </form>
            </>
        );



    }

}