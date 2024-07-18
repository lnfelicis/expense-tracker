import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Transaction() {
  const { transaction, setTransaction } = useContext(AppContext);

  const handleRemove = (id) => {
    setTransaction(transaction.filter((t) => t.id !== id));
  };
  return (
    <>
      {transaction.map((transaction) => (
        <div className="box" key={transaction.id}>
          <b>{transaction.name}</b>
          <b className="right-content">
            {transaction.value > 0 ? "+" : "-"}
            {`${Math.abs(transaction.value)}`}
            <span className="span">&#8378;</span>
          </b>
          <div
            className={transaction.value > 0 ? "green-box" : "red-box"}
          ></div>
          <button
            onClick={() => handleRemove(transaction.id)}
            className={
              transaction.value > 0
                ? "remove-button-green"
                : "remove-button-red"
            }
          >
            X
          </button>
        </div>
      ))}
    </>
  );
}

export default Transaction;
