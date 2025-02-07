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
import { InputPassword } from "@/components/ui/input-password";
import {
  changePasswordSchema,
  ChangePasswordType,
} from "@/schemas/account.schema";

const ChangePasswordForm = () => {
  // Define form.
  const form = useForm<ChangePasswordType>({
    resolver: zodResolver(changePasswordSchema),
  });

  // Submit handler.
  function onSubmit(values: ChangePasswordType) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full mx-auto p-6"
      >
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Password</FormLabel>
              <FormControl>
                <InputPassword placeholder="Enter Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="new_password"
          render={({ field }) => (
            <FormItem className="mt-8">
              <FormLabel className="text-base">New Password</FormLabel>
              <FormControl>
                <InputPassword placeholder="Enter New Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirm_password"
          render={({ field }) => (
            <FormItem className="mt-8">
              <FormLabel className="text-base">Confirm Password</FormLabel>
              <FormControl>
                <InputPassword
                  placeholder="Enter Confirm Password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className=" mt-6 p-6 font-medium duration-300 rounded-full text-white bg-primary hover:bg-primary/80"
        >
          Save changes
        </Button>
      </form>
    </Form>
  );
};

export default ChangePasswordForm;
