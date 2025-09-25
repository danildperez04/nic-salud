import { Link } from "react-router";
import { Input } from "./Input";
import { SubmitButton } from "./SubmitButton";

export function LoginForm() {
  return (
    <>
      <form
        className="flex bg-slate-800 rounded-lg shadow-lg w-[900px] h-[500px] overflow-hidden p-0 m-0 border-none" >
        <section className=" w-1/2 flex items-center justify-center">
          <img src='/logo.png' alt="Logo" className="w-full" />
        </section>
        <section className="flex flex-col gap-8 w-1/2 p-8 bg-white">
          <h2 className="text-(--rich-black) font-bold text-5xl text-center">Bienvenido!</h2>
          <div className="w-full flex flex-col gap-4">
            <Input
              id="username"
              label="Nombre de usuario"
              type="text"
              placeholder="Ingrese su nombre de usuario"
            />
            <Input
              id="password"
              label="Contraseña"
              type="password"
              placeholder="Ingrese su contraseña"
            />
            <SubmitButton value="Iniciar sesión" />
          </div>
          <p className="text-(--blue)">
            <a>¿Olvidaste tu contraseña?</a>
          </p>
          <p className="text-center mt-6">
            ¿Aun no tienes cuenta? <Link to='/register'><span className="text-(--blue) font-semibold">Regístrate aquí</span></Link>
          </p>
        </section>
      </form>
    </>
  )
}
