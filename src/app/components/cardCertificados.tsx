interface CardCertificadosProps {
  titulo: string;
  habilidades: string;
}

export default function CardCertificados({
  titulo,
  habilidades,
}: CardCertificadosProps) {
  return (
    <div>
      <div className="bg-[#222A3D] xl:w-70 p-4 rounded-xl pr-23 lg:w-60">
        <h1 className="text-[#7ED8BF] font-bold text-md xl:text-lg w-60">{titulo}</h1>
        <p className="text-[#9B9C9C] text-sm font-bold w-80">{habilidades}</p>
      </div>
    </div>
  );
}
