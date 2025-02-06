import AccountInfoForm from "./AccountInfoForm";
import UserAvatar from "./UserAvatar";

const AccountInfo = () => {
  return (
    <div className="border rounded-lg pb-6 shadow-lg">
      <h3 className="text-2xl py-5 px-6 border-b">Account Infomation</h3>

      <div className="flex max-lg:flex-col gap-3 p-6">
        {/* Account information Form */}
        <div className="lg:basis-7/12 max-lg:order-2">
          <AccountInfoForm />
        </div>

        {/* User's avatar */}
        <div className="lg:basis-5/12 max-lg:order-1">
          <UserAvatar />
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
