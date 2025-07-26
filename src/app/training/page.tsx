import PageHeader from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Briefcase, Handshake, Users } from "lucide-react";
import Image from "next/image";

const trainingAreas = [
    {
        icon: <Users className="h-8 w-8" />,
        title: "Entrepreneurship & Innovation",
        description: "Learn how to launch, scale, and sustain a business with minimal risk and maximum agility."
    },
    {
        icon: <Briefcase className="h-8 w-8" />,
        title: "CV Building",
        description: "Craft job-winning CVs that reflect your strengths and stand out to employers."
    },
    {
        icon: <Handshake className="h-8 w-8" />,
        title: "Career Counselling",
        description: "Navigate your career path with strategic advice, industry insights, and practical tools."
    },
    {
        icon: <Award className="h-8 w-8" />,
        title: "Life Coaching",
        description: "Work through mindset blocks, build confidence, and achieve work-life balance."
    }
];

export default function TrainingPage() {
    return (
        <div className="container mx-auto px-4 md:px-6 pb-20 md:pb-32">
            <PageHeader
                title="Personalised Guidance for Businesses and Individuals"
                description="We offer one-to-one and group-based consultancy tailored to business owners, professionals, and aspiring entrepreneurs. Our aim is to unlock potential, accelerate growth, and drive clarity through targeted training and mentoring."
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {trainingAreas.map(area => (
                    <Card key={area.title} className="text-center p-4 hover:shadow-xl hover:border-accent transition-all duration-300">
                        <CardHeader className="items-center space-y-4">
                           <div className="p-4 bg-accent/10 rounded-full text-accent">{area.icon}</div>
                           <CardTitle>{area.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{area.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <Card className="overflow-hidden">
                <div className="grid md:grid-cols-2 items-center">
                     <div className="relative min-h-[300px] md:min-h-[400px]">
                         <Image
                            src="https://placehold.co/600x400.png"
                            alt="Consultation session"
                            layout="fill"
                            objectFit="cover"
                            data-ai-hint="business consultation"
                        />
                    </div>
                    <div className="p-8 md:p-12">
                        <h3 className="text-2xl font-bold mb-4">Results-Driven Training &amp; Consultation</h3>
                        <p className="text-muted-foreground text-lg">
                            Whether you're at the start of your journey or facing a transition, our approach is designed to deliver tangible outcomes. We listen, we strategize, and we empower you to succeed.
                        </p>
                    </div>
                </div>
            </Card>

        </div>
    );
}
