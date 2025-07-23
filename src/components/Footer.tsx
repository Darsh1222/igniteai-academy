import { Brain, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
const Footer = () => {
  const quickLinks = [{
    label: "About Us",
    href: "#about"
  }, {
    label: "Programs",
    href: "#programs"
  }, {
    label: "Why AI for Kids?",
    href: "#why-ai"
  }, {
    label: "Testimonials",
    href: "#testimonials"
  }, {
    label: "Contact",
    href: "#contact"
  }];
  const programs = [{
    label: "AI Explorers (Ages 6-7)",
    href: "#programs"
  }, {
    label: "Young AI Scientists (Ages 8-9)",
    href: "#programs"
  }, {
    label: "Future AI Innovators (Ages 10-11)",
    href: "#programs"
  }, {
    label: "Summer AI Camp",
    href: "#programs"
  }, {
    label: "After-School Club",
    href: "#programs"
  }];
  return <footer className="bg-foreground text-background py-16">
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
            
          </div>

          {/* Quick Links */}
          

          {/* Programs */}
          

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">© 2025 Ignite AI Academy for Yo. All rights reserved.
Privacy Policy
Terms of Service
Accessibility

🚀 Preparing the next generation for an AI-powered future, one young mind at a time.</h4>
            <p className="text-sm opacity-80">Coming Soon</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm opacity-80">© 2025 Ignite AI Academy for Young Minds. All rights reserved.</div>
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
    </footer>;
};
export default Footer;