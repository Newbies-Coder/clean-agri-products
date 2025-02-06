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
import { addressSchema, AddressType } from "@/schemas/address.schema";
import { Button } from "@/components/ui/button";
import { user } from "@/mocks/user";

const AddressInfoForm = () => {
  // Logged in user information
  const { province, district, ward, addressDetail } = user;

  // States
  const [selectedProvince, setSelectedProvince] = useState<string>(province);
  const [selectedDistrict, setSelectedDistrict] = useState<string>(district);

  // Define form.
  const form = useForm<AddressType>({
    resolver: zodResolver(addressSchema),
    defaultValues: {
      province,
      district,
      ward,
      addressDetail,
    },
  });

  // 'isDirty' will return 'true' if any field in the form changes
  const {
    formState: { isDirty },
  } = form;

  // Submit handler.
  function onSubmit(values: AddressType) {
    console.log(values);
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full mx-auto space-y-6 p-6"
        >
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Province field */}
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
                      setSelectedDistrict(""); // Reset district when province changes
                      form.setValue("district", ""); // Reset form dístirct
                      form.setValue("ward", ""); // Reset form ward
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
                      <SelectItem value="Ho Chi Minh">Ho Chi Minh</SelectItem>
                      <SelectItem value="Ha Noi">Ha Noi</SelectItem>
                      <SelectItem value="Hai Phong">Hai Phong</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* District field */}
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
                      form.setValue("ward", ""); // Reset ward when district changes
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
                      <SelectItem value="Binh Thanh">Binh Thanh</SelectItem>
                      <SelectItem value="Tan Phu">Tan Phu</SelectItem>
                      <SelectItem value="TP Thu Duc">TP Thu Duc</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Ward field */}
            <FormField
              control={form.control}
              name="ward"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">Commune/Ward</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
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
                      <SelectItem value="Long Truong">Long Truong</SelectItem>
                      <SelectItem value="Hiep Phu">Hiep Phu</SelectItem>
                      <SelectItem value="Binh Tho">Binh Tho</SelectItem>
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
          <div className="mt-12">
            {isDirty && (
              <Button
                type="submit"
                className="p-6 font-medium duration-300 rounded-full text-white bg-primary hover:bg-primary/80"
              >
                Save changes
              </Button>
            )}
          </div>
        </form>
      </Form>
    </>
  );
};

export default AddressInfoForm;
