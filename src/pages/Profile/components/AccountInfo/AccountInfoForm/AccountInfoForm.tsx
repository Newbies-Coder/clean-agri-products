import { Mail, Phone, UserPen } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { accountInfoSchema, AccountInfoType } from "@/schemas/account.schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { user } from "@/mocks/user";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const AccountInfoForm = () => {
  // Logged in user information
  const { full_name, email, phone } = user;

  // Define form.
  const form = useForm<AccountInfoType>({
    resolver: zodResolver(accountInfoSchema),
    defaultValues: {
      full_name,
      email,
      phone,
    },
  });

  // 'isDirty' will return 'true' if any field in the form changes
  const {
    formState: { isDirty },
  } = form;

  // Submit change information.
  function onSubmit(values: AccountInfoType) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full mx-auto space-y-6"
      >
        {/* Full name field */}
        <FormField
          control={form.control}
          name="full_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-500">Full name</FormLabel>
              <div className="relative">
                <FormControl>
                  <Input
                    className="flex h-12 w-full rounded-md border border-input bg-transparent px-3 py-1 shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    {...field}
                  />
                </FormControl>
                <UserPen className="w-5 h-5 absolute right-2 bottom-4 cursor-pointer text-gray-600" />
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email field */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-500">Email</FormLabel>
              <div className="relative">
                <FormControl>
                  <Input
                    className="flex h-12 w-full rounded-md border border-input bg-transparent px-3 py-1 shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    {...field}
                  />
                </FormControl>
                <Mail className="w-5 h-5 absolute right-2 bottom-4 cursor-pointer text-gray-600" />
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Phone field */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-500">Phone Number</FormLabel>
              <div className="relative">
                <FormControl>
                  <Input
                    className="flex h-12 w-full rounded-md border border-input bg-transparent px-3 py-1 shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    {...field}
                  />
                </FormControl>
                <Phone className="w-5 h-5 absolute right-2 bottom-4 cursor-pointer text-gray-600" />
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="mt-12">
          {isDirty && (
            <Button
              type="submit"
              className="p-6 font-medium duration-300 rounded-full text-white bg-primary hover:bg-primary/80"
            >
              Save changes
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
};

export default AccountInfoForm;
