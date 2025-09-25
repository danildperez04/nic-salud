import React, { useState } from "react";
import { IconCalendar, IconHeart, IconUsers } from "./Icons";

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
};



function ServiceCard({ icon, title, children }: ServiceCardProps) {
  return (
    <div className="rounded-lg border p-6 text-center shadow-sm bg-white">
      <div className="mb-4">{icon}</div>
      <h4 className="text-lg font-semibold mb-2 text-gray-800">{title}</h4>
      <p className="text-sm text-gray-600">{children}</p>
    </div>
  );
}

export function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-32 flex items-center justify-center text-white font-bold">
              <img src="logo.png" alt="Logo" />
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Inicio
            </a>
            <a href="#services" className="text-gray-600 hover:text-gray-900">
              Servicios
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">
              Contacto
            </a>
            <a
              href="/login"
              className="px-4 py-2 rounded-md bg-blue-600 text-white hover:opacity-95"
            >
              Iniciar sesión
            </a>
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
        {mobileOpen && (
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
        )}
      </header>

      {/* Hero */}
      <main className="flex-1">
        <section className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Bienvenido a <span className="text-blue-600">Nic-Salud</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Plataforma para registro de pacientes, programación de citas y
            gestión hospitalaria en Nicaragua.
          </p>

          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="px-6 py-3 rounded-md bg-blue-600 text-white shadow-sm"
            >
              Registrarse
            </a>
            <a
              href="#services"
              className="px-6 py-3 rounded-md border border-gray-200 text-gray-700"
            >
              Saber más
            </a>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
              Nuestros servicios
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <ServiceCard icon={<IconHeart />} title="Atención médica">
                Registro y acceso al historial clínico para un seguimiento
                completo del paciente.
              </ServiceCard>

              <ServiceCard icon={<IconCalendar />} title="Citas médicas">
                Agenda y seguimiento de citas, con recordatorios y reprogramación
                sencilla.
              </ServiceCard>

              <ServiceCard icon={<IconUsers />} title="Gestión hospitalaria">
                Herramientas para optimizar flujo, recursos y coordinación
                interna.
              </ServiceCard>
            </div>
          </div>
        </section>

        {/* Contact / Info */}
        <section
          id="contact"
          className="max-w-7xl mx-auto px-6 py-12 text-center text-gray-700"
        >
          <div className="max-w-4xl mx-auto px-6 py-12">
            <h1 className="text-3xl font-bold text-blue-600 mb-6">Contacto</h1>

            <form className="bg-white shadow rounded-lg p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium">Nombre</label>
                <input type="text" className="mt-1 w-full border rounded-md px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium">Correo electrónico</label>
                <input type="email" className="mt-1 w-full border rounded-md px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium">Mensaje</label>
                <textarea className="mt-1 w-full border rounded-md px-3 py-2 text-sm" rows={4}></textarea>
              </div>
              <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:opacity-95">
                Enviar
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 text-center text-gray-600">
        <div className="max-w-7xl mx-auto px-6">
          <p>
            © {new Date().getFullYear()} Nic-Salud · Todos los derechos
            reservados
          </p>
        </div>
      </footer>
    </div>
  );
}