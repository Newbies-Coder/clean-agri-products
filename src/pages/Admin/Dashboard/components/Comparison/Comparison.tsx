import { PieIcon } from "@/components/common/Icons";
import Movement from "./Movement";
import { DoughnutChart } from "@/components/common/Chart";

export default function Comparison() {
  const userData = {
    datasets: [
      {
        label: "My Dataset",
        data: [1200, 1400], // Dữ liệu cho hai phần
        backgroundColor: [
          "#07B6D5", // Màu cho phần 1
          "#846CF9", // Màu cho phần 2
        ],
      },
    ],
    labels: ["Old User", "New User"],
  };
  const deviceData = {
    datasets: [
      {
        label: "My Dataset",
        data: [1200, 1400, 500], // Dữ liệu cho hai phần
        backgroundColor: [
          "#07B6D5", // Màu cho phần 1
          "#846CF9", // Màu cho phần 2
          "#FF9E69", // Màu cho phần 3
        ],
      },
    ],
    labels: ["Desktop", "Tablet", "Mobile"],
  };
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Movement title="Sessions" data="6,132" change="202">
          <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-primary-admin/10 text-blue-500">
            <PieIcon />
          </span>
        </Movement>
        <Movement
          title="Page Views"
          data="11,236"
          change="202"
          status="decrease"
        >
          <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-blue-50 text-primary-admin">
            <PieIcon />
          </span>
        </Movement>
        <Movement title="Avg. Duration" data="46s" change="22%">
          <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-orange-100 text-orange-500">
            <PieIcon />
          </span>
        </Movement>
        <Movement title="Bounce Rate" data="46s" change="30" status="decrease">
          <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-red-100 text-red-500">
            <PieIcon />
          </span>
        </Movement>
      </div>
      <div className="rounded-md bg-card text-card-foreground shadow-sm pb-6">
        <div className="p-6 text-lg font-semibold">
          New vs Returning Visitors
        </div>
        <div className="h-80 flex justify-center">
          <DoughnutChart data={userData} />
        </div>
      </div>
      <div className="rounded-md bg-card text-card-foreground shadow-sm pb-6">
        <div className="p-6 text-lg font-semibold">Device Breakdown</div>
        <div className="h-80 flex justify-center">
          <DoughnutChart data={deviceData} />
        </div>
      </div>
    </div>
  );
}
