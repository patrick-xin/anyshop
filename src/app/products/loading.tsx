import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 py-8">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="space-y-4">
          <Skeleton className="aspect-square" />
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      ))}
    </div>
  )
}