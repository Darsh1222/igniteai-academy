import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Users, Clock, CheckCircle, Gift } from "lucide-react";

const EnrollmentSection = () => {
  const enrollmentSteps = [
    {
      step: 1,
      title: "Choose Your Program",
      description: "Select the age-appropriate course for your child"
    },
    {
      step: 2,
      title: "Schedule Assessment",
      description: "Quick fun evaluation to ensure the best fit"
    },
    {
      step: 3,
      title: "Start Learning",
      description: "Begin your child's AI journey with expert guidance"
    }
  ];

  const perks = [
    "Free trial class to ensure it's the right fit",
    "Flexible scheduling options",
    "Small class sizes (6-10 students max)",
    "Take-home projects and activities",
    "Progress reports for parents",
    "Certificate of completion",
    "Lifetime access to course materials"
  ];

  const upcomingClasses = [
    {
      program: "AI Explorers",
      startDate: "January 15, 2025",
      spots: "3 spots left",
      time: "Saturdays 10:00 AM"
    },
    {
      program: "Young AI Scientists",
      startDate: "January 20, 2025",
      spots: "5 spots left",
      time: "Weekdays 4:00 PM"
    },
    {
      program: "Future AI Innovators",
      startDate: "February 1, 2025",
      spots: "2 spots left",
      time: "Saturdays 2:00 PM"
    }
  ];

  return (
    <section id="enrollment" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-4">
            Ready to Start?
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-ai bg-clip-text text-transparent">Join the AI Generation</span>
            <br />Today
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Give your child the advantage of tomorrow's skills today. Our enrollment process 
            is simple, and we're here to guide you every step of the way.
          </p>
        </div>

        {/* Special Offer */}
        <div className="bg-gradient-ai text-white rounded-2xl p-8 mb-16 text-center shadow-glow">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Gift className="w-6 h-6" />
            <span className="font-semibold">Limited Time Offer</span>
          </div>
          <h3 className="text-2xl font-bold mb-4">Early Bird Special: 20% Off First Program</h3>
          <p className="mb-6 opacity-90">
            Register by January 31st and save on your child's first AI course. 
            Plus, get a free AI starter kit to take home!
          </p>
          <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
            Claim Your Discount
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Process & Perks */}
          <div className="space-y-8">
            {/* Enrollment Steps */}
            <Card className="bg-gradient-card border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6">Simple 3-Step Process</h3>
                <div className="space-y-6">
                  {enrollmentSteps.map((step, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-ai rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 shadow-glow">
                        {step.step}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{step.title}</h4>
                        <p className="text-muted-foreground text-sm">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Perks */}
            <Card className="bg-gradient-card border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6">What's Included</h3>
                <ul className="space-y-3">
                  {perks.map((perk, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{perk}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Upcoming Classes & CTA */}
          <div className="space-y-8">
            {/* Upcoming Classes */}
            <Card className="bg-gradient-card border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6">Upcoming Classes</h3>
                <div className="space-y-4">
                  {upcomingClasses.map((classInfo, index) => (
                    <div key={index} className="bg-background p-4 rounded-lg border">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold">{classInfo.program}</h4>
                        <Badge variant="secondary" className="text-xs">
                          {classInfo.spots}
                        </Badge>
                      </div>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>Starts {classInfo.startDate}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{classInfo.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Main CTA */}
            <Card className="bg-gradient-hero text-white border-0 shadow-glow">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="mb-6 opacity-90">
                  Don't wait – class sizes are limited and spots fill up quickly. 
                  Give your child the competitive advantage they deserve.
                </p>
                <div className="space-y-3">
                  <Button variant="secondary" size="lg" className="w-full bg-white text-primary hover:bg-white/90 group">
                    Start Learning Today
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                    Schedule a Free Consultation
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="bg-gradient-card border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold mb-2">Questions? We're Here to Help!</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Speak with our education specialists
                </p>
                <div className="space-y-2 text-sm">
                  <div>📞 (555) 123-AI-KIDS</div>
                  <div>✉️ hello@aiacacemy.edu</div>
                  <div>💬 Live chat available 9 AM - 6 PM</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnrollmentSection;