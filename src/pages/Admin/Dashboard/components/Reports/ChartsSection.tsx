import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AllUsersData,
  ConversationsData,
  EventCountData,
  NewUserData,
} from "./constant";
import { LineChart } from "@/components/common/Chart";

export default function Charts() {
  const chartTabs = [
    {
      name: "All User",
      total: 10234,
      bgColor: "bg-primary-admin/30",
      decoColor: "ring-primary-admin/20 bg-primary-admin/50",
      textColor: "text-primary-admin/80",
      data: AllUsersData,
      borderColor: "#846CF9",
      bgColorTop: "rgba(132, 108, 249, 0.6)",
    },
    {
      name: "Event Count",
      total: 536,
      bgColor: "bg-orange-50",
      decoColor: "ring-orange-100 bg-orange-200",
      textColor: "text-orange-400",
      data: EventCountData,
      borderColor: "#F97415",
      bgColorTop: "rgba(249, 116, 21, 0.3)",
    },
    {
      name: "Conversations",
      total: 21,
      bgColor: "bg-green-50",
      decoColor: "ring-green-100 bg-green-200",
      textColor: "text-green-400",
      data: ConversationsData,
      borderColor: "#21C45D",
      bgColorTop: "rgba(33, 196, 93, 0.3)",
    },
    {
      name: "New User",
      total: 3321,
      bgColor: "bg-cyan-50",
      decoColor: "ring-cyan-100 bg-cyan-200",
      textColor: "text-cyan-400",
      data: NewUserData,
      borderColor: "#07B6D5",
      bgColorTop: "rgba(7,182,213,0.3)",
    },
  ];
  return (
    <Tabs defaultValue="All User">
      {/* Tabs List */}
      <TabsList className="mb-6 grid h-full w-full grid-cols-2 items-center justify-start gap-2 rounded-md bg-transparent p-1 text-muted-foreground md:gap-6 lg:grid-cols-4">
        {chartTabs.map((ct, index) => (
          <TabsTrigger key={index} value={ct.name} asChild>
            <div
              className={`${ct.bgColor} relative flex h-full flex-col items-start justify-center gap-1.5 overflow-hidden whitespace-nowrap rounded-sm p-4 text-sm font-medium ring-offset-background transition-all before:absolute before:bottom-1 before:left-1/2 before:hidden before:h-[3px] before:w-9 before:-translate-x-1/2 before:bg-primary-admin/50 data-[state=active]:text-foreground data-[state=active]:before:block`}
            >
              <span
                className={`${ct.decoColor} absolute -right-3 -top-3 h-10 w-10 rounded-full ring-8`}
              ></span>
              <span
                className={`relative z-10 text-sm font-semibold capitalize text-gray-800`}
              >
                {ct.name}
              </span>
              <span className={`${ct.textColor} text-lg font-semibold`}>
                {ct.total.toLocaleString()}
              </span>
            </div>
          </TabsTrigger>
        ))}
      </TabsList>

      {/* Tabs Content */}
      {chartTabs.map((ct) => (
        <TabsContent key={ct.name} value={ct.name}>
          <LineChart
            dataChart={ct.data}
            borderColor={ct.borderColor}
            bgColorTop={ct.bgColorTop}
          />
        </TabsContent>
      ))}
    </Tabs>
  );
}
