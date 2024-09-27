import {
  Avatar,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Typography,
} from "@material-tailwind/react";
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
import AddInterestCard from "../components/accountpage/AddInterestCard";
import ShoeCard from "../components/ShoeCard";
import InterestCard from "../components/accountpage/InterestCard";
import { interestNameToImage } from "../assets/imgs/interests-imgs";

const AccountPage = () => {
  const { userInfo } = useSelector((state) => state.persistedReducer.auth);
  const { favorites } = useSelector(
    (state) => state.persistedReducer.favorites
  );
  const [currentTab, setCurrentTab] = useState("orders");
  const [settingsTab, setSettingsTab] = useState("Account Details");
  const [paymentMethodsDialong, setPaymentMethodsDialog] = useState(false);
  const [deliveryAddressesDialong, setDeliveryAddressesDialog] =
    useState(false);
  const [passwordDialong, setPasswordDialog] = useState(false);
  const [phoneNumberDialong, setPhoneNumberDialog] = useState(false);

  function handlePaymentMethodsDialog() {
    paymentMethodsDialong === true
      ? setPaymentMethodsDialog(false)
      : setPaymentMethodsDialog(true);
  }
  function handleDeliveryAddressesDialog() {
    deliveryAddressesDialong === true
      ? setDeliveryAddressesDialog(false)
      : setDeliveryAddressesDialog(true);
  }
  function handlePasswordDialog() {
    passwordDialong === true
      ? setPasswordDialog(false)
      : setPasswordDialog(true);
  }
  function handlePhoneNumberDialog() {
    phoneNumberDialong === true
      ? setPhoneNumberDialog(false)
      : setPhoneNumberDialog(true);
  }

  function setTab(tab) {
    setCurrentTab(tab);
  }

  function accountSettingsDisplay(state) {
    switch (state) {
      case "Account Details":
        return (
          <AccountDetailsDisplay
            passwordDialog={handlePasswordDialog}
            phoneNumberDialog={handlePhoneNumberDialog}
          />
        );
      case "Payment Methods":
        return (
          <PaymentMethodsDisplay
            paymentMethodsDialog={handlePaymentMethodsDialog}
          />
        );
      case "Delivery Addresses":
        return (
          <DeliveryAddressesDisplay
            deliveryAddressesDialog={handleDeliveryAddressesDialog}
          />
        );
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
        if (favorites) {
          return favorites.map(
            ({
              _id,
              name,
              model,
              price,
              onSale,
              imgUrls,
              brand,
              sizesNotInStock,
              colors,
            }) => {
              return (
                <ShoeCard
                  key={_id}
                  id={_id}
                  name={name}
                  price={price}
                  imgUrls={imgUrls}
                  model={model}
                  brand={brand}
                  sizesNotInStock={sizesNotInStock}
                  onSale={onSale}
                  colors={colors}
                />
              );
            }
          );
        } else {
          return (
            <Typography className="font-lt" variant="h6">
              Items added to your Favorites will be saved here&#46;
            </Typography>
          );
        }
      case "settings":
        return (
          <div className="flex-col md:flex-row flex gap-x-[12%] w-full justify-start mx-5 ml-[4.2rem]">
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
        return (
          <div className="flex flex-col justify-start mx-2">
            <Typography className="font-lt" variant="h6">
              Add your interests to shop a collection of products that are based
              on what you&#39;re into&#46;
            </Typography>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-2 justify-center">
              <AddInterestCard />
              {[...userInfo.interests].map((interest, index) => {
                return (
                  <InterestCard
                    key={index}
                    text={interest}
                    img={interestNameToImage(interest)}
                  />
                );
              })}
            </div>
          </div>
        );
    }
  }

  return (
    <>
      <Dialog open={paymentMethodsDialong}>
        <DialogHeader></DialogHeader>
        <DialogBody></DialogBody>
        <DialogFooter></DialogFooter>
      </Dialog>
      <Dialog open={deliveryAddressesDialong}>
        <DialogHeader></DialogHeader>
        <DialogBody></DialogBody>
        <DialogFooter></DialogFooter>
      </Dialog>
      <Dialog open={passwordDialong}>
        <DialogHeader></DialogHeader>
        <DialogBody></DialogBody>
        <DialogFooter></DialogFooter>
      </Dialog>
      <Dialog open={phoneNumberDialong}>
        <DialogHeader></DialogHeader>
        <DialogBody></DialogBody>
        <DialogFooter></DialogFooter>
      </Dialog>
      <main className="w-[100vw] h-fit">
        <div className="flex flex-col gap-x-7 w-full">
          <div className="flex">
            <div className="flex gap-x-6 ml-5 my-5">
              <Avatar
                src={userInfo.avatarUrl}
                size="xxl"
                className="hover:cursor-pointer"
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
        <div className="w-full flex justify-center my-9 flex-wrap">
          {accountTabsDisplay(currentTab)}
        </div>
      </main>
    </>
  );
};

export default AccountPage;
