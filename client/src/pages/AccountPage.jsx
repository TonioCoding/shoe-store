import { Avatar, Typography } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import TabsDefault from "../components/test/AccountList";

const AccountPage = () => {
  const { userInfo } = useSelector((state) => state.persistedReducer.auth);
  return (
    <main className="w-[100vw]">
      <div className="flex items-center gap-x-7 w-fit">
        <Avatar
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiVVpJWyBA-tdUT7Vxvh97xuf7mi994L4CVQ&s"
          size="xxl"
        />
        <div className="flex flex-col">
          <Typography variant="h4">{userInfo.name}</Typography>
          <Typography variant="h6" className="font-normal">
            {userInfo.email}
          </Typography>
          <Typography variant="h6" className="font-semibold" id="member-title">
            Shoe Store Member
          </Typography>
          <div className="">
            <Typography variant="h4" className="font-normal">
              Account Tabs
            </Typography>
            <TabsDefault />
          </div>
        </div>
      </div>
    </main>
  );
};

export default AccountPage;
