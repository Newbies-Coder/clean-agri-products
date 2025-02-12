import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Charts from "./ChartsSection";

function getLastThreeDays(): string[] {
  const today = new Date();
  const yesterday = new Date(today);
  const dayBeforeYesterday = new Date(today);

  yesterday.setDate(today.getDate() - 1);
  dayBeforeYesterday.setDate(today.getDate() - 2);

  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
  };

  return [
    today.toLocaleDateString("en-US", options),
    yesterday.toLocaleDateString("en-US", options),
    dayBeforeYesterday.toLocaleDateString("en-US", options),
  ];
}

export default function Reports() {
  const dates = getLastThreeDays();
  const [dateSelected, setDateSelected] = useState<string>();
  return (
    <Card className="rounded-sm">
      <CardHeader className="mb-6 flex flex-row justify-between p-4">
        {/* Heading */}
        <div>
          <CardTitle className="text-xl font-semibold tracking-[0.2px]">
            Reports Snapshot
          </CardTitle>
          <CardDescription className="mt-0.5 text-xs">
            Demographic properties of your customer
          </CardDescription>
        </div>

        {/* Select Date */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="flex justify-between">
            <Button
              variant="outline"
              className="text-default-500 border border-gray-300 py-5 font-normal text-gray-500 outline-none focus:border-gray-500/50 focus:outline-none hover:bg-inherit hover:text-inherit"
            >
              <span>{dateSelected ? dateSelected : "Select Date"}</span>
              <ChevronDown className="!size-5" strokeWidth={1.5} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-auto">
            <DropdownMenuRadioGroup
              value={dateSelected}
              onValueChange={setDateSelected}
            >
              {dates.map((date) => (
                <DropdownMenuRadioItem
                  className="flex items-center justify-between px-2 capitalize hover:bg-gray-600"
                  value={date}
                  key={date}
                >
                  <span>{date}</span>
                  {date == dateSelected && <Check size={20} strokeWidth={1} />}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent>
        <Charts />
      </CardContent>
    </Card>
  );
}
