import { useState } from "react";
import { Volume2, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const WordOfTheDay = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [showResult, setShowResult] = useState(false);
  const { toast } = useToast();

  const word = {
    word: "Articulate",
    pronunciation: "/ɑːˈtɪkjʊlət/",
    meaning: "Having or showing the ability to speak fluently and coherently",
    audio: "articulate-pronunciation.mp3"
  };

  const quiz = {
    question: "What does 'articulate' mean?",
    options: [
      "To speak fluently and clearly",
      "To move joints freely",
      "To write beautifully",
      "To think deeply"
    ],
    correct: 0
  };

  const handleSubmit = () => {
    if (!selectedAnswer) return;
    
    setShowResult(true);
    const isCorrect = parseInt(selectedAnswer) === quiz.correct;
    
    toast({
      title: isCorrect ? "Correct! 🎉" : "Not quite right",
      description: isCorrect ? "Great job! You're improving." : "Keep practicing, you're learning!",
      variant: isCorrect ? "default" : "destructive"
    });
  };

  const playPronunciation = () => {
    // In a real app, this would play the audio file
    toast({
      title: "🔊 Pronunciation",
      description: "In a real app, this would play the audio pronunciation"
    });
  };

  const resetQuiz = () => {
    setSelectedAnswer("");
    setShowResult(false);
  };

  return (
    <section className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Word of the Day */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold font-poppins text-foreground mb-8">
                Word of the Day
              </h2>
              
              <div className="bg-card p-8 rounded-2xl border border-border shadow-lg">
                <div className="space-y-4">
                  <div className="text-center">
                    <h3 className="text-4xl font-bold font-poppins text-primary mb-2">
                      {word.word}
                    </h3>
                    <div className="flex items-center justify-center gap-3">
                      <span className="text-muted-foreground font-inter">
                        {word.pronunciation}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={playPronunciation}
                        className="h-8 w-8 p-0"
                      >
                        <Volume2 size={16} />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="text-center pt-4">
                    <p className="text-foreground font-inter text-lg leading-relaxed">
                      {word.meaning}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mini Quiz */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-poppins text-foreground text-center lg:text-left">
              Mini Quiz
            </h3>
            
            <div className="bg-card p-8 rounded-2xl border border-border shadow-lg">
              <div className="space-y-6">
                <h4 className="text-lg font-semibold font-inter text-foreground">
                  {quiz.question}
                </h4>
                
                <div className="space-y-3">
                  {quiz.options.map((option, index) => (
                    <label
                      key={index}
                      className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                        selectedAnswer === index.toString()
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      } ${
                        showResult
                          ? index === quiz.correct
                            ? "border-success bg-success/10"
                            : selectedAnswer === index.toString()
                            ? "border-destructive bg-destructive/10"
                            : "opacity-50"
                          : ""
                      }`}
                    >
                      <input
                        type="radio"
                        name="quiz-option"
                        value={index}
                        checked={selectedAnswer === index.toString()}
                        onChange={(e) => setSelectedAnswer(e.target.value)}
                        disabled={showResult}
                        className="sr-only"
                      />
                      <div className="flex items-center justify-between w-full">
                        <span className="font-inter text-foreground">{option}</span>
                        {showResult && (
                          <div>
                            {index === quiz.correct ? (
                              <Check className="text-success" size={20} />
                            ) : selectedAnswer === index.toString() ? (
                              <X className="text-destructive" size={20} />
                            ) : null}
                          </div>
                        )}
                      </div>
                    </label>
                  ))}
                </div>
                
                <div className="space-y-3">
                  {!showResult ? (
                    <Button 
                      variant="default" 
                      onClick={handleSubmit}
                      disabled={!selectedAnswer}
                      className="w-full"
                    >
                      Submit Answer
                    </Button>
                  ) : (
                    <Button 
                      variant="outline" 
                      onClick={resetQuiz}
                      className="w-full"
                    >
                      Try Again
                    </Button>
                  )}
                  
                  {showResult && (
                    <p className="text-sm text-muted-foreground text-center font-inter">
                      Great try! You're improving every time! 🌟
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WordOfTheDay;