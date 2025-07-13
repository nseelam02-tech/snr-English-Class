import { Download, FileText, Headphones, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const ResourcesSection = () => {
  const resources = [
    {
      icon: FileText,
      title: "Essential Vocabulary Flashcards",
      description: "500+ common English words with definitions and examples",
      type: "PDF",
      size: "2.3 MB",
      downloads: "12,450",
      color: "text-primary"
    },
    {
      icon: Headphones,
      title: "Pronunciation Audio Lessons",
      description: "Clear audio guides for mastering English sounds",
      type: "MP3",
      size: "45.6 MB",
      downloads: "8,920",
      color: "text-accent"
    },
    {
      icon: BookOpen,
      title: "Common Phrases Guide",
      description: "Everyday expressions for natural conversations",
      type: "PDF",
      size: "1.8 MB",
      downloads: "15,680",
      color: "text-success"
    }
  ];

  return (
    <section id="resources" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-foreground mb-4">
            Free Learning Materials
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
            Download valuable resources to enhance your English learning experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-2xl border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="space-y-6">
                {/* Resource Icon */}
                <div className={`inline-flex p-4 rounded-full bg-secondary ${resource.color}`}>
                  <resource.icon size={32} />
                </div>

                {/* Resource Info */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold font-poppins text-foreground">
                    {resource.title}
                  </h3>
                  <p className="text-muted-foreground font-inter">
                    {resource.description}
                  </p>
                </div>

                {/* File Details */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded font-medium">
                      {resource.type}
                    </span>
                    <span>{resource.size}</span>
                  </div>
                  <span>{resource.downloads} downloads</span>
                </div>

                {/* Download Button */}
                <Button 
                  variant="default" 
                  className="w-full group/btn"
                >
                  <Download size={16} className="mr-2 group-hover/btn:animate-bounce" />
                  Download Free
                </Button>

                {/* Hover Message */}
                <p className="text-xs text-center text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  No sign-up needed! 🎉
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16 p-8 bg-muted rounded-2xl">
          <h3 className="text-2xl font-semibold font-poppins text-foreground mb-4">
            Want More Resources?
          </h3>
          <p className="text-muted-foreground font-inter mb-6 max-w-2xl mx-auto">
            Join our community to access premium study materials, interactive exercises, and personalized learning paths.
          </p>
          <Button variant="hero" size="lg">
            Explore Premium Resources
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;