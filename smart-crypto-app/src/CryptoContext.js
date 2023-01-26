import axios from "axios";
// import { onAuthStateChanged } from "firebase";
import React, { createContext, useContext, useEffect, useState } from "react";
import { CoinList } from "./config/api";
// import { auth, db } from "@firebase/auth";

const Crypto = createContext();

const CryptoContext = ({ children }) => {
  const [currency, setCurrency] = useState("INR");
  const [symbol, setSymbol] = useState("₹");
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [user, setUser]  = useState(null);

  const [alert, setAlert] = useState({
    open: false,
    message: "",
    type: "Success",
  });

  const [user /* setUser*/] = useState(null);

  // useEffect(() => {
  // //  onAuthStateChanged(auth , user =>{
  //   // // if(user) setUser(user)
  //   // else setUser(null)
  //  })
  // }, [])

  // firebase

  const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList(currency));
    console.log(data);

    setCoins(data);
    setLoading(false);
  };

  useEffect(() => {
    if (currency === "INR") {
      setSymbol("₹");
    } else if (currency === "CNY") {
      setSymbol("¥");
    } else if (currency === "USD") {
      setSymbol("$");
    } else if (currency === "THB") {
      setSymbol("฿");
    } else if (currency === "EUR") {
      setSymbol("€");
    } else if (currency === "GBP") {
      setSymbol("£");
    } else if (currency === "CHF") {
      setSymbol("₣");
    }
    //  else if (currency === "DIN") {
    //   setSymbol("د.ك");
    // }
    // else if (currency === "THB"){ setSymbol("฿")}
    // else if (currency === "THB"){ setSymbol("฿")}
  }, [currency]);

  return (
    <Crypto.Provider
      value={{
        currency,
        setCurrency,
        symbol,
        coins,
        loading,
        fetchCoins,
        alert,
        setAlert,
        user,
      }}
    >
      {children}
    </Crypto.Provider>
  );
};

export default CryptoContext;

export const CryptoState = () => {
  return useContext(Crypto);
};
