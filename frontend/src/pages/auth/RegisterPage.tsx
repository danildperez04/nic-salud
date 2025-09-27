import { RegisterForm } from "@/components/RegisterForm";

export function RegisterPage() {
  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h3 className="text-2xl font-bold mb-6 text-center">
          Registro de Usuario
        </h3>
        <RegisterForm />
      </div>
    </section>
  );
}
