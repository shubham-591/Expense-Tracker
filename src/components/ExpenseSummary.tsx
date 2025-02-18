import React from "react";
import { Expense } from "../types/expense";
import "../styles/expenseSummary.css";

interface ExpenseSummaryProps {
  expenses: Expense[];
}

const ExpenseSummary: React.FC<ExpenseSummaryProps> = ({ expenses }) => {
  const totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div>
      <h2 className="summary-title">Total Expenses: Rs. {totalAmount.toFixed(2)}</h2>
    </div>
  );
};

export default ExpenseSummary;
