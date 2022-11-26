import React from "react";
import styles from "./styles.module.css";

type Props = {
  buttonType: "primary";
};

const Button = ({
  buttonType,
  className,
  children,
  ...props
}: Props & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const classes = [styles.button, styles.primary, className, buttonType].join(
    " "
  );

  return (
    <button {...props} className={classes}>
      {children}
    </button>
  );
};

export default Button;
