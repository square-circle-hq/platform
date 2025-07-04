import { IconSearch } from "@tabler/icons-react";
import { Input } from "@/components/ui/input";

export function SearchInput() {
  return (
    <div className="relative order-2 w-full lg:order-1 lg:max-w-[280px]">
      <IconSearch className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
      <Input type="search" />
    </div>
  );
}
