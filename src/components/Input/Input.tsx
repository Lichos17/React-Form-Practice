import {
  JSXElementConstructor,
  ReactElement,
  cloneElement,
  InputHTMLAttributes,
  HTMLAttributes,
} from "react";
import { verifyClassname } from "../../utils/verifyClassname";

import styles from "./styles.module.css";

type Props = {
  iconRight?: ReactElement<any, string | JSXElementConstructor<any>>;
  iconLeft?: ReactElement<any, string | JSXElementConstructor<any>>;
  error?: boolean;
  textError?: string;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  inputContainerProps?: HTMLAttributes<HTMLDivElement>;
  containerProps?: HTMLAttributes<HTMLDivElement>;
};

const Input = ({
  error,
  textError,
  inputProps,
  inputContainerProps,
  containerProps,
  iconRight,
  iconLeft,
}: Props) => {
  const inputClassName = [
    styles.input,
    verifyClassname(iconRight, styles["input--icon-right"]),
    verifyClassname(iconLeft, styles["input--icon-left"]),
  ].join(" ");

  return (
    <div {...containerProps}>
      <div className={styles.container} {...inputContainerProps}>
        {iconLeft && createIcon(iconLeft, "icon-left")}
        <input className={inputClassName} {...inputProps} />
        {iconRight && createIcon(iconRight, "icon-right")}
      </div>
      {error && <p className={styles.error}>{textError}</p>}
    </div>
  );
};

const createIcon = (
  icon: ReactElement<any, string | JSXElementConstructor<any>>,
  className: string
) => {
  return cloneElement(icon, {
    className: styles[className],
  });
};
export default Input;
