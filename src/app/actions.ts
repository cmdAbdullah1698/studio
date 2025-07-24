'use server';

import { contactFormSchema, type ContactFormState } from '@/lib/schemas';

export async function submitContactForm(
    prevState: ContactFormState,
    formData: FormData
): Promise<ContactFormState> {
    const validatedFields = contactFormSchema.safeParse({
        fullName: formData.get('fullName'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        message: formData.get('message'),
    });

    if (!validatedFields.success) {
        return {
            message: 'Please correct the errors below.',
            errors: validatedFields.error.flatten().fieldErrors,
            success: false,
        };
    }

    // Here you would typically send an email or save to a database.
    // For this example, we'll just log it and return a success message.
    console.log('New contact form submission:');
    console.log(validatedFields.data);

    return {
        message: 'Thank you for your message! We will get back to you shortly.',
        success: true,
    };
}
