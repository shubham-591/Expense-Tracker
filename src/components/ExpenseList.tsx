import React, { useEffect, useState } from "react";
import { Expense } from "../types/expense";
import "../styles/expenseList.css";

interface ExpenseListProps {
  expenses: Expense[];
}

const ExpenseList: React.FC<ExpenseListProps> = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    // Load expenses from localStorage if available
    const storedExpenses = localStorage.getItem("expenses");
    if (storedExpenses) {
      setExpenses(JSON.parse(storedExpenses));
    }
  }, []);

  return (
    <div className="expense-container">
      <ul className="expense-list">
        {expenses.map((expense, index) => (
          <li key={expense.id} className="expense-item">
            {index + 1}. {expense.title} - Rs. {expense.amount} ({expense.category}) on {expense.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;

