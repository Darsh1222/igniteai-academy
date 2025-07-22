import { Brain, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Programs", href: "#programs" },
    { label: "Why AI for Kids?", href: "#why-ai" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  const programs = [
    { label: "AI Explorers (Ages 6-7)", href: "#programs" },
    { label: "Young AI Scientists (Ages 8-9)", href: "#programs" },
    { label: "Future AI Innovators (Ages 10-11)", href: "#programs" },
    { label: "Summer AI Camp", href: "#programs" },
    { label: "After-School Club", href: "#programs" },
  ];

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-primary" />
              <div>
                <h3 className="text-xl font-bold">Ignite AI Academy</h3>
                <p className="text-sm opacity-80">for Young Minds</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Pioneering AI education for elementary students. 
              Building tomorrow's innovators through fun, engaging, 
              and age-appropriate artificial intelligence learning.
            </p>
            <div className="flex space-x-3">
              <Facebook className="w-5 h-5 opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
              <Twitter className="w-5 h-5 opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
              <Instagram className="w-5 h-5 opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
              <Linkedin className="w-5 h-5 opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold mb-4">Our Programs</h4>
            <ul className="space-y-2">
              {programs.map((program, index) => (
                <li key={index}>
                  <a 
                    href={program.href}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all"
                  >
                    {program.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 opacity-80" />
                <div className="text-sm opacity-80">
                  <p>123 Innovation Drive</p>
                  <p>Tech Valley, CA 94000</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 opacity-80" />
                <span className="text-sm opacity-80">(555) 123-AI-KIDS</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 opacity-80" />
                <span className="text-sm opacity-80">hello@igniteaiacacemy.edu</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <h5 className="font-medium mb-2">AI Education Newsletter</h5>
              <p className="text-xs opacity-80 mb-3">
                Get tips, updates, and AI learning resources for parents
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 text-foreground text-sm rounded-l-md border-0"
                />
                <button className="bg-primary px-3 py-2 rounded-r-md hover:bg-primary/90 transition-colors">
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm opacity-80">
              © 2024 Ignite AI Academy for Young Minds. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm opacity-80">
              <a href="#" className="hover:opacity-100 hover:text-primary transition-all">Privacy Policy</a>
              <a href="#" className="hover:opacity-100 hover:text-primary transition-all">Terms of Service</a>
              <a href="#" className="hover:opacity-100 hover:text-primary transition-all">Accessibility</a>
            </div>
          </div>
          <div className="text-center mt-6">
            <p className="text-xs opacity-60">
              🚀 Preparing the next generation for an AI-powered future, one young mind at a time.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;