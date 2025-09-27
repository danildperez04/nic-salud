import { useState } from "react";

export default function RegisterPatientForm() {
  const [patientData, usePatientData] = useState({
    dni: '',
    fullname: '',
    phoneNumber: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault();


  }

  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-medium">Cedula</label>
        <input type="text" className="mt-1 w-full border rounded-md px-3 py-2 text-sm" />
      </div>
      <div>
        <label className="block text-sm font-medium">Nombre completo</label>
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
  )
}
