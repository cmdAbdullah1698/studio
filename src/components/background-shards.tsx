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
      {/* Blue Shards */}
      <Shard className="top-[-10%] left-[-10%] w-1/2 h-1/2 transform rotate-12" colorClass="fill-primary/70" />
      <Shard className="top-[20%] left-[40%] w-1/4 h-1/4 transform -rotate-45" colorClass="fill-primary/50" />
      <Shard className="bottom-[-15%] left-[10%] w-1/3 h-1/3 transform rotate-45" colorClass="fill-primary/80" />

      {/* Yellow Shards */}
      <Shard className="top-[5%] right-[-5%] w-1/3 h-1/3 transform -rotate-12" colorClass="fill-accent/70" />
      <Shard className="bottom-[30%] right-[35%] w-1/5 h-1/5 transform rotate-30" colorClass="fill-accent/50" />
      <Shard className="bottom-[-10%] right-[-15%] w-1/2 h-1/2 transform -rotate-30" colorClass="fill-accent/80" />

      {/* Grey Shards */}
      <Shard className="top-[50%] left-[5%] w-1/6 h-1/6 transform rotate-60" colorClass="fill-muted-foreground/30" />
      <Shard className="top-[60%] right-[10%] w-1/4 h-1/4 transform rotate-15" colorClass="fill-muted-foreground/20" />
      <Shard className="top-[5%] left-[30%] w-1/6 h-1/6 transform rotate-15" colorClass="fill-muted-foreground/30" />
    </div>
  );
}
