'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect, useRef } from 'react';
import { submitContactForm } from '@/app/actions';
import { type ContactFormState } from '@/lib/schemas';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? 'Submitting...' : 'Send Message'}
    </Button>
  );
}

export default function ContactForm() {
  const initialState: ContactFormState = { message: '', success: false };
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: 'Success!',
          description: state.message,
        });
        formRef.current?.reset();
      } else if (state.errors) {
         toast({
           variant: 'destructive',
           title: 'Error',
           description: state.message,
         });
      }
    }
  }, [state, toast]);

  return (
    <form ref={formRef} action={formAction} className="space-y-4 text-left">
      <div className="space-y-2">
        <Label htmlFor="fullName">Full Name</Label>
        <Input id="fullName" name="fullName" placeholder="John Doe" required />
        {state.errors?.fullName && (
          <p className="text-sm font-medium text-destructive">{state.errors.fullName[0]}</p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" placeholder="john.doe@example.com" required />
        {state.errors?.email && (
            <p className="text-sm font-medium text-destructive">{state.errors.email[0]}</p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number (Optional)</Label>
        <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 123-4567" />
         {state.errors?.phone && (
            <p className="text-sm font-medium text-destructive">{state.errors.phone[0]}</p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Question / Message</Label>
        <Textarea id="message" name="message" placeholder="How can we help you today?" required />
        {state.errors?.message && (
            <p className="text-sm font-medium text-destructive">{state.errors.message[0]}</p>
        )}
      </div>
      <SubmitButton />
    </form>
  );
}
