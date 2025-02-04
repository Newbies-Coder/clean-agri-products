import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { checkoutSchema, type CheckoutType } from "@/schemas/checkout.schema";

const UserInfo = () => {
  // States
  const [selectedProvince, setSelectedProvince] = useState<string>("");
  const [selectedDistrict, setSelectedDistrict] = useState<string>("");

  // Define form.
  const form = useForm<CheckoutType>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      fullName: "Celine Dion",
      email: "celine@gmail.com",
      phone: "0987654321",
      country: "",
      province: "",
      district: "",
      ward: "",
      addressDetail: "",
    },
  });

  // Submit handler.
  function onSubmit(values: CheckoutType) {
    console.log(values);
  }

  return (
    <>
      <h2 className="text-2xl mb-8 font-medium">Your Infomation</h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full mx-auto space-y-6"
        >
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base">Full Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter Your Full Name"
                    className="flex h-12 w-full rounded-md border border-input bg-transparent px-3 py-1 shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid sm:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Your Email"
                      className="flex h-12 w-full rounded-md border border-input bg-transparent px-3 py-1 shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">Phone number</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Your Phone"
                      className="flex h-12 w-full rounded-md border border-input bg-transparent px-3 py-1 shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Adrress */}
          <div className="grid sm:grid-cols-3 gap-6">
            <FormField
              control={form.control}
              name="province"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">Province/City</FormLabel>
                  <Select
                    onValueChange={(value) => {
                      field.onChange(value);
                      setSelectedProvince(value);
                      setSelectedDistrict(""); // Reset quận/huyện
                      form.setValue("district", ""); // Reset form quận/huyện
                      form.setValue("ward", ""); // Reset form xã/phường
                    }}
                    value={field.value || ""}
                  >
                    <FormControl>
                      <SelectTrigger className="text-base">
                        <SelectValue
                          placeholder="Select province"
                          className="placeholder:text-gray-200"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1">Ho Chi Minh</SelectItem>
                      <SelectItem value="2">Ha Noi</SelectItem>
                      <SelectItem value="3">Hai Phong</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="district"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">District</FormLabel>
                  <Select
                    onValueChange={(value) => {
                      field.onChange(value);
                      setSelectedDistrict(value);
                      form.setValue("ward", ""); // Reset xã/phường khi chọn lại quận/huyện
                    }}
                    value={field.value || ""}
                    disabled={!selectedProvince}
                  >
                    <FormControl>
                      <SelectTrigger className="text-base">
                        <SelectValue
                          placeholder="Select district"
                          className="placeholder:text-gray-200"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1">Binh Thanh</SelectItem>
                      <SelectItem value="2">Tan Phu</SelectItem>
                      <SelectItem value="3">TP. Thu Duc</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="ward"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">Commune/Ward</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value || ""}
                    disabled={!selectedDistrict}
                  >
                    <FormControl>
                      <SelectTrigger className="text-base">
                        <SelectValue
                          placeholder="Select ward"
                          className="placeholder:text-gray-200"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1">Long Truong</SelectItem>
                      <SelectItem value="2">Hiep Phu</SelectItem>
                      <SelectItem value="3">Binh Tho</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="addressDetail"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base">Address Detail</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Street name, house number,..."
                    className="flex h-12 w-full rounded-md border border-input bg-transparent px-3 py-1 shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </>
  );
};

export default UserInfo;
