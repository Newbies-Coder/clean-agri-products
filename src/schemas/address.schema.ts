import { z } from "zod";

export const addressSchema = z.object({
  province: z.string().min(1, "Please select a province/city"),
  district: z.string().min(1, "Please select a district"),
  ward: z.string().min(1, "Please select a commune/ward"),
  addressDetail: z.string().max(60),
});

export type AddressType = z.infer<typeof addressSchema>;
