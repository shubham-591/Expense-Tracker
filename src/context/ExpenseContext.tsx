import React, { createContext, useState, ReactNode } from "react";
import { Expense } from "../types/expense";

interface ExpenseContextType {
  expenses: Expense[];
  addExpense: (expense: Expense) => void;
}

export const ExpenseContext = createContext<ExpenseContextType | undefined>(undefined);

export const ExpenseProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [expenses, setExpenses] = useState<Expense[]>([]);
  
    const addExpense = (expense: Expense) => {
      setExpenses((prevExpenses) => [...prevExpenses, expense]); // Correctly updates the state
    };
  
    return (
      <ExpenseContext.Provider value={{ expenses, addExpense }}>
        {children}
      </ExpenseContext.Provider>
    );
};
  
