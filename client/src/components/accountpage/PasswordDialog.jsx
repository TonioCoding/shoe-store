/* eslint-disable no-unused-vars */
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  Typography,
} from "@material-tailwind/react";
import { VscChromeClose } from "react-icons/vsc";
import PropTypes from "prop-types";
import { IconContext } from "react-icons";
import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const PasswordDialog = (props) => {
  const { userInfo } = useSelector((state) => state.persistedReducer.auth);
  const open = props.open;
  const handleDialog = props.handleDialog;
  const changePassword = props.changePassword;
  const [passwords, setPasswords] = useState({
    currentPassword: null,
    newPassword: null,
    confirmPassword: null,
  });
  const saveButtonClassName = useRef();
  const [, updatedState] = useState();
  const forceUpdate = useCallback(() => updatedState({}), []);

  function handleCurrentPassowrd(password) {
    setPasswords({ ...passwords, currentPassword: password });
  }

  function handleNewPassowrd(password) {
    setPasswords({ ...passwords, newPassword: password });
  }

  function handleConfirmPassowrd(password) {
    setPasswords({ ...passwords, confirmPassword: password });
  }

  async function validatePassword(password) {
    let isValidated;

    if (!password) {
      toast.error("No password was provided to validate");
    } else {
      try {
        const req = fetch("/api/v1/users/validatePassword", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId: userInfo._id, password: password }),
        });

        const res = (await req).json().then((data) => (isValidated = data));
        if (isValidated === true) {
          return true;
        } else {
          return false;
        }
      } catch (error) {
        toast.error(error);
      }
    }
  }

  async function submitPassword(password) {
    if (
      passwords.newPassword === null ||
      passwords.currentPassword === null ||
      passwords.confirmPassword === null ||
      passwords.newPassword === "" ||
      passwords.currentPassword === "" ||
      passwords.confirmPassword === ""
    ) {
      handleDialog();
      toast.error("Please fill out all required fields");
    } else if (
      (await validatePassword(passwords.currentPassword)) === true &&
      passwords.newPassword === passwords.confirmPassword
    ) {
      try {
        await changePassword(password);
      } catch (error) {
        handleDialog();
        toast.error(error);
      }
    }
  }

  useEffect(() => {
    console.log(passwords);
    if (
      passwords.currentPassword === "" ||
      passwords.currentPassword === null
    ) {
      saveButtonClassName.current =
        "rounded-full self-end my-4 bg-gray-400 text-gray-700";
    } else if (passwords.newPassword === "" || passwords.newPassword === null) {
      saveButtonClassName.current =
        "rounded-full self-end my-4 bg-gray-400 text-gray-700";
    } else if (
      passwords.confirmPassword === "" ||
      passwords.confirmPassword === null
    ) {
      saveButtonClassName.current =
        "rounded-full self-end my-4 bg-gray-400 text-gray-700";
    } else {
      saveButtonClassName.current =
        "rounded-full self-end my-4 bg-black text-white";
    }
    forceUpdate();
  }, [passwords, forceUpdate]);

  return (
    <Dialog open={open} size="xs">
      <DialogHeader className="flex justify-between">
        <Typography className="font-lt text-black" variant="h5">
          Edit Password
        </Typography>
        <IconContext.Provider value={{ size: "2rem" }}>
          <VscChromeClose
            onClick={handleDialog}
            className="cursor-pointer text-gray-800 bg-gray-200 rounded-full p-1"
          />
        </IconContext.Provider>
      </DialogHeader>
      <DialogBody>
        <form id="password-form" className="flex flex-col gap-y-8">
          <Input
            onChange={(e) => handleCurrentPassowrd(e.target.value)}
            label="Current Password*"
            type="password"
            minLength={8}
            placeholder="Current Password*"
            className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
            labelProps={{
              className: "hidden",
            }}
            containerProps={{ className: "min-w-[100px]" }}
          />
          <Input
            onChange={(e) => handleNewPassowrd(e.target.value)}
            label="New Password*"
            type="password"
            minLength={8}
            placeholder="New Password*"
            className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
            labelProps={{
              className: "hidden",
            }}
            containerProps={{ className: "min-w-[100px]" }}
          />
          <Input
            onChange={(e) => handleConfirmPassowrd(e.target.value)}
            label="Confirm New Password*"
            type="password"
            placeholder="Confirm New Password*"
            className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
            labelProps={{
              className: "hidden",
            }}
            containerProps={{ className: "min-w-[100px]" }}
          />
        </form>
      </DialogBody>
      <DialogFooter className="flex justify-end">
        <Button
          form="password-form"
          onClick={() => {
            submitPassword(passwords.confirmPassword);
          }}
          className={saveButtonClassName.current}
        >
          Save
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

PasswordDialog.propTypes = {
  open: PropTypes.bool,
  handleDialog: PropTypes.func,
  changePassword: PropTypes.func,
};

export default PasswordDialog;
