import ContactForm from "@/components/contact-form";
import PageHeader from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 pb-20 md:pb-32">
      <PageHeader
        title="Let's Connect"
        description="Please fill out the form below, and we'll get back to you as soon as possible."
      />

      <div className="mx-auto w-full max-w-2xl">
        <Card>
          <CardContent className="p-8">
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
