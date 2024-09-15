import { Avatar, Typography } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import AccountTabs from "../components/accountpage/AccountTabs";
import OrdersTable from "../components/accountpage/OrdersDisplay";
import AccountDetailsDisplay from "../components/accountpage/AccountDetailsDisplay";
import PaymentMethodsDisplay from "../components/accountpage/PaymentMethodsDisplay";
import DeliveryAddressesDisplay from "../components/accountpage/DeliveryAddressesDisplay";
import EmailCommunicationPreferenceDisplay from "../components/accountpage/EmailCommunicationPreferenceDisplay";
import { useState } from "react";
import { MdAccountBox, MdOutlinePayment } from "react-icons/md";
import { FaBox } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { IconContext } from "react-icons";

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
        return <AccountDetailsDisplay />;
      case "Payment Methods":
        return <PaymentMethodsDisplay />;
      case "Delivery Addresses":
        return <DeliveryAddressesDisplay />;
      case "Email / Communication Preferences":
        return <EmailCommunicationPreferenceDisplay />;
    }
  }

  function accountTabsDisplay(tab) {
    switch (tab) {
      case "orders":
        return <OrdersTable />;
      case "inbox":
        return (
          <div className="flex flex-col items-center justify-center gap-y-4">
            <Typography variant="h5" className="font-normal font-lt">
              No Messages
            </Typography>
            <Typography>
              Messages and notifications from Shoe Store will show up here&#46;
            </Typography>
          </div>
        );
      case "favorites":
        return (
          <div>
            {userInfo.favorites.length > 0 ? (
              userInfo.map((shoe, index) => {
                return <div key={index}>{shoe}</div>;
              })
            ) : (
              <Typography>
                Items added to your Favorites will be saved here.&#46;
              </Typography>
            )}
          </div>
        );
      case "settings":
        return (
          <div className="flex-col md:flex-row flex gap-x-20 w-full justify-center">
            <IconContext.Provider value={{ size: "1.6vw" }}>
              <div className="[&>*]:m-3 [&>*]:justify-between">
                <div
                  className="flex items-center gap-x-4 hover:cursor-pointer hover:text-gray-600 transition-all ease-in duration-300"
                  id="Account Details"
                  onClick={(e) => {
                    setSettingsTab(e.currentTarget.id);
                  }}
                >
                  <Typography>Account Details</Typography>
                  <MdAccountBox />
                </div>
                <div
                  className="flex items-center gap-x-4 hover:cursor-pointer hover:text-gray-600 transition-all ease-in duration-300"
                  id="Payment Methods"
                  onClick={(e) => {
                    setSettingsTab(e.currentTarget.id);
                  }}
                >
                  <Typography>Payment Methods</Typography>
                  <MdOutlinePayment />
                </div>
                <div
                  className="flex items-center gap-x-4 hover:cursor-pointer hover:text-gray-600 transition-all ease-in duration-300"
                  id="Delivery Addresses"
                  onClick={(e) => {
                    setSettingsTab(e.currentTarget.id);
                  }}
                >
                  <Typography>Delivery Addresses</Typography>
                  <FaBox />
                </div>
                <div
                  className="flex items-center gap-x-4 hover:cursor-pointer hover:text-gray-600 transition-all ease-in duration-300"
                  id="Email / Communication Preferences"
                  onClick={(e) => {
                    setSettingsTab(e.currentTarget.id);
                  }}
                >
                  <Typography>Email &#47; Communication Preferences</Typography>
                  <IoIosMail />
                </div>
              </div>
            </IconContext.Provider>
            <div className="w-[25%]">{accountSettingsDisplay(settingsTab)}</div>
          </div>
        );
      case "interests":
        return <p>interests</p>;
    }
  }

  return (
    <main className="w-[100vw] h-[115vh]">
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
      <div className="w-full flex justify-center mt-16">
        {accountTabsDisplay(currentTab)}
      </div>
    </main>
  );
};

export default AccountPage;
