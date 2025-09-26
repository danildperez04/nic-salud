import React from "react";
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

  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-16 text-center bg-gray-50">
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
    </>
  );
}