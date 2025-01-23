import { Eye, Mail } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
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
const formSchema = z.object({
  email: z.string().min(8).max(30),
  password: z.string().min(6).max(16),
});

const LoginForm = () => {
  // Define form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
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
        className="max-w-lg w-full mx-auto"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Email</FormLabel>
              <div className="relative">
                <FormControl>
                  <Input
                    placeholder="Enter Email"
                    className="w-full border-b focus:outline-none border-gray-300 focus:border-gray-400 pl-2 pr-8 py-3 outline-none focus-visible:ring-0 focus-visible:border-b focus-visible:border-gray-950 "
                    {...field}
                  />
                </FormControl>
                <Mail className="w-5 h-5 absolute right-2 bottom-4 cursor-pointer text-gray-600" />
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="mt-8">
              <FormLabel className="text-base">Password</FormLabel>
              <div className="relative">
                <FormControl>
                  <Input
                    placeholder="Enter Password"
                    type="password"
                    className="w-full border-b focus:outline-none border-gray-300 focus:border-gray-400 pl-2 pr-8 py-3 outline-none focus-visible:ring-0 focus-visible:border-b focus-visible:border-gray-950 "
                    {...field}
                  />
                </FormControl>
                <Eye className="w-5 h-5 absolute right-2 bottom-4 cursor-pointer text-gray-600" />
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
          <div className="flex items-center">
            <Checkbox id="remember-me" name="remember-me" />
            <label htmlFor="remember-me" className="text-gray-800 ml-3 block">
              Remember me
            </label>
          </div>
          <div>
            <a href="" className="text-primary font-semibold hover:underline">
              Forgot Password?
            </a>
          </div>
        </div>

        <div className="mt-12">
          <Button
            type="submit"
            className="w-full py-6 text-lg font-semibold tracking-wider duration-300 rounded-full text-white bg-primary hover:bg-primary/80 focus:outline-none"
          >
            Login
          </Button>
        </div>

        <div className="my-4 flex items-center gap-4">
          <hr className="w-full border-gray-300" />
          <p className="text-gray-800 text-center">or</p>
          <hr className="w-full border-gray-300" />
        </div>

        <button
          type="button"
          className="w-full flex items-center justify-center gap-4 py-3 px-6 font-semibold tracking-wider duration-300 text-gray-800 border border-gray-300 rounded-full bg-gray-50 hover:bg-gray-100 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            className="inline"
            viewBox="0 0 512 512"
          >
            <path
              fill="#fbbd00"
              d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
              data-original="#fbbd00"
            />
            <path
              fill="#0f9d58"
              d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
              data-original="#0f9d58"
            />
            <path
              fill="#31aa52"
              d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
              data-original="#31aa52"
            />
            <path
              fill="#3c79e6"
              d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
              data-original="#3c79e6"
            />
            <path
              fill="#cf2d48"
              d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
              data-original="#cf2d48"
            />
            <path
              fill="#eb4132"
              d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
              data-original="#eb4132"
            />
          </svg>
          Continue with google
        </button>
      </form>
    </Form>
  );
};

export default LoginForm;
