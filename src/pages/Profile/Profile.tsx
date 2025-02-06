import { Helmet } from "react-helmet-async";
import AccountInfo from "./components/AccountInfo";
import AddressInfo from "./components/AddressInfo/AddressInfo";
const Profile = () => {
  return (
    <>
      <Helmet>
        <title>Profile</title>
      </Helmet>

      <AccountInfo />

      <AddressInfo />
    </>
  );
};

export default Profile;
