import { FaMoon, FaSun } from "react-icons/fa";

function Header({ darkMode, setDarkMode }) {
  return (
    <header
      className={`d-flex justify-content-between align-items-center p-3 shadow ${
        darkMode ? "bg-dark text-white" : "bg-white"
      }`}
      style={{
        marginLeft: "250px",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <h3 className="m-0 fw-bold">💰 Expense Manager</h3>

      <button
        className="btn btn-outline-primary"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
    </header>
  );
}

export default Header;