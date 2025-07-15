import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Clock, Trophy, Users } from "lucide-react";

const Quiz = () => {
  const quizTypes = [
    {
      icon: Brain,
      title: "Grammar Quiz",
      description: "Test your grammar knowledge with interactive questions",
      difficulty: "Beginner to Advanced",
      time: "15 minutes"
    },
    {
      icon: Clock,
      title: "Vocabulary Challenge",
      description: "Expand your word power with daily vocabulary tests",
      difficulty: "All Levels",
      time: "10 minutes"
    },
    {
      icon: Trophy,
      title: "Pronunciation Test",
      description: "Practice speaking and improve your pronunciation",
      difficulty: "Intermediate",
      time: "20 minutes"
    },
    {
      icon: Users,
      title: "Conversation Practice",
      description: "Interactive dialogue scenarios for real-world practice",
      difficulty: "Advanced",
      time: "25 minutes"
    }
  ];

  return (
    <div className="min-h-screen bg-background font-inter">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-muted to-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-black font-oswald text-secondary mb-6">
            ENGLISH <span className="text-primary">QUIZZES</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Challenge yourself with interactive quizzes designed to test and improve your English skills.
          </p>
          <Button variant="hero" size="xl">
            Start Daily Quiz
          </Button>
        </div>
      </section>

      {/* Quiz Types */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-poppins">
            Choose Your Quiz Type
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quizTypes.map((quiz, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                <CardHeader className="text-center">
                  <div className="inline-flex p-4 rounded-full bg-primary/10 text-primary mx-auto mb-4">
                    <quiz.icon size={32} />
                  </div>
                  <CardTitle className="font-poppins">{quiz.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-muted-foreground">{quiz.description}</p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Level:</strong> {quiz.difficulty}</p>
                    <p><strong>Duration:</strong> {quiz.time}</p>
                  </div>
                  <Button variant="outline" className="w-full">
                    Start Quiz
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Quiz;