import { Link } from "react-router-dom";
import RegisterImg from "@/assets/images/Register.png";
import RegisterForm from "./components/RegisterForm";
import { Helmet } from "react-helmet-async";

const Register = () => {
  return (
    <>
      <Helmet>
        <title>Create an account</title>
      </Helmet>

      <div className="font-[sans-serif] bg-green-900 h-screen">
        <div className="md:flex items-center gap-8 h-full">
          <div className="max-md:hidden p-4 md:basis-5/12 lg:basis-6/12 xl:basis-7/12">
            <img
              src={RegisterImg}
              className="lg:max-w-[80%] w-full h-full object-contain block mx-auto"
              alt="login-image"
            />
          </div>

          <div className="md:basis-7/12 lg:basis-6/12 xl:basis-5/12 px-8 py-10 flex flex-col justify-center bg-white md:rounded-s-2xl lg:rounded-s-3xl h-full">
            <div className="max-w-lg w-full mx-auto">
              <h3 className="text-gray-800 text-4xl font-bold ">Sign up</h3>
              <p className="text-gray-800 mt-4 mb-10 text-sm">
                Already have an account?{" "}
                <Link
                  to="/auth/login"
                  className="text-primary font-semibold hover:underline ml-1 whitespace-nowrap duration-150"
                >
                  Login here
                </Link>
              </p>
            </div>
            <RegisterForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
