import { Skeleton as AtomSkeleton } from "@/components/ui/skeleton";

export interface SkeletonProps {
  rows?: number;
}

export function Skeleton({ rows = 10 }: SkeletonProps) {
  return (
    <div className="flex items-center space-x-4">
      {/* {<AtomSkeleton className="h-12 w-12 rounded-full" />} */}
      <div className="flex-1 space-y-2">
        {Array.from({ length: rows }).map((_, i) => (
          <AtomSkeleton key={i} className="h-10 w-full" />
        ))}
      </div>
    </div>
  );
}
