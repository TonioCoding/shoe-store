/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  Dialog,
  Input,
  DialogBody,
  DialogHeader,
  Button,
} from "@material-tailwind/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useRegisterMutation } from "../redux/user/userApiSlice";
import { toast } from "react-toastify";
import { setCredentials } from "../redux/auth/authSlice";

const SignUpDisplay = (props) => {
  const state = props.state;
  const closeButton = props.buttonClose;
  const signinButton = props.buttonSignin;
  const { userInfo } = useSelector((state) => state.persistedReducer.auth);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, { isLoading }] = useRegisterMutation();

  const dispatch = useDispatch();

  const handleSignup = async (e) => {
    if (userInfo) {
      toast.error("Log out first");
    } else if (name === "" || email === "" || password === "") {
      toast.warning("enter required credentials");
    } else {
      try {
        const res = await register({ name, email, password }).unwrap();
        dispatch(setCredentials({ res }));
        toast.success("User logged in!");
      } catch (error) {
        toast.error(error);
      }
    }
  };

  return (
    <div id="sign-up" className="bg-black z-30 rounded-lg">
      {state === true ? (
        <Dialog open={state} className="bg-gray-400 bg-opacity-75">
          <DialogHeader className="font-lt text-center justify-center text-black">
            Become a Member!
          </DialogHeader>
          <p className="font-rt text-center text-black text-md">Sign up</p>
          <DialogBody>
            <form className="flex flex-col justify-center items-center">
              <div className="sign-in-input" autoFocus>
                <Input
                  type="text"
                  placeholder="Name"
                  className="!border !border-black text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-black
                  k placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                  labelProps={{
                    className: "hidden",
                  }}
                  style={{
                    color: "#330000",
                  }}
                  containerProps={{ className: "min-w-[100px]" }}
                />
              </div>
              <div className="sign-in-input">
                <Input
                  type="email"
                  placeholder="Email"
                  className="!border !border-black text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-black
                  k placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                  labelProps={{
                    className: "hidden",
                  }}
                  style={{
                    color: "#330000",
                  }}
                  containerProps={{ className: "min-w-[100px]" }}
                />
              </div>
              <div className="sign-in-input">
                <Input
                  type="password"
                  placeholder="Password"
                  className="!border !border-black text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-black
                  k placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                  labelProps={{
                    className: "hidden",
                  }}
                  style={{
                    color: "#330000",
                  }}
                  containerProps={{ className: "min-w-[100px]" }}
                />
              </div>
            </form>
          </DialogBody>
          <div className="flex justify-center">
            <Button
              color="green"
              className="sign-in-btn font-lt"
              onClick={handleSignup}
            >
              Create Account
            </Button>
          </div>
          <div className="flex justify-center">
            {signinButton ? signinButton : null}
            {closeButton ? closeButton : null}
          </div>
        </Dialog>
      ) : null}
    </div>
  );
};

export default SignUpDisplay;
