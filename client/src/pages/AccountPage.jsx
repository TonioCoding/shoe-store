import { Avatar, Typography } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import AccountTabs from "../components/test/AccountTabs";
import { useState } from "react";
import { DefaultTable } from "../components/accountpage/OrdersTable";
import { MdAccountBox } from "react-icons/md";

const AccountPage = () => {
  const { userInfo } = useSelector((state) => state.persistedReducer.auth);
  const [currentTab, setCurrentTab] = useState("orders");
  const [settingsTab, setSettingsTab] = useState("Account Details");

  function setTab(tab) {
    setCurrentTab(tab);
  }

  function accountSettingsDisplay(state) {
    switch (state) {
      case "Account Details":
        return <p>re</p>;
      case "Payment Methods":
        return <p>he</p>;
      case "Delivery Addresses":
        return <p>ere</p>;
      case "Email / Communication Preferences":
        return <p>e</p>;
    }
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
        return (
          <div className="flex">
            <div className="">
              <div className="border-2 border-green-500">
                <div
                  className="flex items-center gap-x-3 hover:cursor-pointer"
                  id="Account Details"
                  onClick={(e) => {
                    setSettingsTab(e.currentTarget.id);
                  }}
                >
                  <Typography>Account Details</Typography>
                  <MdAccountBox />
                </div>
                <div
                  className="flex items-center gap-x-3 hover:cursor-pointer"
                  id="Payment Methods"
                  onClick={(e) => {
                    setSettingsTab(e.currentTarget.id);
                  }}
                >
                  <Typography>Payment Methods</Typography>
                  <MdAccountBox />
                </div>
                <div
                  className="flex items-center gap-x-3 hover:cursor-pointer"
                  id="Delivery Addresses"
                  onClick={(e) => {
                    setSettingsTab(e.currentTarget.id);
                  }}
                >
                  <Typography>Delivery Addresses</Typography>
                  <MdAccountBox />
                </div>
                <div
                  className="flex items-center gap-x-3 hover:cursor-pointer"
                  id="Email / Communication Preferences"
                  onClick={(e) => {
                    setSettingsTab(e.currentTarget.id);
                  }}
                >
                  <Typography>Email &#47; Communication Preferences</Typography>
                  <MdAccountBox />
                </div>
              </div>
            </div>
            <div className="">{accountSettingsDisplay(settingsTab)}</div>
          </div>
        );
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
