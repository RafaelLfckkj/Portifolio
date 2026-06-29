import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface Skill {
  icone: IconDefinition;
  nome: string;
}

interface CardSkillProps {
  titulo: string;
  habilidades: Skill[];
}

export default function CardSkill({ titulo, habilidades }: CardSkillProps) {
  return (
    <div className="bg-[#061825] rounded-2xl p-6 xl:w-70 lg:w-60 h-50 flex flex-col items-center gap-6 border border-[#1b2c3d]">
      <h3 className="text-[#7ED8BF] text-xl font-semibold">{titulo}</h3>

      <div className="grid grid-cols-4 gap-5">
        {habilidades.map((skill, index) => (
          <div key={index} className="relative group flex justify-center">
            <FontAwesomeIcon
              icon={skill.icone}
              className="text-4xl hover:text-[40px] duration-200"
            />

            <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-white bg-[#1b2c3d] px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
              {skill.nome}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
