import { LoginForm } from "@/components/auth/LoginForm";
import { Link } from "react-router";

export function LoginPage() {
  return (
    <div className="w-full max-w-md bg-white/70 backdrop-blur-lg rounded-2xl shadow-2xl p-8 relative z-10 border border-white/30">
      <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
        Iniciar Sesión
      </h1>
      <LoginForm />
      <p className="mt-4 text-sm text-center text-gray-600">
        ¿No tienes cuenta?{" "}
        <Link to="/register" className="text-blue-600 hover:underline">
          Regístrate aquí
        </Link>
      </p>
    </div>
  );
}
