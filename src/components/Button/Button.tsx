import React from "react";
import styles from "./styles.module.css";

type Props = {
  buttonType: "primary";
};

export const Button = (
  props: Props & React.ButtonHTMLAttributes<HTMLButtonElement>
) => {
  const classes = [
    styles.button,
    styles.primary,
    props.className,
    props.buttonType,
  ].join(" ");

  return (
    <button {...{ ...props, buttonType: undefined }} className={classes}>
      {props.children}
    </button>
  );
};
