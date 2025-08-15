import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <section id="home" className="relative w-full pt-32 pb-20 md:pt-48 md:pb-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col justify-center items-center text-center space-y-6">
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
      </div>
    </section>
  );
}
