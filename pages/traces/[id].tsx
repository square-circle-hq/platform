import { useRouter } from "next/router";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SiteHeader } from "@/components/site-header";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { Button } from "@/components/ui/button";
import { IconRefresh } from "@tabler/icons-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { GanttProgress } from "@/components/ui/gantt-progress";

export default function TracePage() {
  const router = useRouter();

  return (
    <>
      <SiteHeader
        title={
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/traces">Tracs</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{router.query.id}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        }
        actions={
          <Button
            variant="ghost"
            size="sm"
            className="hidden sm:flex"
            onClick={() => {
              router.reload();
            }}
          >
            <IconRefresh />
            Refresh
          </Button>
        }
      />
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={50}>
          <Collapsible
            // open={isOpen}
            // onOpenChange={setIsOpen}
            className="flex flex-col gap-2"
          >
            <CollapsibleTrigger asChild>
              <div className="w-full border-b px-4 py-2 ">
                Agent
                <GanttProgress offset={0} value={20} />
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent className="flex flex-col gap-2">
              <div className="w-full border-b px-4 py-2 ">
                response
                <GanttProgress offset={0} value={20} />
              </div>
              <div className="w-full border-b px-4 py-2 ">
                handoff
                <GanttProgress offset={20} value={20} />
              </div>
            </CollapsibleContent>
          </Collapsible>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>Two</ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
}
