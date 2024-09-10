/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  Dialog,
  DialogBody,
  DialogHeader,
  Input,
} from "@material-tailwind/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../redux/user/userApiSlice";
import { useSelector } from "react-redux";
import { setCredentials } from "../redux/auth/authSlice";
import { toast } from "react-toastify";

const SignInDisplay = (props) => {
  const state = props.state;
  const buttonClose = props.buttonClose;
  const buttonSubmit = props.buttonSubmit;
  const buttonSignup = props.buttonSignup;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading }] = useLoginMutation();
  const { userInfo } = useSelector((state) => state.persistedReducer.auth);

  console.log(email, password);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (userInfo) {
      toast.error("Log out first");
    } else if (email === "" || password === "") {
      toast.warning("enter required credentials");
    } else {
      try {
        const req = fetch("/users/auth", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ email: email, password: password }),
        });

        const res = (await req)
          .json()
          .then((data) => {
            console.log(data);
            dispatch(setCredentials(data));
          })
          .then(toast.success("Logged in!"));
        /* const res = await login({ email, password }).unwrap();
        dispatch(setCredentials({ res })); */
        //toast.success("User logged in!");
      } catch (error) {
        toast.error(error);
      }
    }
  };

  return (
    <div id="sign-in" className="bg-black z-30 rounded-lg">
      {state === true ? (
        <Dialog open={state} className="bg-gray-400 bg-opacity-75">
          <DialogHeader className="font-lt text-center justify-center text-black">
            Sign In
          </DialogHeader>
          <p className="font-rt text-center text-md text-black">
            Login into your account
          </p>
          <DialogBody>
            <form className="flex flex-col justify-center items-center">
              <div className="sign-in-input">
                <Input
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
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
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
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
          <div onClick={handleLogin} className="flex justify-center">
            {buttonSubmit ? buttonSubmit : null}
          </div>
          <div className="flex justify-center">
            {buttonSignup ? buttonSignup : null}
            {buttonClose ? buttonClose : null}
          </div>
        </Dialog>
      ) : null}
    </div>
  );
};

export default SignInDisplay;
