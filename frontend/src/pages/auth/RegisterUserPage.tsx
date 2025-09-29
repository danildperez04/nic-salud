import { RegisterForm } from "@/components/auth/RegisterForm";
import { Link } from "react-router";

export function RegisterUserPage() {
  return (
    <div className="w-full max-w-md bg-white/70 backdrop-blur-lg rounded-2xl shadow-2xl p-8 relative z-10 border border-white/30">
      <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
        Registro de Usuario
      </h1>
      <RegisterForm />
      <p className="mt-4 text-sm text-center text-gray-600">
        ¿Ya tienes cuenta?{" "}
        <Link to="/login" className="text-blue-600 hover:underline">
          Inicia sesion aquí
        </Link>
      </p>
    </div>
  );
}
