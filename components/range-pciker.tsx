import { IconCalendar, IconSquareX } from "@tabler/icons-react";
import { useState } from "react";
import type { DateRange } from "react-day-picker";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function RangePicker() {
  const [open, setOpen] = useState<boolean>(false);
  const [dateRange, setDateRange] = useState<DateRange>();
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="w-auto justify-between font-normal"
        >
          <IconCalendar />
          {dateRange
            ? `${dateRange.from?.toLocaleDateString()}-${dateRange.to?.toLocaleDateString()}`
            : "Date"}
          {dateRange && (
            <IconSquareX
              onClick={() => {
                setDateRange(undefined);
              }}
            />
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto overflow-hidden p-0" align="start">
        <Calendar
          mode="range"
          numberOfMonths={2}
          selected={dateRange}
          captionLayout="dropdown"
          onSelect={(dateRange) => {
            setDateRange(dateRange);
            setOpen(false);
          }}
        />
      </PopoverContent>
    </Popover>
  );
}
