import { getData } from "./fetchData";
import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  Colors,
} from "chart.js";

Chart.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  Colors
);

export function createChart(ctx) {
  const { labels, data2022, data2023 } = getData();

  new Chart(ctx, {
    type: "bar",

    data: {
      labels: labels,

      datasets: [
        {
          label: "2022",
          data: data2022,
          backgroundColor: "#A02334",
          borderColor: "black",
        },

        {
          label: "2023",
          data: data2023,
          backgroundColor: "#96CEB4",
          borderColor: "black",
        },
      ],
    },

    options: {
      responsive: true,
      plugins: {
        title: {
          text: "Laporan penjualan",
          display: true,
        },
      },
    },
  });
}
