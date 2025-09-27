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

export function ServiceSection() {
  return (
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
  )
}