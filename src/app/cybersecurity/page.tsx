import PageHeader from "@/components/page-header";
import { Card } from "@/components/ui/card";
import { ShieldCheck, Server, Scan, DatabaseZap, ShieldQuestion, UserCheck } from "lucide-react";
import Image from "next/image";
import React from "react";

const services = [
    { title: "Website Security & Monitoring", description: "SSL setup, threat detection, DDoS protection", icon: <ShieldCheck /> },
    { title: "Endpoint Security", description: "Antivirus, malware protection, and device management", icon: <UserCheck /> },
    { title: "Vulnerability Assessment", description: "Identify, assess, and patch security weaknesses", icon: <Scan /> },
    { title: "Secure Hosting & Backups", description: "Safe cloud storage, regular backups, disaster recovery", icon: <Server /> },
    { title: "Consultation & Training", description: "Cyber hygiene, awareness training, and compliance audits", icon: <ShieldQuestion /> },
    { title: "Data Privacy Solutions", description: "Ensuring data privacy and building trust with your customers.", icon: <DatabaseZap /> }
];

export default function CybersecurityPage() {
    return (
        <div className="container mx-auto px-4 md:px-6 pb-20 md:pb-32">
            <PageHeader
                title="Secure Your Digital Assets. Stay Ahead of Threats."
                description="In a connected world, cyber threats are a reality. We offer cybersecurity solutions to protect your digital infrastructure, ensure data privacy, and build trust with your customers."
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {services.map((service, index) => (
                    <Card key={index} className="p-6 flex flex-col items-center text-center hover:shadow-xl hover:border-accent transition-all duration-300">
                        <div className="p-4 bg-accent/10 rounded-full text-accent mb-4">
                            {React.cloneElement(service.icon, { className: 'h-8 w-8' })}
                        </div>
                        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                        <p className="text-muted-foreground">{service.description}</p>
                    </Card>
                ))}
            </div>

             <Card className="overflow-hidden">
                 <div className="grid md:grid-cols-2 items-center">
                    <div className="relative min-h-[300px] md:min-h-[400px]">
                         <Image
                            src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxjb21wdXRlciUyMHNlY3VyaXR5fGVufDB8fHx8MTc1MzU2MDUyNnww&ixlib=rb-4.1.0&q=80&w=1080"
                            alt="Cybersecurity abstract shield"
                            layout="fill"
                            objectFit="cover"
                            data-ai-hint="cybersecurity abstract shield"
                        />
                    </div>
                    <div className="p-8 md:p-12">
                        <h3 className="text-2xl font-bold mb-4">Safeguard Your Operations</h3>
                        <p className="text-muted-foreground text-lg">
                           Let us help you safeguard your operations and reputation from growing digital risks. A strong security posture is not just a defense mechanism; it's a business enabler.
                        </p>
                    </div>
                </div>
            </Card>
        </div>
    );
}
