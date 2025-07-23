import { Brain, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-primary" />
              <div>
                <span className="text-xl font-bold text-foreground">Ignite AI Academy</span>
                <p className="text-sm text-muted-foreground">for Young Minds</p>
              </div>
            </Link>
            <Link to="/" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
          <div className="text-sm text-muted-foreground mb-8">
            Last updated: July 23, 2025
          </div>

          <div className="prose prose-lg max-w-none text-foreground">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
              <p className="mb-4 leading-relaxed">
                By enrolling your child in Ignite AI Academy for Young Minds programs or using our website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Description of Services</h2>
              <p className="mb-4 leading-relaxed">
                Ignite AI Academy provides AI education programs for elementary school children aged 6-11. Our services include:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Age-appropriate AI and technology education</li>
                <li>Hands-on learning experiences and projects</li>
                <li>Small class sizes with qualified instructors</li>
                <li>Regular progress reports and communication with parents</li>
                <li>After-school programs and summer camps</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Enrollment and Registration</h2>
              <h3 className="text-lg font-medium mb-2">Eligibility</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Programs are designed for children ages 6-11</li>
                <li>Parent/guardian consent is required for enrollment</li>
                <li>Students must meet age requirements for specific program levels</li>
              </ul>
              
              <h3 className="text-lg font-medium mb-2">Registration Process</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Complete enrollment forms with accurate information</li>
                <li>Provide emergency contact information</li>
                <li>Submit required medical information if applicable</li>
                <li>Pay applicable fees and deposits</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Payment Terms</h2>
              <ul className="list-disc pl-6 mb-4">
                <li>Tuition and fees are due prior to program start dates</li>
                <li>Payment plans may be available upon request</li>
                <li>Late payment fees may apply</li>
                <li>Refund policies are outlined in our separate refund policy</li>
                <li>We reserve the right to suspend services for non-payment</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Cancellation and Refund Policy</h2>
              <h3 className="text-lg font-medium mb-2">Cancellation by Parents</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Cancellations must be submitted in writing</li>
                <li>Refunds are prorated based on timing of cancellation</li>
                <li>Registration fees are non-refundable</li>
                <li>Medical withdrawals may be eligible for full refunds with documentation</li>
              </ul>
              
              <h3 className="text-lg font-medium mb-2">Cancellation by Academy</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>We reserve the right to cancel programs due to low enrollment</li>
                <li>Full refunds will be provided for Academy-initiated cancellations</li>
                <li>Alternative program options may be offered</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Student Conduct and Safety</h2>
              <p className="mb-4 leading-relaxed">
                We maintain a safe, inclusive learning environment. Students are expected to:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Follow instructor guidance and academy rules</li>
                <li>Treat peers, instructors, and equipment with respect</li>
                <li>Use technology and AI tools responsibly</li>
                <li>Report any safety concerns immediately</li>
              </ul>
              <p className="mb-4 leading-relaxed">
                Violation of conduct policies may result in suspension or removal from programs without refund.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
              <ul className="list-disc pl-6 mb-4">
                <li>All curriculum, materials, and content are proprietary to Ignite AI Academy</li>
                <li>Students retain ownership of their original creative works</li>
                <li>We may showcase student work with parental permission</li>
                <li>Unauthorized reproduction of our materials is prohibited</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
              <p className="mb-4 leading-relaxed">
                Ignite AI Academy's liability is limited to the amount of tuition paid. We are not liable for:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Indirect, incidental, or consequential damages</li>
                <li>Personal property damage or loss</li>
                <li>Injuries occurring outside of program activities</li>
                <li>Technology failures or data loss</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Photography and Media Release</h2>
              <p className="mb-4 leading-relaxed">
                By enrolling, you consent to photography and video recording of your child for:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Documentation of learning activities</li>
                <li>Marketing and promotional materials</li>
                <li>Social media and website content</li>
                <li>Educational presentations</li>
              </ul>
              <p className="mb-4 leading-relaxed">
                You may opt out of media release by providing written notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
              <p className="mb-4 leading-relaxed">
                We reserve the right to modify these Terms of Service at any time. Changes will be communicated via email and posted on our website. Continued participation in our programs constitutes acceptance of updated terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
              <p className="mb-4 leading-relaxed">
                These Terms of Service are governed by the laws of [State/Province]. Any disputes will be resolved through binding arbitration in [Location].
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <p className="mb-4 leading-relaxed">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p>Email: legal@igniteai.academy</p>
                <p>Address: [Address Coming Soon]</p>
                <p>Phone: [Phone Number Coming Soon]</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;