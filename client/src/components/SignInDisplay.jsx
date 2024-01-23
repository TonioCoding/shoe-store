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
          <DialogHeader>Sign In</DialogHeader>
          <DialogBody>
              <form className="flex flex-col">
                <Input
                  type="text"
                  placeholder="Name"
                  className="sign-in-input"
                  label="Name"
                  autoComplete="false"
                  style={{paddingTop: '5px',paddingBottom: '5px'}}
                />
                <Input
                  type="email"
                  placeholder="*****@***.com"
                  className="sign-in-input"
                  label="Email"
                  autoComplete="false"
                />
                <Input
                  type="Password"
                  placeholder="*****"
                  className="sign-in-input"
                  label="Password"
                  autoComplete="false"
                />
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
