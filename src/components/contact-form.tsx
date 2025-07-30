'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';

export default function ContactForm() {
  const router = useRouter();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [redirectTimer, setRedirectTimer] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Clear the timer if the component unmounts
    return () => {
      if (redirectTimer) {
        clearTimeout(redirectTimer);
      }
    };
  }, [redirectTimer]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xeozzezl', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        form.reset();
        toast({
          title: 'Message Sent!',
          description:
            'Thank you! We will get back to you within 12 to 48 hours. Redirecting to homepage...',
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
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      <div className="space-y-1">
        <Label htmlFor="name" className="text-base">
          Full Name
        </Label>
        <Input
          id="name"
          name="name"
          placeholder="John Doe"
          required
          className="text-base h-11"
          disabled={isSubmitting}
        />
      </div>

      <div className="space-y-1">
        <Label htmlFor="email" className="text-base">
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="john.doe@example.com"
          required
          className="text-base h-11"
          disabled={isSubmitting}
        />
      </div>

      <div className="space-y-1">
        <Label htmlFor="message" className="text-base">
          Question / Message
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="How can we help you today?"
          required
          rows={4}
          className="text-base"
          disabled={isSubmitting}
        />
      </div>

      <div className="pt-2">
        <Button type="submit" className="w-full text-base" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
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
