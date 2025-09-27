import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useState, type ChangeEvent } from "react";

export function RegisterForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"paciente" | "doctor" | "admin">("paciente");
  const [tempStore, setTempStore] = useState({});

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleRoleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRole(event.target.value as "paciente" | "doctor" | "admin");
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, username, password }),
      });

      if (!res.ok) {
        throw new Error("Error en la respuesta del servidor");
      }

      const data = await res.json();
      console.log(data);
      setTempStore(data);
    } catch (error) {
      console.error("Error de red:", error);
      // Manejo del error (mostrar mensaje al usuario)
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
      <div>
        <TextField
          label="Rol"
          variant="outlined"
          fullWidth
          className="mb-4px"
          select
          value={role}
          onChange={handleRoleChange}
        >
          <MenuItem value="paciente">Paciente</MenuItem>
          <MenuItem value="doctor">Doctor</MenuItem>
          <MenuItem value="admin">Administrador</MenuItem>
        </TextField>
      </div>

      <Button variant="contained" type="submit" fullWidth size="large">
        Crear Cuenta
      </Button>

      <p>{JSON.stringify(tempStore, null, 2)}</p>
    </form>
  );
}
