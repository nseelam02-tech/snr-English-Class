import { ArrowRight, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogSection = () => {
  const blogPosts = [
    {
      title: "10 English Idioms to Sound Fluent",
      excerpt: "Master these common expressions to enhance your conversational English and sound more natural in everyday situations.",
      author: "Sarah Johnson",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      category: "Vocabulary"
    },
    {
      title: "Common Grammar Mistakes to Avoid",
      excerpt: "Discover the most frequent errors English learners make and learn how to correct them for better communication.",
      author: "Michael Chen",
      date: "Dec 12, 2024",
      readTime: "7 min read",
      category: "Grammar"
    },
    {
      title: "Ace Your Job Interview in English",
      excerpt: "Essential phrases, professional vocabulary, and confidence-building tips for English job interviews.",
      author: "Emma Wilson",
      date: "Dec 10, 2024",
      readTime: "6 min read",
      category: "Business"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      Vocabulary: "bg-accent/10 text-accent",
      Grammar: "bg-primary/10 text-primary",
      Business: "bg-success/10 text-success"
    };
    return colors[category as keyof typeof colors] || "bg-muted text-muted-foreground";
  };

  return (
    <section id="blog" className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-foreground mb-4">
            Tips, Hacks & Grammar Rules
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
            Discover insights, tips, and expert advice to accelerate your English learning journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Blog Image Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(post.category)}`}>
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Blog Content */}
              <div className="p-6 space-y-4">
                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold font-poppins text-foreground group-hover:text-primary transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground font-inter leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Read More */}
                <div className="flex items-center justify-between pt-4">
                  <span className="text-sm text-muted-foreground">
                    {post.readTime}
                  </span>
                  <Button variant="ghost" size="sm" className="group/btn">
                    Read More
                    <ArrowRight size={16} className="ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;