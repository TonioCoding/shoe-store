import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateRoute = () => {
  const { userInfo } = useSelector((state) => state.persistedReducer.auth);
  /*
  if (!userInfo && window.location.href === "http://localhost:3000/profile"){
    toast.error('Login required to view profile',{
        toastId: 'error1'
    })
    const currentUrl = window.location.href;
    console.log(currentUrl);
  }
  */
  return userInfo ? <Outlet /> : <Navigate to={"/sign-in"} replace />;
};


