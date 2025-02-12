"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Clock, Globe, Users, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: <ShieldCheck size={48} />,
    title: "Reliability",
    description: "We ensure timely and secure deliveries, every time.",
  },
  {
    icon: <Clock size={48} />,
    title: "Efficiency",
    description: "Optimized logistics solutions for faster turnaround.",
  },
  {
    icon: <Globe size={48} />,
    title: "Global Reach",
    description: "Expanding your business beyond borders seamlessly.",
  },
  {
    icon: <Users size={48} />,
    title: "Customer Focus",
    description: "Your satisfaction is our top priority.",
  },
  {
    icon: <TrendingUp size={48} />,
    title: "Innovation",
    description: "Leveraging technology to redefine logistics.",
  },
];

const WhyUs = () => {
  return (
    <section className="py-16 bg-white" id="whyus">
      <div className="max-container padding-container">
        <h2 className="text-4xl font-bold text-center mb-12 text-black">Why Choose Us?</h2>
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center bg-beige p-6 rounded-xl shadow-lg 
                         transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-turquoise mb-4">{reason.icon}</div>
              <h3 className="text-2xl font-semibold text-black">{reason.title}</h3>
              <p className="text-gray-600 mt-2">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
