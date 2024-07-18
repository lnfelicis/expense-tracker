import React, { useContext } from "react";
import "../css/IncomeExpenses.css";
import { AppContext } from "../context/AppContext";

export const IncomeExpenses = () => {
  const { transaction } = useContext(AppContext);
  return (
    <div className="income-expenses-container">
      <div className="income-expenses-column">
        <h5 className="income-expenses-heading ">INCOME</h5>
        <h4 className="income-expenses-amount income">
          {transaction
            .reduce((income, t) => income + (t.value > 0 ? t.value : 0), 0)
            .toFixed(2)}
          <span className="span">&#8378;</span>
        </h4>
      </div>

      <div className="income-expenses-divider"></div>

      <div className="income-expenses-column">
        <h5 className="income-expenses-heading ">EXPENSE</h5>
        <h4 className="income-expenses-amount expense">
          {Math.abs(
            transaction.reduce(
              (income, t) => income + (t.value < 0 ? t.value : 0),
              0
            )
          ).toFixed(2)}
          <span className="span">&#8378;</span>
        </h4>
      </div>
    </div>
  );
};
