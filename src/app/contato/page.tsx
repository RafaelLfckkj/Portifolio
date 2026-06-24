import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGithub,
  faLinkedin,
  faInstagram,
  faDiscord,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import Link from "next/link";

import { faDownload } from "@fortawesome/free-solid-svg-icons";

import Botao from "../components/botao";

export default function Contato() {
  return (
    <div className="mb-30">
      {/* Textos e etc */}
      <div className="items-center justify-center text-center mb-50">
        <h1 className="text-5xl text-[#7ED8BF] font-bold mt-10 mb-10">
          ONDE VOCÊ PODE ME <br /> ENCONTRAR?
        </h1>

        <p className="text-3xl mb-10 font-bold">
          Sinta se a vontade para se{" "}
          <span className="text-[#7ED8BF] ">conectar</span> <br />e{" "}
          <span className="text-[#7ED8BF] ">conversar</span> comigo
        </p>

        {/* Icones */}
        <div className="text-3xl mb-15">
          <FontAwesomeIcon
            icon={faGithub}
            className="mr-5 cursor-pointer hover:text-[33px] duration-150 hover:text-black"
          />
          <FontAwesomeIcon
            icon={faLinkedin}
            className="mr-5 cursor-pointer hover:text-[33px] duration-150 hover:text-blue-500"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            className="mr-5 cursor-pointer hover:text-[33px] duration-150 hover:text-pink-400"
          />
          <FontAwesomeIcon
            icon={faDiscord}
            className="cursor-pointer hover:text-[33px] duration-150 hover:text-blue-600"
          />
        </div>

        {/* Botões */}
        <div className="flex gap-16 justify-center items-center">
          <Botao texto="Baixar Curriculo" icone={faDownload} />

          <Link href="https://wa.me/5511948751574">
            <Botao texto="Vamos Conversar" icone={faWhatsapp} />
          </Link>
        </div>
      </div>

      <div>
        <div className="text-center text-4xl font-bold">
          <h1>ME MANDE UMA</h1>
          <h1>MENSAGEM</h1>
        </div>

        <div className="flex justify-center items-center gap-14 mt-16">
          {/* Formulario */}
          <div>
            <form className="grid ">
              <label className="font-bold">Email:</label>
              <input
                type="email"
                placeholder="Digite Seu Email...."
                className="bg-[#222630] w-131 p-2 pr-12 text-left rounded-md border border-white mb-10"
              />

              <label className="font-bold">Mensagem: </label>
              <textarea
                placeholder="Digite sua mensagem..."
                className="bg-[#222630] w-131 h-52.25 px-5 py-5 rounded-xl border border-white resize-none outline-none"
              />

              <button className="flex bg-[#183153] p-3 w-fit p-2 px-14 rounded-md cursor-pointer text-lg hover:bg-[#132641] duration-200 mt-8">
                <p>Enviar</p>
              </button>
            </form>
          </div>

          {/* Terminal? */}
          <div className="w-132.75 h-85 bg-[#011522] mb-10 rounded-3xl border border-[#1a1d2b] overflow-hidden shadow-2xl">
            {/* Barra superior */}
            <div className="h-12 bg-[#090B13] flex items-center px-5 gap-3 border-b border-[#1a1d2b]">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>

              <span className="text-gray-400 ml-3 text-sm font-mono">
                developer.js
              </span>
            </div>

            {/* Código */}
            <div className="p-8 font-mono text-sm leading-8">
              <p>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-yellow-300">developer</span>{" "}
                <span className="text-white">= {"{"}</span>
              </p>

              <p className="ml-8">
                <span className="text-blue-400">name:</span>{" "}
                <span className="text-green-400">&quot;Rafael de Oliveira&quot;</span>,
              </p>

              <p className="ml-8">
                <span className="text-blue-400">role:</span>{" "}
                <span className="text-green-400">&quot;Full Stack Developer&quot;</span>,
              </p>

              <p className="ml-8">
                <span className="text-blue-400">skills:</span>{" "}
                <span className="text-green-400">
                  [&quot;Java&quot;, &quot;Node.js&quot;, &quot;Next.js&quot;]
                </span>
                ,
              </p>

              <p className="ml-8">
                <span className="text-blue-400">passion:</span>{" "}
                <span className="text-green-400">&quot;Criar soluções&quot;</span>,
              </p>

              <p className="ml-8">
                <span className="text-blue-400">code:</span>{" "}
                <span className="text-white">()</span>{" "}
                <span className="text-white">{"=>"}</span>{" "}
                <span className="text-green-400">&quot;Sempre aprendendo!&quot;</span>
              </p>

              <p className="text-white">{"};"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
