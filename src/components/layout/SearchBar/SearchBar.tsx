import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="flex relative items-center">
      <Search size='20' className="absolute ml-4"/>
      <Input placeholder="Search" className="pl-11 rounded-e-none h-[45px] placeholder:text-[16px] focus-visible:ring-0" />
      <Button className="rounded-s-none h-[45px] lg:px-6">Search</Button>
    </div>
  );
}
