import { CreatePatientForm } from "@/components/CreatePatientForm";

export function CreatePatientPage() {

  return (
    <div className="w-full max-w-md bg-white/70 backdrop-blur-lg rounded-2xl shadow-2xl p-8 relative z-10 border border-white/30">
      <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
        Registro de Paciente
      </h1>
      <CreatePatientForm />
    </div>
  )
}
