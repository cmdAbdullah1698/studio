'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function ContactForm() {
  return (
    <form
      action="https://formspree.io/f/xeozzezl"
      method="POST"
      className="space-y-4 text-left"
    >
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
        />
      </div>

      <div className="pt-2">
        <Button type="submit" className="w-full text-base">
          Send Message
        </Button>
      </div>
    </form>
  );
}
