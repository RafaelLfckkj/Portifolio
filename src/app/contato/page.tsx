import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGithub,
  faLinkedin,
  faInstagram,
  faDiscord,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import { faDownload } from "@fortawesome/free-solid-svg-icons";

import Botao from "../components/botao";

export default function Contato() {
  return (
    <div>



      {/* Textos e etc */}
      <div className="items-center justify-center text-center mb-50">
        <h1 className="text-5xl text-[#7ED8BF] font-bold mt-10 mb-10">
          ONDE VOCÊ PODE ME <br /> ENCONTRAR?
        </h1>

        <p className="text-3xl mb-10">
          Sinta se a vontade para se{" "}
          <span className="text-[#7ED8BF] ">conectar</span> <br />e{" "}
          <span className="text-[#7ED8BF] ">conversar</span> comigo
        </p>

        {/* Icones */}
        <div className="text-3xl mb-15">
          <FontAwesomeIcon icon={faGithub}  className="mr-5 cursor-pointer hover:text-[33px] duration-150 hover:text-black"/>
          <FontAwesomeIcon icon={faLinkedin} className="mr-5 cursor-pointer hover:text-[33px] duration-150 hover:text-blue-500"/>
          <FontAwesomeIcon icon={faInstagram} className="mr-5 cursor-pointer hover:text-[33px] duration-150 hover:text-pink-400"/>
          <FontAwesomeIcon icon={faDiscord} className="cursor-pointer hover:text-[33px] duration-150 hover:text-blue-600"/>
        </div>

        {/* Botões */}
        <div className="flex gap-16 justify-center items-center">
          <Botao texto="Baixar Curriculo" icone={faDownload} />
          <Botao texto="Vamos Conversar" icone={faWhatsapp} />
        </div>

      </div>



    </div>
  );
}
