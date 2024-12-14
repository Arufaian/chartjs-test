import { createChart } from "./js/drawChart";
import "./styles/style.css";

document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById("mychart");
  createChart(ctx);
});
