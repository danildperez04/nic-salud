import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState, type ChangeEvent } from "react";
import * as authService from '@/services/auth';
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { useToken } from "@/hooks/useToken";

export function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setTokenStorage } = useToken();

  const navigate = useNavigate();

  const usernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const passwordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const data = await authService.login({ username, password });

      setTokenStorage(data.token);

      // TODO: Validate Rol and navigate
      navigate('/doctor');
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error(error);
        toast.error('Ha ocurrido un error al iniciar sesion');
      }
    }

  };

  return (
    <>
      <form className="space-y-4">
        <div>
          <TextField
            id="outlined-basic"
            label="Nombre de Usuario"
            variant="outlined"
            fullWidth
            type="text"
            value={username}
            onChange={usernameChange}
            required
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            fullWidth
            type="password"
            value={password}
            onChange={passwordChange}
            required
          />
        </div>
        <div className="flex items-center justify-center">
          <Button
            className="w-md"
            variant="contained"
            type="submit"
            onClick={handleLogin}
          >
            Iniciar sesion
          </Button>
        </div>
      </form>
    </>
  );
}
