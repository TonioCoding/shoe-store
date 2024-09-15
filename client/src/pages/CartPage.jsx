import { useSelector } from "react-redux";

const CartPage = () => {
  const { userInfo } = useSelector((state) => state.persistedReducer.cart);
  
  return <main>CartPage</main>;
};

export default CartPage;
