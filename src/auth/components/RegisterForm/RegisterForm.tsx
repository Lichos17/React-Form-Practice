import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { HiOutlineLockClosed, HiEye } from "react-icons/hi";
//Components
import { Button, Checkbox, Input } from "../../../components";
//Context
import { AppContext } from "../../../context/appContext";

type FormValues = {
  name: string;
  lastname: string;
  password: string;
  password2: string;
};

export const RegisterForm = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FormValues>();

  const { setIsAuth } = useContext(AppContext);

  const onSubmit = (data: any) => setIsAuth(true);

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
          placeholder: "Nombre",
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
          placeholder: "Apellido",
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
          placeholder: "Contraseña",
          ...register("password", {
            required: true,
            pattern:
              /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
          }),
        }}
        iconLeft={<HiOutlineLockClosed color="#f9AF1B" />}
        iconRight={<HiEye color="#AEABA5" onClick={handleViewPassword} />}
      />
      <Input
        containerProps={{
          className: "input-w-100",
        }}
        textError="Passwords should match"
        error={!!errors?.password2}
        inputProps={{
          placeholder: "Ingresa Nuevamente",
          type: "password",
          ...register("password2", {
            required: true,
            validate: (value) => value === getValues("password"),
          }),
        }}
        iconLeft={<HiOutlineLockClosed color="#f9AF1B" />}
      />
      <p className={` my-lg text-note`}>
        Passwords must be at least 8 characters and contain at least two of the
        following: uppercase letters, lowercase letters, number and symbols
      </p>
      <Checkbox id="Checkbox" label="Keep me logged in" />
      <Checkbox id="Checkbox2" label="Sign me up for newsletters" />
      <Checkbox id="Checkbox3" label="O registrate con" />
      <Button buttonType="primary" className="my-lg">
        Registrate
      </Button>
    </form>
  );
};
