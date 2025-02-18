import React, { useState, useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import { Expense } from "../types/expense";
import { categories } from "../constants/categories";
import "../styles/expenseForm.css";

const ExpenseForm: React.FC = () => {
  const expenseContext = useContext(ExpenseContext);

  // Ensure hooks are always called at the top level
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  if (!expenseContext) {
    return <p>Loading...</p>;  // Handle missing context gracefully
  }

  const { addExpense, expenses } = expenseContext;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !amount || !category || !date) return;

    const newExpense: Expense = {
      id: Date.now(),
      title,
      amount: parseFloat(amount),
      category,
      date,
    };

    addExpense(newExpense);

    // Save expenses to localStorage after adding a new one
    localStorage.setItem("expenses", JSON.stringify([...expenses, newExpense]));


    setTitle("");
    setAmount("");
    setCategory("");
    setDate("");
  };

  return (
    <div className="expense-form-container">
      <form onSubmit={handleSubmit} className="expense-form">
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
        <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" placeholder="Amount" />
        {/* <input value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" /> */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <input value={date} onChange={(e) => setDate(e.target.value)} type="date" />
        <div className="button-container">
        <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;


