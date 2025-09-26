import { useState } from "react";
import { Link } from "react-router";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm" >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-32 flex items-center justify-center text-white font-bold">
            <img src="logo.png" alt="Logo" />
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-gray-600 hover:text-gray-900">
            Inicio
          </Link>
          <Link to="#services" reloadDocument className="text-gray-600 hover:text-gray-900">
            Servicios
          </Link>
          <Link to="#contact" reloadDocument className="text-gray-600 hover:text-gray-900">
            Contacto
          </Link>
          <Link
            to="/login"
            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:opacity-95"
          >
            Iniciar sesión
          </Link>
        </nav>

        {/* Mobile toggle */}
        <div className="md:hidden">
          <button
            aria-label="Abrir menú"
            onClick={() => setMobileOpen((v) => !v)}
            className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
          >
            {mobileOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {
        mobileOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="px-4 py-3 space-y-2">
              <a href="#" className="block text-gray-700">
                Inicio
              </a>
              <a href="#services" className="block text-gray-700">
                Servicios
              </a>
              <a href="#contact" className="block text-gray-700">
                Contacto
              </a>
              <a
                href="#"
                className="inline-block mt-2 px-4 py-2 rounded-md bg-blue-600 text-white"
              >
                Iniciar sesión
              </a>
            </div>
          </div>
        )
      }
    </header >

  );
}