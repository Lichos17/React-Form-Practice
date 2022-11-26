import { Link } from "react-router-dom";
import { LoginForm } from "../../components";
import { AuthLayout } from "../../layouts";

const LoginPage = () => {
  return (
    <AuthLayout title="Sign In">
      <LoginForm />
      <p className="uppercase semi-bold text-center">
        <span className="mr-lg">Don't have an account?</span>{" "}
        <Link className={`text-link`} to={"/auth/register"}>
          Sign up
        </Link>
      </p>
    </AuthLayout>
  );
};

export default LoginPage;
