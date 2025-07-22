import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, ArrowRight } from "lucide-react";

const ProgramsSection = () => {
  const programs = [
    {
      title: "AI Explorers",
      subtitle: "Perfect First Step into AI",
      ageGroup: "Ages 6-7",
      duration: "8 weeks",
      students: "8-10",
      level: "Beginner",
      price: "$299",
      features: [
        "What is AI? Fun introductions",
        "AI in everyday life (Siri, games, apps)",
        "Simple pattern recognition games",
        "Basic robot interactions",
        "Creative AI art projects",
        "Weekly take-home activities"
      ],
      highlight: false
    },
    {
      title: "Young AI Scientists",
      subtitle: "Hands-on AI Discovery",
      ageGroup: "Ages 8-9",
      duration: "10 weeks",
      students: "8-10",
      level: "Intermediate",
      price: "$399",
      features: [
        "How computers 'think' and learn",
        "Training simple AI models",
        "Voice recognition experiments",
        "Image classification fun",
        "Building basic chatbots",
        "AI ethics for kids",
        "Final project showcase"
      ],
      highlight: true
    },
    {
      title: "Future AI Innovators",
      subtitle: "Advanced Concepts Made Simple",
      ageGroup: "Ages 10-11",
      duration: "12 weeks",
      students: "6-8",
      level: "Advanced",
      price: "$499",
      features: [
        "Machine learning fundamentals",
        "Creating recommendation systems",
        "AI in video games and apps",
        "Ethical AI decision making",
        "Team AI project development",
        "Presentation to parents",
        "Certificate of completion"
      ],
      highlight: false
    }
  ];

  const additionalOfferings = [
    {
      title: "Summer AI Camp",
      description: "Intensive 2-week immersive experience",
      duration: "2 weeks",
      ages: "Ages 7-11"
    },
    {
      title: "AI Family Workshops",
      description: "Parent-child learning sessions",
      duration: "4 sessions",
      ages: "All ages"
    },
    {
      title: "After-School AI Club",
      description: "Ongoing AI exploration and projects",
      duration: "Semester",
      ages: "Ages 8-11"
    }
  ];

  return (
    <section id="programs" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-4">
            Our Programs
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Age-Appropriate AI Learning
            <span className="bg-gradient-ai bg-clip-text text-transparent"> Journeys</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Each program is carefully designed for specific age groups, ensuring concepts are 
            presented at the perfect developmental level for maximum engagement and understanding.
          </p>
        </div>

        {/* Main Programs */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => (
            <Card 
              key={index} 
              className={`h-full bg-gradient-card border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative ${
                program.highlight ? 'ring-2 ring-primary shadow-glow' : ''
              }`}
            >
              {program.highlight && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-ai text-white px-4 py-1">Most Popular</Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="space-y-2">
                  <CardTitle className="text-xl font-bold">{program.title}</CardTitle>
                  <p className="text-muted-foreground text-sm">{program.subtitle}</p>
                  <div className="flex justify-center gap-2 flex-wrap">
                    <Badge variant="secondary">{program.ageGroup}</Badge>
                    <Badge variant="outline">{program.level}</Badge>
                  </div>
                </div>
                <div className="pt-4">
                  <div className="text-3xl font-bold text-primary">{program.price}</div>
                  <div className="text-sm text-muted-foreground">per student</div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Program Details */}
                <div className="flex justify-between text-sm">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span>{program.students}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm">What You'll Learn:</h4>
                  <ul className="space-y-2">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Star className="w-4 h-4 text-ai-orange mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Button 
                  className="w-full group" 
                  variant={program.highlight ? "hero" : "default"}
                >
                  Enroll Now
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProgramsSection;