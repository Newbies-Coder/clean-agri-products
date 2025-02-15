import { regexPassword, regexPhoneNumber } from "@/lib/regex";
import { z } from "zod";

export const RegisterSchema = z
  .object({
    full_name: z.string().min(4, "must have at least 4 characters"),
    email: z.string().min(8, "must have at least 8 characters"),
    password: z
      .string()
      .min(8, "must have at least 8 characters")
      .regex(
        regexPassword,
        "must contain numbers, uppercase, lowercase letters and special characters"
      )
      .max(16, "cannot exceed 16 characters"),
    confirm_password: z.string(),
    phone: z.string().regex(regexPhoneNumber, "must contain exactly 10 digits"),
  })
  .refine((data) => data.password === data.confirm_password, {
    path: ["confirm_password"],
    message: "must match the password",
  });

export type RegisterType = z.infer<typeof RegisterSchema>;
