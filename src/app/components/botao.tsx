interface BotaoProps {
  texto: string
  icone: IconDefinition
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { IconDefinition } from "@fortawesome/fontawesome-svg-core"

export default function Botao({texto, icone}: BotaoProps){
    return(
        <div className="flex bg-[#183153] p-3 w-fit rounded-md cursor-pointer text-lg hover:bg-[#132641] duration-200">
            <p className="tracking-[4.5px]">{texto}</p>
            <FontAwesomeIcon icon={icone} className="text-2xl ml-2"/>
        </div>
    )
}