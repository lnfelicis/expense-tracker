import React, { useContext } from "react";
import "../css/Balance.css";
import { AppContext } from "../context/AppContext";

export const Balance = () => {
  const { transaction } = useContext(AppContext);
  let balance = transaction.reduce((total, t) => total + t.value, 0).toFixed(2);

  return (
    <>
      <h5 className="balance-header">YOUR BALANCE</h5>
      <h3 className="balance">
        {balance}
        <span className="span">&#8378;</span>
      </h3>
    </>
  );
};
