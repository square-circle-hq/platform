import { SiteHeader } from "@/components/site-header";
import { columns } from "@/components/traces/columns";
import { DataTable } from "@/components/traces/data-table";

export default function Page() {
  return (
    <>
      <SiteHeader title={"Traces"} />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 p-4 md:gap-6 md:py-6">
            <DataTable
              columns={columns}
              data={[
                {
                  id: "trace_qqqq",
                  workflow_name: "Agent",
                  handoff_count: 2,
                  tool_count: 0,
                  duration_ms: 12345,
                },
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
}
