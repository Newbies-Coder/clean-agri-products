import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { DotLoader } from "react-spinners";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail } from "lucide-react";
import { loginAction } from "@/actions/auth.action";
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
import { InputPassword } from "@/components/ui/input-password";
import { LoginSchema, LoginType } from "@/schemas/auth.schema";
import { useToast } from "@/hooks/use-toast";
import { ERROR_TOAST, NOTIFICATIONS } from "@/constants/notifications";
import { getProfile } from "@/actions/user.action";
import { useAuthStore } from "@/store/auth.store";

const LoginForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const setUser = useAuthStore((state) => state.setUser); // Get setUser from useAuthStore
  const [loading, setLoading] = useState<boolean>(false);
  // Define form.
  const form = useForm<LoginType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Submit handler.
  async function onSubmit(data: LoginType) {
    try {
      setLoading(true);
      await loginAction(data); // Call loginAction with data
      const userData = await getProfile() // Get user data
      setUser(userData) // Set user data to the store
      toast(NOTIFICATIONS.AUTH.LOGIN.TOAST); // Notify if login successfully
      navigate("/"); // Navigate to the Home page
    } catch (error: unknown) {
      const errorMessage =
        (error as Error).message || NOTIFICATIONS.ERROR.UNDEFINED;
      toast(ERROR_TOAST(errorMessage));
    } finally {
      setLoading(false);
    }
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

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="mt-8">
              <FormLabel className="font-semibold">
                Password <FormMessage className="inline" />
              </FormLabel>
              <FormControl>
                <InputPassword placeholder="Enter Password" {...field} />
              </FormControl>
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
            <Link
              to="/forgot-password"
              className="text-primary font-semibold hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
        </div>

        <div className="mt-12">
          {loading ? (
            <div className="w-full flex justify-center">
              <DotLoader color="#33C23F" size={50} />
            </div>
          ) : (
            <Button
              type="submit"
              className="w-full py-6 font-semibold tracking-wider duration-300 rounded-full text-white bg-primary hover:bg-primary/80 focus:outline-none"
            >
              Login
            </Button>
          )}
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
