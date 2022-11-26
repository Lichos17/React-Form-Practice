import { ReactNode } from "react";
import { Navbar } from "../../components";
import styles from "./styles.module.css";

type Props = {
  children: ReactNode;
  title: string;
};

const AuthLayout = ({ children, title }: Props) => {
  return (
    <div className={`container ${styles.login} d-flex`}>
      <Navbar />
      <main className={`d-flex a-center flex-1`}>
        <div className={`${styles.register} flex-1 d-flex`}>
          <h1 className={`${styles.title} mb-xxl text-title bold`}>{title}</h1>
          {children}
        </div>
        <div className={styles["login-image"]}>&nbsp;</div>
      </main>
    </div>
  );
};

export default AuthLayout;
