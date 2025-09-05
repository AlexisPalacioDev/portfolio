import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="section-container">
      <div className="section-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
            💬 Hablemos
          </span>
          <h2 className="modern-heading text-4xl lg:text-5xl text-gray-900 dark:text-white mt-4">
            Contacto
          </h2>
          <p className="modern-body text-xl max-w-3xl mx-auto">
            ¿Tienes un proyecto en mente? ¡Construyámoslo juntos!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="modern-card"
          >
            <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Envíame un mensaje</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Nombre</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tu nombre" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="tu@email.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Asunto</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="¿En qué puedo ayudarte?" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Mensaje</label>
                <textarea rows={6} className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" placeholder="Cuéntame sobre tu proyecto..."></textarea>
              </div>
              <motion.button type="submit" className="w-full modern-btn-primary" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                Enviar Mensaje
              </motion.button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="modern-card">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Información</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li>📧 alexispalaciodev@gmail.com</li>
                <li>📍 Medellín, Colombia</li>
                <li>🌐 Disponible remoto / híbrido</li>
              </ul>
            </div>
            <div className="modern-card">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Redes</h3>
              <div className="flex gap-3">
                <a href="https://github.com/alexispalaciodev" target="_blank" rel="noopener noreferrer" className="modern-btn-secondary">GitHub</a>
                <a href="https://www.linkedin.com/in/alexispalaciodev" target="_blank" rel="noopener noreferrer" className="modern-btn-secondary">LinkedIn</a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

