import { useState } from 'react'
import { motion } from 'framer-motion'
import SuccessModal from './SuccessModal'

export default function ContactModal({ onClose }) {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setTimeout(() => setSent(true), 1000)
  }

  if (sent) return <SuccessModal onClose={onClose} />

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[100]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-neutral-900 p-8 rounded-2xl shadow-xl w-full max-w-md border border-white/10"
      >
        <h2 className="text-xl font-bold text-white mb-4">Contáctanos</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Nombre"
            required
            className="bg-neutral-800 text-white px-4 py-2 rounded-md outline-none border border-transparent focus:border-cyan-400"
          />
          <input
            type="email"
            placeholder="Tu correo"
            required
            className="bg-neutral-800 text-white px-4 py-2 rounded-md outline-none border border-transparent focus:border-cyan-400"
          />
          <textarea
            placeholder="Escribe tu mensaje..."
            rows={4}
            required
            className="bg-neutral-800 text-white px-4 py-2 rounded-md outline-none border border-transparent focus:border-cyan-400"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-cyan-400 to-blue-500 py-2 rounded-md font-semibold text-black hover:opacity-90 transition"
          >
            Enviar mensaje
          </button>
          <button
            type="button"
            onClick={onClose}
            className="text-sm text-gray-400 hover:underline mt-2 text-center"
          >
            Cancelar
          </button>
        </form>
      </motion.div>
    </div>
  )
}
