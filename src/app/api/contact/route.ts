import { NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/schemas';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedFields = contactFormSchema.safeParse(body);

    if (!validatedFields.success) {
      return NextResponse.json({ message: 'Invalid form data.', errors: validatedFields.error.flatten().fieldErrors }, { status: 400 });
    }

    // Here you would typically send an email or save to a database.
    // For this example, we'll just log it.
    console.log('New API contact form submission:', validatedFields.data);

    return NextResponse.json({ message: 'Thank you for your message! We will get back to you shortly.' }, { status: 200 });

  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json({ message: 'Something went wrong on the server.' }, { status: 500 });
  }
}
