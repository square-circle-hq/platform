import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

function GanttProgress({
  className,
  value,
  offset,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root> & {
  offset?: number;
}) {
  const indicatorWidth = (value ?? 0) - (offset ?? 0);
  return (
    <ProgressPrimitive.Root
      data-slot="gantt-progress"
      className={cn(
        "bg-primary/40 relative h-2 w-full overflow-hidden rounded-full flex",
        className,
      )}
      {...props}
    >
      <div
        data-slot="gantt-progress-offset"
        className="h-full"
        style={{ width: `${offset}%` }}
      ></div>
      <ProgressPrimitive.Indicator
        data-slot="gantt-progress-indicator"
        className={`bg-white h-full transition-all`}
        style={{
          width: indicatorWidth > 0 ? `${indicatorWidth}%` : "4px",
        }}
      />
    </ProgressPrimitive.Root>
  );
}

export { GanttProgress };
