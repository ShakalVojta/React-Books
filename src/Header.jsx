import React from "react";
import "./Header.scss";
import TopMenu from "./TopMenu";
import CurrencySelection from "./CurrencySelection";
import CartOverview from "./CartOverview";

export default function Header({ currentItem, setCurrentItem }) {
  return (
    <header className="header">
      <div className="header__sitename" onClick={() => setCurrentItem("")}>
        Flourish and Blotts
      </div>

      <div className="header__currency-selection">
        <CurrencySelection />
      </div>
      <div className="header__cart-overview">
        <CartOverview />
      </div>
      <TopMenu currentItem={currentItem} setCurrentItem={setCurrentItem} />
    </header>
  );
}
