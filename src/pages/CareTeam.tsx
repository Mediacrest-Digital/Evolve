import { motion } from "framer-motion";
import {
  Award,
  Stethoscope,
  Heart,
  Brain,
  Baby,
  Briefcase,
  GraduationCap,
  Clock,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const CareTeam = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Wanjiku",
      role: "Medical Director",
      image: "./src/assets/sarah.jpg",
      initials: "SW",
      experience: "15+ years",
      specialties: [
        "Internal Medicine",
        "Geriatric Care",
        "Chronic Disease Management",
      ],
      description:
        "Board-certified physician specializing in home-based medical care with extensive experience in managing complex medical conditions.",
    },
    {
      name: "Nurse Grace Kiprotich",
      role: "Senior Clinical Nurse",
      image: "./src/assets/grace.jpg",
      initials: "GK",
      experience: "12+ years",
      specialties: ["Post-Surgical Care", "Wound Management", "IV Therapy"],
      description:
        "Registered nurse with advanced certification in home healthcare, specializing in post-operative care and medical procedures.",
    },
    {
      name: "James Mwangi",
      role: "Physical Therapist",
      image: "./src/assets/james.jpg",
      initials: "JM",
      experience: "10+ years",
      specialties: [
        "Stroke Rehabilitation",
        "Mobility Training",
        "Pain Management",
      ],
      description:
        "Licensed physical therapist dedicated to helping patients regain independence and improve quality of life through personalized therapy.",
    },
    {
      name: "Mary Njeri",
      role: "Certified Caregiver",
      image: "./src/assets/mary.jpg",
      initials: "MN",
      experience: "8+ years",
      specialties: ["Personal Care", "Dementia Care", "Companionship"],
      description:
        "Compassionate caregiver certified in dementia care with a warm approach to personal care and daily living assistance.",
    },
    {
      name: "David Ochieng",
      role: "Care Coordinator",
      image: "./src/assets/david.jpg",
      initials: "DO",
      experience: "6+ years",
      specialties: ["Care Planning", "Family Support", "Resource Coordination"],
      description:
        "Dedicated care coordinator ensuring seamless service delivery and maintaining strong relationships with families and healthcare providers.",
    },
    {
      name: "Nurse Elizabeth Mutua",
      role: "Pediatric Specialist",
      image: "./src/assets/eliza.jpg",
      initials: "EM",
      experience: "9+ years",
      specialties: [
        "Pediatric Care",
        "Developmental Support",
        "Family Education",
      ],
      description:
        "Specialized pediatric nurse with expertise in caring for children with medical needs and supporting family education.",
    },
  ];

  const expertiseAreas = [
    {
      icon: Stethoscope,
      title: "Medical Care",
      description:
        "Licensed physicians and nurses providing comprehensive medical services",
    },
    {
      icon: Brain,
      title: "Dementia & Memory Care",
      description:
        "Specialized training in caring for individuals with cognitive impairments",
    },
    {
      icon: Heart,
      title: "Cardiac Care",
      description:
        "Expertise in managing heart conditions and cardiovascular rehabilitation",
    },
    {
      icon: Baby,
      title: "Pediatric Specialization",
      description:
        "Certified professionals trained in pediatric home healthcare",
    },
    {
      icon: Briefcase,
      title: "Chronic Disease Management",
      description:
        "Advanced training in managing diabetes, COPD, and other chronic conditions",
    },
    {
      icon: Award,
      title: "Post-Surgical Care",
      description:
        "Specialized experience in wound care and surgical recovery support",
    },
  ];

  const qualifications = [
    "Licensed healthcare professionals with current certifications",
    "Ongoing professional development and continuing education",
    "Background checks and comprehensive screening process",
    "CPR and First Aid certified team members",
    "Specialized training in home healthcare protocols",
    "Regular supervision and quality assurance reviews",
    "Cultural competency and language skills",
    "Emergency response and crisis management training",
  ];

  return (
    <div className="min-h-screen" style={{ background: "#0d383e" }}>
      {/* Hero Section */}
      <section className="py-24" style={{ background: "#0d383e" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 max-w-4xl mx-auto"
          >
            <h1
              className="text-4xl md:text-6xl font-bold"
              style={{ color: "#e7c756" }}
            >
              Meet Our <span style={{ color: "#fff" }}>Care Team</span>
            </h1>
            <p className="text-xl" style={{ color: "#fff", opacity: 0.9 }}>
              Our dedicated team of healthcare professionals brings years of
              experience, specialized training, and genuine compassion to every
              home we serve.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-20" style={{ background: "#fff" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ color: "#0d383e" }}
              >
                Our Healthcare Professionals
              </h2>
              <p
                className="text-lg max-w-2xl mx-auto"
                style={{ color: "#0d383e", opacity: 0.7 }}
              >
                Each member of our team is carefully selected for their
                expertise, compassion, and commitment to providing exceptional
                home-based care.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card
                  className="service-card h-full"
                  style={{
                    background: "#0d383e",
                    color: "#fff",
                    border: "1px solid #e7c756",
                  }}
                >
                  <CardContent className="p-6 text-center space-y-4">
                    <Avatar
                      className="w-20 h-20 mx-auto border-4"
                      style={{ borderColor: "#e7c756" }}
                    >
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback
                        style={{
                          background: "#e7c756",
                          color: "#0d383e",
                          fontWeight: "bold",
                          fontSize: "1.25rem",
                        }}
                      >
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="space-y-2">
                      <h3
                        className="text-xl font-semibold"
                        style={{ color: "#e7c756" }}
                      >
                        {member.name}
                      </h3>
                      <p style={{ color: "#fff", fontWeight: 500 }}>
                        {member.role}
                      </p>
                      <div
                        className="flex items-center justify-center text-sm"
                        style={{ color: "#e7c756" }}
                      >
                        <Clock className="w-4 h-4 mr-1" />
                        {member.experience}
                      </div>
                    </div>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "#fff", opacity: 0.8 }}
                    >
                      {member.description}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.specialties.map((specialty, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="text-xs"
                          style={{
                            background: "#e7c756",
                            color: "#0d383e",
                            border: "none",
                          }}
                        >
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20" style={{ background: "#f8f6f0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ color: "#0d383e" }}
              >
                Areas of Expertise
              </h2>
              <p
                className="text-lg max-w-2xl mx-auto"
                style={{ color: "#0d383e", opacity: 0.7 }}
              >
                Our team's diverse specializations ensure comprehensive care
                coverage for a wide range of medical conditions and care needs.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card
                  className="service-card h-full"
                  style={{ background: "#fff",  }}
                >
                  <CardContent className="p-6 text-center space-y-4">
                    <div
                      className="w-14 h-14 rounded-full"
                      style={{
                        background: "#e7c756",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto",
                      }}
                    >
                      <area.icon
                        className="w-7 h-7"
                        style={{ color: "#fff" }}
                      />
                    </div>
                    <h3
                      className="text-lg font-semibold"
                      style={{ color: "#0d383e" }}
                    >
                      {area.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "#0d383e", opacity: 0.7 }}
                    >
                      {area.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications & Training */}
      <section className="py-20" style={{ background: "#fff" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div
                    className="w-12 h-12 rounded-full"
                    style={{
                      background: "#e7c756",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <GraduationCap
                      className="w-6 h-6"
                      style={{ color: "#0d383e" }}
                    />
                  </div>
                  <h2
                    className="text-3xl md:text-4xl font-bold"
                    style={{ color: "#0d383e" }}
                  >
                    Qualifications & Training
                  </h2>
                </div>
                <p
                  className="text-lg leading-relaxed"
                  style={{ color: "#0d383e", opacity: 0.7 }}
                >
                  Every member of our care team meets rigorous professional
                  standards and maintains current certifications to ensure the
                  highest quality of care.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {qualifications.map((qualification, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{
                      background: "#e7c756",
                      marginTop: "0.5rem",
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ color: "#0d383e", opacity: 0.7 }}>
                    {qualification}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ background: "#e7c756" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <div className="space-y-4">
              <h2
                className="text-3xl md:text-4xl font-bold"
                style={{ color: "#0d383e" }}
              >
                Ready to Meet Your Care Team?
              </h2>
              <p
                className="text-xl max-w-2xl mx-auto"
                style={{ color: "#0d383e", opacity: 0.9 }}
              >
                Schedule a consultation to learn more about our team and how we
                can provide personalized care for you or your loved one.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                style={{
                  background: "#0d383e",
                  color: "#e7c756",
                  fontWeight: "bold",
                  border: "2px solid #0d383e",
                }}
              >
                Schedule Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                style={{
                  border: "2px solid #0d383e",
                  color: "#0d383e",
                  fontWeight: "bold",
                  background: "#e7c756",
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

export default CareTeam;
