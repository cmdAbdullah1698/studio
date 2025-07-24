import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  ArrowRight,
  CheckCircle,
  Facebook,
  Instagram,
  Linkedin,
  Menu,
  Palette,
  Search,
  Users,
  Briefcase,
  GraduationCap,
  Building2,
  Code
} from "lucide-react";
import Link from "next/link";
import ContactForm from "@/components/contact-form";
import Image from "next/image";

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
    className={`absolute -z-10 opacity-10 dark:opacity-5 ${className}`}
    aria-hidden="true"
  >
    <polygon points="50,0 100,50 50,100 0,50" className={colorClass} />
  </svg>
);

const BackgroundShards = () => (
  <div className="absolute inset-0 -z-20 overflow-hidden bg-background">
     {/* Blue Shards */}
    <Shard className="top-[-10%] left-[-10%] w-1/2 h-1/2 transform rotate-12" colorClass="fill-primary" />
    <Shard className="top-[20%] left-[40%] w-1/4 h-1/4 transform -rotate-45" colorClass="fill-primary/70" />
    <Shard className="bottom-[-15%] left-[10%] w-1/3 h-1/3 transform rotate-45" colorClass="fill-primary" />

    {/* Yellow Shards */}
    <Shard className="top-[5%] right-[-5%] w-1/3 h-1/3 transform -rotate-12" colorClass="fill-accent" />
    <Shard className="bottom-[30%] right-[35%] w-1/5 h-1/5 transform rotate-30" colorClass="fill-accent/70" />
    <Shard className="bottom-[-10%] right-[-15%] w-1/2 h-1/2 transform -rotate-30" colorClass="fill-accent" />

    {/* Grey Shards */}
    <Shard className="top-[50%] left-[5%] w-1/6 h-1/6 transform rotate-60" colorClass="fill-muted-foreground/30" />
    <Shard className="top-[60%] right-[10%] w-1/4 h-1/4 transform rotate-15" colorClass="fill-muted-foreground/30" />
     <Shard className="top-[5%] left-[30%] w-1/6 h-1/6 transform rotate-15" colorClass="fill-muted-foreground/30" />
  </div>
);


const navLinks = [
  { href: "#home", label: "home" },
  { href: "#about", label: "about" },
  { href: "#services", label: "services" },
  { href: "#testimonials", label: "testimonials" },
  { href: "#contact", label: "contact" },
];

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
    <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
      <Link href="/" className="text-2xl font-bold tracking-wider text-black">
        thelinkingdots
      </Link>
      <nav className="hidden md:flex items-center gap-8 text-base font-medium">
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
              <Menu className="h-7 w-7" />
              <span className="sr-only">toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="grid gap-6 text-lg font-medium mt-8">
              <Link
                href="/"
                className="text-2xl font-bold tracking-wider text-black mb-4"
              >
                thelinkingdots
              </Link>
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
          </SheetContent>
        </Sheet>
      </div>
    </div>
  </header>
);

const services = [
  {
    title: "seo & paid ads",
    icon: <Search className="h-10 w-10" />,
    description:
      "boost your visibility and drive targeted traffic with our expert seo and paid advertising campaigns.",
  },
  {
    title: "social media management",
    icon: <Users className="h-10 w-10" />,
    description:
      "engage your audience and build your brand presence across all major social media platforms.",
  },
  {
    title: "branding & creative",
    icon: <Palette className="h-10 w-10" />,
    description:
      "develop a compelling brand identity with our creative design and strategic branding services.",
  },
  {
    title: "website & automation",
    icon: <Code className="h-10 w-10" />,
    description:
      "from stunning websites to workflow automation, we build digital solutions that drive efficiency.",
  },
  {
    title: "real estate marketing",
    icon: <Building2 className="h-10 w-10" />,
    description:
      "specialized marketing strategies and digital solutions to elevate your properties and reach.",
  },
  {
    title: "education consulting",
    icon: <GraduationCap className="h-10 w-10" />,
    description:
      "consultations and digital tools for educational institutions to enhance student engagement.",
  },
];

const testimonials = [
  {
    name: "alex johnson",
    role: "real estate agent",
    quote:
      "the digital marketing strategy from thelinkingdots doubled my leads in just three months. truly remarkable results!",
    image: "https://placehold.co/100x100.png",
    aiHint: "professional portrait"
  },
  {
    name: "samantha lee",
    role: "startup founder",
    quote:
      "their branding service gave my company the professional look it needed to attract investors. i couldn't be happier.",
    image: "https://placehold.co/100x100.png",
    aiHint: "business woman"
  },
  {
    name: "michael chen",
    role: "university administrator",
    quote:
      "the consultation on digital solutions streamlined our admissions process, saving us countless hours.",
    image: "https://placehold.co/100x100.png",
    aiHint: "educator man"
  },
    {
    name: "emily Carter",
    role: "career professional",
    quote:
      "the career growth plan they devised for me was a game-changer. i landed my dream job within six months!",
    image: "https://placehold.co/100x100.png",
    aiHint: "young professional"
  },
];

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-background text-lg">
      <BackgroundShards />
      <Header />
      <main className="flex-1">
        {/* hero section */}
        <section
          id="home"
          className="relative w-full pt-32 pb-20 md:pt-48 md:pb-32"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div className="flex flex-col justify-center space-y-6">
                <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
                  linking the dots to your digital success
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  we are a collective of strategists, creatives, and innovators dedicated to providing transformative digital marketing, solutions, and training.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild size="lg" className="text-lg px-8 py-6">
                       <Link href="#contact">get started <ArrowRight className="ml-2 h-5 w-5"/></Link>
                    </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                 <Image 
                    src="https://placehold.co/600x400.png"
                    alt="digital marketing team collaboration"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-2xl"
                    data-ai-hint="team collaboration"
                  />
              </div>
            </div>
          </div>
        </section>

        {/* about us section */}
        <section id="about" className="w-full py-20 md:py-32 bg-white/50 dark:bg-card/50">
           <div className="container mx-auto px-4 md:px-6">
             <div className="grid gap-12 md:grid-cols-2 items-center">
                <div className="flex items-center justify-center">
                   <Image 
                      src="https://placehold.co/550x550.png"
                      alt="founder of thelinkingdots"
                      width={550}
                      height={550}
                      className="rounded-xl shadow-2xl"
                      data-ai-hint="business founder portrait"
                    />
                </div>
               <div className="flex flex-col justify-center space-y-6">
                  <div className="space-y-4">
                    <span className="text-primary font-semibold">about us</span>
                    <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                      crafting connections, building success
                    </h2>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                      at thelinkingdots, we demystify the digital world. our mission is to connect your vision with its audience, turning ideas into impactful realities.
                    </p>
                  </div>
                  <ul className="space-y-4 text-lg">
                      <li className="flex items-start">
                          <CheckCircle className="h-6 w-6 text-primary mr-4 mt-1 shrink-0"/>
                          <span><span className="font-semibold">client-centric strategies:</span> tailored solutions that align with your unique goals.</span>
                      </li>
                      <li className="flex items-start">
                          <CheckCircle className="h-6 w-6 text-primary mr-4 mt-1 shrink-0"/>
                          <span><span className="font-semibold">data-driven results:</span> leveraging analytics for measurable growth and roi.</span>
                      </li>
                      <li className="flex items-start">
                          <CheckCircle className="h-6 w-6 text-primary mr-4 mt-1 shrink-0"/>
                          <span><span className="font-semibold">innovative solutions:</span> staying ahead of the curve with the latest digital trends.</span>
                      </li>
                  </ul>
               </div>
             </div>
           </div>
        </section>

        {/* services section */}
        <section id="services" className="w-full py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <span className="text-primary font-semibold">our services</span>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">what we offer</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                we provide a comprehensive suite of services designed to empower your brand and career.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Card key={service.title} className="text-center hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="items-center space-y-4">
                    <div className="p-4 bg-primary/10 rounded-full text-primary">{service.icon}</div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* testimonials section */}
        <section id="testimonials" className="w-full py-20 md:py-32 bg-white/50 dark:bg-card/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                <span className="text-primary font-semibold">testimonials</span>
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">what our clients say</h2>
            </div>
            <Carousel
              opts={{ align: "start", loop: true, }}
              className="w-full max-w-6xl mx-auto"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-4 h-full">
                      <Card className="flex flex-col h-full justify-between p-6">
                        <CardContent className="p-0">
                          <blockquote className="text-xl font-medium leading-relaxed">
                            “{testimonial.quote}”
                          </blockquote>
                        </CardContent>
                        <CardHeader className="p-0 mt-6">
                           <div className="flex items-center gap-4">
                             <Avatar className="h-14 w-14">
                               <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
                               <AvatarFallback>{testimonial.name.split(' ').map(n=>n[0]).join('')}</AvatarFallback>
                             </Avatar>
                             <div>
                               <p className="font-semibold text-lg">{testimonial.name}</p>
                               <p className="text-base text-muted-foreground">{testimonial.role}</p>
                             </div>
                           </div>
                        </CardHeader>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-[-50px] scale-125"/>
              <CarouselNext className="right-[-50px] scale-125"/>
            </Carousel>
          </div>
        </section>

        {/* contact section */}
        <section id="contact" className="w-full py-20 md:py-32">
          <div className="container mx-auto grid items-center justify-center gap-8 px-4 text-center md:px-6">
            <div className="space-y-4">
              <span className="text-primary font-semibold">contact us</span>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">get in touch</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                have a question or want to work together? drop us a line.
              </p>
            </div>
            <div className="mx-auto w-full max-w-lg space-y-4">
              <Card>
                <CardContent className="p-8">
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-8 bg-card">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="text-xl font-bold tracking-wider text-black">
            thelinkingdots
          </Link>
          <p className="text-base text-muted-foreground">&copy; {new Date().getFullYear()} thelinkingdots. all rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" aria-label="facebook"><Facebook className="h-6 w-6 hover:text-primary transition-colors" /></Link>
            <Link href="#" aria-label="instagram"><Instagram className="h-6 w-6 hover:text-primary transition-colors" /></Link>
            <Link href="#" aria-label="linkedin"><Linkedin className="h-6 w-6 hover:text-primary transition-colors" /></Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
