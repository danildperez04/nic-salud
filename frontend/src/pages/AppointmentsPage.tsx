export function AppointmentsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Citas Médicas</h1>

      {/* Formulario para agendar */}
      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Agendar nueva cita</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Especialidad</label>
            <select className="mt-1 w-full border rounded-md px-3 py-2 text-sm">
              <option>Medicina General</option>
              <option>Pediatría</option>
              <option>Ginecología</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Fecha</label>
            <input type="date" className="mt-1 w-full border rounded-md px-3 py-2 text-sm" />
          </div>
          <div className="md:col-span-2">
            <button type="submit" className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:opacity-95">
              Agendar
            </button>
          </div>
        </form>
      </div>

      {/* Lista de citas */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Mis citas</h2>
        <ul className="divide-y">
          <li className="py-3 flex justify-between">
            <span>Medicina General — 10/10/2025</span>
            <button className="text-sm text-red-600 hover:underline">Cancelar</button>
          </li>
          <li className="py-3 flex justify-between">
            <span>Pediatría — 15/10/2025</span>
            <button className="text-sm text-red-600 hover:underline">Cancelar</button>
          </li>
        </ul>
      </div>
    </div>
  );
}