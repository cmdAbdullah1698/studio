'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

export default function ContactForm() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<any>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    const formData = {
      fullName: e.currentTarget.fullName.value,
      email: e.currentTarget.email.value,
      phone: e.currentTarget.phone.value,
      message: e.currentTarget.message.value,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrors(data.errors || {});
        throw new Error(data.message || 'Something went wrong.');
      }

      toast({
        title: 'Success!',
        description: data.message,
      });
      (e.target as HTMLFormFormElement).reset();
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: error.message || 'Failed to send message.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 text-left" noValidate>
      <div className="space-y-1">
        <Label htmlFor="fullName" className="text-base">Full Name</Label>
        <Input id="fullName" name="fullName" placeholder="John Doe" required className="text-base h-11"/>
        {errors?.fullName && (
          <p className="text-sm font-medium text-destructive">{errors.fullName[0]}</p>
        )}
      </div>
      <div className="space-y-1">
        <Label htmlFor="email" className="text-base">Email</Label>
        <Input id="email" name="email" type="email" placeholder="john.doe@example.com" required className="text-base h-11"/>
        {errors?.email && (
            <p className="text-sm font-medium text-destructive">{errors.email[0]}</p>
        )}
      </div>
      <div className="space-y-1">
        <Label htmlFor="phone" className="text-base">Phone Number (Optional)</Label>
        <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 123-4567" className="text-base h-11"/>
         {errors?.phone && (
            <p className="text-sm font-medium text-destructive">{errors.phone[0]}</p>
        )}
      </div>
      <div className="space-y-1">
        <Label htmlFor="message" className="text-base">Question / Message</Label>
        <Textarea id="message" name="message" placeholder="How can we help you today?" required rows={4} className="text-base"/>
        {errors?.message && (
            <p className="text-sm font-medium text-destructive">{errors.message[0]}</p>
        )}
      </div>
       <div className="pt-2">
         <Button type="submit" className="w-full text-base" disabled={loading}>
            {loading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</> : 'Send Message'}
        </Button>
      </div>
    </form>
  );
}
