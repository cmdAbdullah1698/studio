import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <section id="home" className="relative w-full pt-32 pb-20 md:pt-48 md:pb-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              we link. you grow.
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              We are a collection of strategists, creatives, and innovators
              dedicated to providing transformative digital marketing,
              solutions, and training.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link href="/contact">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjb25uZWN0aW9ucyUyMGdyb3d0aHxlbnwwfHx8fDE3NTM3NTU0NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="digital marketing team collaboration"
              width={600}
              height={400}
              className="rounded-xl shadow-2xl"
              data-ai-hint="connections growth"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
