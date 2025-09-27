import { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { toast } from 'react-toastify';

type PatientForm = {
  dni: string;
  fullname: string;
  phoneNumber: string;
  birthDate?: string;
};

export default function RegisterPatientForm() {
  const [loading, setLoading] = useState(false);
  const [patientData, setPatientData] = useState<PatientForm>({
    dni: '',
    fullname: '',
    phoneNumber: '',
    birthDate: undefined,
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setPatientData((s) => ({ ...s, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Basic validation
    if (!patientData.dni || !patientData.fullname) {
      toast.error('Por favor completa los campos obligatorios');
      return;
    }

    setLoading(true);

    try {
      const base = import.meta.env.VITE_API_URL;
      const token = localStorage.getItem('token') || undefined;

      const res = await axios.post(
        `${base}/patients`,
        patientData,
        {
          headers: {
            'Content-Type': 'application/json',
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
        }
      );

      if (res.status >= 200 && res.status < 300) {
        toast.success('Paciente creado correctamente');
        setPatientData({ dni: '', fullname: '', phoneNumber: '', birthDate: undefined });
      } else {
        toast.error(res.statusText || 'Error al crear paciente');
      }

    } catch (error: unknown) {
      let msg = 'Error de red';
      if (axios.isAxiosError(error)) {
        msg = error.response?.data?.message ?? error.message ?? msg;
      } else if (error instanceof Error) {
        msg = error.message;
      }
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
      <div>
        <TextField
          label="Cédula"
          name="dni"
          value={patientData.dni}
          onChange={handleChange}
          fullWidth
          required
        />
      </div>
      <div>
        <TextField
          label="Nombre completo"
          name="fullname"
          value={patientData.fullname}
          onChange={handleChange}
          fullWidth
          required
        />
      </div>
      <div>
        <TextField
          label="Teléfono"
          name="phoneNumber"
          value={patientData.phoneNumber}
          onChange={handleChange}
          fullWidth
        />
      </div>
      <div>
        <TextField
          label="Fecha de nacimiento"
          name="birthDate"
          value={patientData.birthDate ?? ''}
          onChange={handleChange}
          type="date"
          InputLabelProps={{ shrink: true }}
          fullWidth
        />
      </div>
      <div className="md:col-span-2">
        <Button type="submit" variant="contained" color="primary" fullWidth disabled={loading}>
          {loading ? 'Enviando...' : 'Registrarse'}
        </Button>
      </div>
    </form>
  );
}
