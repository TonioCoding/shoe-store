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
          <DialogHeader className="font-lt text-center justify-center">
            Sign In
          </DialogHeader>
          <DialogBody>
            <form className="flex flex-col justify-center items-center">
              <div className="sign-in-input">
                <Input
                  type="text"
                  placeholder="Name"
                  label="Name"
                  autoComplete="off"
                />
              </div>
              <div className="sign-in-input">
                <Input
                  type="email"
                  placeholder="*****@***.com"
                  label="Email"
                  autoComplete="off"
                />
              </div>
              <div className="sign-in-input">
                <Input
                  type="Password"
                  placeholder="*****"
                  label="Password"
                  autoComplete="off"
                />
              </div>
            </form>
          </DialogBody>
          <div className="flex justify-center">
            {buttonSubmit ? buttonSubmit : null}
            {buttonClose ? buttonClose : null}
          </div>
        </Dialog>
      ) : null}
    </div>
  );
};

export default SignInDisplay;
