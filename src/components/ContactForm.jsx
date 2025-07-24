import { useState } from "react";
import { Mail, User, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subscribe: false
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 20) {
      newErrors.message = "Message must be at least 20 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Thanks for reaching out! 🎉",
        description: "We'll get back to you within 24 hours."
      });
      
      setFormData({
        name: "",
        email: "",
        message: "",
        subscribe: false
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? e.target.checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
            Have questions about our courses? Need help with your English learning journey? We're here to help!
          </p>
        </div>

        <div className="bg-card p-8 md:p-12 rounded-2xl border border-border shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name Field */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-foreground">
                Full Name *
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={`w-full pl-11 pr-4 py-3 rounded-lg border-2 bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                    errors.name ? "border-destructive" : "border-border"
                  }`}
                />
              </div>
              {errors.name && (
                <p className="text-sm text-destructive">{errors.name}</p>
              )}
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-foreground">
                Email Address *
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className={`w-full pl-11 pr-4 py-3 rounded-lg border-2 bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                    errors.email ? "border-destructive" : "border-border"
                  }`}
                />
              </div>
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email}</p>
              )}
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-foreground">
                Message *
              </label>
              <div className="relative">
                <MessageCircle className="absolute left-3 top-4 text-muted-foreground" size={20} />
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help you with your English learning journey..."
                  className={`w-full pl-11 pr-4 py-3 rounded-lg border-2 bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none ${
                    errors.message ? "border-destructive" : "border-border"
                  }`}
                />
              </div>
              {errors.message && (
                <p className="text-sm text-destructive">{errors.message}</p>
              )}
              <p className="text-sm text-muted-foreground">
                {formData.message.length}/20 characters minimum
              </p>
            </div>

            {/* Subscribe Checkbox */}
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="subscribe"
                name="subscribe"
                checked={formData.subscribe}
                onChange={handleChange}
                className="mt-1 h-4 w-4 text-primary focus:ring-primary border-border rounded"
              />
              <label htmlFor="subscribe" className="text-sm text-muted-foreground">
                I'd like to receive updates about new courses, learning tips, and special offers.
              </label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="hero"
              size="lg"
              disabled={isSubmitting}
              className="w-full"
            >
              {isSubmitting ? "Sending Message..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;