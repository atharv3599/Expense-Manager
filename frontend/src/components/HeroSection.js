function HeroSection() {
  return (
    <div
      className="mt-4 p-5 rounded"
      style={{
        background: "linear-gradient(135deg, #01050e, #884def)",
        color: "white",
      }}
    >
      <h1 className="fw-bold">Welcome Back 👋</h1>

      <p className="mt-3">
        Manage your daily expenses, monitor your spending, and stay in control
        of your budget.
      </p>

      <div className="mt-4">
        <button className="btn btn-light me-3">
          ➕ Add Expense
        </button>

        <button className="btn btn-outline-light">
          📊 View Analytics
        </button>
      </div>
    </div>
  );
}

export default HeroSection;