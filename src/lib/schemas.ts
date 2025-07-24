import { z } from 'zod';

export const contactFormSchema = z.object({
  fullName: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  phone: z.string().min(10, {
    message: 'Phone number must be at least 10 digits.',
  }).optional().or(z.literal('')),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }).max(500, {
    message: 'Message must not exceed 500 characters.',
  }),
});

export type ContactFormState = {
    message: string;
    errors?: {
        fullName?: string[];
        email?: string[];
        phone?: string[];
        message?: string[];
    };
    success: boolean;
};
