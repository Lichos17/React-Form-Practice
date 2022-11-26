import { InputHTMLAttributes } from "react";

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label: string;
};

const Checkbox = ({ className, id, label, ...props }: Props) => {
  return (
    <div className=" my-sm w-100 d-flex">
      <input className={`${className}`} type="checkbox" id={id} {...props} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Checkbox;
