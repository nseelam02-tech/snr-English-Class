import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, CheckCircle, Play, Clock, Users, Star } from "lucide-react";

const Grammar = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const grammarTopics = [
    {
      id: 1,
      title: "Present Tenses",
      description: "Master simple, continuous, perfect, and perfect continuous present tenses",
      level: "Beginner",
      lessons: 8,
      duration: "2 hours",
      completed: false,
      topics: ["Simple Present", "Present Continuous", "Present Perfect", "Present Perfect Continuous"]
    },
    {
      id: 2,
      title: "Past Tenses",
      description: "Learn all past tense forms and when to use them correctly",
      level: "Beginner",
      lessons: 6,
      duration: "1.5 hours", 
      completed: true,
      topics: ["Simple Past", "Past Continuous", "Past Perfect", "Past Perfect Continuous"]
    },
    {
      id: 3,
      title: "Future Tenses",
      description: "Express future actions with will, going to, and future continuous",
      level: "Intermediate",
      lessons: 5,
      duration: "1.5 hours",
      completed: false,
      topics: ["Will vs Going to", "Future Continuous", "Future Perfect", "Time Expressions"]
    },
    {
      id: 4,
      title: "Conditionals",
      description: "Master zero, first, second, and third conditionals",
      level: "Intermediate",
      lessons: 7,
      duration: "2.5 hours",
      completed: false,
      topics: ["Zero Conditional", "First Conditional", "Second Conditional", "Third Conditional"]
    },
    {
      id: 5,
      title: "Passive Voice",
      description: "Transform active sentences to passive and understand usage",
      level: "Advanced",
      lessons: 6,
      duration: "2 hours",
      completed: false,
      topics: ["Passive Formation", "Passive with Modals", "Passive Question Forms", "Common Uses"]
    },
    {
      id: 6,
      title: "Modal Verbs",
      description: "Express ability, possibility, permission, and obligation",
      level: "Intermediate",
      lessons: 9,
      duration: "3 hours",
      completed: false,
      topics: ["Can/Could", "May/Might", "Must/Have to", "Should/Would"]
    }
  ];

  const grammarRules = [
    {
      rule: "Subject-Verb Agreement",
      example: "She works hard. / They work hard.",
      tip: "Singular subjects take singular verbs, plural subjects take plural verbs"
    },
    {
      rule: "Article Usage",
      example: "I saw a cat. The cat was black.",
      tip: "Use 'a/an' for first mention, 'the' for specific reference"
    },
    {
      rule: "Prepositions of Time",
      example: "At 3 PM, In December, On Monday",
      tip: "At for specific times, In for months/years, On for days"
    }
  ];

  const getLevelColor = (level) => {
    switch(level) {
      case "Beginner": return "bg-success/10 text-success";
      case "Intermediate": return "bg-warning/10 text-warning";
      case "Advanced": return "bg-destructive/10 text-destructive";
      default: return "bg-muted/10 text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background font-inter">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <BookOpen className="w-16 h-16 text-primary mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-black font-oswald text-foreground mb-6">
            MASTER <span className="text-primary">GRAMMAR</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Build a strong foundation with comprehensive grammar lessons, from basic sentence structure to advanced concepts.
          </p>
          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>15+ Hours Content</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>10,000+ Students</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 fill-current text-yellow-400" />
              <span>4.9 Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Grammar Topics Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-foreground mb-4">
              Grammar Course Modules
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Progressive lessons designed to take you from basics to advanced grammar mastery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {grammarTopics.map((topic) => (
              <Card key={topic.id} className="relative overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(topic.level)}`}>
                      {topic.level}
                    </span>
                    {topic.completed && (
                      <CheckCircle className="w-5 h-5 text-success" />
                    )}
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {topic.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {topic.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      <span>{topic.lessons} lessons</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{topic.duration}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground">Topics covered:</p>
                    <div className="flex flex-wrap gap-1">
                      {topic.topics.slice(0, 2).map((subtopic, index) => (
                        <span key={index} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                          {subtopic}
                        </span>
                      ))}
                      {topic.topics.length > 2 && (
                        <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                          +{topic.topics.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  <Button 
                    className="w-full mt-4" 
                    variant={topic.completed ? "outline" : "default"}
                  >
                    <Play className="w-4 h-4 mr-2" />
                    {topic.completed ? "Review" : "Start Learning"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Grammar Rules */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-foreground mb-4">
              Quick Grammar Rules
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Essential rules to remember for better English communication
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {grammarRules.map((rule, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-primary">
                    {rule.rule}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-foreground mb-2">Example:</p>
                    <p className="text-foreground font-mono">{rule.example}</p>
                  </div>
                  <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-primary">Tip:</span> {rule.tip}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-primary-hover">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-primary-foreground mb-6">
            Ready to Master Grammar?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have improved their English grammar with our structured approach
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="font-semibold">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              View All Courses
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Grammar;