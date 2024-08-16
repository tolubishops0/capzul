/// <reference types="vite/client" />
import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  Path,
} from "react-hook-form";

export interface FormData {
  email: string;
  lastName: string;
  firstName: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
  dob: string;
}

export interface InputFieldProps {
  label: string;
  type: string;
  fieldname: keyof FormData;
  error?: string;
  register: UseFormRegister<FormData>;
  control?: UseFormRegister;
}

export interface ButtonProps {
  label: string;
  variant?: string;
  buttonType?: "submit" | "button" | "reset";
}
