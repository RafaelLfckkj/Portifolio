import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"


interface CardSkillProps {
  titulo: string
  habilidades: IconDefinition[]
}

export default function CardSkill({ titulo, habilidades }: CardSkillProps) {
  return (
    <div className="bg-[#061825] rounded-2xl p-6 w-70 h-50  flex flex-col items-center gap-6 border border-[#1b2c3d]">
      <h3 className="text-[#7ED8BF] text-xl font-semibold">{titulo}</h3>

      <div className="grid grid-cols-4 gap-4">
        {habilidades.map((icone, index) => (
          <FontAwesomeIcon
            key={index}
            icon={icone}
            className="text-4xl"
        />
        ))}
      </div>
    </div>
  )
}