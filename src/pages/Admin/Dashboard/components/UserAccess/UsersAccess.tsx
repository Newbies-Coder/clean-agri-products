import { BarChart } from "@/components/common/Chart";
import { IncreaseIcon } from "@/components/common/Icons";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import TopCountryTable from "./TopCountryTable";


export default function UsersAccess() {
  return (
    <Card className="rounded-sm">
      <CardHeader className="mb-5 flex flex-row justify-between px-4 pb-0 pt-4">
        <div>
          <CardTitle className="text-xl font-semibold tracking-[0.2px]">
            Users
          </CardTitle>
          <CardDescription className="mt-0.5 text-[12px]">
            In Last 30 Minutes
          </CardDescription>
        </div>
        <div className="mb-2 flex items-center">
          <span className="text-4xl font-semibold text-primary-admin">63</span>
          <span>
            <IncreaseIcon className="ml-1 text-green-600" />
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="-ml-2 text-xs font-medium text-gray-800">
          User Per Minutes
        </p>
        <BarChart />
        <TopCountryTable />
      </CardContent>
    </Card>
  );
}
