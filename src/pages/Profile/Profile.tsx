import { Helmet } from "react-helmet-async";
import AccountInfo from "./components/AccountInfo";
import AddressInfo from "./components/AddressInfo/AddressInfo";
import ChangePassword from "./components/ChangePassword";
const Profile = () => {
  return (
    <>
      <Helmet>
        <title>Profile</title>
      </Helmet>

      <AccountInfo />

      <AddressInfo />

      <ChangePassword />
    </>
  );
};

export default Profile;
