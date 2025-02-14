import React, { useState, useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import { Expense } from "../types/expense";

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

  const { addExpense } = expenseContext;

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
    setTitle("");
    setAmount("");
    setCategory("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" placeholder="Amount" />
      <input value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" />
      <input value={date} onChange={(e) => setDate(e.target.value)} type="date" />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;


