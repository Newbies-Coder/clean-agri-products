import { Link } from "react-router-dom";
import LoginImg from "@/assets/images/Login.png";
import LoginForm from "./components/LoginForm";

const Login = () => {
  return (
    <div className="font-[sans-serif] bg-green-900 h-screen">
      <div className="md:flex items-center gap-8 h-full">
        <div className="max-md:hidden p-4 md:basis-5/12 lg:basis-6/12 xl:basis-7/12">
          <img
            src={LoginImg}
            className="lg:max-w-[80%] w-full h-full object-contain block mx-auto"
            alt="login-image"
          />
        </div>

        <div className="md:basis-7/12 lg:basis-6/12 xl:basis-5/12 md:p-7 p-6 flex flex-col justify-center bg-white md:rounded-s-2xl lg:rounded-s-3xl h-full">
          <div className="max-w-lg w-full mx-auto">
            <h3 className="text-gray-800 text-5xl font-bold ">
              Sign in
            </h3>
            <p className="text-gray-800 mt-4 mb-12">
              Don't have an account?{" "}
              <Link
                to="/auth/register"
                className="text-primary font-semibold hover:underline ml-1 whitespace-nowrap duration-150"
              >
                Register here
              </Link>
            </p>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
