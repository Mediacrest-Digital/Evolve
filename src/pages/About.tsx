import { motion } from "framer-motion";
import {
  Heart,
  Target,
  Eye,
  Users,
  Award,
  Shield,
  Clock,
  CheckCircle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Mission",
      description:
        "Our mission is to provide compassionate, personalized home-based healthcare that promotes patients’ well-being, independence and dignity in the comfort of their own homes.",
    },
    {
      icon: Eye,
      title: "Vision",
      description:
        "Our vision is to be a leading home-based healthcare provider in Kenya and beyond, transforming lives through compassionate, personalized care.",
    },
    {
      icon: Target,
      title: "Values",
      description:
        "Compassion: Providing empathetic and personalized care with kindness and respect for each individual's unique challenges. Excellence: Commitment to the highest standards of medical practice and continually improving knowledge and skills to deliver exceptional care.",
    },
  ];

  const approach = [
    {
      icon: Users,
      title: "Personalized Care Plans",
      description:
        "Every individual is unique. We develop customized care plans that address specific needs, preferences, and health conditions to ensure optimal outcomes.",
    },
    {
      icon: Heart,
      title: "Comfort-Centered Approach",
      description:
        "We prioritize emotional wellbeing alongside physical health, creating a comfortable environment that promotes healing and peace of mind.",
    },
    {
      icon: Shield,
      title: "Independence Focus",
      description:
        "Our goal is to help clients maintain their independence for as long as possible, supporting their autonomy while ensuring safety and quality care.",
    },
    {
      icon: Award,
      title: "Dignity & Respect",
      description:
        "We treat every client with the utmost dignity and respect, honoring their life experiences, preferences, and individual journey.",
    },
  ];

  const features = [
    "24/7 emergency support and on-call assistance",
    "Certified and trained healthcare professionals",
    "Comprehensive health assessments and monitoring",
    "Family involvement and regular communication",
    "Flexible scheduling to meet individual needs",
    "Coordination with primary healthcare providers",
    "Medication management and adherence support",
    "Quality assurance and continuous improvement",
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--color-bg)",
        color: "var(--color-text)",
      }}
    >
      {/* Hero Banner with Image */}
      <section
        className="relative py-24 flex items-center overflow-hidden"
        style={{ background: "#0d383e" }}
      >
        <img
          src="https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
          alt="Healthcare hero"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 max-w-4xl mx-auto"
          >
            <h1
              style={{
                color: "#e7c756",
                fontWeight: "bold",
                fontSize: "2.5rem",
                lineHeight: "1.2",
                textShadow: "0 2px 8px #0d383e",
              }}
            >
              About <span style={{ color: "#fff" }}>Evolve Homecare KE</span>
            </h1>
            <p
              style={{
                color: "#fff",
                fontSize: "1.25rem",
                fontWeight: 600,
                maxWidth: "40rem",
                margin: "0 auto",
              }}
            >
              Transforming healthcare delivery by bringing professional,
              compassionate care directly to your home. We believe everyone
              deserves to age with dignity and independence in familiar
              surroundings.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section
        style={{ padding: "2.5rem 0", background: "#fff", color: "#0d383e" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
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
                  Evolve Homecare KE is a leading provider of comprehensive
                  home-based healthcare services throughout Kenya. Founded on
                  the principle that quality healthcare should be accessible in
                  the comfort of one's own home, we have been serving families
                  and individuals with dedication and excellence.
                </p>
                <p>
                  Our team consists of licensed healthcare professionals,
                  certified caregivers, and support staff who are passionate
                  about making a difference in people's lives. We understand
                  that receiving care at home is not just about medical
                  treatment—it's about preserving dignity, maintaining
                  independence, and staying connected to what matters most.
                </p>
              </div>
            </motion.div>

            {/* Image instead of only stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div
                style={{ position: "relative", width: "100%", height: "400px" }}
              >
                <img
                  src="./src/assets/sarah.jpg"
                  alt="Caregiver with patient"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top center",
                    borderRadius: "1rem",
                    boxShadow: "0 4px 24px #0d383e33",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "1rem",
                    background:
                      "linear-gradient(180deg, rgba(13,56,62,0.10) 0%, rgba(231,199,86,0.07) 100%)",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section
        style={{ padding: "5rem 0", background: "#e7c75614", color: "#0d383e" }}
      >
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
                These core principles drive our commitment to excellence and
                guide every decision we make in service of our patients and
                their families.
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
                    <div
                      style={{
                        width: "4rem",
                        height: "4rem",
                        borderRadius: "50%",
                        background: "#e7c756",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto",
                        boxShadow: "0 2px 8px #e7c75633",
                      }}
                    >
                      <value.icon
                        style={{ color: "#fff", width: "2rem", height: "2rem" }}
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-primary">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section
        style={{ padding: "5rem 0", background: "#fff", color: "#0d383e" }}
      >
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
                We believe in a holistic approach that addresses not just
                medical needs, but the emotional, social, and spiritual
                wellbeing of every individual.
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
                    <div
                      style={{
                        width: "3.5rem",
                        height: "3.5rem",
                        borderRadius: "50%",
                        background: "#e7c756",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto",
                        boxShadow: "0 2px 8px #e7c75633",
                      }}
                    >
                      <item.icon
                        style={{
                          color: "#fff",
                          width: "1.5rem",
                          height: "1.5rem",
                        }}
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-primary">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart with Image */}
      <section
        style={{ padding: "5rem 0", background: "#e7c75614", color: "#0d383e" }}
      >
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
                Our commitment to excellence goes beyond basic care provision.
                We focus on building lasting relationships, maintaining the
                highest professional standards, and continuously improving our
                services based on feedback and best practices.
              </p>
              <Button
                size="lg"
                style={{
                  background: "#e7c756",
                  color: "#0d383e",
                  fontWeight: "bold",
                }}
              >
                Start Your Care Journey
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div
                style={{ position: "relative", width: "100%", height: "350px" }}
              >
                <img
                  src="./src/assets/knursing.jpg"
                  alt="Happy family with caregiver"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center center",
                    borderRadius: "1rem",
                    boxShadow: "0 4px 24px #0d383e33",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "1rem",
                    background:
                      "linear-gradient(180deg, rgba(13,56,62,0.08) 0%, rgba(231,199,86,0.05) 100%)",
                  }}
                />
              </div>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle
                      style={{
                        color: "#e7c756",
                        width: "1.25rem",
                        height: "1.25rem",
                      }}
                    />
                    <span className="text-muted-foreground">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
