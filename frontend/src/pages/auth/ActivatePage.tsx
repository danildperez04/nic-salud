import { PatientActivateForm } from '@/components/PatientActivateForm';

export function ActivatePage() {

  return (
    <div className="w-full max-w-md bg-white/70 backdrop-blur-lg rounded-2xl shadow-2xl p-8 relative z-10 border border-white/30">
      <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">Activar cuenta</h1>
      <PatientActivateForm />
    </div>
  );
}
