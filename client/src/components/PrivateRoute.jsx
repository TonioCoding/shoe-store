import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateRoute = () => {
  const { userInfo } = useSelector((state) => state.persistedReducer.auth);

  if (!userInfo) {
    console.log(`Login required to view "${window.location.pathname}"`);
  }

  return userInfo ? <Outlet /> : <Navigate to={"/"} replace />;
};
