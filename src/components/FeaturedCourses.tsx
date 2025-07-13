import { Star, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import grammarImg from "@/assets/course-grammar.jpg";
import vocabularyImg from "@/assets/course-vocabulary.jpg";
import speakingImg from "@/assets/course-speaking.jpg";

const FeaturedCourses = () => {
  const courses = [
    {
      image: grammarImg,
      title: "Tenses Made Easy",
      description: "Master all English tenses with practical exercises",
      lessons: 12,
      duration: "4 hours",
      level: "Beginner",
      rating: 4.9,
      students: 1234,
      levelColor: "bg-success/10 text-success"
    },
    {
      image: vocabularyImg,
      title: "Business Vocabulary Pro",
      description: "Essential words for professional communication",
      lessons: 8,
      duration: "3 hours",
      level: "Intermediate",
      rating: 4.8,
      students: 892,
      levelColor: "bg-warning/10 text-warning"
    },
    {
      image: speakingImg,
      title: "Confident Speaking",
      description: "Build fluency through structured conversation practice",
      lessons: 15,
      duration: "6 hours",
      level: "Advanced",
      rating: 4.9,
      students: 567,
      levelColor: "bg-destructive/10 text-destructive"
    }
  ];

  return (
    <section className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-foreground mb-4">
            Featured Courses
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
            Start your English learning journey with our most popular courses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Course Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Course Content */}
              <div className="p-6 space-y-4">
                {/* Level Badge */}
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${course.levelColor}`}>
                  {course.level}
                </span>

                {/* Title & Description */}
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold font-poppins text-foreground">
                    {course.title}
                  </h3>
                  <p className="text-muted-foreground font-inter">
                    {course.description}
                  </p>
                </div>

                {/* Course Stats */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{course.lessons} lessons • {course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={16} />
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={`${
                          i < Math.floor(course.rating)
                            ? "fill-accent text-accent"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {course.rating}
                  </span>
                </div>

                {/* CTA Button */}
                <Button variant="default" className="w-full">
                  Start Lesson
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;