import { Link } from "react-router-dom";
import { RegisterForm } from "../../components";
import { AuthLayout } from "../../layouts";

const RegisterPage = () => {
  return (
    <AuthLayout title="Complete your registration">
      <RegisterForm />
      <p className="uppercase semi-bold text-center">
        <span className="mr-lg"> Already have an account?</span>{" "}
        <Link to={"/auth/login"} className={`text-link`}>
          Sign In
        </Link>
      </p>
    </AuthLayout>
  );
};

export default RegisterPage;
