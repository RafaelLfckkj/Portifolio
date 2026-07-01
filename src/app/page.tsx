"use client";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import Image from "next/image";

import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const elementoDigitando = useRef(null);

  useEffect(() => {
    const typed = new Typed(elementoDigitando.current, {
      strings: [
        "Técnico em TI",
        "Ciência da Computação",
        "Engenheiro de Software",
        "Desenvolvedor Full-Stack",
        "Sempre em foco!",
      ],
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="lg:max-w-6xl mx-auto h-screen lg:flex lg:items-center lg:justify-between lg:px-20 md:grid md:items-center md:justify-center lg:mb-0 sm:mb-70 mb-25 grid justify-center items-center">
      {/* textos */}
      <div className="max-w-md xl:m-0 lg:ml-20 md:mt-30 mt-20 md:text-center lg:text-left text-center sm:ml-0">
        <div className="text-sm/8 ">
          <h1 className="md:text-[40px] text-[30px] font-bold">Olá, eu me chamo</h1>
          <h2 className="md:text-[35px] text-[20px] font-bold text-[#7ED8BF]">
            Rafael Oliveira
          </h2>
        </div>

        <div className="sm:text-3xl md:text-3xl font-medium text-[#7ED8BF] flex items-center h-10 mt-2 md:text-center lg:text-left text-center text-lg">
          <span className="text-center w-full sm:text-left" ref={elementoDigitando}></span>
        </div>

        {/* Botões */}
        <div className="sm:flex gap-4 md:justify-center md:items-center lg:justify-start lg:items-start lg:m-0 md:mb-10 grid mb-5 justify-center items-center">
          <Link
            className="mt-6 px-6 py-2 bg-[#62a894] text-white rounded-3xl hover:bg-[#3b7d69] transition-colors duration-300 shadow-xl font-bold w-60 sm:w-50 text-center"
            href="/projetos"
          >
            Ver Projetos
            <FontAwesomeIcon className="ml-3" icon={faAngleRight} />
          </Link>

          <Link
            className="border rounded-3xl sm:mt-6 px-6 py-2 border-[#7ED8BF] hover:border-[#275346] hover:text-gray-300 duration-300 shadow-xl font-bold w-60 sm:w-50 text-center"
            href="https://wa.me/5511948751574"
          >
            Fale Comigo
          </Link>
        </div>
      </div>

      {/* Imagem */}
      <div className=" transition-transform duration-500 hover:scale-105 sm:m-0 w-70 justify-center items-center sm:w-100">
        <Image
          src="/Eu.png"
          alt="Foto de perfil do Rafael"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
}
