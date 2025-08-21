import { motion } from "framer-motion";
import { Heart, Target, Eye, Users, Award, Shield, Clock, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Mission",
      description: "Our mission is to provide compassionate, personalized home-based healthcare that promotes patients’ well-being, independence and dignity in the comfort of their own homes."
    },
    {
      icon: Eye,
      title: "Vision", 
      description: "Our vision is to be a leading home-based healthcare provider in Kenya and beyond, transforming lives through compassionate, personalized care."
    },
    {
      icon: Target,
      title: "Values",
      description: "Compassion: Providing empathetic and personalized care with kindness and respect for each individual's unique challenges. Excellence: Commitment to the highest standards of medical practice and continually improving knowledge and skills to deliver exceptional care."
    }
  ];

  const approach = [
    {
      icon: Users,
      title: "Personalized Care Plans",
      description: "Every individual is unique. We develop customized care plans that address specific needs, preferences, and health conditions to ensure optimal outcomes."
    },
    {
      icon: Heart,
      title: "Comfort-Centered Approach",
      description: "We prioritize emotional wellbeing alongside physical health, creating a comfortable environment that promotes healing and peace of mind."
    },
    {
      icon: Shield,
      title: "Independence Focus",
      description: "Our goal is to help clients maintain their independence for as long as possible, supporting their autonomy while ensuring safety and quality care."
    },
    {
      icon: Award,
      title: "Dignity & Respect",
      description: "We treat every client with the utmost dignity and respect, honoring their life experiences, preferences, and individual journey."
    }
  ];

  const features = [
    "24/7 emergency support and on-call assistance",
    "Certified and trained healthcare professionals",
    "Comprehensive health assessments and monitoring",
    "Family involvement and regular communication",
    "Flexible scheduling to meet individual needs", 
    "Coordination with primary healthcare providers",
    "Medication management and adherence support",
    "Quality assurance and continuous improvement"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative py-24 gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground">
              About <span className="text-gold">Evolve Homecare KE</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Transforming healthcare delivery by bringing professional, compassionate care 
              directly to your home. We believe everyone deserves to age with dignity and 
              independence in familiar surroundings.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Who We Are
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Evolve Homecare KE is a leading provider of comprehensive home-based healthcare 
                  services throughout Kenya. Founded on the principle that quality healthcare 
                  should be accessible in the comfort of one's own home, we have been serving 
                  families and individuals with dedication and excellence.
                </p>
                <p>
                  Our team consists of licensed healthcare professionals, certified caregivers, 
                  and support staff who are passionate about making a difference in people's lives. 
                  We understand that receiving care at home is not just about medical treatment—it's 
                  about preserving dignity, maintaining independence, and staying connected to what 
                  matters most.
                </p>
                <p>
                  We provide personalized care plans that balance medical support with compassion, 
                  ensuring every client feels safe, respected, and cared for at home.
                </p>

              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="space-y-6">
                <Card className="service-card">
                  <CardContent className="p-6 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center mx-auto">
                      <Users className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="text-2xl font-bold text-primary">500+</div>
                    <div className="text-sm text-muted-foreground">Patients Served</div>
                  </CardContent>
                </Card>
                <Card className="service-card">
                  <CardContent className="p-6 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center mx-auto">
                      <Award className="w-6 h-6 text-gold-foreground" />
                    </div>
                    <div className="text-2xl font-bold text-primary">20+</div>
                    <div className="text-sm text-muted-foreground">Healthcare Professionals</div>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-6 pt-8">
                <Card className="service-card">
                  <CardContent className="p-6 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center mx-auto">
                      <Heart className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="text-2xl font-bold text-primary">100+</div>
                    <div className="text-sm text-muted-foreground">Families Supported</div>
                  </CardContent>
                </Card>
                <Card className="service-card">
                  <CardContent className="p-6 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center mx-auto">
                      <Clock className="w-6 h-6 text-gold-foreground" />
                    </div>
                    <div className="text-2xl font-bold text-primary">24/7</div>
                    <div className="text-sm text-muted-foreground">Available Support</div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Our Foundation
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These core principles drive our commitment to excellence and guide every 
                decision we make in service of our patients and their families.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="service-card h-full border-gold/20">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center">
                      <value.icon className="w-8 h-8 text-gold-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
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
                Our Approach to Care
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We believe in a holistic approach that addresses not just medical needs, 
                but the emotional, social, and spiritual wellbeing of every individual.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approach.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="service-card h-full">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-14 h-14 rounded-full gradient-hero flex items-center justify-center mx-auto">
                      <item.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-20 gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                What Sets Us Apart
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our commitment to excellence goes beyond basic care provision. We focus on 
                building lasting relationships, maintaining the highest professional standards, 
                and continuously improving our services based on feedback and best practices.
              </p>
              <Button size="lg" className="btn-hero text-gold-foreground">
                Start Your Care Journey
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;