"use client";
import {
  registerFormSchema,
  RegisterFormValues,
} from "@/features/auth/register/model/schema";
import { Button, InputField } from "@/shared/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import styles from "./RegisterForm.module.scss";

export const RegisterForm = () => {
  const { handleSubmit, control, reset } = useForm<RegisterFormValues>({
    defaultValues: {
      lastName: "",
      firstName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(registerFormSchema),
  });

  const onSubmit: SubmitHandler<RegisterFormValues> = (data) =>
    console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <h1 className={styles.title}>Create Account</h1>
      <p className={styles.description}>
        Please fill in the fields below to create an account.
      </p>
      <div className={styles.name}>
        <Controller
          name="firstName"
          control={control}
          rules={{ required: true }}
          render={({ field, fieldState }) => (
            <InputField
              label="First Name"
              placeholder="First Name"
              fieldState={fieldState}
              field={field}
            />
          )}
        />
        <Controller
          name="lastName"
          control={control}
          rules={{ required: true }}
          render={({ field, fieldState }) => (
            <InputField
              label="Last Name"
              placeholder="Last Name"
              fieldState={fieldState}
              field={field}
            />
          )}
        />
      </div>
      <Controller
        name="email"
        control={control}
        rules={{ required: true }}
        render={({ field, fieldState }) => (
          <InputField
            label="Email"
            placeholder="Email"
            fieldState={fieldState}
            field={field}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        rules={{ required: true }}
        render={({ field, fieldState }) => (
          <InputField
            label="Password"
            placeholder="Password"
            fieldState={fieldState}
            field={field}
          />
        )}
      />
      <Controller
        name="confirmPassword"
        control={control}
        rules={{ required: true }}
        render={({ field, fieldState }) => (
          <InputField
            label="Confirm Password"
            placeholder="Confirm Password"
            fieldState={fieldState}
            field={field}
          />
        )}
      />

      <Button variant="filled" type="submit">
        Create account
      </Button>
    </form>
  );
};
