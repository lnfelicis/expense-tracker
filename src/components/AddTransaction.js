import React, { useContext } from "react";
import "../css/AddTransaction.css";
import { AppContext } from "../context/AppContext";

export const AddTransaction = () => {
  const { transaction, setTransaction } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTransaction([
      {
        id: transaction.length + 1,
        name: [e.target.text.value],
        value: +[e.target.amount.value],
      },
      ...transaction,
    ]);
  };

  return (
    <>
      <div className="container">
        <div>
          <h4>Add New Transaction</h4>
          <hr></hr>
        </div>

        <form onSubmit={handleSubmit}>
          <h5 className="label">Text</h5>
          <input
            className="box-input"
            name="text"
            placeholder="Enter Text..."
          />

          <h5 className="label">Amount</h5>
          <h5 className="label">(negative-expense, positive-income)</h5>
          <input
            className="box-input"
            name="amount"
            type="number"
            placeholder="Enter Amount..."
          />
          <button className="button">Add Transaction</button>
        </form>
      </div>
    </>
  );
};
