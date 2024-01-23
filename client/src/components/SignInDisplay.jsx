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

  return (
    <div id="sign-in" className="bg-black z-30 rounded-lg">
      {state === true ? (
        <Dialog open={true}>
          <DialogHeader className="font-lt">Sign In</DialogHeader>
          <DialogBody>
            <form className="flex flex-col">
              <div className="sign-in-input">
                <Input
                  type="text"
                  placeholder="Name"
                  label="Name"
                  autoComplete="false"
                />
              </div>
              <div className="sign-in-input">
                <Input
                  type="email"
                  placeholder="*****@***.com"
                  label="Email"
                  autoComplete="false"
                />
              </div>
              <div className="sign-in-input">
                <Input
                  type="Password"
                  placeholder="*****"
                  label="Password"
                  autoComplete="false"
                />
              </div>
            </form>
          </DialogBody>
          {buttonSubmit ? buttonSubmit : null}
          {buttonClose ? buttonClose : null}
        </Dialog>
      ) : null}
    </div>
  );
};

export default SignInDisplay;
