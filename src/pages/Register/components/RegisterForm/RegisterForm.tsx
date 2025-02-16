import { useNavigate } from "react-router-dom";
import { Mail, Phone, UserPen } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RegisterSchema, RegisterType } from "@/schemas/auth.schema";
import { registerAction } from "@/actions/auth.action";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import { DotLoader } from "react-spinners";
import { InputPassword } from "@/components/ui/input-password";

const RegisterForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  // Define form.
  const form = useForm<RegisterType>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      full_name: "",
      email: "",
      password: "",
      confirm_password: "",
      phone: "",
    },
  });

  // Submit handler.
  async function onSubmit(data: RegisterType) {
    try {
      setLoading(true);
      const response = await registerAction(data);
      if (!response?.success && response !== undefined) {
        toast({
          title: "Failed!",
          description: response.message,
          variant: "destructive",
          duration: 3000,
        });
        return;
      }
      toast({
        title: "Successfully!",
        description: "You have successfully created an account",
        variant: "success",
        duration: 3000,
      });

      // Navigate to the verification OTP page
      navigate("/auth/otp-verification");

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast({
        title: "Failed!",
        description: error.message || "Something went wrong!",
        variant: "destructive",
        duration: 3000,
      });
    } finally {
      setLoading(false);
    }
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
              <FormLabel className="font-semibold">
                Email <FormMessage className="inline" />
              </FormLabel>
              <div className="relative">
                <FormControl>
                  <Input placeholder="Enter Email" {...field} />
                </FormControl>
                <Mail className="w-5 h-5 absolute right-2 bottom-4 cursor-pointer text-gray-600" />
              </div>
            </FormItem>
          )}
        />
        <div className="grid grid-cols-2 gap-4">

        <FormField
          control={form.control}
          name="full_name"
          render={({ field }) => (
            <FormItem className="flex flex-col justify-end">
              <FormLabel className="font-semibold ">
                Full name <FormMessage className="inline" />
              </FormLabel>
              <div className="relative">
                <FormControl>
                  <Input placeholder="Enter full name..." {...field} />
                </FormControl>
                <UserPen className="w-5 h-5 absolute right-2 bottom-4 cursor-pointer text-gray-600" />
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="flex flex-col justify-end">
              <FormLabel className="font-semibold">
                Phone number <FormMessage className="inline" />
              </FormLabel>
              <div className="relative">
                <FormControl>
                  <Input placeholder="Enter phone number" {...field} />
                </FormControl>
                <Phone className="w-5 h-5 absolute right-2 bottom-4 cursor-pointer text-gray-600" />
              </div>
            </FormItem>
          )}
        />
        </div>

        {/* <div className="grid grid-cols-2 gap-4"> */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">
                  Password <FormMessage className="inline" />
                </FormLabel>
                <FormControl>
                  <InputPassword placeholder="Enter Password" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirm_password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">
                  Confirm Password <FormMessage className="inline" />
                </FormLabel>
                <FormControl>
                  <InputPassword placeholder="Confirm Password" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        {/* </div> */}

        <div className="mt-12 text-center">
          {loading ? (
            <div className="w-full flex justify-center">
              <DotLoader color="#33C23F" size="50" />
            </div>
          ) : (
            <Button
              type="submit"
              className="w-full py-6 font-semibold tracking-wider duration-300 rounded-full text-white bg-primary hover:bg-primary/80 focus:outline-none"
            >
              Register
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
};

export default RegisterForm;
