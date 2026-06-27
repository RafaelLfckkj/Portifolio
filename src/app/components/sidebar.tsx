import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faLightbulb,
  faEnvelope,
  faEarthAmericas,
} from "@fortawesome/free-solid-svg-icons";


import Link from 'next/link';


export default function Sidebar() {
  return (
    <div className="fixed left-16 top-1/2 -translate-y-1/2 bg-[#05131E] text-white w-16 flex flex-col items-start justify-between py-6 px-5 rounded-3xl hover:w-3xs duration-700 ease-in-out overflow-hidden group">
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
            <Link className="hidden group-hover:block ml-2 hover:underline duration-100" href="/">
              Home
            </Link>
          </li>
          <li className="flex hover:bg-[#1C2D3A] hover:w-full rounded-lg hover:p-2 duration-200">
            <FontAwesomeIcon icon={faUser} size="lg" />
            <Link className="hidden group-hover:block ml-2 whitespace-nowrap hover:underline duration-100" href="/sobre">
              Sobre Mim
            </Link>
          </li>
          <li className="flex hover:bg-[#1C2D3A] hover:w-full rounded-lg hover:p-2 duration-200">
            <FontAwesomeIcon icon={faLightbulb} size="lg" />
            <Link className="hidden group-hover:block ml-2 hover:underline duration-100" href="/projetos">
              Projetos
            </Link>
          </li>
          <li className="flex hover:bg-[#1C2D3A] hover:w-full rounded-lg hover:p-2 duration-200">
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
            <Link className="hidden group-hover:block ml-2 hover:underline duration-100" href="/contato">
              Contato
            </Link>
          </li>
        </ul>
      </div>
      <div className="mt-50 flex">
        <FontAwesomeIcon icon={faEarthAmericas} size="lg" />
        <p className="hidden group-hover:block ml-2  rounded-lg whitespace-nowrap cursor-pointer " >Trocar Idioma</p>
      </div>
    </div>
  );
}
