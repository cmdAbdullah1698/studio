import PageHeader from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

const achievements = [
    "Launched and scaled a PropTech startup in a competitive market",
    "Managed marketing and account success for leading property portals",
    "Delivered impactful trade and BTL marketing solutions for an FMCG giant",
    "Helped brands and teams navigate digital transformation in competitive markets"
];

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 md:px-6 pb-20 md:pb-32">
            <PageHeader
                title="Empowering Brands Through Digital Innovation for Over 15 Years"
                description="With 15+ years of hands-on experience, we specialize in providing high-impact digital solutions tailored for the hospitality, real estate, FMCG, and technology sectors."
            />

            <Card className="overflow-hidden">
                <div className="grid md:grid-cols-2">
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Journey & Expertise</h2>
                        <p className="text-muted-foreground mb-6 text-lg">
                           From launching property portals to leading national marketing campaigns, our founder and team bring cross-industry knowledge backed by innovation, execution, and client success.
                        </p>
                        <ul className="space-y-4">
                            {achievements.map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                         <p className="text-lg mt-6 font-semibold">
                            Whether you're a startup or an enterprise, we help you grow smart, digital, and fast.
                        </p>
                    </div>
                    <div className="relative min-h-[300px] md:min-h-0">
                         <Image
                            src="https://placehold.co/600x800.png"
                            alt="Our Team"
                            layout="fill"
                            objectFit="cover"
                            className="grayscale hover:grayscale-0 transition-all duration-300"
                            data-ai-hint="corporate team"
                        />
                    </div>
                </div>
            </Card>
        </div>
    );
}
