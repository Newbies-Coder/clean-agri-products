import Comparison from "./components/Comparison"
import DatePicker from "./components/DatePicker"
import Reports from "./components/Reports"
import UsersAccess from "./components/UserAccess"

const Dashboard = () => {
  return (
    <div className="min-h-[800px] space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-medium text-2xl">Analytics dashboard</h3>
        <DatePicker />
      </div>
      {/* Reports Snapshot & UserAcess */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8">
          <Reports />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <UsersAccess />
        </div>
      </div>

      {/* Comparison */}
      <Comparison />
    </div>
  )
}

export default Dashboard