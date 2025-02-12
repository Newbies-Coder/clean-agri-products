/* eslint-disable @typescript-eslint/no-explicit-any */

import { Line } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, // x axis
  LinearScale, // y axis
  PointElement,
  Legend,
  Tooltip,
  Filler,
} from 'chart.js';
import { ChartType } from '@/@types/chart.type';
import { cn } from '@/lib/utils';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Filler,
);

interface LineChartProps {
  dataChart: ChartType[];
  borderColor: string;
  bgColorTop: string;
  bgColorBottom?: string;
};

function LineChart({
  dataChart,
  borderColor,
  bgColorTop,
  bgColorBottom = 'rgba(69, 71, 59, .1)',
}: LineChartProps) {
  const data = {
    labels: dataChart!.map((data) => data.label),
    datasets: [
      {
        label: 'Series',
        data: dataChart!.map((data) => data.number),
        borderColor: borderColor,
        borderWidth: 3.5,
        pointBorderColor: borderColor,
        pointBorderWidth: 6,
        tension: 0.33, // độ cong của line
        fill: true,
        backgroundColor: (context: any) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 480);
          gradient.addColorStop(0, bgColorTop);
          gradient.addColorStop(1, bgColorBottom);
          return gradient;
        },
        pointRadius: 0, // Ẩn dấu chấm
        pointHoverRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Ẩn phần chú thích (legend)
      },
      title: {
        display: false,
        text: 'Line Chart with Gradient and Smooth Curve',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      x: {
        ticks: {
          maxRotation: 0, // Giữ nhãn trục X thẳng
          minRotation: 0,
          padding: 0, // Loại bỏ padding giữa các nhãn và trục
          font: {
            size: 12, // Kích thước font chữ trục X
          },
        },
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: false,
        ticks: {
          maxTicksLimit: 8, // Giới hạn số lượng giá trị hiển thị trên trục Y
          font: {
            size: 12, // Kích thước font chữ trục Y
          },
        },
        grid: {
          borderDash: [5, 3], // nét đứt
          borderDashOffset: 3,
        },
      },
    },
  };

  return (
    <div className={cn('h-[300px] !w-full')}>
      <Line className="!w-full" data={data} options={options}></Line>
    </div>
  );
}

export default LineChart;
