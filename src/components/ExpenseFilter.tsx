import React, { useState } from "react";
import "../styles/expenseFilter.css";
import { categories } from "../constants/categories";

interface ExpenseFilterProps {
  onFilterChange: (category: string, date: string) => void;
}

const ExpenseFilter: React.FC<ExpenseFilterProps> = ({ onFilterChange }) => {
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const handleFilterChange = () => {
    onFilterChange(category, date);
  };

  return (
    <div className="filter-container">
      <label>Filter by Category:</label>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">All Categories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <label>Filter by Date:</label>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button onClick={handleFilterChange}>Apply Filters</button>
      <button onClick={() => { setCategory(""); setDate(""); onFilterChange("", ""); }}>
        Reset Filters
      </button>

    </div>
  );
};

export default ExpenseFilter;
