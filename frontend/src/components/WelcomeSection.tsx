import { Link } from "react-router";

export function WelcomeSection() {

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 text-center bg-gray-50">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
        Bienvenido a <span className="text-blue-600">Nic-Salud</span>
      </h1>
      <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
        Plataforma para registro de pacientes, programación de citas y
        gestión hospitalaria en Nicaragua.
      </p>

      <div className="flex justify-center gap-4">
        <Link
          to='/register/activate'
          className="px-6 py-3 rounded-md bg-blue-600 text-white shadow-sm"
        >
          Registrarse
        </Link>
        <a
          href="#services"
          className="px-6 py-3 rounded-md border border-gray-200 text-gray-700"
        >
          Saber más
        </a>
      </div>
    </section>
  );
}