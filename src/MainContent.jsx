import "./MainContent.scss";
import CurrencyContext from "./CurrencyContext.js";
import { useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Context from "./Context";
import Homepage from "./Homepage";
import Subpage from "./Subpage";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import BookDetail from "./BookDetail";

export default function MainContent({ currentItem }) {
  const { currency } = useContext(CurrencyContext);

  const { state, dispatch } = useContext(Context);

  const changeCurrency = () => {
    dispatch({
      type: "currency/set",
      payload: "EUR",
    });
  };

  return (
    <>
      <div>
        <p>Selected Currency: {currency}</p>
        <p>Language: {state.language}</p>
        <p>Currency: {state.currency}</p>
        <p>Shopping Cart: {state.shoppingCart.join(", ")}</p>
        <button onClick={changeCurrency}>Change something</button>
      </div>

      <main className="main">
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="/" element={<Subpage />}>
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book/:id" element={<BookDetail />} />
          </Route>
        </Routes>
      </main>
      
    </>
  );
}
