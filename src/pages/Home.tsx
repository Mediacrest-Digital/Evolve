import { motion } from "framer-motion";
import {
  CheckCircle,
  Heart,
  Shield,
  Clock,
  Star,
  Users,
  Award,
  ArrowRight,
  Phone,
  Stethoscope,
  Cross,
  Activity,
  Brain,
  Utensils,
  Home as HomeIcon,
  Car,
  Pill,
  UserCheck,
  Sparkles,
  Target,
  Eye,
  Calendar,
  ClipboardCheck,
  MessageCircle,
  ThumbsUp,
  Quote,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
// import heroImage from "@/assets/hero-healthcare.jpg";

const Home = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const trustBadges = [
    { icon: CheckCircle, text: "24/7 Support" },
    { icon: Award, text: "Certified Caregivers" },
    { icon: Heart, text: "Personalized Care" },
  ];

  const services = [
    {
      icon: Heart,
      title: "Personal Care",
      description:
        "Assistance with daily activities including bathing, dressing, and grooming with dignity and respect.",
    },
    {
      icon: Users,
      title: "Companionship",
      description:
        "Emotional support and social interaction to prevent isolation and promote mental wellbeing.",
    },
    {
      icon: Shield,
      title: "Medication Management",
      description:
        "Professional oversight of medication schedules and administration for optimal health outcomes.",
    },
  ];

  const stats = [
    { number: "500+", label: "Patients Cared For" },
    { number: "100+", label: "Families Served" },
    { number: "20+", label: "Experienced Nurses" },
    { number: "24/7", label: "Available Support" },
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description:
        "We provide care with empathy, understanding, and genuine concern for each individual's wellbeing.",
    },
    {
      icon: Shield,
      title: "Trust",
      description:
        "Building reliable relationships through transparency, consistency, and professional excellence.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "Committed to the highest standards of care through continuous training and improvement.",
    },
  ];

  const floatingIcons = [
    { icon: Cross, className: "top-20 right-20 text-gold" },
    { icon: Heart, className: "top-40 right-32 text-gold-light" },
    { icon: Stethoscope, className: "top-32 right-8 text-gold-dark" },
  ];

  const comprehensiveServices = [
    {
      icon: Heart,
      title: "Personal Care",
      description: "Daily living assistance with dignity",
    },
    {
      icon: Shield,
      title: "Medication Management",
      description: "Safe medication oversight",
    },
    {
      icon: Users,
      title: "Companionship",
      description: "Social support and interaction",
    },
    {
      icon: Activity,
      title: "Physiotherapy",
      description: "Mobility and strength recovery",
    },
    // {
    //   icon: Brain,
    //   title: "Dementia Care",
    //   description: "Specialized memory care",
    // },
    {
      icon: Utensils,
      title: "Nutrition Support",
      description: "Meal planning and preparation",
    },
    {
      icon: HomeIcon,
      title: "Home Safety",
      description: "Environment safety assessment",
    },
    {
      icon: Car,
      title: "Transportation",
      description: "Medical appointment transport",
    },
    {
      icon: Pill,
      title: "Wound Care",
      description: "Professional wound management",
    },
  ];

  const processSteps = [
    {
      icon: MessageCircle,
      title: "Initial Consultation",
      description:
        "Free assessment of care needs and preferences in your home.",
    },
    {
      icon: ClipboardCheck,
      title: "Care Plan Development",
      description:
        "Customized care plan tailored to specific health requirements.",
    },
    {
      icon: UserCheck,
      title: "Caregiver Assignment",
      description: "Carefully matched professional caregiver based on needs.",
    },
    {
      icon: Target,
      title: "Ongoing Support",
      description: "24/7 monitoring and regular care plan adjustments.",
    },
  ];

  const testimonials = [
    {
      name: "Mary Wanjiku",
      role: "Daughter of Patient",
      content:
        "Evolve Homecare has been a blessing for our family. Their caregivers are not just professional but genuinely caring. My mother feels comfortable and safe at home.",
      rating: 5,
    },
    {
      name: "Dr. James Kimani",
      role: "Family Physician",
      content:
        "I recommend Evolve Homecare to my patients regularly. Their medication management and coordination with healthcare providers is exceptional.",
      rating: 5,
    },
    {
      name: "Grace Mutiso",
      role: "Patient",
      content:
        "After my stroke, I thought I'd have to move to a facility. Thanks to Evolve Homecare, I'm recovering in my own home with the best care possible.",
      rating: 5,
    },
  ];

  const whyChooseFeatures = [
    {
      icon: Award,
      title: "Licensed Professionals",
      description:
        "All our caregivers are licensed, trained, and continuously certified.",
      highlight: "100% Certified",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description:
        "Round-the-clock support and emergency response when you need it most.",
      highlight: "Always Available",
    },
    {
      icon: Sparkles,
      title: "Personalized Care",
      description:
        "Every care plan is uniquely designed for individual needs and preferences.",
      highlight: "Tailored Solutions",
    },
    {
      icon: Eye,
      title: "Family Involvement",
      description:
        "Regular updates and family meetings to ensure transparent communication.",
      highlight: "Full Transparency",
    },
  ];

  const faqs = [
    {
      question: "What services are covered by insurance?",
      answer:
        "Many of our services are covered by NHIF and private insurance plans. We help with insurance verification and claims processing.",
    },
    {
      question: "How quickly can care begin?",
      answer:
        "Emergency care can begin within 24 hours. Standard care arrangements typically start within 48-72 hours after initial assessment.",
    },
    {
      question: "What are your caregiver qualifications?",
      answer:
        "All caregivers are licensed healthcare professionals with minimum 2 years experience, background checked, and continuously trained.",
    },
    {
      question: "Can I choose my caregiver?",
      answer:
        "Yes, we carefully match caregivers based on personality, skills, and your specific preferences to ensure the best fit.",
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
      {/* Hero Section with theme background and right-aligned circles */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "#0d383e" }}
      >
        {/* Floating Icons */}
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className={`absolute w-8 h-8 float-animation ${item.className}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ delay: index * 0.5, duration: 0.8 }}
          >
            <item.icon className="w-full h-full" />
          </motion.div>
        ))}

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Main Hero Text and CTAs */}
          <div className="flex flex-col items-start justify-center space-y-8 text-left">
            <h1
              style={{
                color: "#e7c756",
                fontWeight: "bold",
                fontSize: "2.5rem",
                lineHeight: "1.2",
                textShadow: "0 2px 8px #0d383e",
              }}
            >
              Compassionate Care,{" "}
              <span style={{ color: "#fff" }}>Right at Home</span>
            </h1>
            <p
              style={{
                color: "#fff",
                fontSize: "1.25rem",
                fontWeight: 600,
                maxWidth: "40rem",
              }}
            >
              Evolve Homecare KE delivers personalized home-based care to
              promote independence, comfort and dignity. A loved one deserves
              exceptional healthcare!
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              <Button
                size="lg"
                style={{
                  background: "#e7c756",
                  color: "#0d383e",
                  fontWeight: "bold",
                  padding: "0.75rem 2rem",
                  boxShadow: "0 2px 8px #0d383e",
                }}
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore Our Services
                <ArrowRight
                  style={{ marginLeft: "0.5rem", color: "#0d383e" }}
                  className="ml-2 w-5 h-5"
                />
              </Button>
              <Button
                variant="outline"
                size="lg"
                style={{
                  border: "2px solid #e7c756",
                  color: "#e7c756",
                  background: "#0d383e",
                  fontWeight: "bold",
                  boxShadow: "0 2px 8px #0d383e",
                }}
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Contact Us
              </Button>
            </div>
            {/* Trust Badges visible below CTAs */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1.5rem",
                paddingTop: "1rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#e7c756",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  textShadow: "0 2px 8px #0d383e",
                }}
              >
                <CheckCircle
                  style={{ color: "#e7c756", marginRight: "0.5rem" }}
                  className="w-5 h-5"
                />
                <span>24/7 Support</span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#e7c756",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  textShadow: "0 2px 8px #0d383e",
                }}
              >
                <Award
                  style={{ color: "#e7c756", marginRight: "0.5rem" }}
                  className="w-5 h-5"
                />
                <span>Certified Caregivers</span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#e7c756",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  textShadow: "0 2px 8px #0d383e",
                }}
              >
                <Heart
                  style={{ color: "#e7c756", marginRight: "0.5rem" }}
                  className="w-5 h-5"
                />
                <span>Personalized Care</span>
              </div>
            </div>
          </div>

          {/* Right: Hero Images - Large circle and overlapping circles */}
          <div className="relative w-full max-w-xl mx-auto aspect-square mb-10 flex items-center justify-end">
            {/* Main large circular image */}
            <div className="absolute top-2 right-0 rounded-full overflow-hidden shadow-2xl border-4 border-gold bg-card w-80 h-80 md:w-[26rem] md:h-[26rem]">
              <img
                src="./src/assets/knursing.jpg"
                alt="Caregiver with elderly patient"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Top overlapping circle */}
            <div className="absolute top-10 right-64 w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-xl border-4 border-gold bg-card">
              <img
                src="./src/assets/Elder.jpg"
                alt="Elderly woman smiling"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Bottom overlapping circle */}
            <div className="absolute bottom-6 right-56 w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden shadow-xl border-4 border-gold bg-card">
              <img
                src="./src/assets/Nurse.jpg"
                alt="Healthcare worker"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        style={{ padding: "5rem 0", background: "#fff", color: "#0d383e" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Services Ecosystem */}
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
                Complete Healthcare Ecosystem
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From basic care to specialized medical services, we provide
                comprehensive support for all aspects of home-based healthcare.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {comprehensiveServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="service-card h-full hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg gradient-hero flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-2">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {service.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Process */}
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
                How Evolve Homecare Works
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our streamlined process ensures you receive the right care
                quickly and efficiently.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                <div className="relative mb-6">
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
                    <step.icon
                      style={{
                        color: "#fff",
                        width: "2rem",
                        height: "2rem",
                      }}
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Why Choose Us */}
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
                Why Choose Evolve Homecare KE?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We believe that everyone deserves to age with dignity and
                independence in the comfort of their own home. Our comprehensive
                approach ensures exceptional care.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="service-card h-full">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 rounded-full gradient-hero flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-xl font-semibold text-primary">
                            {feature.title}
                          </h3>
                          <span className="text-xs font-bold text-gold bg-gold/10 px-3 py-1 rounded-full">
                            {feature.highlight}
                          </span>
                        </div>
                        <p className="text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
                What Our Families Say
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Real experiences from families who trust Evolve Homecare with
                their loved ones.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="service-card h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <Quote className="w-8 h-8 text-gold mr-3" />
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-gold text-gold"
                          />
                        ))}
                      </div>
                    </div>
                    <blockquote className="text-muted-foreground mb-6 italic">
                      "{testimonial.content}"
                    </blockquote>
                    <div className="border-t pt-4">
                      <div className="font-semibold text-primary">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        style={{ padding: "5rem 0", background: "#e7c75614", color: "#0d383e" }}
      >
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
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get answers to common questions about our homecare services.
              </p>
            </motion.div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="service-card">
                  <CardContent className="p-0">
                    <button
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                      onClick={() =>
                        setOpenFaq(openFaq === index ? null : index)
                      }
                    >
                      <span className="font-semibold text-primary">
                        {faq.question}
                      </span>
                      {openFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-gold" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gold" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-4">
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section
        id="services"
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
                Our Featured Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive home healthcare services designed to support your
                loved one's independence and wellbeing in familiar surroundings.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card
                  className="service-card h-full"
                  style={{
                    background: "#0d383e",
                    color: "#fff",
                    border: "2px solid #e7c756",
                  }}
                >
                  <CardContent className="p-8 text-center space-y-4">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto"
                      style={{ background: "#e7c756" }}
                    >
                      <service.icon
                        className="w-8 h-8"
                        style={{ color: "#fff" }}
                      />
                    </div>
                    <h3
                      className="text-xl font-semibold"
                      style={{ color: "#e7c756" }}
                    >
                      {service.title}
                    </h3>
                    <p style={{ color: "#fff" }}>{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* <div className="text-center">
            <Button size="lg" className="btn-hero text-gold-foreground">
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div> */}
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
                Our Core Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These principles guide everything we do and ensure the highest
                quality of care for every patient and family we serve.
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
                  <CardContent className="p-8 text-center space-y-4">
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
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      {/* <section
        id="contact"
        style={{ padding: "4rem 0", background: "#e7c756", color: "#0d383e" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <h2
              style={{ color: "#0d383e", fontWeight: "bold", fontSize: "2rem" }}
            >
              Need Professional Homecare?
            </h2>
            <p
              style={{
                color: "#0d383e",
                fontSize: "1.25rem",
                maxWidth: "40rem",
                margin: "0 auto",
              }}
            >
              Don't wait to get the care your loved one deserves. Contact us
              today for a personalized consultation and care plan.
            </p>
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
                variant="outline"
                style={{
                  border: "2px solid #0d383e",
                  color: "#0d383e",
                  background: "#e7c756",
                  fontWeight: "bold",
                }}
              >
                <Phone
                  style={{ marginRight: "0.5rem", color: "#0d383e" }}
                  className="mr-2 w-5 h-5"
                />
                Call 0112 829 166
              </Button>
              <Button
                size="lg"
                style={{
                  background: "#0d383e",
                  color: "#e7c756",
                  fontWeight: "bold",
                }}
              >
                Schedule Consultation
                <ArrowRight
                  style={{ marginLeft: "0.5rem", color: "#e7c756" }}
                  className="ml-2 w-5 h-5"
                />
              </Button>
            </div>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
};

export default Home;
