import NavBarMenu from "../../components/Header";
import AlertManeiro from "../../components/Alert.jsx";
import Stepper from "../../components/Stepper.jsx";
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

              <div className={"pt-[100px]"}>
                  <div onClick={function onClick() {
                      // @ts-ignore
                      document.getElementById("sobre").scrollIntoView();
                  }} className={"mx-auto animate-bounce hover:cursor-pointer bg-white border border-[#e5e7eb] p-2 max-w-10 max-h-10 w-10 h-10 ring-1 ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center"}>
                      <svg className="w-6 h-6 text-blue-500 mx-auto" fill="none" strokeLinecap="round"
                           strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                      </svg>

                  </div>
                  </div>
          </div>
          <hr id={"sobre"} className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>


          <div className={"mx-auto md:mx-0 md:flex md:justify-items-start md:justify-center md:space-x-20"}>
              <Image alt={"cat gif"} src={"/images/cat-computer.gif"} className={"mx-auto md:mx-0 md:h-[450px] md:w-[450px] md:order-1"} width={196} height={220}/>
              <div className={"mx-auto text-center md:text-left md:order-2"}>
                  <h1 className={"text-center font-bold text-[30px] text-slate-800"}>Sobre mim</h1>
                  <br/>
                  <p className={"mx-auto text-center md:text-left md:max-w-[400px]"}>Me chamo Ricardo, atualmente faço o 1º ano do novo ensino médio, cursando desenvolvimento de sistemas, amo a matemática e como é perfeita de todos os jeitos, no meu tempo livre gosto de jogar e programar, atualmente quero ser um programador de sucesso trabalhando em grandes empresas, também almejo aprender segurança da informação para poder medir a segurança dos meus projetos. Eu já programo ha um tempo, comecei com 10 anos criando bots para Discord usando Node.js, após isso, não satisfeito, aprendi Java pela qual até hoje é linguagem que eu sou mais familiarizado, atualmente estou aprendendo a criação de sites usando Next.Js e React (HTML, CSS e JS também). Caso queira ver algum de meus códigos, clique na imagem a baixo e será direcionado ao meu repositório. </p>
                  <div className={"mx-auto w-fit"}>
                      <div onClick={() => {
                          window.open("https://github.com/yRicardinBaum", "_blank")
                      }} className={"hover:cursor-pointer"} ><Image width={36} height={36}  className={"mt-5 animate-bounce mx-auto"} alt={"github"} src={"/images/github.png"}></Image></div>
                  </div>
              </div>
          </div>
            <br/>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>

              <br/>
               <h1 className={"text-center font-bold text-[30px] text-slate-800 mb-10"}>Planos</h1>
                    <Stepper/>
                <br/>
                <br/>
                <br/>
              <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
              <br/>
              <br/>
              <h1 className={"text-center font-bold text-[30px] text-slate-800 mb-10"}>Mais sobre...</h1>
              <br/>
              <div className={"space-y-4 mx-auto md:mx-0 md:space-y-0 md:flex md:flex-rows md:justify-center md:space-x-40"}>
                  <div className={"text-center text-slate-800 order-1"}>
                      <h1 className={"text-[20px] font-bold mb-6"}>Resolver problemas</h1>
                      <p className={"max-w-[400px] mx-auto md:mx-0"}>Tenho uma mente muito aberta para resolver problemas, especialmente quando o problema se trata na minha área de programação, tentando me adaptar as novas tecnologias e sempre inovando.</p>
                  </div>
                  <div className={"text-center text-slate-800 order-2"}>
                      <h1 className={"text-[20px] font-bold mb-6"}>Faculdade</h1>
                      <p className={"max-w-[400px] mx-auto md:mx-0"}>Pretendo fazer o enem e fazer alguma faculdade voltada para minha área da programação, mas se possível queria conseguir estágio antes de me formar para agregar mais experiência, e também poder colocar no meu currículo</p>
                  </div>
                  <div className={"text-center text-slate-800 order-3"}>
                      <h1 className={"text-[20px] font-bold mb-6"}>Fluência</h1>
                      <p className={"max-w-[400px] mx-auto md:mx-0"}>Desejo ser fluente em inglês até acabar a escola, para que eu possa ter possibilidades de trabalhar no exterior, onde minha área é mais reconhecida e onde o modelo de trabalho é bem mais otimizado.</p>
                  </div>
              </div>
              <br/>
              <br/>
              <br/>
              <br/>


              <div className="inline-flex items-center justify-center w-full">
                  <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700"/>
                      <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
                          <svg aria-hidden="true" className="w-5 h-5 text-gray-700 dark:text-gray-300"
                               viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                                  fill="currentColor"/>
                          </svg>
                      </div>
              </div>
              <br/>

              <br/>
              <br/>
              <figure className="max-w-screen-md mx-auto text-center">
                  <blockquote>
                      <p className="text-2xl italic font-medium text-gray-900 dark:text-white">"Tente uma, duas, três vezes e se possível tente a quarta, a quinta e quantas vezes for necessário. Só não desista nas primeiras tentativas, a persistência é amiga da conquista. Se você quer chegar aonde a maioria não chega, faça o que a maioria não faz."</p>
                  </blockquote>
                  <figcaption className="flex items-center justify-center mt-6 space-x-3">
                      <Image className="w-6 h-6 rounded-full"
                           src="/images/billgates.jpg"
                           alt="profile picture" width={100} height={100}/>
                          <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                              <cite className="pr-3 font-medium text-gray-900 dark:text-white">Bill Gates</cite>
                              <cite className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO da Microsoft</cite>
                          </div>
                  </figcaption>
              </figure>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>


              <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600 text-center justify-center">
                    <span className="text-sm text-gray-500 text-center mx-auto">© 2023 <a href="https://flowbite.com/" className="hover:underline">Ricardo™</a>. All Rights Reserved.</span>
              </footer>

          </main>
    </>
  )
}
