import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

type Profile = {
  id: number;
  dni: string;
  fullname: string;
  phoneNumber?: string;
  birthDate?: string;
  gender?: string;
  address?: string;
  municipality?: { id: number; name: string } | null;
};

export function PatientProfilePage() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState<Partial<Profile>>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const base = import.meta.env.VITE_API_URL;
    const token = localStorage.getItem('token');
    if (!base) return;

    (async () => {
      try {
        const res = await axios.get(`${base}/patients/profile`, { headers: { Authorization: token ? `Bearer ${token}` : '' } });
        const data = res.data;
        // normalize birthDate to yyyy-mm-dd
        if (data?.birthDate) data.birthDate = data.birthDate.split('T')[0];
        setProfile(data);
      } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
          toast.error(err?.response?.data?.message ?? 'No se pudo cargar el perfil');
        }
        toast.error('Ha ocurrido un error');
      }
    })();
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  async function save() {
    if (!profile) return;
    setLoading(true);
    try {
      const base = import.meta.env.VITE_API_URL;
      const token = localStorage.getItem('token');
      const payload: any = { ...form };
      if (payload.birthDate === '') delete payload.birthDate;

      const res = await axios.put(`${base}/patients/profile`, payload, { headers: { Authorization: token ? `Bearer ${token}` : '' } });
      setProfile(res.data);
      setEditing(false);
      toast.success('Perfil actualizado');
    } catch (err: any) {
      toast.error(err?.response?.data?.message ?? 'Error al actualizar');
    } finally {
      setLoading(false);
    }
  }

  if (!profile) return <div className="p-8">Cargando perfil...</div>;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Mi Perfil</h1>

      <div className="bg-white shadow rounded-lg p-6 space-y-4">
        <div>
          <h2 className="text-lg font-semibold">Información Personal</h2>
          {!editing ? (
            <div>
              <p><strong>Nombre:</strong> {profile.fullname}</p>
              <p><strong>Cédula:</strong> {profile.dni}</p>
              <p><strong>Teléfono:</strong> {profile.phoneNumber ?? '-'}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <TextField label="Nombre" name="fullname" value={form.fullname ?? profile.fullname} onChange={handleChange} />
              <TextField label="Cédula" name="dni" value={form.dni ?? profile.dni} onChange={handleChange} />
              <TextField label="Teléfono" name="phoneNumber" value={form.phoneNumber ?? profile.phoneNumber} onChange={handleChange} />
              <TextField label="Fecha de nacimiento" name="birthDate" type="date" InputLabelProps={{ shrink: true }} value={form.birthDate ?? profile.birthDate ?? ''} onChange={handleChange} />
            </div>
          )}
        </div>

        <div>
          <h2 className="text-lg font-semibold">Historial Médico</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Historial disponible en la sección de registros clínicos.</li>
          </ul>
        </div>

        <div className="flex gap-2">
          {!editing ? (
            <Button variant="contained" onClick={() => setEditing(true)}>Editar perfil</Button>
          ) : (
            <>
              <Button variant="contained" color="primary" onClick={save} disabled={loading}>{loading ? 'Guardando...' : 'Guardar'}</Button>
              <Button variant="outlined" onClick={() => { setEditing(false); setForm({}); }}>Cancelar</Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}