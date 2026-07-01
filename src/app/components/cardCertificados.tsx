interface CardCertificadosProps {
  titulo: string;
  habilidades: string;
}

export default function CardCertificados({
  titulo,
  habilidades,
}: CardCertificadosProps) {
  return (
    <div className="bg-[#222A3D] w-full sm:w-60 xl:w-70 p-4 rounded-xl">
      <h1 className="text-[#7ED8BF] font-bold text-md xl:text-lg">{titulo}</h1>
      <p className="text-[#9B9C9C] text-sm font-bold">{habilidades}</p>
    </div>
  );
}