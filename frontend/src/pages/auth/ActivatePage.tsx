import { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router';
import axios, { AxiosError } from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { toast } from 'react-toastify';

export function ActivatePage() {
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
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Activar cuenta</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <TextField label="Usuario" name="username" value={form.username} onChange={handleChange} fullWidth />
        <TextField label="Email" name="email" value={form.email} onChange={handleChange} fullWidth />
        <TextField label="Contraseña" name="password" value={form.password} onChange={handleChange} type="password" fullWidth />
        <Button type="submit" variant="contained" disabled={loading}>{loading ? 'Activando...' : 'Activar cuenta'}</Button>
      </form>
    </div>
  );
}
