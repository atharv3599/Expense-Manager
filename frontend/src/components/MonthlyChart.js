import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

function MonthlyChart({ expenses }) {
  const monthlyData = {};

  expenses.forEach((expense) => {
    const month = new Date(expense.expenseDate).toLocaleString(
      "default",
      { month: "short" }
    );

    monthlyData[month] =
      (monthlyData[month] || 0) +
      Number(expense.amount);
  });

  const data = {
    labels: Object.keys(monthlyData),

    datasets: [
      {
        label: "Monthly Expense",

        data: Object.values(monthlyData),

        backgroundColor: "#17ba56",
      },
    ],
  };

  return <Bar data={data} />;
}

export default MonthlyChart;