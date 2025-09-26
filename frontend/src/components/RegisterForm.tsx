import { useState } from "react";

interface FormData {
  username: string;
  email: string;
  password: string;
  role: "paciente" | "doctor" | "admin";
}

export function RegisterForm() {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    password: "",
    role: "paciente",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos de usuario:", formData);
    // TODO: LLAMADA A API
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Correo */}
      <div>
        <label className="block text-sm font-medium mb-1">Nombre de usuario</label>
        <input
          type="text"
          name="text"
          value={formData.username}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
      </div>
      {/* Correo */}
      <div>
        <label className="block text-sm font-medium mb-1">Correo</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
      </div>

      {/* Contraseña */}
      <div>
        <label className="block text-sm font-medium mb-1">Contraseña</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
      </div>

      {/* Rol */}
      {/* <div>
        <label className="block text-sm font-medium mb-1">Rol</label>
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="paciente">Paciente</option>
          <option value="doctor">Doctor</option>
          <option value="admin">Administrador</option>
        </select>
      </div> */}

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg"
      >
        Crear Cuenta
      </button>
    </form>
  );
}
