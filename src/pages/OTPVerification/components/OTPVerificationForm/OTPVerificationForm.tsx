import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import Logo from "@/assets/svg/Logo-black.svg";
import { VerifyOTPSchema, type VerifyOTPType } from "@/schemas/auth.schema";
import { verifyOTPAction } from "@/actions/auth.action";
import { NOTIFICATIONS } from "@/constants/notifications";
import { useToast } from "@/hooks/use-toast";

export default function OTPVerificationForm() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const form = useForm<VerifyOTPType>({
    resolver: zodResolver(VerifyOTPSchema),
    defaultValues: {
      otp: "",
    },
  });

  async function onSubmit(data: VerifyOTPType) {
    try {
      setLoading(true);
      await verifyOTPAction(data);
      toast(NOTIFICATIONS.AUTH.OTP.TOAST); // Notify if verify successfully
      navigate("/"); // Navigate to the Home page
    } catch (error) {
      const errorMessage =
        (error as Error).message || NOTIFICATIONS.AUTH.OTP.INVALID;
      form.reset({ otp: "" }); // Reset form

      // Display error
      form.setError("otp", {
        type: "server",
        message: errorMessage,
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-10 border px-24 py-16 bg-slate-100/70 rounded-lg relative"
      >
        <FormField
          control={form.control}
          name="otp"
          render={({ field }) => (
            <FormItem className="flex flex-col items-center">
              <img src={Logo} alt="Logo" className="pb-4" />
              <FormLabel className="text-3xl md:text-4xl pb-10 text-center">
                Please check your email
              </FormLabel>

              <FormControl>
                <InputOTP maxLength={6} {...field}>
                  <InputOTPGroup className="space-x-3">
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormMessage className="pt-3" />
              <FormDescription className="text-base pt-6 text-gray-800">
                Please enter the OTP sent to your email.
              </FormDescription>
            </FormItem>
          )}
        />
        <div className="text-center">
          <Button type="submit" className="mx-auto px-6" disabled={loading}>
            Verify
          </Button>
        </div>
      </form>
    </Form>
  );
}
