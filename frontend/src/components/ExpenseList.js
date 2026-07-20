function ExpenseList({ expenses, onDelete, onEdit }) {
  return (
    <div className="card mt-4 shadow p-4">
      <h3>Recent Expenses</h3>

      <table className="table table-hover mt-3">
        <thead className="table-dark">
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {expenses.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center">
                No expenses found.
              </td>
            </tr>
          ) : (
            expenses.map((expense) => (
              <tr key={expense.id}>
                <td>{expense.title}</td>
                <td>₹ {expense.amount}</td>
                <td>{expense.category}</td>
                <td>{expense.expenseDate}</td>

                <td>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => onEdit(expense)}
                  >
                    ✏ Edit
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => onDelete(expense.id)}
                  >
                    🗑 Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseList;