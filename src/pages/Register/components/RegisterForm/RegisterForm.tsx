import { Eye, Mail, Phone, UserPen } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// Validation
const formSchema = z
  .object({
    full_name: z.string().min(4, "Full name must have at least 4 characters"),
    email: z.string().min(8, "Email must have at least 8 characters"),
    password: z
      .string()
      .min(6, "Password must have at least 6 characters")
      .max(16, "Password cannot exceed 16 characters"),
    confirm_password: z
      .string()
      .min(6, "Confirm password must have at least 6 characters")
      .max(16, "Confirm password cannot exceed 16 characters"),
    phone: z
      .string()
      .regex(/^\d{10}$/, "Phone number must contain exactly 10 digits"),
  })
  .refine((data) => data.password === data.confirm_password, {
    path: ["confirm_password"],
    message: "Confirm password must match the password",
  });

const RegisterForm = () => {
  // Define form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      full_name: "",
      email: "",
      password: "",
      confirm_password: "",
      phone: "",
    },
  });

  // Submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-lg w-full mx-auto space-y-8"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold">Email</FormLabel>
              <div className="relative">
                <FormControl>
                  <Input
                    placeholder="Enter Email"
                    className="w-full border-b focus:outline-none border-gray-300 focus:border-gray-400 pl-2 pr-8 py-3 outline-none focus-visible:ring-0 focus-visible:border-b focus-visible:border-gray-950 placeholder:text-sm"
                    {...field}
                  />
                </FormControl>
                <Mail className="w-5 h-5 absolute right-2 bottom-4 cursor-pointer text-gray-600" />
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex max-lg:flex-col gap-4 ">
          <FormField
            control={form.control}
            name="full_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">Full name</FormLabel>
                <div className="relative">
                  <FormControl>
                    <Input
                      placeholder="Enter full name..."
                      className="w-full border-b focus:outline-none border-gray-300 focus:border-gray-400 pl-2 pr-8 py-3 outline-none focus-visible:ring-0 focus-visible:border-b focus-visible:border-gray-950 placeholder:text-sm"
                      {...field}
                    />
                  </FormControl>
                  <UserPen className="w-5 h-5 absolute right-2 bottom-4 cursor-pointer text-gray-600" />
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">Phone number</FormLabel>
                <div className="relative">
                  <FormControl>
                    <Input
                      placeholder="Enter phone number"
                      className="w-full border-b focus:outline-none border-gray-300 focus:border-gray-400 pl-2 pr-8 py-3 outline-none focus-visible:ring-0 focus-visible:border-b focus-visible:border-gray-950 placeholder:text-sm"
                      {...field}
                    />
                  </FormControl>
                  <Phone className="w-5 h-5 absolute right-2 bottom-4 cursor-pointer text-gray-600" />
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">Password</FormLabel>
                <div className="relative">
                  <FormControl>
                    <Input
                      placeholder="Enter Password"
                      type="password"
                      className="w-full border-b focus:outline-none border-gray-300 focus:border-gray-400 pl-2 pr-8 py-3 outline-none focus-visible:ring-0 focus-visible:border-b focus-visible:border-gray-950 placeholder:text-sm"
                      {...field}
                    />
                  </FormControl>
                  <Eye className="w-5 h-5 absolute right-2 bottom-4 cursor-pointer text-gray-600" />
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirm_password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">
                  Confirm Password
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Confirm Password"
                    type="password"
                    className="w-full border-b focus:outline-none border-gray-300 focus:border-gray-400 pl-2 pr-8 py-3 outline-none focus-visible:ring-0 focus-visible:border-b focus-visible:border-gray-950 placeholder:text-sm"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="mt-12">
          <Button
            type="submit"
            className="w-full py-6 font-semibold tracking-wider duration-300 rounded-full text-white bg-primary hover:bg-primary/80 focus:outline-none"
          >
            Register
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default RegisterForm;
