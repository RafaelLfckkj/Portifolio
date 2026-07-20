interface CardProjetoProps {
  titulo: string;
  texto: string;
  habilidades: string[];
  repositorio: string;
  visualizar?: string;
  imagem: string;
  categoriaFiltro: string;
  filtroAtivo: string;
  buscaAtiva: string;
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";

import Link from "next/link";

export default function CardProjeto({
  titulo,
  texto,
  habilidades,
  repositorio,
  visualizar,
  imagem,
  categoriaFiltro,
  filtroAtivo,
  buscaAtiva,
}: CardProjetoProps) {
  const combinaCategoria =
    filtroAtivo === "Todos" || filtroAtivo === categoriaFiltro;
  const combinaBusca = titulo.toLowerCase().includes(buscaAtiva.toLowerCase());

  if (!combinaCategoria || !combinaBusca) {
    return null;
  }

  return (
    <div className="w-full max-w-90 p-6 min-h-120 rounded-3xl border border-white bg-[#222A3D] mx-auto">
      <p className="text-center font-bold mb-3">{titulo}</p>
      <p className="text-left mb-5">{texto}</p>

      <div className="grid grid-cols-3 flex-wrap gap-2">
        {habilidades.map((habilidade, index) => (
          <span
            key={index}
            className="
              bg-[#7ED8BF]
              text-[#1D2A39]
              
              py-1
              rounded-sm
              text-sm
              font-medium
              text-center
            "
          >
            {habilidade}
          </span>
        ))}
      </div>

      <div className=" mt-7 h-43.5 rounded-2xl">
        <Image
          src={imagem}
          alt={`Imagem do projeto ${titulo}`}
          width={400}
          height={400}
          className="w-full h-full object-cover rounded-md border border-white"
        />
      </div>

      <div className="flex justify-center gap-7 mt-5 font-bold">
        <Link
          href={repositorio}
          className="bg-[#66b09b] w-fit p-1 rounded hover:bg-[#538e7d] duration-150 text-center"
        >
          Repositório
          <FontAwesomeIcon icon={faGithub} className="ml-2" />
        </Link>
        {visualizar && (
          <Link
            href={visualizar}
            className="bg-[#66b09b] w-fit p-1 px-2 rounded hover:bg-[#538e7d] duration-150 text-center "
          >
            Visualizar
            <FontAwesomeIcon icon={faPlay} className="ml-2" />
          </Link>
        )}
      </div>
    </div>
  );
}
