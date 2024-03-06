import { useReducer, useState } from "react";
import "./App.scss";
import Footer from "./Footer";
import Header from "./Header";
import MainContent from "./MainContent";
import CurrencyContext from "./CurrencyContext.js";
import Context from "./Context";
import reducer from "./reducer";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [currentItem, setCurrentItem] = useState("");
  const [currency, setCurrency] = useState("EUR");

  const initialContextValue = {
    user: null,
    theme: "light",
    language: "en",
    currency: "USD",
    authHash: null,
    shoppingCart: [1, 3],
  };
  const [contextValue, setContextValue] = useReducer(
    reducer,
    initialContextValue
  );

  return (
    <BrowserRouter>
    <Context.Provider
      value={{ state: contextValue, dispatch: setContextValue }}
    >
      <CurrencyContext.Provider value={{ currency, setCurrency }}>
        <div className="app">
          <div className="container">
            <Header currentItem={currentItem} setCurrentItem={setCurrentItem} />

            <MainContent currentItem={currentItem} />

            <Footer />
          </div>
        </div>
      </CurrencyContext.Provider>
    </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
