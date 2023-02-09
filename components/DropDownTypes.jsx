import {Component} from "react";




export default class DropDownTypes extends Component{
    render(){
        return(
            <>
                <label htmlFor="materias" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Escolha a matéria</label>
                <select id="materias"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option>Matemática</option>
                    <option>Linguagens</option>
                    <option>Natureza</option>
                    <option>Humanas</option>
                </select>
            </>
        )
    }
}