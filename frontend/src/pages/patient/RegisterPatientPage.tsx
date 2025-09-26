// import { Input } from "../components/Input";

export function RegisterPatientPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-lg bg-white rounded-lg shadow p-8">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Registro de Paciente
        </h1>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Nombre</label>
            <input type="text" className="mt-1 w-full border rounded-md px-3 py-2 text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium">Apellido</label>
            <input type="text" className="mt-1 w-full border rounded-md px-3 py-2 text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium">Teléfono</label>
            <input type="tel" className="mt-1 w-full border rounded-md px-3 py-2 text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium">Fecha de nacimiento</label>
            <input type="date" className="mt-1 w-full border rounded-md px-3 py-2 text-sm" />
          </div>
          <div className="md:col-span-2">
            <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-md hover:opacity-95">
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
