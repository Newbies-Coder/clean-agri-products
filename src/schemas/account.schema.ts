import { z } from "zod";

export const accountInfoSchema = z.object({
  full_name: z.string().min(4, "Full name must have at least 4 characters"),
  email: z.string().min(8, "Email must have at least 8 characters"),
  phone: z
    .string()
    .regex(/^\d{10}$/, "Phone number must contain exactly 10 digits"),
});

export const changePasswordSchema = z
  .object({
    password: z.string().min(8).max(16),
    new_password: z.string().min(8).max(16),
    confirm_password: z.string().min(8).max(16),
  })
  .refine((data) => data.password === data.confirm_password, {
    path: ["confirm_password"],
    message: "Confirm password must match the password",
  });

export type AccountInfoType = z.infer<typeof accountInfoSchema>;
export type ChangePasswordType = z.infer<typeof changePasswordSchema>;
