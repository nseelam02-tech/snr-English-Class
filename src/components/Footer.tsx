import { Youtube, Instagram, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About", href: "#about" },
      { name: "Courses", href: "#courses" },
      { name: "Blog", href: "#blog" },
      { name: "Contact", href: "#contact" }
    ],
    legal: [
      { name: "Terms of Service", href: "#terms" },
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Cookie Policy", href: "#cookies" },
      { name: "Refund Policy", href: "#refund" }
    ],
    resources: [
      { name: "Free Materials", href: "#resources" },
      { name: "Study Guides", href: "#guides" },
      { name: "Practice Tests", href: "#tests" },
      { name: "Help Center", href: "#help" }
    ]
  };

  const socialLinks = [
    {
      name: "YouTube",
      href: "#youtube",
      icon: Youtube,
      color: "hover:text-red-500"
    },
    {
      name: "Instagram",
      href: "#instagram",
      icon: Instagram,
      color: "hover:text-pink-500"
    },
    {
      name: "Email",
      href: "mailto:hello@snrenglishclass.com",
      icon: Mail,
      color: "hover:text-blue-500"
    }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="relative">
                <div 
                  className="absolute inset-0 bg-contain bg-no-repeat bg-left opacity-10 -z-10"
                  style={{ backgroundImage: "url('/lovable-uploads/4ac5daaf-e1d3-4461-853e-4cc7ead1d5f4.png')" }}
                />
                <div className="flex items-center gap-2 relative z-10 px-4 py-2">
                  <img 
                    src="/lovable-uploads/578acfc1-3cb1-4a1a-9bd0-be2393d6d583.png" 
                    alt="SNR Logo" 
                    className="h-8 w-auto"
                  />
                  <h3 className="text-2xl font-bold font-poppins text-primary">
                    English Class
                  </h3>
                </div>
                <p className="text-muted-foreground font-inter leading-relaxed max-w-md">
                  Learn English confidently with our comprehensive courses, interactive quizzes, 
                  and expert guidance. Your journey to fluency starts here.
                </p>
              </div>
              
              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold font-poppins text-foreground">
                  Follow Us
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className={`p-3 rounded-lg bg-secondary text-muted-foreground transition-all duration-200 ${social.color} hover:bg-primary hover:text-primary-foreground`}
                      aria-label={social.name}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Company Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold font-poppins text-foreground">
                Company
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 font-inter flex items-center gap-1"
                    >
                      {link.name}
                      <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold font-poppins text-foreground">
                Resources
              </h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 font-inter"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold font-poppins text-foreground">
                Legal
              </h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 font-inter"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground font-inter text-center md:text-left">
              © {currentYear} SNR English Class. Learn with clarity.
            </p>
            
            <div className="flex items-center space-x-6 text-sm">
              <span className="text-muted-foreground">Made with ❤️ for English learners</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;