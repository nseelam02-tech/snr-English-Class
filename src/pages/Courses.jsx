import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeaturedCourses from "@/components/FeaturedCourses";
import CategoryGrid from "@/components/CategoryGrid";

const Courses = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-muted to-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-black font-oswald text-secondary mb-6">
            ENGLISH <span className="text-primary">COURSES</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive English learning courses designed to improve your language skills at every level.
          </p>
        </div>
      </section>

      <CategoryGrid />
      <FeaturedCourses />
      <Footer />
    </div>
  );
};

export default Courses;