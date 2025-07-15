import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResourcesSection from "@/components/ResourcesSection";
import WordOfTheDay from "@/components/WordOfTheDay";

const Resources = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-muted to-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-black font-oswald text-secondary mb-6">
            LEARNING <span className="text-primary">RESOURCES</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access a wealth of tools, materials, and resources to support your English learning.
          </p>
        </div>
      </section>

      <WordOfTheDay />
      <ResourcesSection />
      <Footer />
    </div>
  );
};

export default Resources;