import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Award, Lightbulb } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To democratize AI education and prepare the next generation for a technology-driven future through engaging, age-appropriate learning experiences."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our educators combine years of teaching experience with cutting-edge AI knowledge, creating the perfect bridge between complex technology and young minds."
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "98% of our students show improved problem-solving skills and 95% report increased confidence in technology within just 3 months."
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We're constantly evolving our curriculum to include the latest AI developments, ensuring your child learns tomorrow's skills today."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-4">
            About Ignite AI Academy
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pioneering AI Education for the
            <span className="bg-gradient-ai bg-clip-text text-transparent"> Youngest Generation</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We believe that artificial intelligence shouldn't be intimidating or exclusive. 
            Our academy is the first to bring comprehensive AI education to elementary school students, 
            making complex concepts accessible through play, creativity, and hands-on exploration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="h-full bg-gradient-card border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-ai rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutSection;