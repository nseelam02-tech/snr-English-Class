import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedCourses from "@/components/FeaturedCourses";
import WordOfTheDay from "@/components/WordOfTheDay";
import BlogSection from "@/components/BlogSection";
import ResourcesSection from "@/components/ResourcesSection";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Navbar />
      <Hero />
      <CategoryGrid />
      <FeaturedCourses />
      <WordOfTheDay />
      <BlogSection />
      <ResourcesSection />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
