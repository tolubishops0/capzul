import { z } from "zod";

export const signupSchema = z
  .object({
    firstName: z
      .string()
      .min(1, "first name is required")
      .max(50, "first name cannot be longer than 50 characters"),

    lastName: z
      .string()
      .min(1, "last name is required")
      .max(50, "last name cannot be longer than 50 characters"),

    dob: z
      .date({
        required_error: "date of birth is required",
        invalid_type_error: "invalid date format",
      })
      .refine((date) => date instanceof Date && !isNaN(date.getTime()), {
        message: "invalid date",
      }),

    email: z.string().min(1, "email is required").email("Invalid email format"),

    password: z
      .string()
      .min(1, "password is required")
      .min(8, "password must be at least 8 characters")
      .regex(/[a-zA-Z]/, "password must contain at least one letter")
      .regex(/\d/, "password must contain at least one number")
      .regex(
        /[!@#$%^&*()_+{}\[\]:;"'<>,.?~`]/,
        "password must contain at least one special character"
      ),

    confirmPassword: z.string().min(1, "confirm password is required"),

    terms: z.literal(true, {
      errorMap: () => ({ message: "you must accept the terms and conditions" }),
    }),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: "custom",
        message: "passwords do not match",
        path: ["confirmPassword"],
      });
    }
  });
