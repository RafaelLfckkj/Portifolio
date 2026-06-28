interface CardProjetoProps {
  titulo: string;
  texto: string;
  habilidades: string[];
}

// import Image from "next/image"

export default function CardProjeto({
  titulo,
  texto,
  habilidades,
}: CardProjetoProps) {
  return (
    <div className="w-full max-w-87.5 p-6 h-110 rounded-3xl border border-white bg-[#222A3D] cursor-pointer">
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
    </div>
  );
}
