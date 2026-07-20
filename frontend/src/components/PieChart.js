import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart({ expenses }) {
  const categories = {};

  expenses.forEach((expense) => {
    categories[expense.category] =
      (categories[expense.category] || 0) +
      Number(expense.amount);
  });

  const data = {
    labels: Object.keys(categories),

    datasets: [
      {
        label: "Expenses",

        data: Object.values(categories),

        backgroundColor: [
          "#36A2EB",
          "#da0e74",
          "#336fbe",
          "#FFCE56",
          "#9966FF",
          "#FF9F40",
          "#8BC34A",
          "#607D8B",
        ],

        borderWidth: 2,
      },
    ],
  };

  return <Pie data={data} />;

}

export default PieChart;