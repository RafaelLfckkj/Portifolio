interface CardProjetoProps {
  titulo: string;
  texto: string;
  habilidades: string[];
  repositorio: string;
  visualizar: string;
}

// import Image from "next/image"

import Link from "next/link";

export default function CardProjeto({
  titulo,
  texto,
  habilidades,
  repositorio,
  visualizar,
}: CardProjetoProps) {
  return (
    <div className="w-full max-w-87.5 p-6 h-120 rounded-3xl border border-white bg-[#222A3D]">
      <p className="text-center font-bold mb-3">{titulo}</p>
      <p className="text-left w-78.25 mb-5">{texto}</p>

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

      <div className="bg-white mt-7 h-43.5 rounded-2xl">
        <p> </p>
      </div>

      <div className="flex justify-center gap-7 mt-5 font-bold">
          <Link href={repositorio} className="bg-[#66b09b] w-fit p-1 rounded hover:bg-[#538e7d] duration-150">Repositório</Link>
          <Link href={visualizar} className="bg-[#66b09b] w-fit p-1 px-2 rounded hover:bg-[#538e7d] duration-150">Visualizar</Link>
      </div>
    </div>
  );
}
