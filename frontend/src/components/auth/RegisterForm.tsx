import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState, type ChangeEvent } from "react";
import { toast } from 'react-toastify';
import * as authService from '@/services/auth';
import { AxiosError } from "axios";

//TODO: Only the admin can create user(doctor)

export function RegisterForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const data = authService.register({ username, email, password });
      console.log(data);
      toast.success('Usuario creado correctamente');
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        console.error(error);
        toast.error('Ha ocurrido un error');
      }
    }
  };

  return (
    <form className="space-y-2" onSubmit={handleSubmit}>
      <div>
        <TextField
          label="Nombre de Usuario"
          variant="outlined"
          fullWidth
          value={username}
          onChange={handleUsernameChange}
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
          value={email}
          onChange={handleEmailChange}
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
          value={password}
          className="mb-4"
          onChange={handlePasswordChange}
          required
        />
      </div>
      <Button variant="contained" type="submit" fullWidth size="large">
        Crear Cuenta
      </Button>
    </form>
  );
}
