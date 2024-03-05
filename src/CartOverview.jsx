import { useContext } from "react";
import Context from "./Context";

export default function CartOverview() {
  const { state } = useContext(Context);

  return (
    <>
      <div>Cart Overview: {state.shoppingCart.length}</div>
    </>
  );
}
