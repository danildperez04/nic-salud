import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import axios, { AxiosError } from 'axios';
import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router';
import { toast } from 'react-toastify';

export function PatientActivateForm() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token') ?? '';
  const navigate = useNavigate();

  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!token) return toast.error('Token de invitación faltante');
    if (!form.username || !form.email || !form.password) return toast.error('Completa todos los campos');

    setLoading(true);
    try {
      const base = import.meta.env.VITE_API_URL;
      const res = await axios.post(`${base}/auth/activate`, { token, ...form });
      const { token: jwt } = res.data;
      localStorage.setItem('token', jwt);
      toast.success('Cuenta activada');
      navigate('/');
    } catch (err: unknown) {
      if (err instanceof AxiosError)
        toast.error(err?.response?.data?.message ?? 'Error al activar cuenta');

    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="space-y-2" onSubmit={handleSubmit}>
      <div>
        <TextField
          label="Nombre de Usuario"
          variant="outlined"
          fullWidth
          value={form.username}
          onChange={handleChange}
          className="mb-2px"
          required
        />
      </div>
      <div>
        <TextField
          label="Correo Electrónico"
          variant="outlined"
          fullWidth
          type="email"
          value={form.email}
          onChange={handleChange}
          className="mb-4"
          required
        />
      </div>
      <div>
        <TextField
          label="Contraseña"
          variant="outlined"
          fullWidth
          type="password"
          value={form.password}
          className="mb-4"
          onChange={handleChange}
          required
        />
      </div>

      <Button variant="contained" type="submit" fullWidth size="large">
        Activar Cuenta
      </Button>
      {loading && <span>Cargando...</span>}
    </form>
  )
}
