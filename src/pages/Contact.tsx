import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["0112 829 166", "Available 24/7 for emergencies"],
      action: "tel:0112829166"
    },
    {
      icon: Mail, 
      title: "Email Us",
      details: ["info@evolvehomecareke.com", "Response within 24 hours"],
      action: "mailto:info@evolvehomecareke.com"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Nairobi, Kenya", "By appointment only"],
      action: "#"
    },
    {
      icon: Clock,
      title: "Office Hours", 
      details: ["Mon-Fri: 8:00 AM - 6:00 PM", "24/7 Emergency Support"],
      action: "#"
    }
  ];

  const faqs = [
    {
      question: "How quickly can you start providing care?",
      answer: "We can typically begin services within 24-48 hours after initial consultation and assessment."
    },
    {
      question: "Do you accept insurance?",
      answer: "Yes, we work with most major insurance providers and can help verify your coverage benefits."
    },
    {
      question: "Are your caregivers licensed and insured?",
      answer: "All our caregivers are licensed, bonded, and insured. We conduct thorough background checks and ongoing training."
    },
    {
      question: "Can I choose my caregiver?",
      answer: "Absolutely! We work with you to match the right caregiver based on personality, experience, and specific care needs."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground">
              Get in <span className="text-gold">Touch</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Ready to start your home healthcare journey? Contact us today for a free consultation 
              and personalized care plan tailored to your unique needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Multiple Ways to Reach Us
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're here to answer your questions and help you get started with 
                the care you need. Choose the method that works best for you.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="service-card h-full text-center">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-14 h-14 rounded-full gradient-hero flex items-center justify-center mx-auto">
                      <info.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold text-primary">{info.title}</h3>
                    <div className="space-y-1">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className={`text-sm ${idx === 0 ? 'font-medium text-primary' : 'text-muted-foreground'}`}>
                          {detail}
                        </p>
                      ))}
                    </div>
                    {info.action !== "#" && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="mt-4"
                        onClick={() => window.open(info.action, '_self')}
                      >
                        Contact Now
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Send us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Your last name" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="0712 345 678" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help you?" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your care needs, questions, or how we can assist you..."
                      className="min-h-[120px] resize-none"
                    />
                  </div>

                  <Button size="lg" className="w-full transition-none animate-none cursor-pointer">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>


                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info & Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }} 
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Detailed Contact Info */}
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-full gradient-hero flex items-center justify-center flex-shrink-0 mt-1">
                        <Phone className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-1">Phone</h4>
                        <p className="text-muted-foreground">0112 829 166</p>
                        <p className="text-sm text-muted-foreground">24/7 Emergency Support</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center flex-shrink-0 mt-1">
                        <Mail className="w-5 h-5 text-gold-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-1">Email</h4>
                        <p className="text-muted-foreground">info@evolvehomecareke.com</p>
                        <p className="text-sm text-muted-foreground">Response within 24 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-full gradient-hero flex items-center justify-center flex-shrink-0 mt-1">
                        <MapPin className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-1">Location</h4>
                        <p className="text-muted-foreground">Nairobi, Kenya</p>
                        <p className="text-sm text-muted-foreground">Home visits available citywide</p>
                      </div>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className="pt-6 border-t">
                    <h4 className="font-semibold text-primary mb-3">Follow Us</h4>
                    <div className="flex space-x-3">
                      <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                        <Facebook className="w-5 h-5" />
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                        <Twitter className="w-5 h-5" />
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                        <Instagram className="w-5 h-5" />
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                      
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
<Card className="shadow-medium">
  <CardContent className="p-0">
    <div className="h-64 bg-muted rounded-lg overflow-hidden">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3791.5372313898592!2d36.83563407472434!3d-1.2260247987622794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f163b1c0bf8df%3A0x3bedeeda44ec5f4b!2sCiata%20City%20Mall%2C%20Ridgeways!5e1!3m2!1sen!2ske!4v1755763768049!5m2!1sen!2ske" 
        width="100%" 
        height="100%" 
        style={{border: 0}}  
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Ciata City Mall, Ridgeways Location"
      />
    </div>
  </CardContent>
</Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Quick answers to common questions about our services and process.
              </p>
            </motion.div>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="service-card">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-primary mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;