
'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const serviceOptions = {
  "Training": [
    "Entrepreneurship & Innovation",
    "CV Building",
    "Career Counselling",
    "Life Coaching"
  ],
  "Digital Solutions": [
    "Website Development",
    "Mobile App Development",
    "Social Media Campaigns",
    "SEO & SEM",
    "Digital Solutions for Hospitality",
    "Real Estate Tech Solutions"
  ],
  "Cybersecurity": [
    "Website Security & Monitoring",
    "Endpoint Security",
    "Vulnerability Assessment",
    "Secure Hosting & Backups",
    "Consultation & Training",
    "Data Privacy Solutions"
  ]
};

type ServiceCategory = keyof typeof serviceOptions | "";

export default function ContactForm() {
  const router = useRouter();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [redirectTimer, setRedirectTimer] = useState<ReturnType<typeof setTimeout> | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>("");
  const [selectedService, setSelectedService] = useState("");

  useEffect(() => {
    return () => {
      if (redirectTimer) {
        clearTimeout(redirectTimer);
      }
    };
  }, [redirectTimer]);

  const handleCategoryChange = (value: ServiceCategory) => {
    setSelectedCategory(value);
    setSelectedService("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Front-end validation (shadcn Select doesn't use `required`)
    const form = e.currentTarget as HTMLFormElement;
    const name = (form.elements.namedItem('name') as HTMLInputElement)?.value?.trim();
    const email = (form.elements.namedItem('email') as HTMLInputElement)?.value?.trim();
    const phone = (form.elements.namedItem('phone') as HTMLInputElement)?.value?.trim();
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement)?.value?.trim();

    if (!name || !email || !phone) {
      toast({
        variant: 'destructive',
        title: 'Missing information',
        description: 'Please fill out your name, email, and phone number.',
      });
      return;
    }
    if (!selectedCategory || !selectedService) {
      toast({
        variant: 'destructive',
        title: 'Select category & service',
        description: 'Please choose both a category and a specific service.',
      });
      return;
    }
    if (!message) {
      toast({
        variant: 'destructive',
        title: 'Message required',
        description: 'Please tell us a bit about your request.',
      });
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData(form);
    formData.append('category', selectedCategory);
    formData.append('service', selectedService);

    try {
      // Your Google Apps Script Web App URL
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbymkbqaAjgKqU8wrdwp3up6IQU2eSyosi01scGxFuzZLIl3F9slDMD1XusYou6tSLo/exec',
        {
          method: 'POST',
          body: formData,
        }
      );

      if (response.ok) {
        form.reset();
        setSelectedCategory('');
        setSelectedService('');
        toast({
          title: 'Message Sent!',
          description: 'Thank you! We will get back to you within 12 to 48 hours. Redirecting to homepage...',
        });
        const timer = setTimeout(() => {
          router.push('/');
        }, 6000);
        setRedirectTimer(timer);
      } else {
        toast({
          variant: 'destructive',
          title: 'Uh oh! Something went wrong.',
          description: 'There was a problem with your request.',
        });
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem with your request.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-left">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-base">
            Full Name
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="John Doe"
            className="text-base h-11"
            disabled={isSubmitting}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-base">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john.doe@example.com"
            className="text-base h-11"
            disabled={isSubmitting}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="text-base">
          Phone Number
        </Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="e.g. +1 234 567 8900"
          className="text-base h-11"
          disabled={isSubmitting}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="category" className="text-base">
          Select a Category
        </Label>
        <Select onValueChange={handleCategoryChange} value={selectedCategory}>
          <SelectTrigger className="text-base h-11">
            <SelectValue placeholder="Choose a service category..." />
          </SelectTrigger>
          <SelectContent>
            {Object.keys(serviceOptions).map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {selectedCategory && (
        <div className="space-y-2">
          <Label htmlFor="service" className="text-base">
            Select a Service
          </Label>
          <Select onValueChange={setSelectedService} value={selectedService}>
            <SelectTrigger className="text-base h-11">
              <SelectValue placeholder="Choose a specific service..." />
            </SelectTrigger>
            <SelectContent>
              {serviceOptions[selectedCategory].map((service) => (
                <SelectItem key={service} value={service}>
                  {service}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      {selectedService && (
        <div className="space-y-2">
          <Label htmlFor="message" className="text-base">
            Question / Message
          </Label>
          <Textarea
            id="message"
            name="message"
            placeholder="How can we help you today?"
            rows={5}
            className="text-base"
            disabled={isSubmitting}
          />
        </div>
      )}

      <div className="pt-4">
        <Button type="submit" className="w-full text-lg py-6" disabled={isSubmitting || !selectedService}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </Button>
      </div>
    </form>
  );
}
