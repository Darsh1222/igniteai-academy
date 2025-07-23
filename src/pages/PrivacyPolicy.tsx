import { Brain, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
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
          <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
          <div className="text-sm text-muted-foreground mb-8">
            Last updated: July 23, 2025
          </div>

          <div className="prose prose-lg max-w-none text-foreground">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
              <p className="mb-4 leading-relaxed">
                Welcome to Ignite AI Academy for Young Minds ("we," "our," or "us"). We are committed to protecting the privacy and safety of children who participate in our AI education programs. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you visit our website or enroll in our programs.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
              <h3 className="text-lg font-medium mb-2">Personal Information</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Student names, ages, and contact information</li>
                <li>Parent/guardian names, email addresses, and phone numbers</li>
                <li>Emergency contact information</li>
                <li>Medical information relevant to program participation</li>
                <li>Academic progress and assessment data</li>
              </ul>
              
              <h3 className="text-lg font-medium mb-2">Technical Information</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Website usage data and analytics</li>
                <li>Device information and IP addresses</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
              <ul className="list-disc pl-6 mb-4">
                <li>Provide and improve our educational programs</li>
                <li>Communicate with parents/guardians about student progress</li>
                <li>Ensure student safety and emergency contacts</li>
                <li>Process enrollment and payment information</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Send program updates and educational resources</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">COPPA Compliance</h2>
              <p className="mb-4 leading-relaxed">
                We comply with the Children's Online Privacy Protection Act (COPPA). We do not knowingly collect personal information from children under 13 without verifiable parental consent. All data collection for children under 13 is done with explicit parental permission and for educational purposes only.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Data Sharing and Disclosure</h2>
              <p className="mb-4 leading-relaxed">
                We do not sell, trade, or rent student personal information to third parties. We may share information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>With parents/guardians regarding their child's progress</li>
                <li>With educational partners for curriculum development (anonymized data only)</li>
                <li>When required by law or to protect safety</li>
                <li>With service providers who assist in program delivery (under strict confidentiality agreements)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
              <p className="mb-4 leading-relaxed">
                We implement appropriate technical and organizational measures to protect personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure data storage, and regular security assessments.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
              <p className="mb-4 leading-relaxed">
                Parents/guardians have the right to:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Review their child's personal information</li>
                <li>Request corrections to inaccurate information</li>
                <li>Request deletion of their child's personal information</li>
                <li>Withdraw consent for data collection</li>
                <li>Receive a copy of their child's data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="mb-4 leading-relaxed">
                If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at:
              </p>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p>Email: privacy@igniteai.academy</p>
                <p>Address: [Address Coming Soon]</p>
                <p>Phone: [Phone Number Coming Soon]</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
              <p className="mb-4 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify parents/guardians of any material changes via email and post the updated policy on our website with a new effective date.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;