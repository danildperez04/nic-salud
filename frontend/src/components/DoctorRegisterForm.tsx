import TextField from "@mui/material/TextField";
import { useState } from "react";

export function DoctorRegisterForm() {
  const [hospitalCode, setHospitalCode] = useState("");
  const [specialty, setSpecialty] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <TextField
        type="text"
        placeholder="Código del hospital"
        value={hospitalCode}
        onChange={(e) => setHospitalCode(e.target.value)}
        className="border p-2 w-full"
      />
      <TextField
        type="text"
        placeholder="Especialidad"
        value={specialty}
        onChange={(e) => setSpecialty(e.target.value)}
        className="border p-2 w-full"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">
        Guardar
      </button>
    </form>
  );
}