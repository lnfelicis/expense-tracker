import { createContext, useState } from "react";
import { transactionData } from "../data/TransactionData";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [transaction, setTransaction] = useState(transactionData);

  const values = {
    transaction,
    setTransaction,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
