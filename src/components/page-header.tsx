import React from 'react';

interface PageHeaderProps {
  title: string;
  description: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16 pt-32">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
        {title}
      </h1>
      <p className="max-w-3xl text-muted-foreground md:text-xl/relaxed text-balance">
        {description}
      </p>
    </div>
  );
}
