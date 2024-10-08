import {
  Avatar,
  Button,
  Spinner,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import AccountTabs from "../components/accountpage/AccountTabs";
import OrdersTable from "../components/accountpage/OrdersDisplay";
import AccountDetailsDisplay from "../components/accountpage/AccountDetailsDisplay";
import PaymentMethodsDisplay from "../components/accountpage/PaymentMethodsDisplay";
import DeliveryAddressesDisplay from "../components/accountpage/DeliveryAddressesDisplay";
import EmailCommunicationPreferenceDisplay from "../components/accountpage/EmailCommunicationPreferenceDisplay";
import { useEffect, useState } from "react";
import { MdAccountBox, MdOutlinePayment } from "react-icons/md";
import { FaBox } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { IconContext } from "react-icons";
import AddInterestCard from "../components/accountpage/AddInterestCard";
import ShoeCard from "../components/ShoeCard";
import InterestCard from "../components/accountpage/InterestCard";
import { interestNameToImage } from "../assets/imgs/interests-imgs";
import { GrPowerReset } from "react-icons/gr";
import PhoneNumberDialog from "../components/accountpage/PhoneNumberDialog";
import PasswordDialog from "../components/accountpage/PasswordDialog";
import PaymentMethodsDialog from "../components/accountpage/PaymentMethodsDialog";
import DeliveryAddressesDialog from "../components/accountpage/DeliveryAddressesDialog";
import { toast } from "react-toastify";
import { setCredentials } from "../redux/auth/authSlice";

const AccountPage = () => {
  const { userInfo } = useSelector((state) => state.persistedReducer.auth);
  const { favorites } = useSelector(
    (state) => state.persistedReducer.favorites
  );
  const [currentTab, setCurrentTab] = useState("orders");
  const [settingsTab, setSettingsTab] = useState("Account Details");
  const [paymentMethodsDialog, setPaymentMethodsDialog] = useState(false);
  const [deliveryAddressesDialog, setDeliveryAddressesDialog] = useState(false);
  const [passwordDialog, setPasswordDialog] = useState(false);
  const [phoneNumberDialog, setPhoneNumberDialog] = useState(false);
  const [email, setEmail] = useState(userInfo.email);
  const [location, setLocation] = useState(userInfo.location);
  const [showSaveContainer, setShowSaveContainer] = useState(false);

  const dispatch = useDispatch();

  async function changeEmailandLocation() {
    if (email === userInfo.email && location === userInfo.location) {
      toast.error("No changes to save!");
    } else if (email !== userInfo.email && location === userInfo.location) {
      try {
        const req = fetch("/api/v1/users/profile", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: email }),
        });

        const res = (await req)
          .json()
          .then((data) => dispatch(setCredentials(data)))
          .then(toast.success("Email updated"));
      } catch (error) {
        toast.error(error);
      }
    } else if (location !== userInfo.location && email === userInfo.email) {
      try {
        const req = fetch("/api/v1/users/profile", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ location: location }),
        });

        const res = (await req)
          .json()
          .then((data) => dispatch(setCredentials(data)))
          .then(toast.success("Location updated"));
      } catch (error) {
        toast.error(error);
      }
    } else if (location !== userInfo.location && email !== userInfo.email) {
      try {
        const req = fetch("/api/v1/users/profile", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: email, location: location }),
        });

        const res = (await req)
          .json()
          .then((data) => dispatch(setCredentials(data)))
          .then(toast.success("Email updated"));
      } catch (error) {
        toast.error(error);
      }
    }
  }

  async function changePassword(newPassword) {
    if (newPassword) {
      try {
        const req = fetch("/api/v1/users/profile", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ password: newPassword }),
        });

        const res = (await req)
          .json()
          .then((data) => dispatch(setCredentials(data)))
          .then(toast.success("Password updated"));
      } catch (error) {
        toast.error(error);
      }
    } else {
      toast.error("No password was given to submit");
    }
  }

  async function addPaymentMethod() {}

  async function addDeliveryAddress() {}

  function handleEmail(text) {
    setEmail(text);
  }

  function handleLocation(location) {
    setLocation(location);
  }

  function handlePaymentMethodsDialog() {
    paymentMethodsDialog === true
      ? setPaymentMethodsDialog(false)
      : setPaymentMethodsDialog(true);
  }
  function handleDeliveryAddressesDialog() {
    deliveryAddressesDialog === true
      ? setDeliveryAddressesDialog(false)
      : setDeliveryAddressesDialog(true);
  }
  function handlePasswordDialog() {
    passwordDialog === true
      ? setPasswordDialog(false)
      : setPasswordDialog(true);
  }
  function handlePhoneNumberDialog() {
    phoneNumberDialog === true
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
            changeEmailandLocation={changeEmailandLocation}
            passwordDialog={handlePasswordDialog}
            phoneNumberDialog={handlePhoneNumberDialog}
            emailState={handleEmail}
            locationState={handleLocation}
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
              <div className="[&>*]:m-3">
                <div
                  className="flex items-center gap-x-4 hover:cursor-pointer hover:text-gray-600 transition-all ease-in duration-300"
                  id="Account Details"
                  onClick={(e) => {
                    setSettingsTab(e.currentTarget.id);
                  }}
                >
                  <MdAccountBox />
                  <Typography>Account Details</Typography>
                </div>
                <div
                  className="flex items-center gap-x-4 hover:cursor-pointer hover:text-gray-600 transition-all ease-in duration-300"
                  id="Payment Methods"
                  onClick={(e) => {
                    setSettingsTab(e.currentTarget.id);
                  }}
                >
                  <MdOutlinePayment />
                  <Typography>Payment Methods</Typography>
                </div>
                <div
                  className="flex items-center gap-x-4 hover:cursor-pointer hover:text-gray-600 transition-all ease-in duration-300"
                  id="Delivery Addresses"
                  onClick={(e) => {
                    setSettingsTab(e.currentTarget.id);
                  }}
                >
                  <FaBox />
                  <Typography>Delivery Addresses</Typography>
                </div>
                <div
                  className="flex items-center gap-x-4 hover:cursor-pointer hover:text-gray-600 transition-all ease-in duration-300"
                  id="Email / Communication Preferences"
                  onClick={(e) => {
                    setSettingsTab(e.currentTarget.id);
                  }}
                >
                  <IoIosMail />
                  <Typography>Email &#47; Communication Preferences</Typography>
                </div>
                <div
                  className={
                    showSaveContainer === true
                      ? "flex items-center gap-x-2"
                      : "hidden"
                  }
                >
                  <Button
                    color="green"
                    className="rounded-full text-xs"
                    onClick={changeEmailandLocation}
                  >
                    Save
                  </Button>
                  <div className="flex items-center gap-x-5">
                    <Tooltip
                      content="Reset Account Details Value"
                      placement="bottom"
                    >
                      <GrPowerReset className="w-6 h-6 hover:cursor-pointer" />
                    </Tooltip>
                    <Spinner className="w-6 h-6" color="green" />
                  </div>
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

  useEffect(() => {
    if (email !== userInfo.email || location !== userInfo.location) {
      setShowSaveContainer(true);
    } else {
      setShowSaveContainer(false);
    }

    if (email === "") {
      setEmail(userInfo.email);
      setShowSaveContainer(false);
    }
  }, [email, location, userInfo]);

  return (
    <>
      <DeliveryAddressesDialog
        open={deliveryAddressesDialog}
        handleDialog={handleDeliveryAddressesDialog}
      />
      <PaymentMethodsDialog
        open={paymentMethodsDialog}
        handleDialog={handlePaymentMethodsDialog}
      />
      <PasswordDialog
        open={passwordDialog}
        handleDialog={handlePasswordDialog}
        changePassword={changePassword}
      />
      <PhoneNumberDialog
        open={phoneNumberDialog}
        handleDialog={handlePhoneNumberDialog}
      />
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
