import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  Briefcase,
  Building2,
  Code,
  Facebook,
  GraduationCap,
  Instagram,
  Linkedin,
  Menu,
  Palette,
  Search,
  Users,
} from "lucide-react";
import Link from "next/link";
import ContactForm from "@/components/contact-form";

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
    className={`absolute -z-10 opacity-20 dark:opacity-10 ${className}`}
    aria-hidden="true"
  >
    <polygon points="5,5 115,25 95,115 25,95" className={colorClass} />
  </svg>
);

const navLinks = [
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm small-caps uppercase">
    <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
      <Link href="/" className="text-xl font-bold tracking-wider text-primary">
        thelinkingdots
      </Link>
      <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="transition-colors hover:text-primary"
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="grid gap-6 text-lg font-medium mt-8">
              <Link
                href="/"
                className="text-xl font-bold tracking-wider text-primary small-caps uppercase"
              >
                thelinkingdots
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-primary small-caps uppercase"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  </header>
);

const trainingServices = [
  {
    title: "Real Estate",
    icon: <Building2 className="h-8 w-8" />,
    description:
      "Specialized marketing strategies and digital solutions to elevate your properties and reach.",
  },
  {
    title: "Education",
    icon: <GraduationCap className="h-8 w-8" />,
    description:
      "Consultations and digital tools for educational institutions to enhance student engagement.",
  },
  {
    title: "Career & Professional Growth",
    icon: <Briefcase className="h-8 w-8" />,
    description:
      "Personalized training and guidance to help you navigate your career path and achieve your goals.",
  },
];

const marketingServices = [
  {
    title: "SEO & Paid Ads",
    icon: <Search className="h-8 w-8" />,
    description:
      "Boost your visibility and drive targeted traffic with our expert SEO and paid advertising campaigns.",
  },
  {
    title: "Social Media Management",
    icon: <Users className="h-8 w-8" />,
    description:
      "Engage your audience and build your brand presence across all major social media platforms.",
  },
  {
    title: "Branding & Creative",
    icon: <Palette className="h-8 w-8" />,
    description:
      "Develop a compelling brand identity with our creative design and strategic branding services.",
  },
  {
    title: "Website & Automation",
    icon: <Code className="h-8 w-8" />,
    description:
      "From stunning websites to workflow automation, we build digital solutions that drive efficiency.",
  },
];

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Real Estate Agent",
    quote:
      "The digital marketing strategy from thelinkingdots doubled my leads in just three months. Truly remarkable results!",
    image: "https://placehold.co/100x100.png",
    aiHint: "professional portrait"
  },
  {
    name: "Samantha Lee",
    role: "Startup Founder",
    quote:
      "Their branding service gave my company the professional look it needed to attract investors. I couldn't be happier.",
    image: "https://placehold.co/100x100.png",
    aiHint: "business woman"
  },
  {
    name: "Michael Chen",
    role: "University Administrator",
    quote:
      "The consultation on digital solutions streamlined our admissions process, saving us countless hours.",
    image: "https://placehold.co/100x100.png",
    aiHint: "educator man"
  },
];

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-background small-caps uppercase tracking-wide">
      <Header />
      <main className="flex-1">
        {/* About Us Section */}
        <section
          id="about"
          className="relative w-full pt-24 pb-12 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden"
        >
          <Shard className="top-0 left-0 w-1/3 h-1/3 transform -translate-x-1/4 -translate-y-1/4" colorClass="fill-primary" />
          <Shard className="bottom-0 right-0 w-1/2 h-1/2 transform translate-x-1/4 translate-y-1/4 rotate-45" colorClass="fill-secondary" />
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 md:gap-16">
              <div className="flex flex-col justify-center space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-primary">
                  Linking The Dots To Your Digital Success
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  We are a collective of strategists, creatives, and innovators dedicated to providing transformative digital marketing, solutions, and training. Our mission is to connect your vision with its audience.
                </p>
              </div>
              <div className="flex items-center justify-center">
                 <Card className="w-full max-w-md bg-card/70 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-2xl">Our Founder's Vision</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-16 w-16">
                          <AvatarImage src="https://placehold.co/150x150.png" alt="Founder" data-ai-hint="business founder" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-bold">Jane Doe</h3>
                          <p className="text-sm text-muted-foreground">Founder & Lead Strategist</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        "I started thelinkingdots to demystify the digital world for businesses and individuals alike. We believe in building connections—between brands and customers, skills and opportunities, problems and solutions."
                      </p>
                    </CardContent>
                  </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="relative w-full py-12 md:py-24 lg:py-32 bg-muted/50 overflow-hidden">
          <Shard className="top-1/4 left-0 w-1/2 h-1/2 transform -translate-x-1/3 rotate-12" colorClass="fill-primary" />
          <Shard className="bottom-1/4 right-0 w-1/4 h-1/4 transform translate-x-1/3 -rotate-12" colorClass="fill-accent" />
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Expertise</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We provide a comprehensive suite of services designed to empower your brand and career.
              </p>
            </div>
            <div className="mx-auto w-full max-w-4xl pt-12">
              <Tabs defaultValue="trainings" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="trainings">Trainings & Consultation</TabsTrigger>
                  <TabsTrigger value="marketing">Digital Marketing</TabsTrigger>
                </TabsList>
                <TabsContent value="trainings" className="mt-8">
                  <div className="grid gap-8 md:grid-cols-3">
                    {trainingServices.map((service) => (
                      <Card key={service.title} className="text-center">
                        <CardHeader className="items-center">
                          <div className="p-4 bg-primary/10 rounded-full text-primary">{service.icon}</div>
                          <CardTitle>{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">{service.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="marketing" className="mt-8">
                  <div className="grid gap-8 sm:grid-cols-2">
                     {marketingServices.map((service) => (
                      <Card key={service.title} className="text-center">
                        <CardHeader className="items-center">
                          <div className="p-4 bg-accent/10 rounded-full text-accent-foreground">{service.icon}</div>
                          <CardTitle>{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">{service.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-5xl mb-12">What Our Clients Say</h2>
            <Carousel
              opts={{ align: "start", loop: true, }}
              className="w-full max-w-4xl mx-auto"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                      <Card className="flex flex-col h-full justify-between">
                        <CardContent className="pt-6">
                          <blockquote className="text-lg font-semibold leading-snug">
                            “{testimonial.quote}”
                          </blockquote>
                        </CardContent>
                        <CardHeader>
                           <div className="flex items-center gap-4">
                             <Avatar>
                               <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
                               <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                             </Avatar>
                             <div>
                               <p className="font-semibold">{testimonial.name}</p>
                               <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                             </div>
                           </div>
                        </CardHeader>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative w-full py-12 md:py-24 lg:py-32 bg-muted/50 overflow-hidden">
          <Shard className="top-0 left-0 w-1/2 h-1/2 transform -translate-x-1/4 -translate-y-1/4" colorClass="fill-primary" />
          <Shard className="bottom-0 right-0 w-2/3 h-2/3 transform translate-x-1/4 translate-y-1/4 rotate-45" colorClass="fill-accent" />
          <div className="container relative mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Get In Touch</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Have a question or want to work together? Drop us a line.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-6 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm small-caps uppercase">&copy; {new Date().getFullYear()} thelinkingdots. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" aria-label="Facebook"><Facebook className="h-5 w-5 hover:opacity-80 transition-opacity" /></Link>
            <Link href="#" aria-label="Instagram"><Instagram className="h-5 w-5 hover:opacity-80 transition-opacity" /></Link>
            <Link href="#" aria-label="LinkedIn"><Linkedin className="h-5 w-5 hover:opacity-80 transition-opacity" /></Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
