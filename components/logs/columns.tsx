import { ColumnDef } from "@tanstack/react-table";

export type Response = {
  id: string;
  model: string;
  created_at: number;
  status: string;
};

export const columns: ColumnDef<Response>[] = [
  {
    accessorKey: "model",
    header: "Model",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "created_at",
    header: "Created at",
    cell: ({ row }) => {
      const response = row.original;
      const date = new Date(response.created_at * 1000);
      return date.toLocaleString();
    },
  },
];
