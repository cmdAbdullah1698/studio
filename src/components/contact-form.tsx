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

// Service categories
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
  const [redirectTimer, setRedirectTimer] = useState<NodeJS.Timeout | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>("");
  const [selectedService, setSelectedService] = useState("");

  // Environment variables
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  const googleScriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
  const formAccessToken = process.env.NEXT_PUBLIC_FORM_ACCESS_TOKEN;

  // Load Google reCAPTCHA script on mount
  useEffect(() => {
    if (!recaptchaSiteKey) {
        console.error("reCAPTCHA site key is not configured.");
        return;
    }
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`;
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      if (redirectTimer) clearTimeout(redirectTimer);
      // Clean up the script to avoid memory leaks
      const allScripts = document.getElementsByTagName('script');
      for (let i = 0; i < allScripts.length; i++) {
        if (allScripts[i].src === script.src) {
          allScripts[i].remove();
        }
      }
    };
  }, [redirectTimer, recaptchaSiteKey]);

  const handleCategoryChange = (value: ServiceCategory) => {
    setSelectedCategory(value);
    setSelectedService("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!selectedCategory || !selectedService) {
      toast({
        variant: 'destructive',
        title: 'Please fill all required fields',
        description: 'Category and service are required.'
      });
      setIsSubmitting(false);
      return;
    }
    
    if (!recaptchaSiteKey || !googleScriptUrl || !formAccessToken) {
         toast({
            variant: 'destructive',
            title: 'Configuration Error',
            description: 'The form is not configured correctly. Please contact support.',
          });
        setIsSubmitting(false);
        return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append('category', selectedCategory);
    formData.append('service', selectedService);
    
    try {
      if (!(window as any).grecaptcha) {
        throw new Error("reCAPTCHA not loaded");
      }

      (window as any).grecaptcha.ready(async () => {
        try {
          const token = await (window as any).grecaptcha.execute(recaptchaSiteKey, { action: 'submit' });
          formData.append('recaptcha_token', token);
          formData.append('access_token', formAccessToken);

          const response = await fetch(googleScriptUrl, {
            method: 'POST',
            body: formData,
          });

          if (response.ok) {
            form.reset();
            setSelectedCategory("");
            setSelectedService("");
            toast({
              title: 'Message Sent!',
              description: 'Thank you! We will get back to you within 12 to 48 hours. Redirecting to homepage...',
            });
            const timer = setTimeout(() => router.push('/'), 6000);
            setRedirectTimer(timer);
          } else {
             const errorData = await response.json().catch(() => ({})); // try to parse error
             throw new Error(errorData.error || 'Google Script submission failed');
          }
        } catch (error) {
           toast({
            variant: 'destructive',
            title: 'Uh oh! Something went wrong.',
            description: String(error),
          });
        } finally {
           setIsSubmitting(false);
        }
      });
    } catch (error) {
       toast({
        variant: 'destructive',
        title: 'Submission Error',
        description: String(error),
      });
      setIsSubmitting(false);
    }
  };


  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-left">
      {/* Name & Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-base">Full Name</Label>
          <Input id="name" name="name" placeholder="John Doe" required className="text-base h-11" disabled={isSubmitting} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-base">Email</Label>
          <Input id="email" name="email" type="email" placeholder="john.doe@example.com" required className="text-base h-11" disabled={isSubmitting} />
        </div>
      </div>

      {/* Phone */}
      <div className="space-y-2">
        <Label htmlFor="phone" className="text-base">Phone Number</Label>
        <Input id="phone" name="phone" type="tel" placeholder="e.g. +1 234 567 8900" required className="text-base h-11" disabled={isSubmitting} />
      </div>

      {/* Category */}
      <div className="space-y-2">
        <Label htmlFor="category" className="text-base">Select a Category</Label>
        <Select onValueChange={handleCategoryChange} value={selectedCategory} required>
          <SelectTrigger className="text-base h-11">
            <SelectValue placeholder="Choose a service category..." />
          </SelectTrigger>
          <SelectContent>
            {Object.keys(serviceOptions).map(category => (
              <SelectItem key={category} value={category}>{category}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Service */}
      {selectedCategory && (
        <div className="space-y-2">
          <Label htmlFor="service" className="text-base">Select a Service</Label>
          <Select onValueChange={setSelectedService} value={selectedService} required>
            <SelectTrigger className="text-base h-11">
              <SelectValue placeholder="Choose a specific service..." />
            </Trigger>
            <SelectContent>
              {serviceOptions[selectedCategory as keyof typeof serviceOptions].map(service => (
                <SelectItem key={service} value={service}>{service}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      {/* Message */}
      {selectedService && (
        <div className="space-y-2">
          <Label htmlFor="message" className="text-base">Question / Message</Label>
          <Textarea id="message" name="message" placeholder="How can we help you today?" required rows={5} className="text-base" disabled={isSubmitting} />
        </div>
      )}

      {/* Submit */}
      <div className="pt-4">
        <Button type="submit" className="w-full text-lg py-6" disabled={isSubmitting || !selectedService}>
          {isSubmitting ? (<><Loader2 className="mr-2 h-5 w-5 animate-spin" />Sending...</>) : ('Send Message')}
        </Button>
      </div>
    </form>
  );
}
