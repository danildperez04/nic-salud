import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState, type ChangeEvent } from "react";

export function LoginForm() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [tempStore, setTempStore] = useState({});

  const UserChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUser(event.target.value);
  };

  const PasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    setTempStore({ user, password });
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
            value={user}
            onChange={UserChange}
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
            onChange={PasswordChange}
          />
        </div>
        <div className="flex items-center justify-center">
          <Button
            className="w-md"
            variant="contained"
            type="submit"
            onClick={handleLogin}
          >
            Enviar
          </Button>
        </div>
        <p>{JSON.stringify(tempStore, null, 2)}</p>
      </form>
    </>
  );
}
