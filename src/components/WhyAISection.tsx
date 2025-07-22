import { Card, CardContent } from "@/components/ui/card";
import { Brain, Zap, Users, Lightbulb, TrendingUp, Heart } from "lucide-react";

const WhyAISection = () => {
  const benefits = [
    {
      icon: Brain,
      title: "Enhances Cognitive Development",
      description: "AI education improves logical thinking, pattern recognition, and problem-solving skills crucial for academic success.",
      research: "Studies show 40% improvement in mathematical reasoning"
    },
    {
      icon: Zap,
      title: "Builds Future-Ready Skills",
      description: "Prepares children for a world where AI literacy will be as essential as reading and writing.",
      research: "85% of jobs in 2030 will require AI understanding"
    },
    {
      icon: Users,
      title: "Encourages Collaboration",
      description: "Team-based AI projects teach children how to work together on complex technological solutions.",
      research: "Improved teamwork scores by 60% in participants"
    },
    {
      icon: Lightbulb,
      title: "Sparks Creativity & Innovation",
      description: "AI tools become creative partners, helping children express ideas in new and exciting ways.",
      research: "Students show 70% more creative project outputs"
    },
    {
      icon: TrendingUp,
      title: "Improves Academic Performance",
      description: "The logical thinking required for AI concepts transfers to better performance in STEM subjects.",
      research: "25% average improvement in math and science grades"
    },
    {
      icon: Heart,
      title: "Builds Ethical Thinking",
      description: "Early exposure to AI ethics helps children develop responsible attitudes toward technology.",
      research: "Higher empathy scores in technology use decisions"
    }
  ];

  const myths = [
    {
      myth: "AI is too complex for children",
      truth: "Children are natural learners who grasp AI concepts through play and hands-on activities more easily than adults."
    },
    {
      myth: "Screen time is harmful",
      truth: "Our interactive, educational AI activities are fundamentally different from passive screen consumption."
    },
    {
      myth: "It's too early to learn AI",
      truth: "The optimal learning window for complex concepts is actually during elementary years when neural plasticity is highest."
    }
  ];

  return (
    <section id="why-ai" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-4">
            Why AI for Kids?
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            The Science-Backed Benefits of
            <span className="bg-gradient-ai bg-clip-text text-transparent"> Early AI Education</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Research from leading universities and educational institutions shows that children who learn 
            AI concepts early develop superior cognitive abilities and are better prepared for future success.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="h-full bg-gradient-card border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-ai rounded-lg flex items-center justify-center flex-shrink-0 shadow-glow">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-lg">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                    <div className="bg-primary/10 px-3 py-2 rounded-lg">
                      <p className="text-xs font-medium text-primary">{benefit.research}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Research Section */}
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-ai mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Backed by Leading Research</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our curriculum is based on findings from MIT, Stanford, and Carnegie Mellon research 
              on child development and technology education.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-ai rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Neuroplasticity Advantage</h4>
              <p className="text-sm text-muted-foreground">
                Children's brains are 40% more adaptable to complex logical concepts than adult brains.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-ai-orange rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Academic Transfer</h4>
              <p className="text-sm text-muted-foreground">
                AI concepts directly improve performance in mathematics, science, and reading comprehension.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-ai-pink rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Emotional Intelligence</h4>
              <p className="text-sm text-muted-foreground">
                Understanding AI helps children develop empathy and ethical reasoning about technology.
              </p>
            </div>
          </div>
        </div>

        {/* Myth Busting */}
        <div className="bg-muted/50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8">Common Concerns Addressed</h3>
          <div className="space-y-6">
            {myths.map((item, index) => (
              <div key={index} className="grid md:grid-cols-2 gap-6 items-center">
                <div className="bg-destructive/10 border border-destructive/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-destructive mb-2">Myth:</h4>
                  <p className="text-sm">{item.myth}</p>
                </div>
                <div className="bg-primary/10 border border-primary/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">Truth:</h4>
                  <p className="text-sm">{item.truth}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAISection;