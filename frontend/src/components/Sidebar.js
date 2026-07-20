import {
  FaHome,
  FaWallet,
  FaChartPie,
  FaCog,
  FaSignOutAlt
} from "react-icons/fa";

function Sidebar() {
  return (
    <div
      style={{
        width: "250px",
        height: "100vh",
        background: "#1f2937",
        color: "white",
        position: "fixed",
        left: 0,
        top: 0,
        padding: "30px"
      }}
    >
      <h2>💰 Expense Manager</h2>

      <hr />

      <p><FaHome /> Dashboard</p>

      <p><FaWallet /> Expenses</p>

      <p><FaChartPie /> Analytics</p>

      <p><FaCog /> Settings</p>

      <p><FaSignOutAlt /> Logout</p>
    </div>
  );
}

export default Sidebar;