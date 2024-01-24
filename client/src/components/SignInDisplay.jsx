/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  Button,
  Dialog,
  DialogBody,
  DialogHeader,
  Input,
} from "@material-tailwind/react";
import { useState } from "react";
const SignInDisplay = (props) => {
  const state = props.state;
  const buttonClose = props.buttonClose;
  const buttonSubmit = props.buttonSubmit;
  const buttonSignup = props.buttonSignup;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const handleSubmit = () => {
    
  }

  return (
    <div id="sign-in" className="bg-black z-30 rounded-lg">
      {state === true ? (
        <Dialog open={state} className="bg-gray-400 bg-opacity-75">
          <DialogHeader className="font-lt text-center justify-center text-black">
            Sign In
          </DialogHeader>
          <DialogBody>
            <form className="flex flex-col justify-center items-center">
              <div className="sign-in-input">
                <Input
                  type="email"
                  placeholder="*****@***.com"
                  label="Email"
                  autoSave="off"
                  autoComplete="new-password"
                  color="black"
                  style={{ borderColor: "black" }}
                  autoFocus={false}
                />
              </div>
              <div className="sign-in-input">
                <Input
                  type="Password"
                  placeholder="*****"
                  label="Password"
                  autoComplete="new-password"
                  color="black"
                  style={{ borderColor: "black" }}
                  autoFocus={false}
                />
              </div>
            </form>
          </DialogBody>
          <div className="flex justify-center">
            {buttonSignup ? buttonSignup : null}
            {buttonClose ? buttonClose : null}
            <div onClick={handleSubmit}>{buttonSubmit ? buttonSubmit : null}</div>
          </div>
        </Dialog>
      ) : null}
    </div>
  );
};

export default SignInDisplay;
