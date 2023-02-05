import NavBarMenu from "../../components/Header";
import { useState } from "react";
import AlertManeiro from "../../components/Alert.jsx";
import Image from "next/image";

export default function Home() {

    return (
    <>
      <main>
        <AlertManeiro/>

        <header className={"p-5"}>
            <NavBarMenu/>
        </header>
          <div className={"w-full mx-auto text-center pt-[50px] md:pt-[100px]"}>
            <h1 className="text-center font-sans text-blue-600 mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl ">Seja bem-vindo</h1>
            <p className="text-center mb-6 text-lg font-normal text-gray-600 lg:text-xl sm:px-16 xl:px-48 ">Este é o meu portifólio privado, aqui eu vou enviar minhas atividades, trabalhos e futuros projetos.</p>

              <div className={"pt-10 md:pt-[400px]"}>
                  <a href="">
                  <div className={"mx-auto animate-bounce bg-white border border-[#e5e7eb] p-2 w-10 h-10 ring-1 ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center"}>
                      <svg className="w-6 h-6 text-blue-500 mx-auto" fill="none" strokeLinecap="round"
                           strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                      </svg>
                  </div>
                  </a>
                  </div>

          </div>

      </main>
    </>
  )
}
