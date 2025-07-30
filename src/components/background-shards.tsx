import { cn } from "@/lib/utils";

const Shard = ({
  className,
  colorClass,
  theme,
}: {
  className?: string;
  colorClass?: string;
  theme: "light" | "dark";
}) => (
  <svg
    viewBox="0 0 120 120"
    preserveAspectRatio="none"
    className={cn(
      `absolute -z-10 opacity-10`,
      theme === "light" && "hidden dark:block",
      theme === "dark" && "block dark:hidden",
      className
    )}
    aria-hidden="true"
  >
    <polygon points="50,0 100,50 50,100 0,50" className={colorClass} />
  </svg>
);

export default function BackgroundShards() {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden bg-background">
      {/* Shards for Light Theme: 75% blue, 25% white/foreground */}
      <div className="hidden dark:block">
        <Shard theme="dark" className="top-[-20%] left-[-15%] w-1/2 h-1/2 transform rotate-12" colorClass="fill-primary/30" />
        <Shard theme="dark" className="top-[-10%] right-[-15%] w-1/3 h-1/3 transform -rotate-24" colorClass="fill-primary/20" />
        <Shard theme="dark" className="top-[10%] left-[45%] w-1/4 h-1/4 transform rotate-45" colorClass="fill-primary/15" />
        <Shard theme="dark" className="top-[30%] left-[10%] w-1/5 h-1/5 transform -rotate-15" colorClass="fill-primary/25" />
        <Shard theme="dark" className="top-[50%] right-[5%] w-1/3 h-1/3 transform rotate-20" colorClass="fill-primary/20" />
        <Shard theme="dark" className="top-[70%] left-[20%] w-1/6 h-1/6 transform rotate-50" colorClass="fill-primary/30" />
        <Shard theme="dark" className="bottom-[-20%] left-[5%] w-1/2 h-1/2 transform rotate-45" colorClass="fill-primary/25" />
        <Shard theme="dark" className="bottom-[-10%] right-[30%] w-1/4 h-1/4 transform -rotate-30" colorClass="fill-primary/30" />
        <Shard theme="dark" className="bottom-[5%] left-[50%] w-1/3 h-1/3 transform -rotate-45" colorClass="fill-primary/15" />
        <Shard theme="dark" className="top-[15%] right-[10%] w-1/4 h-1/4 transform -rotate-12" colorClass="fill-foreground/10" />
        <Shard theme="dark" className="bottom-[15%] right-[-10%] w-2/5 h-2/5 transform -rotate-30" colorClass="fill-foreground/15" />
        <Shard theme="dark" className="top-[80%] left-[-10%] w-1/3 h-1/3 transform rotate-60" colorClass="fill-foreground/5" />
      </div>

      {/* Shards for Dark Theme: 75% white/foreground, 25% blue */}
      <div className="block dark:hidden">
        <Shard theme="light" className="top-[-20%] left-[-15%] w-1/2 h-1/2 transform rotate-12" colorClass="fill-foreground/15" />
        <Shard theme="light" className="top-[-10%] right-[-15%] w-1/3 h-1/3 transform -rotate-24" colorClass="fill-foreground/10" />
        <Shard theme="light" className="top-[10%] left-[45%] w-1/4 h-1/4 transform rotate-45" colorClass="fill-foreground/5" />
        <Shard theme="light" className="top-[30%] left-[10%] w-1/5 h-1/5 transform -rotate-15" colorClass="fill-foreground/10" />
        <Shard theme="light" className="top-[50%] right-[5%] w-1/3 h-1/3 transform rotate-20" colorClass="fill-foreground/8" />
        <Shard theme="light" className="top-[70%] left-[20%] w-1/6 h-1/6 transform rotate-50" colorClass="fill-foreground/12" />
        <Shard theme="light" className="bottom-[-20%] left-[5%] w-1/2 h-1/2 transform rotate-45" colorClass="fill-foreground/10" />
        <Shard theme="light" className="bottom-[-10%] right-[30%] w-1/4 h-1/4 transform -rotate-30" colorClass="fill-foreground/15" />
        <Shard theme="light" className="bottom-[5%] left-[50%] w-1/3 h-1/3 transform -rotate-45" colorClass="fill-foreground/5" />
        <Shard theme="light" className="top-[15%] right-[10%] w-1/4 h-1/4 transform -rotate-12" colorClass="fill-primary/30" />
        <Shard theme="light" className="bottom-[15%] right-[-10%] w-2/5 h-2/5 transform -rotate-30" colorClass="fill-primary/40" />
        <Shard theme="light" className="top-[80%] left-[-10%] w-1/3 h-1/3 transform rotate-60" colorClass="fill-primary/20" />
      </div>
    </div>
  );
}
