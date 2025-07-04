import Head from "next/head";
import { DataTable } from "@/components/data-table";
import { columns } from "@/components/logs/columns";
import { RangePicker } from "@/components/range-pciker";
import { SearchInput } from "@/components/search-input";
import { SiteHeader } from "@/components/site-header";
import { Skeleton } from "@/components/skeleton";
// import { useResponses } from "@/hooks/use-responses";

export default function Page() {
  // const { data, isLoading } = useResponses(window.location.search)
  return (
    <>
      <Head>
        <title>Logs</title>
      </Head>
      <SiteHeader title={"Logs"} />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-row gap-2 px-4 pt-4">
            <RangePicker />
            <SearchInput />
          </div>
          <div className="flex flex-col gap-4 p-4 md:gap-6 md:py-6">
            {true ? (
              <Skeleton />
            ) : (
              <DataTable
                columns={columns}
                data={[
                  {
                    id: "resp_1111111",
                    model: "gpt-4o",
                    created_at: 1751605540,
                    status: "completed",
                  },
                ]}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
