import { HiOutlineLockClosed, HiEye } from "react-icons/hi";
import { Button, Checkbox, Input } from "../../../components";
import { RegisterForm } from "../../components";
import { AuthLayout } from "../../layouts";

export const RegisterPage = () => {
  return (
    <AuthLayout title="Completa tu Registro">
      <RegisterForm />
      <p className="uppercase semi-bold text-center">
        <span className="mr-lg"> Ya tienes cuenta?</span>{" "}
        <a className={`text-link`}>Ingresa</a>
      </p>
    </AuthLayout>
  );
};
