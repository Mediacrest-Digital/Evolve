import { motion } from "framer-motion";
import {
  Heart,
  Users,
  Pill,
  Activity,
  Baby,
  Briefcase,
  Home,
  Stethoscope,
  Brain,
  Bandage,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const Services = () => {
  const mainServices = [
    {
      icon: Heart,
      title: "Personal Care",
      description:
        "Comprehensive assistance with activities of daily living including bathing, dressing, grooming, and mobility support with dignity and respect.",
      features: [
        "Bathing and hygiene assistance",
        "Dressing and grooming",
        "Mobility and transfer support",
        "Toileting assistance",
      ],
    },
    {
      icon: Users,
      title: "Companionship Care",
      description:
        "Emotional support and social interaction to prevent isolation and promote mental wellbeing through meaningful engagement.",
      features: [
        "Social interaction and conversation",
        "Light housekeeping",
        "Meal preparation",
        "Transportation to appointments",
      ],
    },
    {
      icon: Pill,
      title: "Medication Management",
      description:
        "Professional oversight of medication schedules, administration, and monitoring to ensure optimal health outcomes and safety.",
      features: [
        "Medication reminders",
        "Prescription management",
        "Health monitoring",
        "Coordination with doctors",
      ],
    },
    {
      icon: Activity,
      title: "Home Based Nursing Care",
      description:
        "Specialized recovery support following surgical procedures, ensuring proper healing and rehabilitation in comfortable home environment.",
      features: [
        "Wound care and monitoring",
        "Physical therapy support",
        "Recovery planning",
        "Pain management assistance",
      ],
    },
    {
      icon: Brain,
      title: "Dementia & Alzheimer's Care",
      description:
        "Specialized care for individuals with cognitive impairments, focusing on safety, routine, and maintaining quality of life.",
      features: [
        "Memory care activities",
        "Behavioral support",
        "Safety monitoring",
        "Family education and support",
      ],
    },
    {
      icon: Stethoscope,
      title: "Chronic Disease Management",
      description:
        "Ongoing support for managing chronic conditions like diabetes, heart disease, and COPD to maintain stability and prevent complications.",
      features: [
        "Vital signs monitoring",
        "Symptom tracking",
        "Diet and exercise support",
        "Medical appointment coordination",
      ],
    },
    {
      icon: Baby,
      title: "Pediatric Care",
      description:
        "Specialized care for children with medical needs, developmental delays, or disabilities in the comfort of their family home.",
      features: [
        "Developmental support",
        "Medical care administration",
        "Family training",
        "Educational coordination",
      ],
    },
    {
      icon: Briefcase,
      title: "Respite Care",
      description:
        "Temporary relief for family caregivers, providing professional care while allowing family members time for rest and personal needs.",
      features: [
        "Short-term care coverage",
        "Family caregiver support",
        "Flexible scheduling",
        "Emergency backup care",
      ],
    },
    {
      icon: Home,
      title: "Live-in Care",
      description:
        "24-hour comprehensive care provided by dedicated caregivers living in the client's home for maximum support and safety.",
      features: [
        "Round-the-clock supervision",
        "Comprehensive care planning",
        "Family-style living",
        "Personalized attention",
      ],
    },
    {
      icon: Bandage,
      title: "Wound Care",
      description:
        "Professional wound assessment, treatment, and monitoring by certified healthcare professionals to promote healing and prevent infection.",
      features: [
        "Wound assessment and cleaning",
        "Dressing changes",
        "Infection prevention",
        "Healing progress monitoring",
      ],
    },
  ];

  const extendedServices = [
    {
      category: "Medical Services",
      services: [
        "Ventilator support",
        "Feeding tube management",
        "Colostomy and ostomy care",
      ],
    },
    {
      category: "Therapeutic Services",
      services: [
        "Physical therapy services",
        "Occupational therapy",
        "Speech and language therapy",
        "Nutritional counseling",
        "Mental health support",
      ],
    },
    {
      category: "Specialized Care",
      services: ["Cancer care support", "Stroke recovery care"],
    },
    {
      category: "Support Services",
      services: [
        "Medical equipment rental",
        "Home safety assessments",
        "Caregiver training programs",
        "Health monitoring systems",
        "Emergency response systems",
        "Pharmacy Services",
      ],
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--color-bg)",
        color: "var(--color-text)",
      }}
    >
      {/* Hero Section with Background Image */}
      <section
        className="relative py-24 flex items-center overflow-hidden"
        style={{ background: "#0d383e" }}
      >
        <img
          src="./src/assets/sarah.jpg"
          alt="Healthcare services hero"
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
              Our <span style={{ color: "#fff" }}>Healthcare Services</span>
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
              Comprehensive home-based healthcare services designed to meet your
              unique needs and support your journey toward optimal health and
              independence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview with Image */}
      <section
        style={{ padding: "5rem 0", background: "#fff", color: "#0d383e" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Comprehensive Care at Home
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our services are designed to provide hospital-quality care in
                the comfort of your own home. From basic personal care to
                complex medical procedures, our certified professionals ensure
                you receive the highest standard of healthcare with dignity and
                compassion.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-gold" />
                  <span className="text-muted-foreground">
                    Licensed healthcare professionals
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-gold" />
                  <span className="text-muted-foreground">
                    24/7 emergency support available
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-gold" />
                  <span className="text-muted-foreground">
                    Personalized care plans
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="./src/assets/Newphoto.jpg"
                alt="Healthcare professional providing care"
                className="rounded-2xl shadow-lg object-cover w-full h-[400px]"
              />
              <div
                className="absolute -bottom-6 -left-6 w-32 h-32 rounded-2xl flex items-center justify-center shadow-lg"
                style={{ background: "#0d383e", border: "3px solid #e7c756" }}
              >
                <div className="text-center">
                  <div
                    className="text-2xl font-bold"
                    style={{ color: "#e7c756" }}
                  >
                    10+
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "#fff", opacity: 0.8 }}
                  >
                    Services
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Services Grid */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Complete Care Solutions
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our comprehensive range of services ensures that all your
                healthcare needs are met with professionalism, compassion, and
                expertise.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="service-card h-full border-gold/20 hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div
                      style={{
                        width: "3.5rem",
                        height: "3.5rem",
                        borderRadius: "50%",
                        background: "#e7c756",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "1rem",
                        boxShadow: "0 2px 8px #e7c75633",
                      }}
                    >
                      <service.icon
                        style={{
                          color: "#fff",
                          width: "1.5rem",
                          height: "1.5rem",
                        }}
                      />
                    </div>
                    <CardTitle className="text-xl text-primary">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-gold mr-3 flex-shrink-0" />
                          <span className="text-muted-foreground">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Extended Services with Featured Image */}
      <section
        style={{ padding: "5rem 0", background: "#e7c75614", color: "#0d383e" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <img
                src="./src/assets/grace.jpg"
                alt="Advanced medical equipment and care"
                className="rounded-2xl shadow-lg object-cover w-full h-[400px]"
              />
              <div
                className="absolute -top-6 -right-6 w-32 h-32 rounded-2xl flex items-center justify-center shadow-lg"
                style={{ background: "#0d383e", border: "3px solid #e7c756" }}
              >
                <div className="text-center">
                  <div
                    className="text-2xl font-bold"
                    style={{ color: "#e7c756" }}
                  >
                    24/7
                  </div>
                  <div
                    className="text-xs"
                    style={{
                      color: "#fff",
                      opacity: 0.9,
                      fontWeight: "bold",
                      letterSpacing: "1px",
                    }}
                  >
                    Support
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6 order-1 lg:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Extended Specialized Services
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Beyond our core services, we offer advanced medical support and
                therapeutic interventions. Our specialized programs are designed
                to address complex health conditions and provide comprehensive
                care solutions for patients with diverse medical needs.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {extendedServices.map((category, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border/50 rounded-lg bg-white/60 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                    <div className="flex items-center space-x-3">
                      <div
                        style={{
                          width: "2.5rem",
                          height: "2.5rem",
                          borderRadius: "50%",
                          background: "#e7c756",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: "0 2px 8px #e7c75633",
                        }}
                      >
                        <span
                          style={{
                            color: "#fff",
                            fontWeight: "bold",
                            fontSize: "1rem",
                          }}
                        >
                          {category.services.length}
                        </span>
                      </div>
                      <span className="text-lg font-semibold text-primary">
                        {category.category}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4">
                      {category.services.map((service, serviceIndex) => (
                        <div
                          key={serviceIndex}
                          className="flex items-center text-sm bg-white/40 rounded-lg p-3 hover:bg-white/60 transition-colors duration-200"
                        >
                          <div
                            style={{
                              width: "0.5rem",
                              height: "0.5rem",
                              borderRadius: "50%",
                              background: "#0d383e",
                              marginRight: "0.75rem",
                              flexShrink: 0,
                            }}
                          />
                          <span className="text-muted-foreground font-medium">
                            {service}
                          </span>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA Section with Background Image */}
      <section
        className="relative py-20 flex items-center overflow-hidden"
        style={{ background: "#0d383e" }}
      >
        <img
          src="./src/assets/grace.jpg"
          alt="Happy family receiving care"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "#0d383e",
            opacity: 0.9,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <div style={{ marginBottom: "2rem" }}>
              <h2
                style={{
                  color: "#e7c756",
                  fontWeight: "bold",
                  fontSize: "2rem",
                }}
              >
                Ready to Get Started?
              </h2>
              <p
                style={{
                  color: "#fff",
                  fontSize: "1.25rem",
                  maxWidth: "40rem",
                  margin: "0 auto",
                }}
              >
                Contact us today to discuss your specific needs and learn how
                our services can support your health and independence journey.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "1rem",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Button
                size="lg"
                style={{
                  background: "#e7c756",
                  color: "#0d383e",
                  fontWeight: "bold",
                  boxShadow: "0 2px 8px #0d383e",
                }}
              >
                Schedule Free Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                style={{
                  border: "2px solid #e7c756",
                  color: "#e7c756",
                  background: "#0d383e",
                  fontWeight: "bold",
                  boxShadow: "0 2px 8px #0d383e",
                }}
              >
                Call 0112 829 166
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
