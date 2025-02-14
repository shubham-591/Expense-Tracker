import React from "react";
import Home from "./pages/Home";
import { ExpenseProvider } from "./context/ExpenseContext";

const App: React.FC = () => {
  return (
    <ExpenseProvider>
      <Home />
    </ExpenseProvider>
  );
};

export default App;
