import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Users, UserPlus, CalendarDays } from "lucide-react";
import * as patientService from '@/services/patient';
import { toast } from "react-toastify";

interface Paciente {
  id: number;
  dni: string;
  fullname: string;
  phoneNumber: string;
  birthDate: string;
}

export function HomePatientPage() {
  const [patients, setPatients] = useState<Paciente[]>([]);
  const [loading, setLoading] = useState(true);

  const calculateAge = (birthDate: string) => {
    const today = new Date();
    const birth = new Date(birthDate);

    const age = today.getFullYear() - birth.getFullYear();

    const monthLeft = birth.getMonth() - today.getMonth();

    // If month left > 0 o If in this month the birth has not due yet
    if (monthLeft > 0 || (monthLeft === 0 && birth.getDate() >= today.getDate())) {
      return age - 1
    }

    return age;
  }

  useEffect(() => {
    patientService
      .getAll()
      .then((data) => {
        console.log(data);
        setPatients(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al cargar pacientes:", err);
        toast.error('Error al cargar los pacientes');
        setLoading(false);
      });
  }, []);

  return (
    <div className="space-y-6">
      {/* Título */}
      <h1 className="text-2xl font-bold">Pacientes</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-xl p-4 flex items-center space-x-4">
          <Users className="w-10 h-10 text-blue-600" />
          <div>
            <p className="text-gray-500 text-sm">Total Pacientes</p>
            <p className="text-xl font-semibold">{patients.length}</p>
          </div>
        </div>
        <div className="bg-white shadow rounded-xl p-4 flex items-center space-x-4">
          <UserPlus className="w-10 h-10 text-green-600" />
          <div>
            <p className="text-gray-500 text-sm">Nuevos este mes</p>
            <p className="text-xl font-semibold">{patients.length}</p>
          </div>
        </div>
        <div className="bg-white shadow rounded-xl p-4 flex items-center space-x-4">
          <CalendarDays className="w-10 h-10 text-purple-600" />
          <div>
            <p className="text-gray-500 text-sm">Citas hoy</p>
            <p className="text-xl font-semibold">0</p>
          </div>
        </div>
      </div>

      {/* Lista de pacientes recientes */}
      <div className="bg-white shadow rounded-xl p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Pacientes recientes</h2>
          <Link
            to="/doctor/pacientes/lista"
            className="text-blue-600 hover:underline"
          >
            Ver todos
          </Link>
        </div>

        {loading ? (
          <p>Cargando...</p>
        ) : patients.length === 0 ? (
          <p className="text-gray-500">No hay pacientes registrados aún.</p>
        ) : (
          <ul className="divide-y">
            {patients.map((p) => (
              <li key={p.id} className="py-3 flex justify-between">
                <div>
                  <p className="font-medium">{p.fullname}</p>
                  <p className="text-sm text-gray-500">
                    {calculateAge(p.birthDate)} años - {p.phoneNumber}
                  </p>
                </div>
                <Link
                  to={`/doctor/patients/edit`}
                  className="text-blue-600 hover:underline"
                  state={{ patientId: p.id }}
                >
                  Editar
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Botón de acción */}
      <div className="text-right">
        <Link
          to="/doctor/patients/add"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Registrar nuevo paciente
        </Link>
      </div>
    </div >
  );
}
