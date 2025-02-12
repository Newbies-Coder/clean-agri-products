import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import React from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart: React.FC = () => {
  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "Aug",
    ],
    datasets: [
      {
        label: "Dataset 1",
        data: [65, 59, 80, 200, 20, 55, 40, 90],
        backgroundColor: "#846CF9",
        hoverBackgroundColor: "#B29AFF",
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: "Bar Chart",
      },
    },
    scales: {
      x: {
        display: false, // Ẩn trục X
        grid: {
          drawBorder: false, // Không vẽ đường viền trục
          drawOnChartArea: false, // Không vẽ lưới dọc
          drawTicks: false, // Không vẽ dấu đánh dấu
        },
      },
      y: {
        display: false, // Ẩn trục Y
        grid: {
          drawBorder: false, // Không vẽ đường viền trục
          drawOnChartArea: true, // Vẽ lưới ngang
          drawTicks: false, // Không vẽ dấu đánh dấu
          color: "rgba(200, 200, 200, 0.5)", // Màu sắc của các đường nằm ngang (mờ)
        },
      },
    },
  };

  return (
    <div className="mt-4 h-[160px] px-4">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
