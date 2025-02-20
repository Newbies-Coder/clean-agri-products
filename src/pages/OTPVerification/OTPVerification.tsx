import { Helmet } from "react-helmet-async";
import OTPVerificationForm from "./components/OTPVerificationForm";

export default function OTPVerification() {
  return (
    <>
      <Helmet>
        <title>Verify your account</title>
      </Helmet>
      <div className="relative overflow-hidden">
        <img
          src="https://as2.ftcdn.net/v2/jpg/06/90/24/17/1000_F_690241711_TAOgHz6CTLzcen24fBNqqJ91KgWOM1ba.jpg"
          loading="lazy"
          alt="bg-vegetable otp"
          className="absolute inset-0 h-full w-full object-cover object-center scale-125"
        />
        <div className="absolute inset-0 bg-black opacity-65 mix-blend-multiply"></div>
        <div className="container mx-auto px-5 h-screen flex flex-col items-center justify-center gap-4">
          <OTPVerificationForm />
        </div>
      </div>
    </>
  );
}
