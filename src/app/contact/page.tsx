import ContactForm from "@/components/contact-form";
import PageHeader from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 pb-20 md:pb-32">
      <PageHeader
        title="Get In Touch"
        description="Have a question or want to work together? Drop us a line."
      />

      <div className="mx-auto w-full max-w-lg">
        <Card>
          <CardContent className="p-8">
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
