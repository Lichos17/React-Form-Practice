import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { HiOutlineLockClosed, HiEye } from "react-icons/hi";
//Components
import { Button, Checkbox, Input } from "../../../components";
//Context
import AppContext from "../../../context/appContext";

type FormValues = {
  name: string;
  lastname: string;
  password: string;
};

const LoginForm = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const { setIsAuth } = useContext(AppContext);

  const onSubmit = (data: any) => {
    setIsAuth(true);
  };

  const handleViewPassword = () => setPasswordShown(!passwordShown);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`d-flex flex-wrap j-around`}
    >
      <Input
        containerProps={{
          className: "input-w-50",
        }}
        textError="Invalid Name"
        error={!!errors?.name}
        inputProps={{
          placeholder: "Name",
          ...register("name", { required: true, minLength: 1 }),
        }}
      />
      <Input
        containerProps={{
          className: "input-w-50",
        }}
        textError="Invalid Lastname"
        error={!!errors?.lastname}
        inputProps={{
          placeholder: "Lastname",
          ...register("lastname", { required: true, minLength: 1 }),
        }}
      />
      <Input
        containerProps={{
          className: "input-w-100 my-lg",
        }}
        textError="Please enter a valid password"
        error={!!errors?.password}
        inputProps={{
          type: passwordShown ? "text" : "password",
          placeholder: "Password",
          ...register("password", {
            required: true,
            pattern:
              /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
          }),
        }}
        iconLeft={<HiOutlineLockClosed color="#f9AF1B" />}
        iconRight={<HiEye color="#AEABA5" onClick={handleViewPassword} />}
      />

      <Checkbox id="Checkbox" label="Keep me logged in" />
      <Button type="submit" buttonType="primary" className="my-lg">
        Sign In
      </Button>
    </form>
  );
};

export default LoginForm;
