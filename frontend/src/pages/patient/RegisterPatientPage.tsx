// import { Input } from "../components/Input";

import RegisterPatientForm from "@/components/RegisterPatientForm";

export function RegisterPatientPage() {


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-lg bg-white rounded-lg shadow p-8">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Registro de Paciente
        </h1>
        <RegisterPatientForm />
      </div>
    </div>
  )
}
