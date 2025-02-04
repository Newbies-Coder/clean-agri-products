import { z } from "zod";

export const checkoutSchema = z.object({
  fullName: z.string().min(5).max(30),
  phone: z.string().min(10),
  email: z.string().email().optional(),
  country: z.string().min(3).max(30),
  province: z.string().min(3).max(30),
  district: z.string().min(3).max(30),
  ward: z.string().min(3).max(30),
  addressDetail: z.string().min(3).max(30),
});

export type CheckoutType = z.infer<typeof checkoutSchema>;