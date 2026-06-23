export default function Sobre() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 mt-20 mb-20 ">
      {/* textos sobre mim */}
      <div className="flex justify-center items-center w-[960px] gap-32">
        {/* titulos */}
        <div className="w-[400px]">
          <h1 className="text-5xl mb-6 text-[#7ED8BF]">Quem sou eu?</h1>

          <h2 className="text-2xl leading-tight">
            Técnico em T.I
            <span className="text-[#7ED8BF]"> Bacharelado</span> em Ciencia da
            Computação e{" "}
            <span className="text-[#7ED8BF]"> Apaixonado por Tecnologia</span>
          </h2>
        </div>

        {/* textos */}
        <div>
          <p className="w-[500px] text-sm leading-relaxed text-justify">
            Tenho 18 anos, sou estudante de Ciência da Computação{" "}
            <span className="text-[#7ED8BF]">(2/8)</span> e formado em TI pelo{" "}
            <span className="text-[#7ED8BF]">UNASP</span>. Estou me
            especializando em Java, Next.js e TypeScript, com o objetivo de
            atuar como desenvolvedor{" "}
            <span className="text-[#7ED8BF]">Backend ou Full-Stack. </span>
            <br />
            <span className="text-[#7ED8BF]">Sou apaixonado</span> por
            tecnologia, animes e jogos, e estou sempre buscando expandir meus
            horizontes estudo{" "}
            <span className="text-[#7ED8BF]">inglês e espanhol</span> para me
            preparar para oportunidades{" "}
            <span className="text-[#7ED8BF]">globais</span>, e estou aberto a
            oportunidades
            <span className="text-[#7ED8BF]"> internacionais</span> <br />
            Também atuo como <span className="text-[#7ED8BF]">
              voluntário
            </span>{" "}
            na área de <span className="text-[#7ED8BF]">mídia</span> da minha
            igreja, onde desenvolvo proatividade, trabalho em equipe e{" "}
            <span className="text-[#7ED8BF]">responsabilidade</span> no dia a
            dia.
          </p>
        </div>
      </div>

    </div>
  );
}
