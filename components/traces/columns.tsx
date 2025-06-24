import { ColumnDef } from "@tanstack/react-table";
import { IconDots } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Trace = {
  id: string;
  workflow_name: string;
  handoff_count?: number;
  tool_count?: number;
  duration_ms?: number;
};

export const columns: ColumnDef<Trace>[] = [
  {
    accessorKey: "workflow_name",
    header: "Workflow Name",
  },
  {
    accessorKey: "handoff_count",
    header: "Handoffs",
  },
  {
    accessorKey: "tool_count",
    header: "Tools",
  },
  {
    accessorKey: "duration_ms",
    header: "Execution Time",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const trace = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <IconDots className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Link className="w-full" href={`/traces/${trace.id}`}>
                View
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
