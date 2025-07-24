import { BookOpen, MessageSquare, Mic, Globe, Briefcase, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const CategoryGrid = () => {
  const categories = [
    {
      icon: BookOpen,
      name: "Grammar",
      description: "Master sentence structure",
      color: "text-primary",
      link: "/grammar"
    },
    {
      icon: MessageSquare,
      name: "Vocabulary",
      description: "Expand your word power",
      color: "text-accent",
      link: "/vocabulary"
    },
    {
      icon: Mic,
      name: "Speaking",
      description: "Practice real conversations",
      color: "text-success",
      link: "/speaking"
    },
    {
      icon: Globe,
      name: "Pronunciation",
      description: "Sound clear & natural",
      color: "text-warning",
      link: "/pronunciation"
    },
    {
      icon: Briefcase,
      name: "Business English",
      description: "Write & speak professionally",
      color: "text-primary",
      link: "/business"
    },
    {
      icon: GraduationCap,
      name: "Exam Prep",
      description: "Ace IELTS & TOEFL",
      color: "text-accent",
      link: "/exam-prep"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-foreground mb-4">
            Top Learning Categories
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
            Choose your path to English mastery with our comprehensive learning areas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={category.link}
              className="group p-8 bg-card rounded-2xl border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer block"
            >
              <div className="text-center space-y-6">
                <div className={`inline-flex p-4 rounded-full bg-secondary ${category.color}`}>
                  <category.icon size={32} />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold font-poppins text-foreground">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground font-inter opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {category.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;