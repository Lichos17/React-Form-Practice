import { InputHTMLAttributes } from "react";
import styles from "./styles.module.css";

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label: string;
};

export const Checkbox = (props: Props) => {
  return (
    <div className=" my-sm w-100 d-flex">
      <input
        className={`${styles.checkbox} ${props.className}`}
        type="checkbox"
        {...props}
      />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
};
