import PageHeader from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import { Smartphone, Laptop, Search, BarChart, Hotel, Building } from "lucide-react";

const services = [
    { 
        title: "Website Development", 
        description: "Business websites, landing pages, eCommerce, CMS platforms", 
        icon: <Laptop /> 
    },
    { 
        title: "Mobile App Development", 
        description: "Native & cross-platform apps for Android and iOS", 
        icon: <Smartphone /> 
    },
    { 
        title: "Social Media Campaigns", 
        description: "Content creation, paid ads, performance analytics", 
        icon: <BarChart /> 
    },
    { 
        title: "SEO & SEM", 
        description: "Drive organic traffic and ROI-driven Google Ads campaigns", 
        icon: <Search /> 
    },
    { 
        title: "Digital Solutions for Hospitality", 
        description: "Hotel booking systems, guest apps, channel integrations", 
        icon: <Hotel /> 
    },
    { 
        title: "Real Estate Tech Solutions", 
        description: "Property portals, CRM integrations, 3D tours, listing engines", 
        icon: <Building /> 
    }
];

export default function DigitalSolutionsPage() {
    return (
        <div className="container mx-auto px-4 md:px-6 pb-20 md:pb-32">
            <PageHeader
                title="From Concept to Code — We Build What Brands Need"
                description="Our digital services are designed to help businesses thrive in an ever-evolving digital landscape. We combine creativity, technology, and strategy to build assets that grow your business."
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {services.map((service, index) => (
                    <Card key={index} className="flex flex-col justify-between hover:shadow-xl hover:border-accent transition-all duration-300">
                        <CardHeader className="flex-row items-center gap-4 space-y-0">
                            <div className="p-3 bg-accent/10 rounded-md text-accent">{React.cloneElement(service.icon, { className: 'h-6 w-6' })}</div>
                            <CardTitle className="text-xl">{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">{service.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <Card className="overflow-hidden">
                 <div className="grid md:grid-cols-2 items-center">
                    <div className="p-8 md:p-12">
                        <h3 className="text-2xl font-bold mb-4">Scalable, Responsive, and Secure</h3>
                        <p className="text-muted-foreground text-lg">
                           Our team of experts deliver scalable, responsive, and secure digital products.
                        </p>
                    </div>
                     <div className="relative min-h-[300px] md:min-h-[400px]">
                         <Image
                            src="https://placehold.co/600x400.png"
                            alt="Scalable and secure digital solutions"
                            layout="fill"
                            objectFit="cover"
                            data-ai-hint="scalable technology"
                        />
                    </div>
                </div>
            </Card>

        </div>
    );
}
