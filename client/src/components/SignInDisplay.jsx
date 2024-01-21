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
  function disableScroll() {
    // Get the current page scroll position
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    let scrollLeft = window.scrollX || document.documentElement.scrollLeft;
    // if any scroll is attempted,
    // set this to the previous value
    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    };
  }
  if (state === true) {
    disableScroll();
  }
  const [open, setOpen] = useState(true)

  return (
    <div id="sign-in" className="bg-black z-30 rounded-lg">
        {state === true ? (<Dialog open={open}>
        <DialogHeader>Sign In</DialogHeader>
        <DialogBody>
          <Input type="text" placeholder="Name" />
          <Input type="email" placeholder="Email" />
          <Input type="text" placeholder="*****" />
          <Button>Sign In</Button>
          <Button type="submit"id='close-btn'onClick={ () => {
            //location.reload();
        
            
          }}>Close</Button>
        </DialogBody>
      </Dialog>) : null}
    </div>
  );
};

export default SignInDisplay;
