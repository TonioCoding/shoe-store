import { Avatar, Typography } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import AccountTabs from "../components/test/AccountTabs";
import { useState } from "react";
import { DefaultTable } from "../components/accountpage/OrdersTable";

const AccountPage = () => {
  const { userInfo } = useSelector((state) => state.persistedReducer.auth);
  const [currentTab, setCurrentTab] = useState("orders");

  console.log(currentTab);

  function setTab(tab) {
    setCurrentTab(tab);
  }

  function accountTabsDisplay(tab) {
    switch (tab) {
      case "orders":
        return <DefaultTable />;
      case "inbox":
        return (
          <Typography variant="h5" className="font-normal font-lt">
            There are currently no messages&#33;
          </Typography>
        );
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
            <Avatar src={userInfo.avatarUrl} size="xxl" />
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
      <div className="w-full flex justify-center my-20">
        {accountTabsDisplay(currentTab)}
      </div>
    </main>
  );
};

export default AccountPage;
