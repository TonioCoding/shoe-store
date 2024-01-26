/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  Button,
  Dialog,
  DialogBody,
  DialogHeader,
  Input,
} from "@material-tailwind/react";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../redux/user/userApiSlice";
import { useSelector} from 'react-redux'


const SignInDisplay = (props) => {
  const state = props.state;
  const buttonClose = props.buttonClose;
  const buttonSubmit = props.buttonSubmit;
  const buttonSignup = props.buttonSignup;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, {isLoading}] = useLoginMutation();
  const { userInfo } = useSelector((state) => state.persistedReducer.auth);


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if(userInfo){
      console.log('error')
    } else if ( email === "" || password === ""){
      console.log('enter required credentials')
    } else {
      try {
        console.log('sucess')
      } catch (error) {
        console.log(error)
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
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
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
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
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
