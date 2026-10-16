import { Button, InputField } from "@/shared/ui";
import styles from "./LoginForm.module.scss";
import Lock from "./../../../../assets/svg/Lock.svg";

export const LoginForm = () => {
  return (
    <div className={styles.form}>
      <h1 className={styles.title}>Log in</h1>
      <p className={styles.description}>
        Welcome to My Statement, please fill in the fields below to log into
        your account.
      </p>
      <InputField label="E-mail" placeholder="E-mail" />
      <InputField label="Password" placeholder="Password" iconLeft={<Lock />} />

      <div className={styles.buttons}>
        <Button variant="filled">Log in</Button>
        <span>or</span>
        <Button variant="link" href={"/register"}>
          Create account
        </Button>
      </div>
    </div>
  );
};
