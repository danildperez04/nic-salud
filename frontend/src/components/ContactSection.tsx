export function ContactSection() {
  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-6 py-12 text-center text-gray-700"
    >
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">Contacto</h1>

        <form className="bg-white shadow rounded-lg p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium">Nombre</label>
            <input type="text" className="mt-1 w-full border rounded-md px-3 py-2 text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium">Correo electrónico</label>
            <input type="email" className="mt-1 w-full border rounded-md px-3 py-2 text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium">Mensaje</label>
            <textarea className="mt-1 w-full border rounded-md px-3 py-2 text-sm" rows={4}></textarea>
          </div>
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:opacity-95">
            Enviar
          </button>
        </form>
      </div>
    </section>
  )
}