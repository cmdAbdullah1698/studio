'use client';

import { useActionState, useFormStatus } from 'react';
import { useEffect, useRef } from 'react';
import { submitContactForm } from '@/app/actions';
import { type ContactFormState } from '@/lib/schemas';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full text-base" disabled={pending}>
      {pending ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> sending...</> : 'send message'}
    </Button>
  );
}

const initialState: ContactFormState = { message: '', success: false, errors: undefined };

export default function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!state.message) return;

    if (state.success) {
        toast({
            title: 'Success!',
            description: state.message,
        });
        formRef.current?.reset();
    } else {
        toast({
            variant: 'destructive',
            title: 'Error',
            description: state.message,
        });
    }
  }, [state, toast]);


  return (
    <form ref={formRef} action={formAction} className="space-y-2 text-left">
      <div className="space-y-1">
        <Label htmlFor="fullName" className="text-base">full name</Label>
        <Input id="fullName" name="fullName" placeholder="John Doe" required className="text-base h-11"/>
        {state.errors?.fullName && (
          <p className="text-sm font-medium text-destructive">{state.errors.fullName[0]}</p>
        )}
      </div>
      <div className="space-y-1">
        <Label htmlFor="email" className="text-base">email</Label>
        <Input id="email" name="email" type="email" placeholder="john.doe@example.com" required className="text-base h-11"/>
        {state.errors?.email && (
            <p className="text-sm font-medium text-destructive">{state.errors.email[0]}</p>
        )}
      </div>
      <div className="space-y-1">
        <Label htmlFor="phone" className="text-base">phone number (optional)</Label>
        <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 123-4567" className="text-base h-11"/>
         {state.errors?.phone && (
            <p className="text-sm font-medium text-destructive">{state.errors.phone[0]}</p>
        )}
      </div>
      <div className="space-y-1">
        <Label htmlFor="message" className="text-base">question / message</Label>
        <Textarea id="message" name="message" placeholder="How can we help you today?" required rows={4} className="text-base"/>
        {state.errors?.message && (
            <p className="text-sm font-medium text-destructive">{state.errors.message[0]}</p>
        )}
      </div>
       <div className="pt-2">
         <SubmitButton />
      </div>
    </form>
  );
}
