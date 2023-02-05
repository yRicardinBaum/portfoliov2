import NavBarMenu from "../../components/Header";
import { useState } from "react";
import AlertManeiro from "../../components/Alert.jsx";
import Image from "next/image";

export default function Home() {

    return (
    <>
      <main>
        <AlertManeiro/>

        <header className={"md:p-5"}>
            <NavBarMenu/>
        </header>
          <div className={"w-[100vw] h-[100vh] mx-auto text-center pt-[50px] md:pt-[100px] h-full max-h-full"}>
            <h1 className="text-center font-sans text-blue-600 mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl ">Seja bem-vindo</h1>
            <p className="text-center mb-6 text-lg font-normal text-gray-600 lg:text-xl sm:px-16 xl:px-48 ">Este é o meu portifólio privado, aqui eu vou enviar minhas atividades, trabalhos e futuros projetos.</p>

              <div className={"pt-[300px] md:pt[100px] md:pt-[400px]"}>
                  <div className={"mx-auto animate-bounce bg-white border border-[#e5e7eb] p-2 w-10 h-10 ring-1 ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center"}>
                      <a href="">
                      <svg className="w-6 h-6 text-blue-500 mx-auto" fill="none" strokeLinecap="round"
                           strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                      </svg>
                      </a>
                  </div>
                  </div>
          </div>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>


          <div className={"mx-auto md:mx-0 md:flex md:justify-items-start md:justify-center md:space-x-20"}>
              <Image alt={"cat gif"} src={"/images/cat-computer.gif"} className={"mx-auto md:mx-0 md:h-[450px] md:w-[450px] md:order-1"} width={196} height={220}/>
              <div className={"mx-auto text-center mt-3 md:text-left md:order-2"}>
                  <h1 className={"text-center font-bold text-[30px] text-slate-800"}>Sobre mim</h1>
                  <br/>
                  <p className={"mx-auto text-center md:text-left max-w-[300px] md:max-w-[400px]"}>Me chamo Ricardo, atualmente faço o 1º ano do novo ensino médio, cursando desenvolvimento de sistemas, amo a matemática e como é perfeita de todos os jeitos, no meu tempo livre gosto de jogar e programar, atualmente quero ser um programador de sucesso trabalhando em grandes empresas, também almejo aprender segurança da informação para poder medir a segurança dos meus projetos. Eu já programo ha um tempo, comecei com 10 anos criando bots para Discord usando Node.js, após isso, não satisfeito, aprendi Java pela qual até hoje é linguagem que eu sou mais familiarizado, atualmente estou aprendendo a criação de sites usando Next.Js e React (HTML, CSS e JS também). Caso queira ver algum de meus códigos, clique na imagem a baixo e será direcionado ao meu repositório. </p>
              </div>
          </div>
            <br/>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>


            <div>
               <h1 className={"text-center font-bold text-[30px] text-slate-800"}>Planos</h1>
                <hr/>

            </div>


      </main>
    </>
  )
}
