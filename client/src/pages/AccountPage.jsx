import { Avatar, Typography } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import AccountTabs from "../components/test/AccountTabs";
import { useState } from "react";

const AccountPage = () => {
  const { userInfo } = useSelector((state) => state.persistedReducer.auth);
  const [currentTab, setCurrentTab] = useState(null);

  console.log(currentTab);

  function setTab(tab) {
    setCurrentTab(tab);
  }

  function accountTabsDisplay(tab) {
    switch (tab) {
      case "orders":
        return <p>orders</p>;
      case "inbox":
        return <p>inbox</p>;
      case "favorites":
        return <p>favorites</p>;
      case "settings":
        return <p>settings</p>;
      case "interests":
        return <p>interests</p>;
    }
  }

  return (
    <main className="w-[100vw] h-fit">
      <div className="flex flex-col gap-x-7 w-full">
        <div className="flex">
          <div className="flex gap-x-6 ml-5 my-5">
            <Avatar
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiVVpJWyBA-tdUT7Vxvh97xuf7mi994L4CVQ&s"
              size="xxl"
            />
            <div className="flex flex-col">
              <Typography variant="h4" className="font-lt">
                {userInfo.name}
              </Typography>
              <Typography variant="h6" className="font-normal">
                {userInfo.email}
              </Typography>
              <Typography
                variant="h6"
                className="font-semibold text-base"
                id="member-title"
              >
                Shoe Store Member
              </Typography>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-y-3">
          <Typography variant="h4" className="font-lt ml-7">
            Profile
          </Typography>
          <AccountTabs setTab={setTab} />
        </div>
      </div>
      <div className="w-full">{accountTabsDisplay(currentTab)}</div>
    </main>
  );
};

export default AccountPage;
