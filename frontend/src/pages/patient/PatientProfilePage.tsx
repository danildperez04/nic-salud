export function PatientProfilePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Mi Perfil</h1>

      <div className="bg-white shadow rounded-lg p-6 space-y-4">
        <div>
          <h2 className="text-lg font-semibold">Información Personal</h2>
          <p><strong>Nombre:</strong> Juan Pérez</p>
          <p><strong>Correo:</strong> juan@example.com</p>
          <p><strong>Teléfono:</strong> +505 8888 8888</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Historial Médico</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Consulta General — Enero 2025</li>
            <li>Examen de laboratorio — Febrero 2025</li>
          </ul>
        </div>

        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:opacity-95">
          Editar perfil
        </button>
      </div>
    </div>
  );
}