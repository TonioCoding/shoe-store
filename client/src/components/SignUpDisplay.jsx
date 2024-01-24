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

const SignUpDisplay = (props) => {
  const state = props.state;
  const closeButton = props.buttonClose;
  const signinButton = props.buttonSignin;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {};

  return (
    <div id="sign-up" className="bg-black z-30 rounded-lg">
      {state === true ? (
        <Dialog open={state} className="bg-gray-400 bg-opacity-75">
          <DialogHeader className="font-lt text-center justify-center text-black">
            Sign Up & Become a Member
          </DialogHeader>
          <DialogBody>
            <form className="flex flex-col justify-center items-center">
              <div className="sign-in-input" autoFocus>
                <Input
                  type="text"
                  placeholder="Name"
                  label="Name"
                  autoSave="off"
                  autoComplete="new-password"
                  color="black"
                  style={{ borderColor: "black" }}
                  autoFocus={false}
                />
              </div>
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
            {signinButton ? signinButton : null}
            {closeButton ? closeButton : null}
            <Button
              color="green"
              className="sign-in-btn"
              onClick={handleSubmit}
            >
              Create Account
            </Button>
          </div>
        </Dialog>
      ) : null}
    </div>
  );
};

export default SignUpDisplay;
