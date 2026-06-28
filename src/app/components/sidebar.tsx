"use client";

import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faHouse,
  faUser,
  faLightbulb,
  faEnvelope,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";

export default function Sidebar() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <>
      {/* Sidebar Desktop */}
      <div className="hidden lg:fixed left-16 top-1/2 -translate-y-1/2 bg-[#05131E] text-white w-16 lg:flex flex-col items-start justify-between py-6 px-5 rounded-3xl hover:w-3xs duration-700 ease-in-out overflow-hidden group">
        <div className="mb-10">
          <span className="text-[#7ED8BF]  -ml-2 text-lg font-mono font-bold group-hover:hidden">
            {"<R/>"}
          </span>

          <span className="hidden group-hover:block text-[#7ED8BF] text-lg font-mono font-bold whitespace-nowrap">
            {"<Rafael/>"}
          </span>
        </div>
        <div className="grid gap-10 ">
          <ul className="grid gap-10 ">
            <li className="flex hover:bg-[#1C2D3A] hover:w-full rounded-lg hover:p-2 duration-200">
              <FontAwesomeIcon icon={faHouse} size="lg" />
              <Link
                className="hidden group-hover:block ml-2 hover:underline duration-100"
                href="/"
              >
                Home
              </Link>
            </li>
            <li className="flex hover:bg-[#1C2D3A] hover:w-full rounded-lg hover:p-2 duration-200">
              <FontAwesomeIcon icon={faUser} size="lg" />
              <Link
                className="hidden group-hover:block ml-2 whitespace-nowrap hover:underline duration-100"
                href="/sobre"
              >
                Sobre Mim
              </Link>
            </li>
            <li className="flex hover:bg-[#1C2D3A] hover:w-full rounded-lg hover:p-2 duration-200">
              <FontAwesomeIcon icon={faLightbulb} size="lg" />
              <Link
                className="hidden group-hover:block ml-2 hover:underline duration-100"
                href="/projetos"
              >
                Projetos
              </Link>
            </li>
            <li className="flex hover:bg-[#1C2D3A] hover:w-full rounded-lg hover:p-2 duration-200">
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
              <Link
                className="hidden group-hover:block ml-2 hover:underline duration-100"
                href="/contato"
              >
                Contato
              </Link>
            </li>
          </ul>
        </div>
        <div className="mt-50 flex">
          <FontAwesomeIcon icon={faCode} size="lg" />
              <Link
                className="hidden group-hover:block ml-2 hover:underline duration-100 "
                href="https://github.com/RafaelLfckkj/Portifolio"
              >
                Código
              </Link>
          {/* <FontAwesomeIcon icon={faEarthAmericas} size="lg" />
          <p className="hidden group-hover:block ml-2  rounded-lg whitespace-nowrap " >Trocar Idioma</p> */}
          {/* Vai ficar pro futuro mesmo - por enquanto vai dar muito BO */}
        </div>
      </div>

      <div className="lg:hidden fixed top-0 left-0 w-full bg-[#05131E] text-white flex items-center justify-between px-5 py-4 z-40">
        <button onClick={() => setMenuAberto(true)} className="cursor-pointer">
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>

        <span className="text-[#7ED8BF] text-lg font-mono font-bold">
          {"<Rafael/>"}
        </span>
      </div>

      {menuAberto && (
        <div
          className="xl:hidden fixed inset-0 bg-black/60 z-40"
          onClick={() => setMenuAberto(false)}
        />
      )}

      <div
        className={`lg:hidden fixed top-0 left-0 h-full w-64 bg-[#1C2230] text-white z-50 flex flex-col py-6 px-6 duration-300 ease-in-out ${
          menuAberto ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={() => setMenuAberto(false)}
          className="mb-10 self-end cursor-pointer"
        >
          <FontAwesomeIcon icon={faXmark} size="lg" />
        </button>

        <ul className="grid gap-8">
          <li className="border-l-2 border-[#7ED8BF] pl-3">
            <Link
              href="/"
              onClick={() => setMenuAberto(false)}
              className="font-bold flex items-center gap-3"
            >
              <FontAwesomeIcon icon={faHouse} />
              Home
            </Link>
          </li>
          <li className="pl-3 border-l-2 border-[#7ED8BF]">
            <Link
              href="/sobre"
              onClick={() => setMenuAberto(false)}
              className="font-bold flex items-center gap-3"
            >
              <FontAwesomeIcon icon={faUser} />
              Sobre Mim
            </Link>
          </li>
          <li className="pl-3 border-l-2 border-[#7ED8BF]">
            <Link
              href="/projetos"
              onClick={() => setMenuAberto(false)}
              className="font-bold flex items-center gap-3"
            >
              <FontAwesomeIcon icon={faLightbulb} />
              Projetos
            </Link>
          </li>
          <li className="pl-3 border-l-2 border-[#7ED8BF]">
            <Link
              href="/contato"
              onClick={() => setMenuAberto(false)}
              className="font-bold flex items-center gap-3"
            >
              <FontAwesomeIcon icon={faEnvelope} />
              Contato
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
