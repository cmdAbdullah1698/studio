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
    className={`absolute -z-10 opacity-5 ${className}`}
    aria-hidden="true"
  >
    <polygon points="50,0 100,50 50,100 0,50" className={colorClass} />
  </svg>
);

export default function BackgroundShards() {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden bg-background">
      {/* White Shards (Major) */}
      <Shard className="top-[-20%] left-[-15%] w-1/2 h-1/2 transform rotate-12" colorClass="fill-foreground/15" />
      <Shard className="top-[-10%] right-[-15%] w-1/3 h-1/3 transform -rotate-24" colorClass="fill-foreground/10" />
      <Shard className="top-[10%] left-[45%] w-1/4 h-1/4 transform rotate-45" colorClass="fill-foreground/5" />
      <Shard className="top-[30%] left-[10%] w-1/5 h-1/5 transform -rotate-15" colorClass="fill-foreground/10" />
      <Shard className="top-[50%] right-[5%] w-1/3 h-1/3 transform rotate-20" colorClass="fill-foreground/8" />
      <Shard className="top-[70%] left-[20%] w-1/6 h-1/6 transform rotate-50" colorClass="fill-foreground/12" />
      <Shard className="bottom-[-20%] left-[5%] w-1/2 h-1/2 transform rotate-45" colorClass="fill-foreground/10" />
      <Shard className="bottom-[-10%] right-[30%] w-1/4 h-1/4 transform -rotate-30" colorClass="fill-foreground/15" />
      <Shard className="bottom-[5%] left-[50%] w-1/3 h-1/3 transform -rotate-45" colorClass="fill-foreground/5" />
      
      {/* Blue Shards (Minor) */}
      <Shard className="top-[15%] right-[10%] w-1/4 h-1/4 transform -rotate-12" colorClass="fill-primary/30" />
      <Shard className="bottom-[15%] right-[-10%] w-2/5 h-2/5 transform -rotate-30" colorClass="fill-primary/40" />
      <Shard className="top-[80%] left-[-10%] w-1/3 h-1/3 transform rotate-60" colorClass="fill-primary/20" />
    </div>
  );
}
