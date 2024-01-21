/* eslint-disable react/prop-types */
import {
  Button,
  Dialog,
  DialogBody,
  DialogHeader,
  Input,
} from "@material-tailwind/react";
const SignInDisplay = (props) => {
  const state = props.state;
  const button = props.button;

  return (
    <div id="sign-in" className="bg-black z-30 rounded-lg">
      {state === true ? (
        <Dialog open={open}>
          <DialogHeader>Sign In</DialogHeader>
          <DialogBody>
            <Input type="text" placeholder="Name" />
            <Input type="email" placeholder="Email" />
            <Input type="text" placeholder="*****" />
            <Button>Sign In</Button>
            {button ? button : null}
          </DialogBody>
        </Dialog>
      ) : null}
    </div>
  );
};

export default SignInDisplay;
