import { Field } from "@base-ui/react/field";
import {
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
} from "react-hook-form";
import styles from "./InputField.module.scss";

type Properties<T extends FieldValues> = {
  label: string;
  placeholder: string;
  field: ControllerRenderProps<T>;
  fieldState: ControllerFieldState;
};

export const InputField = <T extends FieldValues>({
  label,
  placeholder,
  fieldState,
  field,
}: Properties<T>) => {
  return (
    <Field.Root className={styles.field}>
      <Field.Label className={styles.label}>{label}</Field.Label>
      <Field.Control
        {...field}
        required
        placeholder={placeholder}
        className={styles.input}
      />

      <Field.Error className={styles.error} match>
        {fieldState.error?.message}
      </Field.Error>
    </Field.Root>
  );
};
