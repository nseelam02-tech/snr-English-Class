import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted to-secondary"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-oswald text-secondary leading-tight tracking-wider">
            LEARN ENGLISH{" "}
            <span className="text-primary">CONFIDENTLY</span>,{" "}
            <span className="text-accent-foreground">EVERY DAY</span>
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-inter">
            Courses, Quizzes, and Conversations—all in one clean interface.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button variant="hero" size="xl" className="font-semibold">
              Browse Courses
            </Button>
            <Button variant="hero-outline" size="xl" className="font-semibold">
              Take a Quiz
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary font-poppins">1000+</div>
              <div className="text-muted-foreground font-inter">Students Learning</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary font-poppins">50+</div>
              <div className="text-muted-foreground font-inter">Interactive Courses</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary font-poppins">95%</div>
              <div className="text-muted-foreground font-inter">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;