import ChangePasswordForm from "./ChangePasswordForm";

const ChangePassword = () => {
  return (
    <div id="changePassword" className="border rounded-lg pb-6 shadow-lg mt-6">
      <h3 className="text-2xl py-5 px-6 border-b">Change Password</h3>
      <ChangePasswordForm />
    </div>
  );
};

export default ChangePassword;
