import React, { useContext, useState, useRef } from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import ExpenseFilter from "../components/ExpenseFilter";
import ExpenseSummary from "../components/ExpenseSummary";
import { ExpenseContext } from "../context/ExpenseContext";
import { Expense } from "../types/expense";
import "../styles/home.css";

const Home: React.FC = () => {
    const expenseContext = useContext(ExpenseContext);
    const [filteredExpenses, setFilteredExpenses] = useState<Expense[]>([]);
    const alertShown = useRef(false); // ✅ Move useRef here, outside of the function

    if (!expenseContext) {
        return <p>Loading...</p>;
    }

    const { expenses } = expenseContext;

    const filterExpenses = (category: string, date: string) => {

        setFilteredExpenses(() => {
            let filtered = [...expenses];

            if (category) {
                filtered = filtered.filter((expense) => expense.category === category);
            }

            if (date) {
                filtered = filtered.filter((expense) => new Date(expense.date) <= new Date(date)); // ✅ Show expenses up to the selected date
            }

            if (filtered.length === 0 && !alertShown.current) {
                alertShown.current = true; // Prevent duplicate alerts
                alert("No expenses found for the selected date and category.");
                setTimeout(() => (alertShown.current = false), 500); // Reset after a short delay
            }

            return filtered;
        });
    };


    return (
        <div>
            <h2 className="home-title">Track Your Expenses</h2>
            <ExpenseForm />
            <ExpenseFilter onFilterChange={filterExpenses} />
            <ExpenseList expenses={filteredExpenses.length > 0 ? filteredExpenses : expenses} />
            <ExpenseSummary expenses={filteredExpenses.length > 0 ? filteredExpenses : expenses} />
        </div>
    );
};

export default Home;
