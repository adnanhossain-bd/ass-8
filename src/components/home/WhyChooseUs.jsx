"use client";
import { motion } from "framer-motion";

// SVG Icons
const ExpertIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>
);

const LifetimeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 12c-2.9 0-4.9-1.8-4.9-4.5S9.1 3 12 3s4.9 1.8 4.9 4.5-2 4.5-4.9 4.5Z"/><path d="M12 12c2.9 0 4.9 1.8 4.9 4.5S14.9 21 12 21s-4.9-1.8-4.9-4.5 2-4.5 4.9-4.5Z"/></svg>
);

const CertificateIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 15l-2 5l2 2l2-2l-2-5Z"/><path d="M12 13c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6Z"/><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/></svg>
);

const SupportIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M12 7v5"/><path d="M12 16h.01"/></svg>
);

const WhyChooseUs = () => {
  const features = [
    {
      title: "Industry Experts",
      description: "Learn directly from professionals who are currently working in top-tier companies.",
      icon: <ExpertIcon />,
      color: "text-primary",
      bg: "bg-primary/10"
    },
    {
      title: "Lifetime Access",
      description: "Enroll once and get unlimited lifetime access to all course materials and future updates.",
      icon: <LifetimeIcon />,
      color: "text-secondary",
      bg: "bg-secondary/10"
    },
    {
      title: "Verified Certificates",
      description: "Receive industry-recognized certificates upon completion to boost your career prospects.",
      icon: <CertificateIcon />,
      color: "text-accent",
      bg: "bg-accent/10"
    },
    {
      title: "24/7 Expert Support",
      description: "Get your doubts cleared anytime with our dedicated community and instructor support.",
      icon: <SupportIcon />,
      color: "text-green-600",
      bg: "bg-green-50"
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-12 bg-surface-gradient">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-heading mb-4">
            Why Choose <span className="text-primary">SkillSphere?</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto text-lg">
            We provide a world-class learning experience designed to take your 
            professional skills to the next level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-white/40 backdrop-blur-lg rounded-3xl border border-white/50 shadow-sm hover:shadow-xl hover:bg-white transition-all group"
            >
              <div className={`w-16 h-16 ${feature.bg} ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-heading mb-3 italic">
                {feature.title}
              </h3>
              <p className="text-body text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;