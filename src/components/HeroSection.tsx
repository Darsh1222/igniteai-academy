import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Brain } from "lucide-react";
import heroImage from "@/assets/hero-ai-kids.jpg";
const HeroSection = () => {
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-16 h-16 bg-gradient-ai rounded-full flex items-center justify-center shadow-glow">
          <Brain className="w-8 h-8 text-white" />
        </div>
      </div>
      <div className="absolute top-32 right-20 animate-float" style={{
      animationDelay: '1s'
    }}>
        <div className="w-12 h-12 bg-ai-orange rounded-full flex items-center justify-center shadow-lg">
          <Sparkles className="w-6 h-6 text-white" />
        </div>
      </div>
      <div className="absolute bottom-32 left-20 animate-float" style={{
      animationDelay: '2s'
    }}>
        <div className="w-14 h-14 bg-ai-pink rounded-full flex items-center justify-center shadow-lg">
          <Zap className="w-7 h-7 text-white" />
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary animate-shimmer bg-shimmer-gradient bg-[length:200%_100%] my-0">
                <Sparkles className="w-4 h-4 mr-2" />
                First-of-its-Kind AI Education Program
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  Tomorrow's Innovators
                </span>
                <br />
                <span className="text-foreground">Start Today</span>
                <br />
                <span className="text-sm md:text-base text-muted-foreground font-normal">Coming Soon</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                Unlock your child's potential with cutting-edge AI education designed for ages 6-11. 
                We're creating <strong className="text-primary">future-ready kids</strong> through fun, 
                interactive learning that makes artificial intelligence accessible and exciting.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="cta" size="lg" className="group">
                Join the AI Generation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center lg:justify-start">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Young Innovators</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-ai-orange">12+</div>
                <div className="text-sm text-muted-foreground">AI Courses</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-ai-pink">98%</div>
                <div className="text-sm text-muted-foreground">Parent Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img src={heroImage} alt="Kids learning AI" className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-ai border animate-bounce-gentle">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-ai rounded-full flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-sm">AI Made Simple</div>
                  <div className="text-xs text-muted-foreground">Ages 6-11</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;