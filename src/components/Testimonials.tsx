import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Rodriguez",
      level: "Intermediate",
      country: "🇪🇸",
      rating: 5,
      quote: "SNR English Class helped me speak clearly in job interviews. The pronunciation lessons are amazing!",
      avatar: "MR"
    },
    {
      name: "Kenji Tanaka",
      level: "Beginner",
      country: "🇯🇵",
      rating: 5,
      quote: "The grammar courses are so easy to understand. I finally learned English tenses properly!",
      avatar: "KT"
    },
    {
      name: "Ahmed Hassan",
      level: "Advanced",
      country: "🇪🇬",
      rating: 5,
      quote: "Excellent business English content. My professional communication improved significantly in just 3 months.",
      avatar: "AH"
    }
  ];

  return (
    <section className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-foreground mb-4">
            What Our Students Say
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
            Real success stories from learners around the world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-2xl border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8 bg-primary p-3 rounded-full">
                <Quote className="text-primary-foreground" size={20} />
              </div>

              <div className="space-y-6 pt-6">
                {/* Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-accent text-accent"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground font-inter leading-relaxed text-lg">
                  "{testimonial.quote}"
                </p>

                {/* User Info */}
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    {testimonial.avatar}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold font-poppins text-foreground">
                        {testimonial.name}
                      </h4>
                      <span className="text-xl">{testimonial.country}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.level} Level
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground font-inter mb-6">
            Join thousands of successful English learners
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary-hover transition-colors">
              Start Your Success Story
            </button>
            <button className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors">
              View More Reviews
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;