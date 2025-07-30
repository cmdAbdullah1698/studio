import { cn } from "@/lib/utils";

const Shard = ({
  className,
  colorClass,
}: {
  className?: string;
  colorClass?: string;
}) => (
  <svg
    viewBox="0 0 120 120"
    preserveAspectRatio="none"
    className={cn(
      `absolute -z-10`,
      className
    )}
    aria-hidden="true"
  >
    <polygon points="50,0 100,50 50,100 0,50" className={cn("fill-current", colorClass)} />
  </svg>
);

export default function BackgroundShards() {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden bg-background">
      {/* Shards for Light Theme: more blue and soft blue shards */}
      <div className="block dark:hidden">
        <Shard className="top-[-20%] left-[-15%] w-1/2 h-1/2 transform rotate-12" colorClass="text-blue-100/50" />
        <Shard className="top-[-10%] right-[-15%] w-1/3 h-1/3 transform -rotate-24" colorClass="text-blue-200/50" />
        <Shard className="top-[10%] left-[45%] w-1/4 h-1/4 transform rotate-45" colorClass="text-muted" />
        <Shard className="top-[30%] left-[10%] w-1/5 h-1/5 transform -rotate-15" colorClass="text-primary/5" />
        <Shard className="top-[50%] right-[5%] w-1/3 h-1/3 transform rotate-20" colorClass="text-blue-200/50" />
        <Shard className="top-[70%] left-[20%] w-1/6 h-1/6 transform rotate-50" colorClass="text-muted" />
        <Shard className="bottom-[-20%] left-[5%] w-1/2 h-1/2 transform rotate-45" colorClass="text-blue-100/50" />
        <Shard className="bottom-[-10%] right-[30%] w-1/4 h-1/4 transform -rotate-30" colorClass="text-primary/5" />
        <Shard className="bottom-[5%] left-[50%] w-1/3 h-1/3 transform -rotate-45" colorClass="text-muted" />
        <Shard className="top-[15%] right-[10%] w-1/4 h-1/4 transform -rotate-12" colorClass="text-primary/10" />
        <Shard className="bottom-[15%] right-[-10%] w-2/5 h-2/5 transform -rotate-30" colorClass="text-blue-200/50" />
        <Shard className="top-[80%] left-[-10%] w-1/3 h-1/3 transform rotate-60" colorClass="text-primary/5" />
      </div>

      {/* Shards for Dark Theme: more light gray and white shards */}
      <div className="hidden dark:block">
        <Shard className="top-[-20%] left-[-15%] w-1/2 h-1/2 transform rotate-12" colorClass="text-foreground/5" />
        <Shard className="top-[-10%] right-[-15%] w-1/3 h-1/3 transform -rotate-24" colorClass="text-foreground/10" />
        <Shard className="top-[10%] left-[45%] w-1/4 h-1/4 transform rotate-45" colorClass="text-foreground/5" />
        <Shard className="top-[30%] left-[10%] w-1/5 h-1/5 transform -rotate-15" colorClass="text-foreground/10" />
        <Shard className="top-[50%] right-[5%] w-1/3 h-1/3 transform rotate-20" colorClass="text-foreground/5" />
        <Shard className="top-[70%] left-[20%] w-1/6 h-1/6 transform rotate-50" colorClass="text-foreground/10" />
        <Shard className="bottom-[-20%] left-[5%] w-1/2 h-1/2 transform rotate-45" colorClass="text-foreground/10" />
        <Shard className="bottom-[-10%] right-[30%] w-1/4 h-1/4 transform -rotate-30" colorClass="text-foreground/5" />
        <Shard className="bottom-[5%] left-[50%] w-1/3 h-1/3 transform -rotate-45" colorClass="text-foreground/10" />
        <Shard className="top-[15%] right-[10%] w-1/4 h-1/4 transform -rotate-12" colorClass="text-primary/20" />
        <Shard className="bottom-[15%] right-[-10%] w-2/5 h-2/5 transform -rotate-30" colorClass="text-primary/30" />
        <Shard className="top-[80%] left-[-10%] w-1/3 h-1/3 transform rotate-60" colorClass="text-primary/10" />
      </div>
    </div>
  );
}
