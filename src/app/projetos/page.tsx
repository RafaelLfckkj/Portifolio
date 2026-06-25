import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import CardProjeto from "../components/cardProjeto";

export default function Projetos() {
  return (
    <div className="mb-50">
      {/* Textos */}
      <div className="text-center mt-20">
        <h1 className="text-[#7ED8BF] text-5xl font-bold">Meus Projetos</h1>

        <h2 className="text-2xl font-bold">
          Aqui estão alguns dos meus projetos !
        </h2>
      </div>

      {/* Filtração dos projetos */}
      <div className="flex gap-100 justify-center items-center mt-13">
        <div className="mr-50 w-82.5">
          <div className="relative">
            <input
              type="text"
              placeholder="Pesquisar Projeto..."
              className="w-full bg-[#222630] border border-gray-400 rounded-xl py-3  pl-4  pr-14 text-white placeholder:text-gray-400 outline-none "
            />

            <div className="absolute right-3  top-1/2  -translate-y-1/2 w-10 h-10 bg-[#7ED8BF] rounded-full flex items-center justify-center cursor-pointer">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-white"
              />
            </div>
          </div>
        </div>

        <div className="">
          <select className="border bg-[#222630] p-4 rounded-lg font-bold">
            <option value="br">Todos</option>
            <option value="br">Front-End</option>
            <option value="us">Back-End</option>
            <option value="pt">Full-Stack</option>
            <option value="pt">Mobile</option>
          </select>
        </div>
      </div>


    {/* Card dos Projetos  */}
      <div className="max-w-[1100px] mx-auto mt-16">
        <div
          className="
      grid
      grid-cols-1
      md:grid-cols-2
      xl:grid-cols-3
      gap-7
      place-items-center
    "
        >
          <CardProjeto
            titulo="Portifolio"
            texto="Portfólio pessoal para apresentar meus projetos e habilidades"
            habilidades={["Next.js", "TailwindCSS", "TypeScript", "Front-End"]}
          />
          <CardProjeto
            titulo="Portifolio"
            texto="Portfólio pessoal para apresentar meus projetos e habilidades"
            habilidades={["Next.js", "TailwindCSS", "TypeScript", "Front-End"]}
          />
          <CardProjeto
            titulo="Portifolio"
            texto="Portfólio pessoal para apresentar meus projetos e habilidades"
            habilidades={["Next.js", "TailwindCSS", "TypeScript", "Front-End"]}
          />
          <CardProjeto
            titulo="Portifolio"
            texto="Portfólio pessoal para apresentar meus projetos e habilidades"
            habilidades={["Next.js", "TailwindCSS", "TypeScript", "Front-End"]}
          />
        </div>
      </div>
    </div>
  );
}
