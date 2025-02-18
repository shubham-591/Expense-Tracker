import React, { createContext, useState, ReactNode, useEffect } from "react";
import { Expense } from "../types/expense";

interface ExpenseContextType {
  expenses: Expense[];
  addExpense: (expense: Expense) => void;
}

export const ExpenseContext = createContext<ExpenseContextType | undefined>(undefined);

export const ExpenseProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  // const addExpense = (expense: Expense) => {
  //   setExpenses((prevExpenses) => [...prevExpenses, expense]); // Correctly updates the state
  // };
  // Load expenses from localStorage when the app mounts
  useEffect(() => {
    const storedExpenses = localStorage.getItem("expenses");
    if (storedExpenses) {
      setExpenses(JSON.parse(storedExpenses));
    }
  }, []);

  // Add a new expense and save to both state and localStorage
  const addExpense = (expense: Expense) => {
    const updatedExpenses = [...expenses, expense];
    setExpenses(updatedExpenses);
    localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
  };

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense }}>
      {children}
    </ExpenseContext.Provider>
  );
};

