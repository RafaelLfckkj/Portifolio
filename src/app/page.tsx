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
    <div className="max-w-6xl mx-auto h-screen flex items-center justify-between px-20">
      {/* textos */}
      <div className="max-w-md">
        <div className="text-sm/8 ">
          <h1 className="text-[40px] font-bold">Olá, eu me chamo</h1>
          <h2 className="text-[35px] font-bold text-[#7ED8BF]">
            Rafael Oliveira
          </h2>
        </div>

        <div className="text-3xl md:text-3xl font-medium text-[#7ED8BF] flex items-center h-10 mt-2">
          <span ref={elementoDigitando}></span>
          <span className="inline-block w-0.5 h-[1.1em] bg-[#7ED8BF] ml-1 animate-[piscar_0.75s_step-end_infinite]"></span>
        </div>

        {/* Botões */}
        <div className="flex gap-4 ">
          <Link
            className="mt-6 px-6 py-2 bg-[#62a894] text-white rounded-3xl hover:bg-[#3b7d69] transition-colors duration-300 shadow-xl font-bold"
            href="/projetos"
          >
            Ver Projetos
            <FontAwesomeIcon className="ml-3" icon={faAngleRight} />
          </Link>

          <Link
            className="border rounded-3xl mt-6 px-6 py-2 border-[#7ED8BF] hover:border-[#275346] hover:text-gray-300 duration-300 shadow-xl font-bold"
            href="/"
          >
            Fale Comigo
          </Link>
        </div>
      </div>

      {/* Imagem */}
      <div className=" transition-transform duration-500 hover:scale-105">
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
