"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"

interface ModalCurriculoProps {
  isOpen: boolean
  onClose: () => void
}

export default function ModalCurriculo({ isOpen, onClose }: ModalCurriculoProps) {
  if (!isOpen) return null

  function handleDownload(idioma: "pt" | "en") {
    const arquivo = idioma === "pt" ? "/curriculo-pt.pdf" : "/curriculo-en.pdf"

    const link = document.createElement("a")
    link.href = arquivo
    link.download = idioma === "pt" ? "Curriculo-Rafael-PT.pdf" : "Curriculo-Rafael-EN.pdf"
    link.click()

    onClose()
  }

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-[#0c1622] w-80 rounded-2xl border border-[#1b2c3d] p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-400 cursor-pointer"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>

        <h2 className="text-white font-bold text-lg mb-6">Baixar Curriculo</h2>

        <div className="flex flex-col gap-4">
          <button
            onClick={() => handleDownload("pt")}
            className="bg-[#183153] text-white py-3 rounded-md font-semibold hover:bg-[#132641] duration-200 cursor-pointer"
          >
            Português
          </button>

          <button
            onClick={() => handleDownload("en")}
            className="bg-[#183153] text-white py-3 rounded-md font-semibold hover:bg-[#132641] duration-200 cursor-pointer"
          >
            Inglês
          </button>
        </div>
      </div>
    </div>
  )
}