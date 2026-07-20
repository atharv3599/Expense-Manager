import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Assets/styles/dashboard.css";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import DashboardCards from "./components/DashboardCards";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import PieChart from "./components/PieChart";
import MonthlyChart from "./components/MonthlyChart";

import {
  getExpenses,
  addExpense,
  deleteExpense,
  updateExpense,
} from "./services/expenseService";

function App() {
  const [expenses, setExpenses] = useState([]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const [editingExpense, setEditingExpense] = useState(null);

  // 🌙 Dark Mode
  const [darkMode, setDarkMode] = useState(false);

  const loadExpenses = async () => {
    const response = await getExpenses();
    setExpenses(response.data);
  };

  useEffect(() => {
    loadExpenses();
  }, []);

  // Add Expense
  const handleAddExpense = async (expense) => {
    await addExpense(expense);
    loadExpenses();
  };

  // Delete Expense
  const handleDelete = async (id) => {
    await deleteExpense(id);
    loadExpenses();
  };

  // Edit Button
  const handleEdit = (expense) => {
    setEditingExpense(expense);
  };

  // Update Expense
  const handleUpdateExpense = async (expense) => {
    await updateExpense(editingExpense.id, expense);
    setEditingExpense(null);
    loadExpenses();
  };

  // Search + Category Filter
  const filteredExpenses = expenses.filter((expense) => {
    const matchesSearch = expense.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "" || expense.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Sidebar darkMode={darkMode} />

      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <div
        className={darkMode ? "dark-mode" : "light-mode"}
        style={{
          marginLeft: "270px",
          padding: "30px",
          minHeight: "100vh",
          transition: "all 0.3s ease",
        }}
      >
        <HeroSection />

        <DashboardCards expenses={filteredExpenses} />

        {/* Search + Filter */}
        <div className="row mt-4 mb-4">
          <div className="col-md-6">
            <SearchBar
              search={search}
              setSearch={setSearch}
            />
          </div>

          <div className="col-md-6">
            <CategoryFilter
              category={category}
              setCategory={setCategory}
            />
          </div>
        </div>

        {/* Expense Form */}
        <ExpenseForm
          onAdd={handleAddExpense}
          onUpdate={handleUpdateExpense}
          editingExpense={editingExpense}
        />

        {/* Analytics */}
        <div className="row mt-4">
          <div className="col-lg-6 mb-4">
            <div className="card shadow p-4">
              <h4 className="mb-3">📊 Expense by Category</h4>
              <PieChart expenses={filteredExpenses} />
            </div>
          </div>

          <div className="col-lg-6 mb-4">
            <div className="card shadow p-4">
              <h4 className="mb-3">📈 Monthly Expenses</h4>
              <MonthlyChart expenses={filteredExpenses} />
            </div>
          </div>
        </div>

        {/* Expense List */}
        <ExpenseList
          expenses={filteredExpenses}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      </div>
    </>
  );
}

export default App;