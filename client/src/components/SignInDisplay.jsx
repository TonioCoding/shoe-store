/* eslint-disable react/prop-types */
import {
  Dialog,
  DialogBody,
  DialogHeader,
  Input,
} from "@material-tailwind/react";
const SignInDisplay = (props) => {
  const state = props.state;
  const buttonClose = props.buttonClose;
  const buttonSubmit = props.buttonSubmit;
  const buttonSignup = props.buttonSignup;

  return (
    <div id="sign-in" className="bg-black z-30 rounded-lg">
      {state === true ? (
        <Dialog open={state} className="bg-gray-400 bg-opacity-75">
          <DialogHeader className="font-lt text-center justify-center text-black">
            Sign In
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
            {buttonSubmit ? buttonSubmit : null}
            {buttonClose ? buttonClose : null}
            {buttonSignup ? buttonSignup : null}
          </div>
        </Dialog>
      ) : null}
    </div>
  );
};

export default SignInDisplay;
