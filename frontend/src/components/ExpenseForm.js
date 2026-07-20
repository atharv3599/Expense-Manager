import { useEffect, useState } from "react";

function ExpenseForm({ onAdd, onUpdate, editingExpense }) {
  const [expense, setExpense] = useState({
    title: "",
    amount: "",
    category: "",
    expenseDate: "",
  });

  useEffect(() => {
    if (editingExpense) {
      setExpense(editingExpense);
    }
  }, [editingExpense]);

  const handleChange = (e) => {
    setExpense({
      ...expense,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingExpense) {
      onUpdate(expense);
    } else {
      onAdd(expense);
    }

    setExpense({
      Title: "",
      Amount: "",
      Category: "",
      ExpenseDate: "",
    });
  };

  return (
    <div className="card mt-4 p-4 shadow">
      <h3>{editingExpense ? "Edit Expense" : "Add Expense"}</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Title"
          name="title"
          value={expense.title}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          className="form-control mb-3"
          placeholder="Amount"
          name="amount"
          value={expense.amount}
          onChange={handleChange}
          required
        />

        <select
          className="form-select mb-3"
          name="category"
          value={expense.category}
          onChange={handleChange}
          required
        >
          <option value="">Select Category</option>
          <option>Food</option>
          <option>Travel</option>
          <option>Shopping</option>
          <option>Entertainment</option>
          <option>Education</option>
          <option>Health</option>
          <option>Bills</option>
          <option>Others</option>
        </select>

        <input
          type="date"
          className="form-control mb-3"
          name="expenseDate"
          value={expense.expenseDate}
          onChange={handleChange}
          required
        />

        <button className="btn btn-primary">
          {editingExpense ? "Update Expense" : "Save Expense"}
        </button>
      </form>
    </div>
  );
}

export default ExpenseForm;