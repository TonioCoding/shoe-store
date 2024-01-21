/* eslint-disable react/prop-types */
import { Dialog, Input, DialogBody, DialogHeader, Button } from "@material-tailwind/react"

const SignUpDisplay = (props) => {
  const state = props.state;
  return (
    <div id="sign-up" className="bg-black z-30 rounded-lg">
        {state === true ? (<Dialog open={open}>
        <DialogHeader>Sign In</DialogHeader>
        <DialogBody>
          <Input type="text" placeholder="Name" className="sign-in-input"/>
          <Input type="email" placeholder="Email" className="sign-in-input"/>
          <Input type="text" placeholder="*****" className="sign-in-input"/>
          <Button>Sign In</Button>
          <Button type="submit"id='close-btn'onClick={ () => {
            //location.reload();
        
            
          }}>Close</Button>
        </DialogBody>
      </Dialog>) : null}
    </div>
  )
}

export default SignUpDisplay