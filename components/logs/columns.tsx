import { ColumnDef } from "@tanstack/react-table";

export type Response = {
  id: string;
  model: string;
  created_at: number;
  status: string;
  input: unknown[];
  output: unknown[];
};

export const columns: ColumnDef<Response>[] = [
  {
    accessorKey: "input",
    header: "Input",
    cell: ({ row }) => {
      const response = row.original;
      const first = response.input.at(0);
      if (first.type === "message") {
        const content = first.content.at(0);
        if (content?.type === "input_text")
          return <div className="max-w-md truncate">{content.text}</div>;
      }
    },
  },
  {
    accessorKey: "output",
    header: "Output",
    cell: ({ row }) => {
      const response = row.original;
      const last = response.output.at(-1);
      if (last.type === "message") {
        const content = last.content.at(0);
        if (content?.type === "output_text")
          return <div className="max-w-md truncate">{content.text}</div>;
      }
    },
  },
  {
    accessorKey: "model",
    header: "Model",
  },
  {
    accessorKey: "created_at",
    header: "Created",
    cell: ({ row }) => {
      const response = row.original;
      const date = new Date(response.created_at * 1000);
      return date.toLocaleString();
    },
  },
];
