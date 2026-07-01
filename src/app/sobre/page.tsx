import {
  faHtml5,
  faCss3,
  faReact,
  faNodeJs,
  faGitAlt,
  faJs,
  faTailwindCss,
  faAngular,
  faTypescript,
  faPython,
  faJava,
  faGithub,
  faWindows,
  faTrello,
  faFigma,
  faGoogleDrive,
  faOpera,
} from "@fortawesome/free-brands-svg-icons";

import { SiNextdotjs } from "react-icons/si";

import { GitHubCalendar } from "react-github-calendar";

import CardSkill from "../components/cardSkill";
import CardSkillEx from "../components/cardSkillEx";
import { faDatabase, faTerminal } from "@fortawesome/free-solid-svg-icons";

import CardCertificados from "../components/cardCertificados";

export default function Sobre() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 mt-20 mb-20 w-full">
      {/* ------------------ */}

      {/* textos sobre mim */}
      <div className="sm:flex justify-center sm:items-center xl:w-240 xl:gap-32 lg:w-230 grid text-center sm:text-left">
        {/* titulos */}
        <div className="w-100 xl:m-0 lg:ml-22">
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
          <p className="xl:w-125 text-sm leading-relaxed text-justify lg:w-90 md:w-80">
            Tenho 18 anos, sou estudante de Ciência da Computação{" "}
            <span className="text-[#7ED8BF]">(2/8)</span> e formado em TI pelo{" "}
            <span className="text-[#7ED8BF]">UNASP</span>. Estou me
            especializando em Java, Next.js e TypeScript, com o objetivo de
            atuar como desenvolvedor{" "}
            <span className="text-[#7ED8BF]">Backend ou Full-Stack. </span>
            <br />
            <br />
            <span className="text-[#7ED8BF]">Sou apaixonado</span> por
            tecnologia, animes e jogos, e estou sempre buscando expandir meus
            horizontes estudo{" "}
            <span className="text-[#7ED8BF]">inglês e espanhol</span> para me
            preparar para oportunidades{" "}
            <span className="text-[#7ED8BF]">globais</span>, e estou aberto a
            oportunidades
            <span className="text-[#7ED8BF]"> internacionais.</span> <br />{" "}
            <br />
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

      {/* ------------------ */}

      <div className="mt-10 w-full sm:w-fit ">
        <h1 className="text-center text-3xl font-bold">Habilidades</h1>

        <div className="flex md:grid lg:flex gap-2 md:gap-5 justify-center sm:items-center xl:gap-6 lg:gap-4 mt-10 sm:grid-cols-1 md:grid-cols-3 grid-cols-4 ">
          <CardSkillEx
            titulo="Front-End"
            habilidades={[
              { icone: faHtml5, nome: "HTML5" },
              { icone: faCss3, nome: "CSS3" },
              { icone: faJs, nome: "JavaScript" },
              { icone: faReact, nome: "React" },
              { icone: faTailwindCss, nome: "Tailwind CSS" },
              { icone: faAngular, nome: "Angular" },
              { icone: faTypescript, nome: "TypeScript" },
              { icone: SiNextdotjs, nome: "Next.js", tipo: "ri" },
            ]}
          />
          <CardSkill
            titulo="Back-End"
            habilidades={[
              { icone: faJava, nome: "Java" },
              { icone: faPython, nome: "Python" },
              { icone: faNodeJs, nome: "Node.js" },
              { icone: faDatabase, nome: "SQL, MySql" },
            ]}
          />
          <CardSkill
            titulo="Outros"
            habilidades={[
              { icone: faGitAlt, nome: "Git" },
              { icone: faGithub, nome: "GitHub" },
              { icone: faWindows, nome: "Windows " },
              { icone: faTrello, nome: "Trello" },
              { icone: faFigma, nome: "Figma" },
              { icone: faGoogleDrive, nome: "Google Drive" },
              { icone: faTerminal, nome: "Terminal" },
              { icone: faOpera, nome: "Opera" },
            ]}
          />
        </div>

        <div className="mt-10 bg-[#061825] rounded-2xl w-fit p-6 lg:p-6 xl:ml-0 lg:ml-35 md:p-4">
          <h1 className="text-center text-3xl font-bold text-[#7ED8BF] mb-5 lg:m-0 md:ml-20">
            Certificados
          </h1>
 
          <div className="grid sm:grid-cols-3 justify-center items-center lg:gap-4 xl:gap-4 md:gap-2 lg:ml-0 lg:mt-5 md:ml-35 gap-2">
            <CardCertificados
              titulo="Udemy"
              habilidades="Java POO COMPLETO do zero"
            />
            <CardCertificados titulo="Udemy" habilidades="Banco de Dados SQL" />
            <CardCertificados
              titulo="Santander Academy"
              habilidades="BootCamp - em andamento"
            />
            <CardCertificados
              titulo="Udemy"
              habilidades="Next.js COMPLETO do zero"
            />
            <CardCertificados
              titulo="Udmey"
              habilidades="Angular 19 COMPLETO do zero"
            />
            <CardCertificados
              titulo="Udemy"
              habilidades="HTML, CSS, JavaScript"
            />
            <CardCertificados
              titulo="Rocketseat"
              habilidades="MiniCurso de Java"
            />
            <CardCertificados
              titulo="Rocketseat"
              habilidades="Next.js App Router e Testes"
            />
            <CardCertificados
              titulo="Rocketseat"
              habilidades="Angular Curso Introdutorio"
            />
          </div>
        </div>

        <div className="mt-25 w-fit">
          <h1 className="text-center font-bold text-6xl">
            Minhas <br />
            <span className="text-[#7ED8BF]">CONTRIBUIÇÕES</span>
          </h1>

          <div className="mt-10 mb-25 ml-10 lg:scale-80 xl:scale-110 scale-75 lg:ml-40 xl:-ml-10 origin-left md:ml-40">
            <GitHubCalendar
              username="rafaellfckkj"
              colorScheme="light"
              className="mt-10 mb-25 ml-10 "
            />
          </div>
        </div>
      </div>
    </div>
  );
}