import React from "react";
import { Expense } from "../types/expense";

interface ExpenseListProps {
  expenses: Expense[];
}

const ExpenseList: React.FC<ExpenseListProps> = ({ expenses }) => {
  return (
    <ul>
      {expenses.map((expense) => (
        <li key={expense.id}>
          {expense.title} - ${expense.amount} ({expense.category}) on {expense.date}
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;

