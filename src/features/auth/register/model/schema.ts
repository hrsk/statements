import z from "zod";

const minLengthErrorMessage = "Password must be at least 8 characters long.";
const maxLengthErrorMessage = "Password cannot exceed 20 characters.";
const uppercaseErrorMessage =
  "Password must contain at least one uppercase letter (A-Z).";
const lowercaseErrorMessage =
  "Password must contain at least one lowercase letter (a-z).";
const numberErrorMessage = "Password must contain at least one number (0-9).";
const specialCharacterErrorMessage =
  "Password must contain at least one special character (!@#$%^&*?).";

const passwordSchema = z
  .string()
  .min(8, { message: minLengthErrorMessage })
  .max(20, { message: maxLengthErrorMessage })
  .refine((password) => /[A-Z]/.test(password), {
    message: uppercaseErrorMessage,
  })
  .refine((password) => /[a-z]/.test(password), {
    message: lowercaseErrorMessage,
  })
  .refine((password) => /[0-9]/.test(password), { message: numberErrorMessage })
  .refine((password) => /[!@#$%^&*]/.test(password), {
    message: specialCharacterErrorMessage,
  });

export const registerFormSchema = z
  .object({
    lastName: z.string().min(1, { message: "Last name is required" }),
    firstName: z.string().min(1, { message: "First name is required" }),
    email: z.email({ message: "Invalid email address" }),
    password: passwordSchema,
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    error: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type RegisterFormValues = z.infer<typeof registerFormSchema>;
