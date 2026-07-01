import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { IconType } from "react-icons";

interface Skill {
  icone: IconDefinition | IconType;
  nome: string;
  tipo?: "fa" | "ri"; 
}

interface CardSkillExProps {
  titulo: string;
  habilidades: Skill[];
}

export default function CardSkillEx({ titulo, habilidades }: CardSkillExProps) {
  return (
    <div className="bg-[#061825] rounded-2xl p-6 xl:w-70 lg:w-60 h-50 flex flex-col items-center gap-6 border border-[#1b2c3d] md:w-80  w-60">
      <h3 className="text-[#7ED8BF] text-xl font-semibold">{titulo}</h3>

      <div className="grid grid-cols-4 gap-5">
        {habilidades.map((skill, index) => {
          const Icone = skill.icone as IconType;

          return (
            <div key={index} className="relative group flex justify-center">
              {skill.tipo === "ri" ? (
                <Icone className="text-4xl hover:text-[40px] duration-200" />
              ) : (
                <FontAwesomeIcon
                  icon={skill.icone as IconDefinition}
                  className="text-4xl hover:text-[40px] duration-200"
                />
              )}

              <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-white bg-[#1b2c3d] px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                {skill.nome}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
