import { LoginForm } from "@/components/LoginForm";

export function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 animate-gradient-x px-4 relative overflow-hidden">
      <div className="w-full max-w-md bg-white/70 backdrop-blur-lg rounded-2xl shadow-2xl p-8 relative z-10 border border-white/30">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Iniciar Sesión
        </h1>
        <LoginForm />
        <p className="mt-4 text-sm text-center text-gray-600">
          ¿No tienes cuenta?{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            Regístrate aquí
          </a>
        </p>
      </div>
    </div>
  );
}
