import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-gold flex items-center justify-center overflow-hidden">
                  <img
                    src="./src/assets/Evolve.jpg"
                    alt="Evolve Homecare KE Logo"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <span className="text-lg font-bold">
                  Evolve <span className="text-gold">Homecare KE</span>
                </span>
              </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Delivering compassionate, personalized home-based care to promote independence, 
              comfort, and dignity for your loved ones.
            </p>
            <div className="flex space-x-3">
              <a href="https://www.facebook.com/evolvehomecareke/" className="text-primary-foreground/60 hover:text-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-gold transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/evolvehomecareke/" className="text-primary-foreground/60 hover:text-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href=" https://www.linkedin.com/company/evolve-homecare-ke/" className="text-primary-foreground/60 hover:text-gold transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-gold transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-gold transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-gold transition-colors text-sm">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/care-team" className="text-primary-foreground/80 hover:text-gold transition-colors text-sm">
                  Care Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-gold transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li className="text-primary-foreground/80 text-sm">Personal Care</li>
              <li className="text-primary-foreground/80 text-sm">Companionship</li>
              <li className="text-primary-foreground/80 text-sm">Medication Management</li>
              <li className="text-primary-foreground/80 text-sm">Post-Surgery Care</li>
              <li className="text-primary-foreground/80 text-sm">Chronic Disease Management</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 mt-1 text-gold" />
                <div>
                  <p className="text-sm text-primary-foreground/80">
                    <a href="tel:0112829166" className="hover:text-gold">0112 829 166</a>
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 mt-1 text-gold" />
                <div>
                  <p className="text-sm text-primary-foreground/80">
                    <a href="mailto:info@evolvehomecareке.com" className="hover:text-gold">
                      info@evolvehomecareke.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 text-gold" />
                <div>
                  <p className="text-sm text-primary-foreground/80">
                    Nairobi, Kenya
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-primary-foreground/60">
              © 2025 Evolve Homecare KE. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-primary-foreground/60 hover:text-gold">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-primary-foreground/60 hover:text-gold">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;