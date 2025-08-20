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
      title: "Post-Surgery Care",
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
        "IV therapy and infusion services",
        "Catheter care and management",
        "Tracheostomy care",
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
        "Respiratory therapy",
        "Nutritional counseling",
        "Mental health support",
      ],
    },
    {
      category: "Specialized Care",
      services: [
        "Palliative and end-of-life care",
        "Cancer care support",
        "Stroke recovery care",
        "Cardiac rehabilitation support",
        "Diabetes management programs",
        "Pain management services",
      ],
    },
    {
      category: "Support Services",
      services: [
        "Medical equipment rental",
        "Home safety assessments",
        "Caregiver training programs",
        "Health monitoring systems",
        "Emergency response systems",
        "Telehealth coordination",
      ],
    },
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
              Our <span className="text-gold">Healthcare Services</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Comprehensive home-based healthcare services designed to meet your
              unique needs and support your journey toward optimal health and
              independence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services Grid */}
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
                <Card className="service-card h-full">
                  <CardHeader className="pb-4">
                    <div className="w-14 h-14 rounded-full gradient-hero flex items-center justify-center mb-4">
                      <service.icon className="w-7 h-7 text-primary-foreground" />
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

      {/* Extended Services */}
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
                Extended Home-Based Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Additional specialized services to complement our core offerings
                and provide comprehensive care solutions for complex medical
                needs.
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
                  className="border border-border rounded-lg"
                >
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center">
                        <span className="text-gold-foreground font-semibold text-sm">
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
                          className="flex items-center text-sm"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3 flex-shrink-0" />
                          <span className="text-muted-foreground">
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

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Contact us today to discuss your specific needs and learn how
                our services can support your health and independence journey.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-hero text-gold-foreground">
                Schedule Free Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
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
