import { LoginForm } from "../../components";
import { AuthLayout } from "../../layouts";

export const LoginPage = () => {
  return (
    <AuthLayout title="Inicia Sesion">
      <LoginForm />
      <p className="uppercase semi-bold text-center">
        <span className="mr-lg"> Aun no tienes cuenta?</span>{" "}
        <a className={`text-link`}>Registrate</a>
      </p>
    </AuthLayout>
  );
};
