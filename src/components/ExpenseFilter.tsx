import React, { useState } from "react";

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
    <div>
      <label>Filter by Category:</label>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">All</option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Shopping">Shopping</option>
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
