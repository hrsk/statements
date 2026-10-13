import { Field } from "@base-ui/react/field";
import styles from "./InputField.module.scss";
import { ReactElement, ReactNode } from "react";

type Properties = {
  errorMessage?: string;
  label: string;
  placeholder: string;
  description?: string;
  iconLeft?: ReactElement;
  iconRight?: ReactNode;
};

export const InputField = ({
  label,
  placeholder,
  description,
  errorMessage,
  iconLeft,
  iconRight,
}: Properties) => {
  return (
    <Field.Root className={styles.field} touched>
      <Field.Label className={styles.label}>{label}</Field.Label>

      <Field.Control
        required
        placeholder={placeholder}
        className={styles.input}
      />
      <Field.Error className={styles.error} match="valueMissing">
        {errorMessage}
      </Field.Error>
      {description && (
        <Field.Description className={styles.error}>
          {description}
        </Field.Description>
      )}
    </Field.Root>
  );
};
