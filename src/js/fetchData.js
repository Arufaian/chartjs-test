import data from "../data.json";

export function getData() {
  const labels = Object.keys(data[2022]);
  const data2022 = Object.values(data[2022]);
  const data2023 = Object.values(data[2023]);
  return { labels, data2022, data2023 };
}
