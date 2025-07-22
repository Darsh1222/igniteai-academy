import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Parent of Emma (8)",
      content: "I was skeptical at first, but Emma comes home every week excited to show me what she learned. She's now explaining how Netflix recommendations work and asking incredible questions about technology. The change in her confidence is remarkable.",
      rating: 5,
      highlight: "Her confidence is remarkable"
    },
    {
      name: "Michael Chen",
      role: "Parent of Lucas (10)",
      content: "Lucas has always been interested in technology, but AI Academy gave him the vocabulary and understanding to actually articulate his ideas. He's already talking about creating his own AI app. The instructors are amazing at making complex topics accessible.",
      rating: 5,
      highlight: "Already talking about creating his own AI app"
    },
    {
      name: "Dr. Amanda Rivera",
      role: "Elementary School Principal",
      content: "We've seen students from AI Academy demonstrate significantly improved problem-solving skills in their regular classes. They approach challenges more systematically and show greater persistence. This program is genuinely preparing them for the future.",
      rating: 5,
      highlight: "Significantly improved problem-solving skills"
    },
    {
      name: "Jessica Williams",
      role: "Parent of Sophia (7) & Alex (9)",
      content: "Both my kids are in different programs here, and they're constantly collaborating on projects at home. Sophia is teaching Alex about patterns, and Alex is showing Sophia how to train their toy robot. It's brought them closer together while learning cutting-edge skills.",
      rating: 5,
      highlight: "Brought them closer together"
    },
    {
      name: "Robert Kim",
      role: "Software Engineer & Parent",
      content: "As someone who works in tech, I'm impressed by how well they explain AI concepts. My daughter Maya understands machine learning better than some of my colleagues! The curriculum is rigorous yet age-appropriate. Absolutely worth the investment.",
      rating: 5,
      highlight: "Understands ML better than my colleagues"
    },
    {
      name: "Lisa Thompson",
      role: "Parent of James (9)",
      content: "James was struggling with math confidence, but after learning about AI patterns and logic, his grades improved dramatically. The skills transferred beautifully to his regular schoolwork. Plus, he's found his passion – he wants to be an AI scientist when he grows up!",
      rating: 5,
      highlight: "Math grades improved dramatically"
    }
  ];

  const studentQuotes = [
    {
      name: "Emma, Age 8",
      quote: "I taught my tablet to recognize my drawings! It's like magic but I know how it works now."
    },
    {
      name: "Lucas, Age 10",
      quote: "AI is like having a really smart friend who can help solve problems. I want to make one that helps kids with homework."
    },
    {
      name: "Maya, Age 9",
      quote: "Before this class, I thought computers were just following rules. Now I know they can learn and get smarter!"
    }
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-4">
            Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Parents & Students Are
            <span className="bg-gradient-ai bg-clip-text text-transparent"> Saying</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real feedback from families who've experienced the transformative power of early AI education.
          </p>
        </div>

        {/* Parent Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full bg-gradient-card border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-ai-orange text-ai-orange" />
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="relative">
                    <Quote className="w-8 h-8 text-primary/20 absolute -top-2 -left-2" />
                    <p className="text-muted-foreground text-sm leading-relaxed pl-6">
                      {testimonial.content}
                    </p>
                  </div>

                  {/* Highlight */}
                  <div className="bg-primary/10 px-3 py-2 rounded-lg">
                    <p className="text-xs font-medium text-primary">"{testimonial.highlight}"</p>
                  </div>

                  {/* Author */}
                  <div className="border-t pt-4">
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Student Voices */}
        <div className="bg-muted/30 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8">In Their Own Words</h3>
          <p className="text-center text-muted-foreground mb-8">
            Here's what our young AI enthusiasts have to say:
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {studentQuotes.map((student, index) => (
              <Card key={index} className="bg-card border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-ai rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                    <span className="text-white font-bold text-lg">
                      {student.name.charAt(0)}
                    </span>
                  </div>
                  <blockquote className="text-sm text-muted-foreground italic mb-3">
                    "{student.quote}"
                  </blockquote>
                  <cite className="text-xs font-medium text-primary not-italic">
                    — {student.name}
                  </cite>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <p className="text-sm text-muted-foreground">Parent Satisfaction</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-ai-orange mb-2">95%</div>
            <p className="text-sm text-muted-foreground">Return Rate</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-ai-pink mb-2">87%</div>
            <p className="text-sm text-muted-foreground">Skill Improvement</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-ai-purple mb-2">4.9/5</div>
            <p className="text-sm text-muted-foreground">Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;