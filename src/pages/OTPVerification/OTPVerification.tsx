import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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

const FormSchema = z.object({
  otp: z.string().length(6, {
    message: "Invalid OTP, please try again!",
  }),
});

export default function OTPVerification() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      otp: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      console.log(data);

      // If the otp is invalid
      if (data.otp !== "123456") {
        // Reset form
        form.reset({ otp: "" });
        form.setError("otp", {
          type: "manual",
          message: "Invalid OTP, please try again.",
        });

        return;
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="relative overflow-hidden">
      <img
        src="https://as2.ftcdn.net/v2/jpg/06/90/24/17/1000_F_690241711_TAOgHz6CTLzcen24fBNqqJ91KgWOM1ba.jpg"
        loading="lazy"
        alt="bg-vegetable otp"
        className="absolute inset-0 h-full w-full object-cover object-center scale-125"
      />
      <div className="absolute inset-0 bg-black opacity-65 mix-blend-multiply"></div>
      <div className="container mx-auto px-5 h-screen flex flex-col items-center justify-center gap-4">
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
              <Button type="submit" className="mx-auto px-6">
                Verify
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
