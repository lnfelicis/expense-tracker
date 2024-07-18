import React from "react";
import "../css/TransactionList.css";
import Transaction from "./Transaction";

export const TransactionList = () => {
  return (
    <>
      <div className="container">
        <h4>History</h4>
        <hr></hr>
        <div className="transaction-container">
          <Transaction />
        </div>
      </div>
    </>
  );
};
