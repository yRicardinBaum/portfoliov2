import {Component} from "react";



export default class Stepper extends Component{
    render() {
        return (
            <>
                <ol className="flex justify-center items-center w-full p-3 space-x-2 text-sm lg:text-xl text-center text-gray-500">
                    <li className="flex items-center text-yellow-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1"
                             stroke="currentColor" className="w-6 h-6 sm:w-3 sm:h-3 mr-1.5">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>

                        Estudar/Estagiar
                        <svg aria-hidden="true" className="w-4 h-4 ml-2 sm:ml-4" fill="none" stroke="currentColor"
                             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
                        </svg>
                    </li>
                    <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1"
                             stroke="currentColor" className="w-6 h-6 sm:w-3 sm:h-3 mr-1.5">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        Fluente em inglês
                        <svg aria-hidden="true" className="w-4 h-4 ml-2 sm:ml-4" fill="none" stroke="currentColor"
                             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
                        </svg>
                    </li>
                    <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1"
                             stroke="currentColor" className="w-6 h-6 sm:w-3 sm:h-3 mr-1.5">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        Profissional de sucesso
                    </li>
                </ol>

            </>
        )
    }
}