import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Campus",
      details: [
        "123 Innovation Drive",
        "Tech Valley, CA 94000",
        "Bright, modern learning spaces"
      ]
    },
    {
      icon: Phone,
      title: "Call Us",
      details: [
        "(555) 123-AI-KIDS",
        "(555) 123-2453",
        "Text messages welcome"
      ]
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [
                        "hello@igniteaiacacemy.edu",
                        "admissions@igniteaiacacemy.edu",
        "We reply within 24 hours"
      ]
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Monday - Friday: 9 AM - 6 PM",
        "Saturday: 10 AM - 4 PM",
        "Sunday: By appointment"
      ]
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-4">
            Get in Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to
            <span className="bg-gradient-ai bg-clip-text text-transparent"> Start the Conversation?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We'd love to learn more about your child and help you choose the perfect AI learning path. 
            Reach out to us using any of the methods below.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-ai rounded-lg flex items-center justify-center flex-shrink-0 shadow-glow">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{info.title}</h3>
                      <div className="space-y-1">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-sm text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Quick Contact */}
            <Card className="bg-gradient-hero text-white border-0 shadow-glow">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-bold mb-2">Need Immediate Help?</h3>
                <p className="text-sm opacity-90 mb-4">
                  Our education specialists are standing by to answer your questions.
                </p>
                <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  Call Now
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Parent/Guardian Name *</label>
                      <Input placeholder="Your full name" className="bg-background" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address *</label>
                      <Input type="email" placeholder="your.email@example.com" className="bg-background" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number</label>
                      <Input placeholder="(555) 123-4567" className="bg-background" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Child's Age</label>
                      <Input placeholder="e.g., 8 years old" className="bg-background" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Program Interest</label>
                    <select className="w-full p-3 border border-input rounded-md bg-background">
                      <option>Select a program...</option>
                      <option>AI Explorers (Ages 6-7)</option>
                      <option>Young AI Scientists (Ages 8-9)</option>
                      <option>Future AI Innovators (Ages 10-11)</option>
                      <option>Summer AI Camp</option>
                      <option>After-School AI Club</option>
                      <option>Not sure - need guidance</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea 
                      placeholder="Tell us about your child's interests, any questions you have, or what you'd like to know about our programs..."
                      className="bg-background min-h-[120px]"
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" />
                    <label className="text-sm text-muted-foreground">
                      I'd like to receive updates about new programs, events, and AI education tips for parents. 
                      (You can unsubscribe at any time)
                    </label>
                  </div>

                  <Button variant="hero" size="lg" className="w-full group">
                    Send Message
                    <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Quick Links */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold mb-6">Frequently Asked Questions</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-auto p-4 text-left">
              <div>
                <div className="font-medium">What if my child has no tech experience?</div>
                <div className="text-xs text-muted-foreground mt-1">Perfect! We start from the basics.</div>
              </div>
            </Button>
            <Button variant="outline" className="h-auto p-4 text-left">
              <div>
                <div className="font-medium">How small are class sizes?</div>
                <div className="text-xs text-muted-foreground mt-1">Maximum 10 students per class.</div>
              </div>
            </Button>
            <Button variant="outline" className="h-auto p-4 text-left">
              <div>
                <div className="font-medium">Can I observe a class first?</div>
                <div className="text-xs text-muted-foreground mt-1">Yes! Schedule a free trial.</div>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;